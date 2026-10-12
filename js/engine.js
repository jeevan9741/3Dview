/* Tech Lab 3D engine: 3D stage, orbit camera, part picking, info panel, quiz, progress,
   language switching and read-aloud. Every topic file calls TL.start({...}).

   Topic definition (see js/topics/computer.js for a full example):
   {
     id: "computer",
     camera: { theta, phi, radius, target: [x,y,z], min, max, explodeRadius },
     explode: true,                        // show "take apart" button
     order: ["board", "cpu", ...],         // chip order in the panel
     parts: { cpu: { emoji: "🧠" }, ... },
     labels: true,                         // floating 3D name labels + "Show labels" button
     quiz:  [ { part: "cpu", a: 0 }, ... ], // a = index of the right option
     text: {                               // one block per language (hinglish, en, hi, mr)
       en: { tagline, hint, intro,
             parts: { cpu: { name, short, tag, what, adv, real, fact } },   // adv = optional deeper science
             quiz:  [ { q, o: [...], why } ],   // same order as quiz above
             terms: [ { t, d } ],               // optional key words  -> "Revise" tab
             practice: [ { q, a } ],            // optional practice questions with hidden answers
             ui:    { key: "topic specific words" } }
     },
     actions: [ { id, label: "uiKey", main, onClick(api, btn) } ],
     build(api), update(api, dt, t), onLang(api), onSelect(api, id)
   }
   api.addPart(id, group, pos, explode, { pickBehind, label, focus }):
     pickBehind: true (ya 1, 2...) = peeche ka part: ray me koi kam number wala part mile to wahi chuna jaaye
                 (jaise cell me cytoplasm 2, vacuole 1, baaki organelle 0)
     label: Vector3 (group ke andar) jahan naam ka label dikhe
*/
(function () {
  "use strict";

  TL.start = function (def) {
    var THREE = window.THREE;
    var meta = TL.topicById(def.id) || { emoji: "", title: { en: def.id } };
    var stage = document.getElementById("stage");
    var canvas = document.getElementById("c");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ORDER = def.order || Object.keys(def.parts);
    var esc = TL.esc;

    /* ================================================================
       0. TEXT LOOKUP (current language, fallback to English then Hinglish)
    ================================================================ */
    function langTable(getter) {
      var t = {};
      Object.keys(def.text).forEach(function (l) {
        var v;
        try { v = getter(def.text[l]); } catch (e) { v = undefined; }
        if (v !== undefined) t[l] = v;
      });
      return TL.pick(t);
    }
    function T(field) { return langTable(function (b) { return b[field]; }); }
    function P(id, field) { return langTable(function (b) { return b.parts[id][field]; }) || ""; }
    function Q(i, field) { return langTable(function (b) { return b.quiz[i][field]; }); }
    /* topic ke shabd; na mile to engine ke; na mile to key hi */
    function tr(key) {
      var args = Array.prototype.slice.call(arguments, 1);
      var s = langTable(function (b) { return b.ui[key]; });
      if (s === undefined) return TL.u.apply(null, arguments);
      return TL.fill(s, args);
    }
    function partName(id) { return P(id, "name"); }
    /* chhota naam usi bhasha ka ho jisme bada naam mila, warna bade naam se banao */
    function partShort(id) {
      var cur = def.text[TL.lang];
      var own = cur && cur.parts && cur.parts[id];
      var s = own ? own.short : P(id, "short");
      return s || partName(id).split(" (")[0].split(" /")[0];
    }

    TL.bindThemeButton(document.getElementById("themeBtn"));
    TL.bindSizeButton(document.getElementById("sizeBtn"));
    TL.buildLangBar(document.getElementById("langbar"));

    /* ================================================================
       1. RENDERER + SCENE
    ================================================================ */
    var renderer = null;
    if (THREE) {
      try {
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      } catch (e) { renderer = null; }
    }
    if (!renderer) {
      document.getElementById("nogl").style.display = "flex";
      canvas.style.display = "none";
      document.getElementById("controls").style.display = "none";
    }

    /* world: topic ki saari cheezein iske andar (AR me ise chhota karke mez par rakhte hain) */
    var scene = null, camera = null, world = null;
    if (renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 0.85));
      var sun = new THREE.DirectionalLight(0xffffff, 0.9);
      sun.position.set(6, 10, 7);
      scene.add(sun);
      var fill = new THREE.DirectionalLight(0xbcd4ff, 0.35);
      fill.position.set(-8, 4, -6);
      scene.add(fill);
      world = new THREE.Group();
      scene.add(world);
    }

    /* ================================================================
       2. SHAPE HELPERS (topics use these through `api`)
    ================================================================ */
    var HIGHLIGHT = 0xffa53a;
    function mat(color, opts) {
      opts = opts || {};
      var m = new THREE.MeshStandardMaterial({
        color: color,
        roughness: opts.rough !== undefined ? opts.rough : 0.6,
        metalness: opts.metal !== undefined ? opts.metal : 0.1,
        emissive: opts.glow !== undefined ? opts.glow : HIGHLIGHT,
        emissiveIntensity: opts.glow !== undefined ? (opts.glowLevel || 0) : 0,
        transparent: opts.opacity !== undefined,
        opacity: opts.opacity !== undefined ? opts.opacity : 1
      });
      /* glow wale material ko engine highlight ke liye nahi chhedta */
      if (opts.glow !== undefined) m.userData.ownGlow = true;
      return m;
    }
    function place(mesh, x, y, z) { mesh.position.set(x || 0, y || 0, z || 0); return mesh; }
    function box(w, h, d, m, x, y, z) { return place(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m), x, y, z); }
    function cyl(rt, rb, h, m, x, y, z, seg) { return place(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 20), m), x, y, z); }
    function sphere(r, m, x, y, z, seg) { return place(new THREE.Mesh(new THREE.SphereGeometry(r, seg || 20, Math.round((seg || 20) * 0.75)), m), x, y, z); }
    function torus(r, tube, m, x, y, z) { return place(new THREE.Mesh(new THREE.TorusGeometry(r, tube, 10, 120), m), x, y, z); }
    /* do points ke beech ek patli rod (wire, signal line) */
    function rod(a, b, r, m) {
      var dir = new THREE.Vector3().subVectors(b, a);
      var mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, dir.length(), 10), m);
      mesh.position.copy(a).addScaledVector(dir, 0.5);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
      return mesh;
    }

    var spinners = [];
    function spin(obj, speed, axis) { spinners.push({ obj: obj, speed: speed, axis: axis || "y" }); }
    function makeFan(radius, bladeColor, ringColor) {
      var g = new THREE.Group();
      var ring = new THREE.Mesh(new THREE.TorusGeometry(radius, radius * 0.1, 8, 28), mat(ringColor, { rough: 0.5 }));
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
      var blades = new THREE.Group();
      var bm = mat(bladeColor, { rough: 0.4 });
      for (var i = 0; i < 6; i++) {
        var a = (i / 6) * Math.PI * 2;
        var b = box(radius * 0.7, 0.03, radius * 0.32, bm, Math.cos(a) * radius * 0.45, 0, Math.sin(a) * radius * 0.45);
        b.rotation.y = -a;
        b.rotation.z = 0.35;
        blades.add(b);
      }
      blades.add(cyl(radius * 0.2, radius * 0.2, 0.08, mat(0x222222), 0, 0, 0, 16));
      g.add(blades);
      spin(blades, 6);
      return g;
    }

    /* ================================================================
       3. PARTS (clickable groups)
    ================================================================ */
    var parts = {};
    var pickMeshes = [];
    var exploded = false, explodeK = 0;

    /* pos = null matlab group pehle se kisi aur group ke andar hai */
    function addPart(id, group, pos, explode, opts) {
      opts = opts || {};
      if (!def.parts[id]) throw new Error("parts me '" + id + "' nahi mila");
      if (pos) { group.position.copy(pos); world.add(group); }
      var meshes = [];
      var clones = new Map();
      group.traverse(function (o) {
        if (!o.isMesh) return;
        /* har part ke apne material, taaki ek part chamke to doosra na chamke */
        if (!o.material.userData.ownGlow) {
          if (!clones.has(o.material)) clones.set(o.material, o.material.clone());
          o.material = clones.get(o.material);
          meshes.push(o);
        }
        o.userData.partId = id;
        if (opts.pickBehind) o.userData.behind = opts.pickBehind === true ? 1 : opts.pickBehind;
        pickMeshes.push(o);
      });
      /* ek hi part ke kai tukde (jaise 4 satellite): meshes jod do */
      if (parts[id]) {
        parts[id].meshes = parts[id].meshes.concat(meshes);
        return group;
      }
      parts[id] = {
        group: group, meshes: meshes,
        base: pos ? pos.clone() : null,
        explode: explode ? explode.clone() : null,
        focus: opts.focus !== false,
        label: opts.label ? opts.label.clone() : null
      };
      return group;
    }
    function decor(obj) { world.add(obj); return obj; }

    /* ================================================================
       4. CAMERA (simple orbit control)
    ================================================================ */
    var cam = def.camera || {};
    var HOME = {
      theta: cam.theta !== undefined ? cam.theta : 0.7,
      phi: cam.phi !== undefined ? cam.phi : 1.0,
      radius: cam.radius || 13,
      target: THREE ? new THREE.Vector3().fromArray(cam.target || [0, 0.4, 0]) : null
    };
    var MIN_R = cam.min || 6, MAX_R = cam.max || 26;
    var EXPLODE_R = cam.explodeRadius || HOME.radius * 1.3;
    var theta = HOME.theta, phi = HOME.phi, radius = HOME.radius, radiusT = HOME.radius;
    var target = HOME.target && HOME.target.clone(), targetT = HOME.target && HOME.target.clone();
    var autoRotate = !reduceMotion && def.autoRotate !== false;
    var selected = null, hovered = null;

    function updateCamera() {
      radius += (radiusT - radius) * 0.1;
      target.lerp(targetT, 0.08);
      var sp = Math.sin(phi);
      camera.position.set(
        target.x + radius * sp * Math.sin(theta),
        target.y + radius * Math.cos(phi),
        target.z + radius * sp * Math.cos(theta)
      );
      camera.lookAt(target);
    }
    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h || !renderer) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    function homeRadius() { return exploded ? EXPLODE_R : HOME.radius; }
    function resetView() {
      theta = HOME.theta; phi = HOME.phi; radiusT = homeRadius();
      clearSelection();
    }
    function focusPart(id) {
      var p = parts[id];
      if (!p || !p.focus || !renderer) return;
      var pos = new THREE.Vector3();
      if (p.base) {
        pos.copy(p.base);
        if (p.explode && exploded) pos.add(p.explode);
      } else p.group.getWorldPosition(pos);
      targetT.copy(HOME.target).lerp(pos, 0.5);
    }

    /* ================================================================
       5. POINTER: rotate, pinch zoom, tap to pick
    ================================================================ */
    var raycaster = renderer ? new THREE.Raycaster() : null;
    var ndc = renderer ? new THREE.Vector2() : null;
    var pointers = new Map();
    var downPos = null, moved = false, pinchDist = 0;
    var tip = document.getElementById("tip");

    function visibleChain(o) {
      for (; o; o = o.parent) if (!o.visible) return false;
      return true;
    }
    function pickAt(clientX, clientY) {
      var r = canvas.getBoundingClientRect();
      ndc.x = ((clientX - r.left) / r.width) * 2 - 1;
      ndc.y = -((clientY - r.top) / r.height) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      return pickRay(raycaster);
    }
    /* ray me sabse kam "behind" number wala dikhne wala part; barabar ho to jo paas hai */
    function pickRay(rc) {
      var hits = rc.intersectObjects(pickMeshes, false), best = null, level = Infinity;
      for (var i = 0; i < hits.length; i++) {
        var o = hits[i].object;
        if (!visibleChain(o)) continue;
        var lv = o.userData.behind || 0;
        if (lv === 0) return o.userData.partId;
        if (lv < level) { level = lv; best = o.userData.partId; }
      }
      return best;
    }
    function twoDist() {
      var p = Array.from(pointers.values());
      return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
    }

    if (renderer) {
      canvas.addEventListener("pointerdown", function (e) {
        canvas.setPointerCapture(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        autoRotate = false;
        if (pointers.size === 1) { downPos = { x: e.clientX, y: e.clientY }; moved = false; }
        else { moved = true; pinchDist = twoDist(); }
      });
      canvas.addEventListener("pointermove", function (e) {
        var prev = pointers.get(e.pointerId);
        if (prev) {
          var dx = e.clientX - prev.x, dy = e.clientY - prev.y;
          prev.x = e.clientX; prev.y = e.clientY;
          if (pointers.size === 1) {
            if (!moved && Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) > 5) moved = true;
            if (moved) {
              theta -= dx * 0.008;
              phi = Math.min(1.55, Math.max(0.15, phi - dy * 0.008));
            }
          } else if (pointers.size === 2) {
            var d = twoDist();
            if (pinchDist > 0) radiusT = Math.min(MAX_R, Math.max(MIN_R, radiusT * (pinchDist / d)));
            pinchDist = d;
          }
          tip.style.opacity = 0;
        } else if (e.pointerType === "mouse") {
          hovered = pickAt(e.clientX, e.clientY);
          canvas.style.cursor = hovered ? "pointer" : "grab";
          var r = stage.getBoundingClientRect();
          if (hovered) {
            tip.textContent = partName(hovered);
            tip.style.left = (e.clientX - r.left) + "px";
            tip.style.top = (e.clientY - r.top) + "px";
            tip.style.opacity = 1;
          } else tip.style.opacity = 0;
        }
      });
      var endPointer = function (e) {
        if (pointers.size === 1 && !moved && e.type === "pointerup") {
          var id = pickAt(e.clientX, e.clientY);
          if (id) selectPart(id, true); else clearSelection();
        }
        pointers.delete(e.pointerId);
        if (pointers.size < 2) pinchDist = 0;
      };
      canvas.addEventListener("pointerup", endPointer);
      canvas.addEventListener("pointercancel", endPointer);
      canvas.addEventListener("pointerleave", function (e) {
        if (e.pointerType === "mouse") { hovered = null; tip.style.opacity = 0; }
      });
      canvas.addEventListener("wheel", function (e) {
        e.preventDefault();
        autoRotate = false;
        radiusT = Math.min(MAX_R, Math.max(MIN_R, radiusT * (1 + e.deltaY * 0.001)));
      }, { passive: false });
      canvas.addEventListener("keydown", function (e) {
        var k = e.key;
        if (k === "ArrowLeft") theta += 0.12;
        else if (k === "ArrowRight") theta -= 0.12;
        else if (k === "ArrowUp") phi = Math.max(0.15, phi - 0.1);
        else if (k === "ArrowDown") phi = Math.min(1.55, phi + 0.1);
        else if (k === "+" || k === "=") radiusT = Math.max(MIN_R, radiusT - 1);
        else if (k === "-") radiusT = Math.min(MAX_R, radiusT + 1);
        else return;
        autoRotate = false;
        e.preventDefault();
      });
      if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
      window.addEventListener("resize", resize);
      resize();
    }

    /* ================================================================
       6. STATUS BUBBLE: setStatus("uiKey", ms, arg0, arg1...)
          Key yaad rehti hai, taaki bhasha badalne par message bhi badle.
    ================================================================ */
    var statusEl = document.getElementById("status");
    var statusTimer = 0, statusMsg = null;
    function showStatusText() {
      if (statusMsg) statusEl.textContent = tr.apply(null, [statusMsg.key].concat(statusMsg.args));
    }
    function setStatus(key, ms) {
      clearTimeout(statusTimer);
      if (!key) { statusMsg = null; statusEl.classList.remove("show"); return; }
      statusMsg = { key: key, args: Array.prototype.slice.call(arguments, 2) };
      showStatusText();
      statusEl.classList.add("show");
      if (ms !== 0) statusTimer = setTimeout(function () { statusMsg = null; statusEl.classList.remove("show"); }, ms || 3500);
    }

    /* ================================================================
       7. READ ALOUD
    ================================================================ */
    var speakingBtn = null;
    function speakButton(getText) {
      if (!TL.canSpeak) return null;
      var b = document.createElement("button");
      b.className = "speak-btn";
      b.textContent = TL.u("listen");
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () {
        if (speakingBtn === b) { stopSpeech(); return; }
        stopSpeech();
        speakingBtn = b;
        b.textContent = TL.u("stop");
        b.setAttribute("aria-pressed", "true");
        TL.speak(getText(), function () { if (speakingBtn === b) stopSpeech(); });
        TL.noteListen();
      });
      return b;
    }
    function stopSpeech() {
      TL.stopSpeaking();
      if (speakingBtn) {
        speakingBtn.textContent = TL.u("listen");
        speakingBtn.setAttribute("aria-pressed", "false");
      }
      speakingBtn = null;
    }

    /* ================================================================
       8. PANEL: chips + explanation + progress
    ================================================================ */
    var infoEl = document.getElementById("info");
    var chipsEl = document.getElementById("chips");
    var progEl = document.getElementById("progressLine");
    var chipBtns = {};

    ORDER.forEach(function (id) {
      var b = document.createElement("button");
      b.className = "chip";
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { selectPart(id, true); });
      chipsEl.appendChild(b);
      chipBtns[id] = b;
    });
    function renderChips() {
      ORDER.forEach(function (id) { chipBtns[id].textContent = def.parts[id].emoji + " " + partShort(id); });
    }

    function renderProgress() {
      var pr = TL.topicProgress(def.id);
      ORDER.forEach(function (id) { chipBtns[id].classList.toggle("seen", pr.seen.indexOf(id) !== -1); });
      var s = TL.starsFor(def.id);
      var kid = TL.currentProfile();
      progEl.innerHTML = kid.avatar + " " + esc(TL.profileName(kid)) + " · " +
        esc(TL.u("seen_parts", pr.seen.length, ORDER.length)) +
        (pr.total ? " · " + esc(TL.u("best_quiz", pr.best, pr.total)) : "") +
        ' · <span class="stars" aria-label="' + s + ' / 3 ★">' + TL.starsHtml(s) + "</span>" +
        (meta.level && TL.topicStatus(def.id) === "done" ? ' · <span class="st st-done">' + esc(TL.u("st_done")) + "</span>" : "");
    }

    /* Level, "pehle ye seekho" aur poora hone ka status (biology jaise topics me meta.level hota hai) */
    function topicMetaHtml() {
      if (!meta.level) return "";
      var h = '<div class="topic-meta"><span class="lvl lvl' + meta.level + '">' + esc(TL.u("lvl_" + meta.level)) + "</span>";
      var st = TL.topicStatus(def.id);
      h += '<span class="st st-' + st + '">' + esc(TL.u("st_" + st)) + "</span>";
      var pre = (meta.pre || []).map(TL.topicById).filter(Boolean);
      if (pre.length) {
        h += '<span class="pre">' + esc(TL.u("learn_first")) + " ";
        h += pre.map(function (t) {
          var ok = TL.topicStatus(t.id) === "done";
          return '<a href="topic.html?t=' + t.id + '">' + t.emoji + " " + esc(TL.pick(t.title)) + (ok ? " ✓" : "") + "</a>";
        }).join(", ");
        h += "</span>";
      }
      return h + "</div>";
    }
    var advOpen = false;
    try { advOpen = window.localStorage.getItem("techlab3d.adv") === "1"; } catch (e) {}
    function renderInfo() {
      if (speakingBtn && infoEl.contains(speakingBtn)) stopSpeech();
      if (!selected) {
        infoEl.innerHTML = topicMetaHtml() + '<p class="empty">' + (T("intro") || TL.u("intro_default")) + "</p>";
        return;
      }
      var id = selected;
      var adv = P(id, "adv");
      infoEl.innerHTML =
        "<h2>" + def.parts[id].emoji + " " + esc(partName(id)) + "</h2>" +
        '<p class="tag">' + esc(P(id, "tag")) + "</p>" +
        '<div id="speakSlot"></div>' +
        "<p>" + esc(P(id, "what")) + "</p>" +
        (adv ? '<details class="adv"' + (advOpen ? " open" : "") + "><summary>" + esc(TL.u("adv_title")) +
               "</summary><p>" + esc(adv) + "</p></details>" : "") +
        '<div class="box"><b>' + esc(TL.u("real_life")) + "</b>" + esc(P(id, "real")) + "</div>" +
        '<div class="box"><b>' + esc(TL.u("did_you_know")) + "</b>" + esc(P(id, "fact")) + "</div>";
      var det = infoEl.querySelector("details.adv");
      if (det) det.addEventListener("toggle", function () {
        advOpen = det.open;
        try { window.localStorage.setItem("techlab3d.adv", advOpen ? "1" : "0"); } catch (e) {}
      });
      var sb = speakButton(function () {
        var said = [partName(id), P(id, "tag"), P(id, "what")];
        if (adv && advOpen) said.push(adv);
        return said.concat([TL.u("real_life") + ": " + P(id, "real"),
                TL.u("did_you_know") + " " + P(id, "fact")]).join(". ");
      });
      if (sb) document.getElementById("speakSlot").appendChild(sb);
    }

    function highlightChip(id) {
      ORDER.forEach(function (k) { chipBtns[k].setAttribute("aria-pressed", String(k === id)); });
    }
    function selectPart(id, fromLearn) {
      selected = id;
      highlightChip(id);
      focusPart(id);
      autoRotate = false;
      if (fromLearn) {
        showTab("learn");
        var before = TL.topicProgress(def.id).seen.length;
        var seen = TL.markSeen(def.id, id, ORDER.length).seen.length;
        renderProgress();
        TL.emit("part", { id: id, fresh: seen > before, allSeen: seen > before && seen >= ORDER.length });
        TL.announceBadges();
      }
      renderInfo();
      if (ar) ar.onSelect(id, "<b>" + def.parts[id].emoji + " " + esc(partName(id)) + "</b>" +
        esc(P(id, "tag")) + "<br>" + esc(P(id, "what")));
      if (def.onSelect) def.onSelect(api, id);
    }
    function clearSelection() {
      selected = null;
      highlightChip(null);
      if (targetT) targetT.copy(HOME.target);
      renderInfo();
    }

    /* ================================================================
       9. BUTTONS on the stage (label = ui key, so it follows the language)
    ================================================================ */
    var controls = document.getElementById("controls");
    var ar = null;
    var buttons = {}, buttonKeys = {};
    function addButton(id, key, main, onClick) {
      var b = document.createElement("button");
      b.className = "act" + (main ? " main" : "");
      b.id = "btn-" + id;
      b.addEventListener("click", function () { onClick(b); });
      controls.appendChild(b);
      buttons[id] = b;
      setButton(id, key);
      return b;
    }
    function setButton(id, key) {
      buttonKeys[id] = key;
      buttons[id].textContent = tr(key);
    }
    if (def.explode) {
      addButton("explode", "explode", true, function (b) {
        exploded = !exploded;
        setButton("explode", exploded ? "join" : "explode");
        b.setAttribute("aria-pressed", String(exploded));
        radiusT = homeRadius();
        if (selected) focusPart(selected);
      }).setAttribute("aria-pressed", "false");
    }
    (def.actions || []).forEach(function (a) {
      addButton(a.id, a.label, a.main, function (b) { autoRotate = false; a.onClick(api, b); });
    });
    /* Naam ke labels jo 3D model ke upar tairte hain */
    var labelLayer = null, labelEls = {}, labelsOn = false;
    if (def.labels && renderer) {
      /* chhoti screen par shuru me band (model chhota hota hai), jab tak bachcha khud na chalu kare */
      var savedLabels = null;
      try { savedLabels = window.localStorage.getItem("techlab3d.labels"); } catch (e) {}
      labelsOn = savedLabels ? savedLabels === "1" : stage.clientWidth >= 500;
      labelLayer = document.createElement("div");
      labelLayer.id = "labels";
      stage.insertBefore(labelLayer, document.getElementById("hint"));
      addButton("labels", labelsOn ? "labels_hide" : "labels_show", false, function (b) {
        labelsOn = !labelsOn;
        try { window.localStorage.setItem("techlab3d.labels", labelsOn ? "1" : "0"); } catch (e) {}
        setButton("labels", labelsOn ? "labels_hide" : "labels_show");
        b.setAttribute("aria-pressed", String(labelsOn));
        labelLayer.hidden = !labelsOn;
      }).setAttribute("aria-pressed", String(labelsOn));
      labelLayer.hidden = !labelsOn;
    }
    function buildLabels() {
      if (!labelLayer) return;
      scene.updateMatrixWorld(true);
      ORDER.forEach(function (id) {
        var p = parts[id];
        if (!p) return;
        if (!p.label) {
          /* label ki jagah: part ke dabbe ka beech (group ke apne hisaab se) */
          var c = new THREE.Box3().setFromObject(p.group).getCenter(new THREE.Vector3());
          p.label = p.group.worldToLocal(c);
        }
        var b = document.createElement("button");
        b.className = "lbl";
        b.type = "button";
        b.tabIndex = -1;          // keyboard ke liye chips hain
        b.addEventListener("click", function () { selectPart(id, true); });
        labelLayer.appendChild(b);
        labelEls[id] = b;
      });
      renderLabels();
    }
    function renderLabels() {
      Object.keys(labelEls).forEach(function (id) { labelEls[id].textContent = partShort(id); });
    }
    var lv = THREE ? new THREE.Vector3() : null;
    function placeLabels() {
      if (!labelLayer || !labelsOn) return;
      var inXR = renderer.xr.isPresenting;
      labelLayer.style.display = inXR ? "none" : "";
      if (inXR) return;
      var w = canvas.clientWidth, h = canvas.clientHeight, ox = canvas.offsetLeft, oy = canvas.offsetTop;
      Object.keys(labelEls).forEach(function (id) {
        var p = parts[id], el = labelEls[id];
        lv.copy(p.label).applyMatrix4(p.group.matrixWorld).project(camera);
        var show = lv.z < 1 && Math.abs(lv.x) < 1.05 && Math.abs(lv.y) < 1.05 && visibleChain(p.group);
        el.style.display = show ? "" : "none";
        if (!show) return;
        el.style.transform = "translate(" + Math.round(ox + (lv.x + 1) / 2 * w) + "px," + Math.round(oy + (1 - lv.y) / 2 * h) + "px)";
        el.classList.toggle("on", id === selected);
      });
    }

    if (!def.noReset) addButton("reset", "reset_view", false, resetView);

    /* ================================================================
       10. TABS
    ================================================================ */
    var tabLearn = document.getElementById("tabLearn");
    var tabQuiz = document.getElementById("tabQuiz");
    var tabRevise = document.getElementById("tabRevise");
    var paneLearn = document.getElementById("paneLearn");
    var paneQuiz = document.getElementById("paneQuiz");
    var paneRevise = document.getElementById("paneRevise");
    /* "Dohrao" tab sirf tab jab topic me zaroori shabd ya practice sawaal hon */
    var hasRevise = !!(tabRevise && (T("terms") || T("practice")));
    if (tabRevise) tabRevise.hidden = !hasRevise;
    var TABS = [["learn", tabLearn, paneLearn]];
    if (hasRevise) TABS.push(["revise", tabRevise, paneRevise]);
    TABS.push(["quiz", tabQuiz, paneQuiz]);
    function showTab(which) {
      TABS.forEach(function (t) {
        t[1].setAttribute("aria-selected", String(t[0] === which));
        t[1].tabIndex = t[0] === which ? 0 : -1;
        t[2].hidden = t[0] !== which;
      });
      stopSpeech();
      if (which === "learn") renderProgress();
      if (which === "revise") renderRevise();
    }
    tabLearn.addEventListener("click", function () { showTab("learn"); });
    tabQuiz.addEventListener("click", function () { showTab("quiz"); startQuiz(false); });
    if (hasRevise) tabRevise.addEventListener("click", function () { showTab("revise"); });
    TABS.forEach(function (t, i) {
      t[1].addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        var other = TABS[(i + d + TABS.length) % TABS.length][1];
        other.focus(); other.click();
      });
    });

    /* ================================================================
       10b. REVISE: zaroori shabd + practice sawaal (jawab chhupa hua)
    ================================================================ */
    function renderRevise() {
      if (!hasRevise) return;
      if (speakingBtn && paneRevise.contains(speakingBtn)) stopSpeech();
      var terms = T("terms") || [], prac = T("practice") || [];
      var h = topicMetaHtml() + '<p class="done-rule">' + esc(TL.u("done_rule")) + "</p>";
      if (terms.length) {
        h += "<h3>" + esc(TL.u("terms_title")) + '</h3><div id="termsSpeak"></div><dl class="terms">';
        terms.forEach(function (x) { h += "<dt>" + esc(x.t) + "</dt><dd>" + esc(x.d) + "</dd>"; });
        h += "</dl>";
      }
      if (prac.length) {
        h += "<h3>" + esc(TL.u("practice_title")) + '</h3><ol class="practice">';
        prac.forEach(function (x) {
          h += "<li><p>" + esc(x.q) + "</p><details><summary>" + esc(TL.u("show_answer")) + "</summary><p>" + esc(x.a) + "</p></details></li>";
        });
        h += "</ol>";
      }
      paneRevise.innerHTML = h;
      var sb = terms.length && speakButton(function () {
        return terms.map(function (x) { return x.t + ": " + x.d; }).join(". ");
      });
      if (sb) document.getElementById("termsSpeak").appendChild(sb);
    }

    /* ================================================================
       11. QUIZ
    ================================================================ */
    var QUIZ = def.quiz || [];
    var qi = 0, score = 0, picked = -1, hinted = -1, quizStarted = false, quizView = "none";
    var lastResult = null;
    var quizBody = document.getElementById("quizBody");

    function startQuiz(force) {
      if (quizStarted && !force) return;
      quizStarted = true; qi = 0; score = 0;
      renderQuestion(false);
    }
    function renderQuestion(keepAnswer) {
      if (!keepAnswer) { picked = -1; hinted = -1; }
      quizView = "question";
      stopSpeech();
      var opts = Q(qi, "o") || [];
      var html = '<p id="qCount">' + esc(TL.u("question", qi + 1, QUIZ.length)) + "</p>" +
        '<p id="qText">' + esc(Q(qi, "q")) + "</p>" + '<div id="qSpeak"></div>';
      opts.forEach(function (t, i) {
        html += '<button class="opt" data-i="' + i + '">' + esc(t) + "</button>";
      });
      html += '<button class="link-btn hint-btn" id="hintBtn">' + esc(TL.u("hint")) + "</button>";
      html += '<div id="feedback" aria-live="polite"></div><div id="nextWrap"></div>';
      quizBody.innerHTML = html;
      var hb = document.getElementById("hintBtn");
      hb.addEventListener("click", useHint);
      if (hinted >= 0) showHint();
      var sb = speakButton(function () {
        var s = Q(qi, "q") + " ";
        (Q(qi, "o") || []).forEach(function (t, i) { s += (i + 1) + ". " + t + ". "; });
        if (picked >= 0) s += (picked === QUIZ[qi].a ? TL.u("right") : TL.u("wrong")) + " " + Q(qi, "why");
        return s;
      });
      if (sb) document.getElementById("qSpeak").appendChild(sb);
      Array.prototype.forEach.call(quizBody.querySelectorAll(".opt"), function (b) {
        b.addEventListener("click", function () { answer(parseInt(b.getAttribute("data-i"), 10)); });
      });
      if (picked >= 0) showAnswer(false);
      else clearSelection();
    }
    /* Hint: ek galat option hata do (har sawaal me ek baar) */
    function useHint() {
      if (picked >= 0 || hinted >= 0) return;
      var wrong = [];
      (Q(qi, "o") || []).forEach(function (t, i) { if (i !== QUIZ[qi].a) wrong.push(i); });
      if (!wrong.length) return;
      hinted = wrong[Math.floor(Math.random() * wrong.length)];
      showHint();
      TL.emit("hint");
    }
    function showHint() {
      var b = quizBody.querySelector('.opt[data-i="' + hinted + '"]');
      if (b) { b.disabled = true; b.classList.add("gone"); }
      var hb = document.getElementById("hintBtn");
      if (hb) hb.disabled = true;
    }
    function answer(i) {
      if (picked >= 0) return;
      picked = i;
      if (i === QUIZ[qi].a) score++;
      showAnswer(true);
      TL.emit("answer", { ok: i === QUIZ[qi].a });
    }
    function showAnswer(moveFocus) {
      var q = QUIZ[qi];
      var ok = picked === q.a;
      var hb = document.getElementById("hintBtn");
      if (hb) hb.hidden = true;
      Array.prototype.forEach.call(quizBody.querySelectorAll(".opt"), function (b, idx) {
        b.disabled = true;
        if (idx === q.a) b.classList.add("right");
        else if (idx === picked) b.classList.add("wrong");
      });
      document.getElementById("feedback").innerHTML =
        "<b>" + esc(ok ? TL.u("right") : TL.u("wrong")) + "</b> " + esc(Q(qi, "why")) +
        (q.part && renderer ? " " + esc(TL.u("glow_note")) : "");
      if (q.part) selectPart(q.part, false);
      var last = qi === QUIZ.length - 1;
      document.getElementById("nextWrap").innerHTML =
        '<button class="act main" id="nextBtn">' + esc(TL.u(last ? "see_result" : "next")) + "</button>";
      var nb = document.getElementById("nextBtn");
      nb.addEventListener("click", function () {
        if (last) finishQuiz(); else { qi++; renderQuestion(false); }
      });
      if (moveFocus) nb.focus();
    }
    function finishQuiz() {
      var before = TL.starsFor(def.id);
      TL.recordScore(def.id, score, QUIZ.length);
      lastResult = { score: score, newStar: TL.starsFor(def.id) > before };
      renderResult();
      clearSelection();
      TL.emit("quiz", { score: score, total: QUIZ.length, newStar: lastResult.newStar });
      TL.announceBadges();
    }
    function renderResult() {
      quizView = "result";
      stopSpeech();
      var sc = lastResult.score, n = QUIZ.length;
      var msg = sc === n ? TL.u("msg_full") : sc >= n / 2 ? TL.u("msg_half") : TL.u("msg_low");
      if (lastResult.newStar) msg = TL.u("new_star") + " " + msg;
      var stars = TL.starsFor(def.id);
      quizBody.innerHTML = '<div id="result"><div class="score">' + sc + " / " + n + "</div>" +
        '<p class="stars" style="font-size:1.8rem">' + TL.starsHtml(stars) + "</p>" +
        "<p>" + esc(msg) + "</p>" +
        '<button class="act main" id="againBtn">' + esc(TL.u("again")) + "</button> " +
        (meta.next ? '<a class="act main" style="display:inline-flex;align-items:center;text-decoration:none" href="topic.html?t=' +
          meta.next + '">' + esc(TL.u("next_topic")) + "</a> " : "") +
        '<a class="act" style="display:inline-flex;align-items:center;text-decoration:none" href="' + TL.topicHome(meta) + '">' +
        esc(TL.u("other_topic")) + "</a></div>";
      document.getElementById("againBtn").addEventListener("click", function () { startQuiz(true); });
    }

    /* ================================================================
       12. LANGUAGE: sab text dobara likho
    ================================================================ */
    function applyLanguage() {
      var title = TL.pick(meta.title);
      document.title = "Tech Lab 3D: " + title;
      document.getElementById("topicTitle").textContent = meta.emoji + " " + title;
      document.getElementById("topicSub").textContent = T("tagline") || "";
      document.getElementById("hint").textContent = T("hint") || TL.u("hint_default");
      document.getElementById("nogl").textContent = TL.u("nogl");
      var home = document.getElementById("homeBtn");
      home.href = TL.topicHome(meta);
      home.setAttribute("aria-label", TL.u("home_label"));
      home.title = TL.u("home_label");
      canvas.setAttribute("aria-label", title + ". " + TL.u("hint_default"));
      tabLearn.textContent = TL.u("tab_learn");
      tabQuiz.textContent = TL.u("tab_quiz");
      if (tabRevise) tabRevise.textContent = TL.u("tab_revise");
      if (hasRevise && !paneRevise.hidden) renderRevise();
      renderLabels();
      Object.keys(buttons).forEach(function (id) { buttons[id].textContent = tr(buttonKeys[id]); });
      renderChips();
      renderProgress();
      renderInfo();
      showStatusText();
      if (quizView === "question") renderQuestion(true);
      else if (quizView === "result") renderResult();
    }
    TL.onLang(function () {
      stopSpeech();
      applyLanguage();
      if (def.onLang && renderer) def.onLang(api);
    });

    /* ================================================================
       13. API for topic files
    ================================================================ */
    var api = {
      THREE: THREE, scene: scene, camera: camera, reduceMotion: reduceMotion,
      mat: mat, box: box, cyl: cyl, sphere: sphere, torus: torus, rod: rod,
      makeFan: makeFan, spin: spin, addPart: addPart, decor: decor,
      select: function (id) { selectPart(id, true); },
      selected: function () { return selected; },
      setStatus: setStatus, tr: tr,
      button: function (id) { return buttons[id]; },
      setButton: setButton,
      /* camera ki asli jagah (AR me bhi sahi) */
      cameraWorldPos: function () { return new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld); },
      state: {}
    };

    applyLanguage();
    if (!renderer) { TL.emit("ready", { id: def.id }); return api; }

    def.build(api);
    buildLabels();

    /* AR / camera mode */
    renderer.xr.enabled = true;
    ar = TL.initAR ? TL.initAR({
      THREE: THREE, renderer: renderer, scene: scene, world: world, camera: camera, stage: stage,
      controlsEl: controls, statusEl: statusEl, pickRay: pickRay, tr: tr,
      select: function (id) { selectPart(id, true); },
      setStatus: setStatus, addButton: addButton, setButton: setButton,
      onEnd: function () { resize(); }
    }) : null;

    /* ================================================================
       14. ANIMATION LOOP
    ================================================================ */
    var clock = new THREE.Clock();
    function frame(time, xrFrame) {
      var dt = Math.min(clock.getDelta(), 0.05);
      var t = clock.elapsedTime;

      explodeK += ((exploded ? 1 : 0) - explodeK) * 0.08;
      Object.keys(parts).forEach(function (id) {
        var p = parts[id];
        if (p.base && p.explode) p.group.position.copy(p.base).addScaledVector(p.explode, explodeK);
        var level = 0;
        if (id === selected) level = 0.35 + 0.15 * Math.sin(t * 4);
        else if (id === hovered) level = 0.25;
        for (var i = 0; i < p.meshes.length; i++) p.meshes[i].material.emissiveIntensity = level;
      });

      if (!reduceMotion) {
        spinners.forEach(function (s) { s.obj.rotation[s.axis] += s.speed * dt; });
        if (autoRotate) theta += dt * 0.25;
      }
      if (def.update) def.update(api, dt, t);
      if (ar && ar.active()) ar.update(xrFrame);
      else updateCamera();
      renderer.render(scene, camera);
      placeLabels();
    }
    renderer.setAnimationLoop(frame);
    TL.emit("ready", { id: def.id });
    return api;
  };
})();
