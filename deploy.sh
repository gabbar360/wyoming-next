#!/bin/bash

echo "🚀 Starting production build..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment!"
    echo ""
    echo "To start production server:"
    echo "npm run start"
else
    echo "❌ Build failed!"
    exit 1
fi