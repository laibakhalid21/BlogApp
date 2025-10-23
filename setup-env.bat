@echo off
echo Setting up environment variables for blogapp...

set MONGODB_URI=mongodb://localhost:27017/blogapp
set NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
set NEXTAUTH_URL=http://localhost:3000
set NEXT_PUBLIC_BASE_URL=http://localhost:3000

echo Environment variables set!
echo.
echo Make sure MongoDB is running before starting the server.
echo To start MongoDB, run: mongod
echo.
echo Starting development server...
npm run dev
