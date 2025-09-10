#!/bin/bash

echo "🚀 Starting Vercel Build Process..."
echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building application..."
npm run build

echo "✅ Build complete!"
echo "📁 Listing dist contents:"
ls -la dist/

echo "📁 Checking assets:"
ls -la dist/assets/

echo "✨ Build successful!"