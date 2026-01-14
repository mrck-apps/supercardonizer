#!/usr/bin/env bash
# exit on error
set -o errexit

# The Root Directory is set to `src` in Render, so we are in the `src` folder.
# We need to go up one level to the root to install dependencies.
cd ..

# Install dependencies from the root package.json
npm install

# Build the Next.js app located in `src`
# The build command in the root package.json will handle the `--prefix src` part.
npm run build
