#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
DEPLOY_DIR="/home/rafaelferreiradasilva/htdocs/rafaelferreiradasilva.com.br"

echo "→ Building Next.js static export..."
cd "$REPO_DIR"
npm run build

echo "→ Deploying to $DEPLOY_DIR (assets/pdf preserved)..."
rsync -a --delete \
  --exclude 'assets/pdf/' \
  "$REPO_DIR/out/" "$DEPLOY_DIR/"

PDF_COUNT=$(ls "$DEPLOY_DIR/assets/pdf/" 2>/dev/null | wc -l)
echo "✓ Deploy complete. PDFs preserved: $PDF_COUNT"
