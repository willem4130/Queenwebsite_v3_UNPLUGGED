# Development Server Help

## ✅ Server is Currently Running!

Your band website is accessible at: **http://localhost:3000**

## Starting the Server

If the server stops, you can restart it using any of these methods:

### Method 1: Simple Start

```bash
npm run dev
```

### Method 2: Background Start (Recommended)

```bash
nohup npm run dev > dev-server.log 2>&1 &
```

### Method 3: Using the Script

```bash
./start-dev.sh
```

## Checking Server Status

Check if the server is running:

```bash
ps aux | grep "next dev"
```

Check server logs:

```bash
tail -f dev-server.log
```

## Stopping the Server

Find the process:

```bash
ps aux | grep "next dev"
```

Kill the process:

```bash
kill [PROCESS_ID]
```

## Troubleshooting

If you get "localhost refused to connect":

1. Check if port 3000 is in use:

   ```bash
   lsof -i :3000
   ```

2. Kill any process using port 3000:

   ```bash
   kill -9 $(lsof -t -i:3000)
   ```

3. Restart the server using Method 2 above

## Server Log

The server output is saved to `dev-server.log`. You can view it anytime:

```bash
cat dev-server.log
```
