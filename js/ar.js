/* Tech Lab 3D: AR aur camera mode.
   - Android Chrome (ARCore): WebXR "immersive-ar". Model asli mez par dikhta hai, tap se rakho, tap se part chuno.
   - Baaki sab (iPhone, laptop): "camera mode". Model live camera ke upar dikhta hai, drag se ghumao.
   Dono ke liye website https par honi chahiye (ya file:// / localhost). */
(function () {
  "use strict";

  TL.initAR = function (c) {
    var THREE = c.THREE, renderer = c.renderer;
    var overlay = document.getElementById("arOverlay");
    var video = document.getElementById("camVideo");
    var arMsg = document.getElementById("arMsg");
    var arInfo = document.getElementById("arInfo");
    var arExit = document.getElementById("arExit");
    var mode = null;          // null | "xr" | "cam"
    var msgKey = null;

    function setMsg(key) { msgKey = key; arMsg.textContent = key ? c.tr(key) : ""; }

    /* ---------------- Camera mode ---------------- */
    var stream = null;
    function startCam() {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false })
        .then(function (s) {
          stream = s;
          video.srcObject = s;
          var p = video.play();
          if (p && p.catch) p.catch(function () {});
          c.stage.classList.add("cam-on");
          mode = "cam";
          c.setButton("cam", "cam_stop");
          c.setStatus("cam_on", 3500);
        })
        .catch(function () { c.setStatus("cam_denied", 4500); });
    }
    function stopCam() {
      if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
      stream = null;
      video.srcObject = null;
      c.stage.classList.remove("cam-on");
      mode = null;
      c.setButton("cam", "cam_start");
    }

    /* ---------------- WebXR AR ---------------- */
    var session = null, hitSource = null, placed = false, arScale = 1, offset = new THREE.Vector3();
    var reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.05, 0.07, 36).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    c.scene.add(reticle);

    var controller = renderer.xr.getController(0);
    c.scene.add(controller);
    var raycaster = new THREE.Raycaster();
    var tmp = new THREE.Matrix4();
    var moved = { parent: null, next: null, sParent: null, sNext: null };

    controller.addEventListener("select", function () {
      if (mode !== "xr") return;
      if (!placed) {
        if (!reticle.visible) return;
        var pos = new THREE.Vector3().setFromMatrixPosition(reticle.matrix);
        /* model ka muh dekhne wale ki taraf */
        var camPos = new THREE.Vector3().setFromMatrixPosition(c.camera.matrixWorld);
        var yaw = Math.atan2(camPos.x - pos.x, camPos.z - pos.z);
        c.world.rotation.set(0, yaw, 0);
        c.world.scale.setScalar(arScale);
        c.world.position.copy(pos).add(offset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw));
        c.world.visible = true;
        placed = true;
        reticle.visible = false;
        setMsg("ar_placed");
        return;
      }
      tmp.identity().extractRotation(controller.matrixWorld);
      raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
      raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tmp);
      var id = c.pickRay(raycaster);
      if (id) c.select(id);
    });

    /* overlay ke buttons dabane par 3D "select" na ho */
    overlay.addEventListener("beforexrselect", function (e) { if (e.target !== overlay) e.preventDefault(); });
    arExit.addEventListener("click", function () { if (session) session.end(); });

    function startXR() {
      overlay.classList.add("on");
      navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test"],
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: overlay }
      }).then(onStarted).catch(function () {
        overlay.classList.remove("on");
        c.setStatus("ar_fail", 4000);
      });
    }
    function onStarted(s) {
      session = s;
      mode = "xr";
      placed = false;

      /* model ka size naapo: mez par ~45 cm ka dikhe */
      c.world.position.set(0, 0, 0); c.world.rotation.set(0, 0, 0); c.world.scale.setScalar(1);
      var box = new THREE.Box3().setFromObject(c.world);
      var size = box.getSize(new THREE.Vector3());
      arScale = 0.45 / Math.max(size.x, size.y, size.z, 0.001);
      offset.set(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2).multiplyScalar(arScale);
      c.world.visible = false;

      /* buttons aur status ko overlay me le jao */
      moved.parent = c.controlsEl.parentNode; moved.next = c.controlsEl.nextSibling;
      moved.sParent = c.statusEl.parentNode; moved.sNext = c.statusEl.nextSibling;
      document.getElementById("arBottom").appendChild(c.statusEl);
      document.getElementById("arBottom").appendChild(c.controlsEl);
      arExit.textContent = c.tr("ar_exit");
      arInfo.innerHTML = "";

      renderer.xr.setReferenceSpaceType("local");
      renderer.xr.setSession(s);
      s.requestReferenceSpace("viewer")
        .then(function (vs) { return s.requestHitTestSource({ space: vs }); })
        .then(function (src) { hitSource = src; })
        .catch(function () {});
      s.addEventListener("end", onEnded);
      setMsg("ar_scan");
    }
    function onEnded() {
      if (hitSource && hitSource.cancel) hitSource.cancel();
      hitSource = null; session = null; mode = null; placed = false;
      reticle.visible = false;
      c.world.position.set(0, 0, 0); c.world.rotation.set(0, 0, 0); c.world.scale.setScalar(1);
      c.world.visible = true;
      moved.sParent.insertBefore(c.statusEl, moved.sNext);
      moved.parent.insertBefore(c.controlsEl, moved.next);
      overlay.classList.remove("on");
      setMsg(null);
      c.onEnd();
    }

    /* ---------------- Kaun sa button dikhana hai ---------------- */
    function addCamButton() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        c.addButton("cam", "cam_start", false, function () { if (mode === "cam") stopCam(); else startCam(); });
      }
    }
    if (navigator.xr && navigator.xr.isSessionSupported) {
      navigator.xr.isSessionSupported("immersive-ar")
        .then(function (ok) { if (ok) c.addButton("ar", "ar_start", false, startXR); else addCamButton(); })
        .catch(addCamButton);
    } else addCamButton();

    TL.onLang(function () {
      if (msgKey) setMsg(msgKey);
      arExit.textContent = c.tr("ar_exit");
    });

    return {
      active: function () { return mode === "xr"; },
      update: function (frame) {
        if (mode !== "xr" || placed || !frame || !hitSource) return;
        var ref = renderer.xr.getReferenceSpace();
        var hits = frame.getHitTestResults(hitSource);
        if (hits.length) {
          var pose = hits[0].getPose(ref);
          reticle.visible = true;
          reticle.matrix.fromArray(pose.transform.matrix);
          if (msgKey !== "ar_place") setMsg("ar_place");
        } else reticle.visible = false;
      },
      /* AR me chuna gaya part overlay me dikhao */
      onSelect: function (id, html) { if (mode === "xr") arInfo.innerHTML = html; }
    };
  };
})();
