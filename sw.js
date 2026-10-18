const V="invitly-v2",SHELL=["./","index.html","config.js","rsvp.html","manifest.webmanifest","icon-192.png","icon-512.png"],LIB="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js";
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(async c=>{await c.addAll(SHELL);await c.add(LIB).catch(()=>{})}).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!="GET"||u.hostname.endsWith("supabase.co"))return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));
});
