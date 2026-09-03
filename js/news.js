// Loads news items from the news/ folder. No manifest to maintain: items are
// named 001.json, 002.json, 003.json, ... and this script fetches them in
// order until a number is missing, then shows the newest first.
(function () {
  const track = document.getElementById("newsTrack");
  if (!track) return;

  const MAX_ITEMS = 200;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderItem(item) {
    const date = item.date ? `<span class="news-date">${escapeHtml(item.date)}</span>` : "";
    const text = escapeHtml(item.text || "");
    const inner = `${date}${text}`;
    if (item.link) {
      return `<li class="news-item"><a href="${escapeHtml(item.link)}" target="_blank" rel="noopener">${inner}</a></li>`;
    }
    return `<li class="news-item">${inner}</li>`;
  }

  async function fetchItem(n) {
    const num = String(n).padStart(3, "0");
    const res = await fetch(`news/${num}.json`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  }

  (async function load() {
    const items = [];
    for (let n = 1; n <= MAX_ITEMS; n++) {
      let item;
      try {
        item = await fetchItem(n);
      } catch (e) {
        break;
      }
      if (!item) break;
      items.push(item);
    }

    if (items.length === 0) {
      track.innerHTML = '<li class="news-empty">No news yet — add a file to the news/ folder.</li>';
      return;
    }

    items.reverse(); // newest (highest number) first
    track.innerHTML = items.map(renderItem).join("");
  })();
})();
