#!/usr/bin/env bash
# exit on error
set -o errexit

# Check if package.json exists in the current directory
if [ ! -f package.json ]; then
    echo "Error: package.json not found in the current directory ($(pwd))."
    echo "This is likely due to an incorrect 'Root Directory' setting in Render."
    echo "Please ensure 'Root Directory' is empty in your Render service settings."
    exit 1
fi

npm install
npm run build
