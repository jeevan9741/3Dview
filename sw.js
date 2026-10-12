/* Tech Lab 3D service worker: ek baar website khulne ke baad internet ke bina bhi chale.
   Koi file badlo to VERSION badha do, taaki sabke phone par nayi file aa jaaye. */
var VERSION = "techlab3d-v6";
var FILES = [
  "./", "index.html", "topic.html", "teacher.html", "manifest.webmanifest", "icon.svg",
  "css/app.css", "js/common.js", "js/engine.js", "js/ar.js", "js/fun.js", "js/lib/three.min.js",
  "js/topics/computer.js", "js/topics/internet.js", "js/topics/circuit.js",
  "js/topics/robot.js", "js/topics/coding.js", "js/topics/satellite.js",
  "js/topics/mobile.js", "js/topics/solar.js", "js/topics/drone.js", "js/topics/rocket.js",
  "biology.html", "js/bio.js", "js/bio-kit.js",
  "js/topics/plant-parts.js", "js/topics/plant-cell.js", "js/topics/photosynthesis.js", "js/topics/plant-reproduction.js",
  "js/topics/animal-kingdom.js", "js/topics/animal-cell.js", "js/topics/human-heart.js", "js/topics/dna-genetics.js"
];

self.addEventListener("install", function (e) {
  /* cache: "reload" = browser ke HTTP cache ko chhodkar server se taaza file lo,
     warna naye VERSION me bhi purani files bhar jaati hain */
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return c.addAll(FILES.map(function (f) { return new Request(f, { cache: "reload" }); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Apni files: pehle cache se (tez), peeche se update. Google font: mile to cache me rakh lo. */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var own = url.origin === self.location.origin;
  var font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith(caches.open(VERSION).then(function (cache) {
    return cache.match(req, { ignoreSearch: own }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
