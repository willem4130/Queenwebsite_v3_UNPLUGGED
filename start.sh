#!/bin/bash

# Start script for Soft Mad Children band website

echo "🎸 Starting Soft Mad Children website..."

# Kill any existing process on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Clean any stale build artifacts
rm -rf .next/.cache 2>/dev/null

# Start the dev server in background
nohup npm run dev > dev-output.log 2>&1 &

echo "✨ Server starting in background..."
echo "📝 Logs are being written to dev-output.log"
echo ""
echo "Wait 3-5 seconds, then open http://localhost:3000"
echo ""
echo "To stop the server later, run: lsof -ti:3000 | xargs kill -9"