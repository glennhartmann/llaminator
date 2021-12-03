if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/llaminator/sw.js");
  });
}
const mainDBName = "appDB";
const objStoreName = "imageStore";
const mainImageName = "mainImage";
window.addEventListener("load", () => {
  const fileInput = document.querySelector("#input");
  const imgElement = document.querySelector("img");
  const shareBtn = document.querySelector("#share");
  const dbOpenRequest = window.indexedDB.open(mainDBName);
  dbOpenRequest.addEventListener("success", (e) => onDBOpenSuccess(e, imgElement, shareBtn));
  dbOpenRequest.addEventListener("error", (e) => {
    console.log("error loading db:", e);
  });
  dbOpenRequest.addEventListener("upgradeneeded", (e) => {
    console.log(`DB update request:`, e);
    e.target.result.createObjectStore(objStoreName);
  });
  fileInput.addEventListener("change", (e) => onFileInputChange(e, dbOpenRequest, imgElement, shareBtn));
  shareBtn.addEventListener("click", async () => {
    const blob = await fetch(imgElement.src).then((r) => r.blob());
    const f = fileFromBlob(blob);
    navigator.share({ files: [f] });
  });
});
function onDBOpenSuccess(e, imgElement, shareBtn) {
  console.log("Database initialized");
  const db = e.target.result;
  const t = db.transaction(objStoreName, "readonly").objectStore(objStoreName).get(mainImageName);
  t.addEventListener("success", (e2) => {
    console.log("get success:", e2);
    const b = e2.target.result;
    if (!b)
      return;
    imgElement.src = window.URL.createObjectURL(b);
    displayIfShareEnabled(shareBtn, b);
  });
  t.addEventListener("error", (e2) => {
    console.log("get error:", e2);
  });
}
async function onFileInputChange(e, dbOpenRequest, imgElement, shareBtn) {
  const inputElement = e.target;
  console.log(inputElement.value);
  if (!inputElement.files || !inputElement.files.length)
    return;
  const f = inputElement.files[0];
  const b = new Blob([await f.arrayBuffer()], { type: f.type });
  imgElement.src = window.URL.createObjectURL(b);
  displayIfShareEnabled(shareBtn, b);
  const t = dbOpenRequest.result.transaction(objStoreName, "readwrite").objectStore(objStoreName).put(b, mainImageName);
  t.addEventListener("success", (e2) => {
    console.log("put success:", e2);
  });
  t.addEventListener("error", (e2) => {
    console.log("put error:", e2);
  });
}
function displayIfShareEnabled(target, blob) {
  const f = fileFromBlob(blob);
  if ("share" in navigator && "canShare" in navigator && navigator.canShare({ files: [f] })) {
    target.style.display = "block";
  }
}
function fileFromBlob(blob) {
  return new File([blob], "name.png", { type: "image/png" });
}
//# sourceMappingURL=index.js.map
