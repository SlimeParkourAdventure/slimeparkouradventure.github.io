<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Preview — Slime Parkour</title>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial;max-width:1100px;margin:1.5rem auto;padding:1rem}
    iframe{width:100%;height:640px;border:1px solid #ccc}
    pre{background:#f6f8fa;padding:1rem;border-radius:6px;overflow:auto}
    .row{display:grid;grid-template-columns:1fr;gap:1rem}
    .controls{margin-bottom:1rem}
  </style>
</head>
<body>
  <h1>Slime Parkour — Embedded Preview</h1>

  <div class="controls">
    <a id="openSite" href="https://slime-parkour-adventure-82962d1f.base44.app" target="_blank" rel="noopener">Open site in new tab</a>
    &nbsp;|&nbsp;
    <button id="reloadFrame">Reload iframe</button>
    <span id="iframeStatus" style="margin-left:1rem;color:#555"></span>
  </div>

  <iframe id="previewFrame" src="https://slime-parkour-adventure-82962d1f.base44.app" title="Slime Parkour preview"></iframe>

  <h2>API results (entities)</h2>
  <div id="apiOutput"><em>Loading API results…</em></div>

  <script src="APP.js"></script>
  <script>
    const frame = document.getElementById('previewFrame');
    const status = document.getElementById('iframeStatus');
    document.getElementById('reloadFrame').addEventListener('click', ()=> {
      frame.src = frame.src;
      status.textContent = 'Reloaded';
    });

    frame.addEventListener('load', ()=> {
      // Can't access frame content if cross-origin; show user-friendly message
      try {
        // attempt an action that will throw if cross-origin
        const _ = frame.contentWindow.location.href;
        status.textContent = 'Loaded (same-origin)';
      } catch (e) {
        status.textContent = 'Loaded (cross-origin — preview only; use "Open site in new tab" if interactive features blocked)';
      }
    });

    // call function from APP.js to load API and render into #apiOutput
    if (typeof loadAndRenderEntities === 'function') {
      loadAndRenderEntities('22abc5b205ce403aa6f2e61d210df90c', 'apps/6908e9838afb834482962d1f/entities/EntityName');
    } else {
      document.getElementById('apiOutput').innerText = 'APP.js did not expose loadAndRenderEntities()';
    }
  </script>
</body>
</html>
