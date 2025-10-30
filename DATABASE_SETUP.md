# Database Setup Instructions

## Prerequisites

- PostgreSQL installed on your system
- Node.js and npm installed

## Setup Steps

1. **Start PostgreSQL**

   ```bash
   # On macOS with Homebrew
   brew services start postgresql

   # Or manually
   pg_ctl -D /usr/local/var/postgres start
   ```

2. **Create Database**

   ```bash
   createdb band_website
   ```

3. **Update Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Update `DATABASE_URL` with your PostgreSQL credentials:
     ```
     DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/band_website?schema=public"
     ```

4. **Run Migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Seed Database (Optional)**
   ```bash
   npx prisma db seed
   ```

## Troubleshooting

- If you get a connection error, ensure PostgreSQL is running
- Check that your database user has proper permissions
- Verify the database name matches what's in your DATABASE_URL
