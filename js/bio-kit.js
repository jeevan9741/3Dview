/* Tech Lab 3D: biology ke saanjhe 3D tukde (cell, molecule, nali, patti, behte kan).
   Topic file me: var K = TL.bioKit(api);  aur update me: K.update(dt);
   Sab kuch three.js r128 ke basic geometry se banta hai, koi model file nahi. */
(function () {
  "use strict";

  /* CPK rang: C kaala, O laal, H safed, N neela, P narangi */
  var ATOM = {
    C: { c: 0x3b3f4a, r: 0.32 }, O: { c: 0xe8412c, r: 0.3 }, H: { c: 0xf2f4f8, r: 0.2 },
    N: { c: 0x3a62e8, r: 0.3 }, P: { c: 0xf39a1e, r: 0.34 }
  };

  TL.bioKit = function (api) {
    var THREE = api.THREE, mat = api.mat;
    var V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    var flows = [];

    /* gol se lamba (ellipsoid) */
    function blob(r, m, sx, sy, sz, seg) {
      var mesh = new THREE.Mesh(new THREE.SphereGeometry(r, seg || 28, Math.round((seg || 28) * 0.7)), m);
      mesh.scale.set(sx || 1, sy || 1, sz || 1);
      return mesh;
    }
    /* capsule (r128 me CapsuleGeometry nahi hai): lathe se, Y axis par */
    function capsule(r, len, m, seg) {
      var pts = [], n = 10, half = len / 2;
      for (var i = 0; i <= n; i++) { var a = -Math.PI / 2 + (i / n) * Math.PI / 2; pts.push(new THREE.Vector2(Math.cos(a) * r, -half + Math.sin(a) * r)); }
      for (i = 0; i <= n; i++) { a = (i / n) * Math.PI / 2; pts.push(new THREE.Vector2(Math.cos(a) * r, half + Math.sin(a) * r)); }
      return new THREE.Mesh(new THREE.LatheGeometry(pts, seg || 24), m);
    }
    /* kata hua gola: andar dikhane ke liye ek hissa gayab (open = kitna khula, radians me) */
    function cutSphere(r, m, open, seg) {
      var g = new THREE.SphereGeometry(r, seg || 48, Math.round((seg || 48) * 0.66), open / 2, Math.PI * 2 - open);
      m.side = THREE.DoubleSide;
      return new THREE.Mesh(g, m);
    }
    function curve(points, closed) {
      return new THREE.CatmullRomCurve3(points.map(function (p) { return p.isVector3 ? p : V(p[0], p[1], p[2]); }), !!closed, "catmullrom", 0.4);
    }
    /* points ke saath chalti nali (khoon ki nas, tana, ER) */
    function tube(points, r, m, closed, seg) {
      return new THREE.Mesh(new THREE.TubeGeometry(curve(points, closed), seg || 64, r, 14, !!closed), m);
    }
    /* chapti patti: lambai len, chaudai w; base (0,0) par, nok +x ki taraf */
    function leafGeo(len, w) {
      var s = new THREE.Shape();
      s.moveTo(0, 0);
      s.bezierCurveTo(len * 0.25, w * 0.62, len * 0.7, w * 0.55, len, 0);
      s.bezierCurveTo(len * 0.7, -w * 0.55, len * 0.25, -w * 0.62, 0, 0);
      return new THREE.ShapeGeometry(s, 16);
    }
    function leaf(len, w, m) {
      m.side = THREE.DoubleSide;
      var g = new THREE.Group();
      var blade = new THREE.Mesh(leafGeo(len, w), m);
      blade.rotation.x = -Math.PI / 2;          // XZ plane me let jaaye
      g.add(blade);
      /* beech ki nas (midrib) aur kuch side ki nasein */
      var vm = mat(0xd9f0a0, { rough: 0.7 });
      var mid = api.box(len * 0.92, 0.025, 0.04, vm, len * 0.46, 0.012, 0);
      g.add(mid);
      for (var i = 1; i <= 3; i++) {
        var x = len * (0.2 + i * 0.18), sl = w * 0.32 * (1 - i * 0.12);
        [-1, 1].forEach(function (sd) {
          var v = api.box(sl, 0.02, 0.025, vm, x + sl * 0.3, 0.012, sd * sl * 0.38);
          v.rotation.y = -sd * 0.75;
          g.add(v);
        });
      }
      return g;
    }

    /* ball-and-stick molecule: [["C",x,y,z], ...], bonds: [[0,1], ...] */
    function molecule(atoms, bonds, scale) {
      var g = new THREE.Group(), k = scale || 1;
      var bm = mat(0xc9ced8, { rough: 0.4 });
      var pos = atoms.map(function (a) { return V(a[1] * k, a[2] * k, a[3] * k); });
      atoms.forEach(function (a, i) {
        var info = ATOM[a[0]];
        g.add(api.sphere(info.r * k, mat(info.c, { rough: 0.35 }), pos[i].x, pos[i].y, pos[i].z, 18));
      });
      (bonds || []).forEach(function (b) { g.add(api.rod(pos[b[0]], pos[b[1]], 0.07 * k, bm)); });
      return g;
    }
    var MOL = {
      co2: function (k) { return molecule([["C", 0, 0, 0], ["O", -0.62, 0, 0], ["O", 0.62, 0, 0]], [[0, 1], [0, 2]], k); },
      h2o: function (k) { return molecule([["O", 0, 0, 0], ["H", -0.42, -0.32, 0], ["H", 0.42, -0.32, 0]], [[0, 1], [0, 2]], k); },
      o2: function (k) { return molecule([["O", -0.3, 0, 0], ["O", 0.3, 0, 0]], [[0, 1]], k); },
      /* glucose ka chhota roop: 5 carbon + 1 oxygen ki angoothi (C6H12O6 ka chakra) */
      glucose: function (k) {
        var a = [], b = [];
        for (var i = 0; i < 6; i++) {
          var ang = i / 6 * Math.PI * 2;
          a.push([i === 0 ? "O" : "C", Math.cos(ang) * 0.6, Math.sin(ang) * 0.6, 0]);
          b.push([i, (i + 1) % 6]);
        }
        [1, 2, 3, 4].forEach(function (i) {
          var ang = i / 6 * Math.PI * 2;
          a.push(["O", Math.cos(ang) * 1.05, Math.sin(ang) * 1.05, (i % 2 ? 0.25 : -0.25)]);
          b.push([i, a.length - 1]);
        });
        a.push(["C", 1.05 * Math.cos(5 / 6 * Math.PI * 2), 1.05 * Math.sin(5 / 6 * Math.PI * 2), 0.3]);
        b.push([5, a.length - 1]);
        return molecule(a, b, k);
      }
    };

    /* points ke raaste par behte chhote kan (pani, khoon, CO2...).
       o: { count, size, color, speed (raaste ka hissa / second), make(i), parent, on } */
    function flow(points, o) {
      o = o || {};
      var c = curve(points, o.closed);
      var n = o.count || 8;
      var items = [];
      var shared = o.make ? null : mat(o.color || 0x3aa0ff, { rough: 0.3 });
      for (var i = 0; i < n; i++) {
        var m = o.make ? o.make(i) : api.sphere(o.size || 0.09, shared, 0, 0, 0, 10);
        if (o.parent) o.parent.add(m); else api.decor(m);
        items.push(m);
      }
      var f = { curve: c, items: items, speed: o.speed || 0.2, k: Math.random(), on: o.on !== false, spinItems: !!o.spinItems,
        set: function (on) { f.on = on; items.forEach(function (m) { m.visible = on; }); } };
      f.set(f.on);
      place(f);
      flows.push(f);
      return f;
    }
    function place(f) {
      var n = f.items.length;
      f.items.forEach(function (m, i) { m.position.copy(f.curve.getPointAt((f.k + i / n) % 1)); });
    }
    function update(dt) {
      flows.forEach(function (f) {
        if (!f.on) return;
        if (!api.reduceMotion) f.k = (f.k + dt * f.speed) % 1;
        place(f);
        if (f.spinItems && !api.reduceMotion) f.items.forEach(function (m) { m.rotation.y += dt * 1.5; m.rotation.x += dt; });
      });
    }

    return { V: V, blob: blob, capsule: capsule, cutSphere: cutSphere, curve: curve, tube: tube,
             leaf: leaf, leafGeo: leafGeo, molecule: molecule, mol: MOL, flow: flow, update: update };
  };
})();
