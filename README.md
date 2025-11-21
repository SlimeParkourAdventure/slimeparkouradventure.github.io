<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Slime Parkour</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    body {
      font-family: system-ui, Segoe UI, Roboto, Helvetica, Arial;
    }
    
    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
    
    .controls {
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.8);
      padding: 10px 15px;
      border-radius: 6px;
      z-index: 9999;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    
    .controls a,
    .controls button {
      color: #fff;
      text-decoration: none;
      background: #0066cc;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      transition: background 0.3s;
    }
    
    .controls a:hover,
    .controls button:hover {
      background: #0052a3;
    }
    
    #iframeStatus {
      color: #aaa;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="controls">
    <a id="openSite" href="https://slime-parkour-adventure-82962d1f.base44.app" target="_blank" rel="noopener">Open Full Site</a>
    <button id="reloadFrame">Reload</button>
    <span id="iframeStatus">Loading...</span>
  </div>

  <iframe id="previewFrame" src="https://slime-parkour-adventure-82962d1f.base44.app" title="Slime Parkour"></iframe>

  <script>
    const frame = document.getElementById('previewFrame');
    const status = document.getElementById('iframeStatus');
    
    document.getElementById('reloadFrame').addEventListener('click', () => {
      frame.src = frame.src;
      status.textContent = 'Reloading...';
    });

    frame.addEventListener('load', () => {
      try {
        const _ = frame.contentWindow.location.href;
        status.textContent = '✓ Loaded';
      } catch (e) {
        status.textContent = '✓ Loaded (Cross-origin)';
      }
    });
  </script>
</body>
</html>

