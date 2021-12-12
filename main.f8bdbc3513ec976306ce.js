/*
 * Copyright 2021 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
(()=>{"use strict";"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("sw.js")}));const e="imageStore",t="mainImage";function n(e,t){const n=r(t);"share"in navigator&&"canShare"in navigator&&navigator.canShare({files:[n]})&&(e.style.display="block")}function r(e){return new File([e],"name.png",{type:"image/png"})}window.addEventListener("load",(()=>{const o=document.querySelector("#input"),s=document.querySelector("img"),a=document.querySelector("#share");!window.indexedDB||window.URL;const c=window.indexedDB.open("appDB");c.addEventListener("success",(r=>function(r,o,s){console.log("Database initialized");const a=r.target.result.transaction(e,"readonly").objectStore(e).get(t);a.addEventListener("success",(e=>{console.log("get success:",e);const t=e.target.result;t&&(o.src=window.URL.createObjectURL(t),n(s,t))})),a.addEventListener("error",(e=>{console.log("get error:",e)}))}(r,s,a))),c.addEventListener("error",(e=>{console.log("error loading db:",e)})),c.addEventListener("upgradeneeded",(t=>{console.log("DB update request:",t),t.target.result.createObjectStore(e)})),o.addEventListener("change",(r=>async function(r,o,s,a){const c=r.target;if(console.log(c.value),!c.files||!c.files.length)return;const i=c.files[0],d=new Blob([await i.arrayBuffer()],{type:i.type});s.src=window.URL.createObjectURL(d),n(a,d);const l=o.result.transaction(e,"readwrite").objectStore(e).put(d,t);l.addEventListener("success",(e=>{console.log("put success:",e)})),l.addEventListener("error",(e=>{console.log("put error:",e)}))}(r,c,s,a))),a.addEventListener("click",(async()=>{const e=r(await fetch(s.src).then((e=>e.blob())));navigator.share({files:[e]})}))}))})();
