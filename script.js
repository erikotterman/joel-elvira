(() => {
  const url = typeof window.ALBUM_URL === "string" ? window.ALBUM_URL.trim() : "";
  if (!/^https:\/\/drive\.google\.com\/drive\/folders\/[A-Za-z0-9_-]+(?:[?#].*)?$/.test(url)) return;
  document.getElementById("open-album").href = url;
  document.getElementById("coming-soon").hidden = true;
  document.getElementById("album-link").hidden = false;
})();
