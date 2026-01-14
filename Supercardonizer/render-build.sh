#!/usr/bin/env bash
# exit on error
set -o errexit

# Stelle sicher, dass wir im Hauptverzeichnis des Repositories sind
cd $RENDER_PROJECT_ROOT

npm install
npm run build
