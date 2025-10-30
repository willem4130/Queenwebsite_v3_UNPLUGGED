#!/bin/bash

# Development Server Debug Script
# This script helps troubleshoot and fix common localhost connection issues

echo "🔍 Development Server Debug Tool"
echo "================================"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${RED}❌ Port $port is already in use${NC}"
        echo "Finding process on port $port..."
        lsof -i :$port
        return 1
    else
        echo -e "${GREEN}✅ Port $port is available${NC}"
        return 0
    fi
}

# Function to kill process on port
kill_port() {
    local port=$1
    local pids=$(lsof -ti :$port 2>/dev/null)
    if [ ! -z "$pids" ]; then
        echo -e "${YELLOW}Killing processes on port $port: $pids${NC}"
        kill -9 $pids 2>/dev/null
        sleep 1
    fi
}

# Check Node.js version
echo -e "\n${YELLOW}1. Checking Node.js version...${NC}"
node_version=$(node -v)
echo "Current Node.js version: $node_version"
if [[ "$node_version" == "v24"* ]]; then
    echo -e "${RED}⚠️  Warning: You're using Node.js v24 which may have compatibility issues with Next.js${NC}"
    echo "Consider using Node.js LTS (v20 or v22)"
fi

# Check if port 3000 is available
echo -e "\n${YELLOW}2. Checking port 3000...${NC}"
if ! check_port 3000; then
    read -p "Do you want to kill the process on port 3000? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        kill_port 3000
        check_port 3000
    fi
fi

# Clean build cache
echo -e "\n${YELLOW}3. Cleaning build cache...${NC}"
if [ -d ".next" ]; then
    echo "Removing .next directory..."
    rm -rf .next
    echo -e "${GREEN}✅ Build cache cleaned${NC}"
else
    echo "No .next directory found"
fi

# Check package.json
echo -e "\n${YELLOW}4. Checking package.json...${NC}"
if grep -q "next dev --turbopack" package.json; then
    echo -e "${RED}⚠️  Turbopack is enabled in dev script${NC}"
    echo "Turbopack may cause issues with your Node.js version"
    echo "Run 'npm run dev' to use standard Next.js dev server"
else
    echo -e "${GREEN}✅ Using standard Next.js dev server${NC}"
fi

# Check localhost configuration
echo -e "\n${YELLOW}5. Checking localhost configuration...${NC}"
if grep -q "127.0.0.1.*localhost" /etc/hosts; then
    echo -e "${GREEN}✅ /etc/hosts configured correctly${NC}"
else
    echo -e "${RED}❌ /etc/hosts may need configuration${NC}"
    echo "Add this line to /etc/hosts: 127.0.0.1 localhost"
fi

# Start dev server with error handling
echo -e "\n${YELLOW}6. Starting development server...${NC}"
echo "Running: npm run dev"
echo -e "${GREEN}Press Ctrl+C to stop the server${NC}\n"

# Export environment to help with debugging
export NODE_ENV=development
export DEBUG=*

# Run the dev server
npm run dev