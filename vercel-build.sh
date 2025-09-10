#!/bin/bash

echo "🚀 Starting Vercel Build Process..."
echo "📂 Current directory: $(pwd)"
echo "📋 Files in directory:"
ls -la

echo "🔨 Building application directly with npm..."
npm run build

echo "✅ Build complete!"
echo "📁 Checking if dist exists:"
if [ -d "dist" ]; then
    echo "✅ dist directory found!"
    echo "📁 Listing dist contents:"
    ls -la dist/
    echo "📁 Checking assets:"
    ls -la dist/assets/ 2>/dev/null || echo "No assets directory yet"
else
    echo "❌ dist directory not found!"
    echo "🔧 Attempting alternative build..."
    npx vite build
    node scripts/postbuild.js
fi

echo "✨ Build process finished!"