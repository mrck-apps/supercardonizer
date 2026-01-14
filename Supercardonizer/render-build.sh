#!/usr/bin/env bash
# exit on error
set -o errexit

# The Root Directory is set to `src` in Render, so we are in the `src` folder.
# The `postinstall` script in `src/package.json` will run `npm install` in the root.

# The build command from Render's dashboard will take care of the build.
# This file is kept for compatibility but the main logic is in the dashboard settings
# and the `src/package.json`.
echo "Build process managed by Render.com settings and src/package.json postinstall script."
