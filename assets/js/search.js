document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('site-search-input');
  const resultsBox = document.getElementById('site-search-results');
  let index = [];

  function renderResults(items) {
    if (!resultsBox) return;
    if (!items || items.length === 0) {
      resultsBox.innerHTML = '<div class="search-empty">No results</div>';
      return;
    }
    const html = items.map(i => {
      return `<div class="search-item">
        <a class="search-item-title" href="${i.url}">${i.title}</a>
        <div class="search-item-meta">${i.date} • ${i.categories ? i.categories.join(', ') : ''}</div>
        <div class="search-item-desc">${i.description || ''}</div>
      </div>`;
    }).join('');
    resultsBox.innerHTML = html;
  }

  function scoreMatch(item, q) {
    const s = q.toLowerCase();
    let score = 0;
    if ((item.title || '').toLowerCase().includes(s)) score += 5;
    if ((item.description || '').toLowerCase().includes(s)) score += 3;
    if ((item.content || '').toLowerCase().includes(s)) score += 1;
    return score;
  }

  function doSearch(q) {
    if (!q || q.length < 2) {
      renderResults([]);
      return;
    }
    const results = index.map(i => ({item: i, score: scoreMatch(i, q)}))
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map(r => r.item);
    renderResults(results);
  }

  function loadIndex() {
    if (index.length) return Promise.resolve(index);
    return fetch('/search.json')
      .then(res => res.json())
      .then(json => {
        index = json.items || [];
        return index;
      })
      .catch(err => { console.error('search index load failed', err); index = []; });
  }

  if (!input) return;

  let timeout;
  input.addEventListener('input', function (e) {
    const q = e.target.value.trim();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      loadIndex().then(() => doSearch(q));
    }, 150);
  });

  // Close results when clicking outside
  document.addEventListener('click', function (e) {
    if (!resultsBox) return;
    if (!resultsBox.contains(e.target) && e.target !== input) {
      resultsBox.innerHTML = '';
    }
  });
});
