
#!/bin/sh
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
# :8081 is QA-only — a revive must never inherit a stale built-output preview.
# Called directly, not via npm: no node_modules needed, so nothing to wait for.
if [ "$(node -p 'process.platform')" != "win32" ]; then
  node scripts/preview.mjs stop || true
fi
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
mkdir -p .grok
nohup npm run dev >>.grok/app-startup.log 2>&1 </dev/null &
