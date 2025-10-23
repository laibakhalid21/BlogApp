# Vercel Deployment Fix Guide

## Issues Fixed:
1. Google/GitHub OAuth not working
2. Blog posts not showing
3. Environment variables missing

## Step 1: Set Environment Variables in Vercel

Go to your Vercel dashboard → Project Settings → Environment Variables and add:

### Required Environment Variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blogapp
NEXTAUTH_SECRET=your-super-secret-key-here-min-32-characters
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_BASE_URL=https://your-app-name.vercel.app

# Google OAuth (Get from Google Cloud Console)
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# GitHub OAuth (Get from GitHub Developer Settings)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## Step 2: Get OAuth Credentials

### Google OAuth Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set authorized redirect URIs:
   - `https://your-app-name.vercel.app/api/auth/callback/google`
6. Copy Client ID and Client Secret to Vercel

### GitHub OAuth Setup:
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set Authorization callback URL:
   - `https://your-app-name.vercel.app/api/auth/callback/github`
4. Copy Client ID and Client Secret to Vercel

## Step 3: Database Setup

### Option A: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Get connection string
4. Add to Vercel as `MONGODB_URI`

### Option B: Local MongoDB (Not recommended for production)
- Use MongoDB Atlas for production

## Step 4: Redeploy

After setting all environment variables:
1. Go to Vercel dashboard
2. Click "Redeploy" on your project
3. Or push new changes to trigger redeploy

## Step 5: Test Your Deployment

1. **Test Home Page**: `https://your-app-name.vercel.app`
2. **Test Blog Page**: `https://your-app-name.vercel.app/blog`
3. **Test Login**: `https://your-app-name.vercel.app/dashboard/login`
4. **Test OAuth**: Try Google/GitHub login

## Common Issues & Solutions:

### Issue: "No posts found"
**Solution**: Check MONGODB_URI is correct and database has data

### Issue: OAuth redirect mismatch
**Solution**: Ensure redirect URLs match exactly in OAuth provider settings

### Issue: Environment variables not working
**Solution**: Redeploy after adding variables in Vercel

### Issue: Database connection failed
**Solution**: Check MongoDB Atlas network access allows all IPs (0.0.0.0/0)

## Quick Fix Commands:

```bash
# If you need to update environment variables
vercel env add MONGODB_URI
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
vercel env add NEXT_PUBLIC_BASE_URL
vercel env add GOOGLE_ID
vercel env add GOOGLE_SECRET
vercel env add GITHUB_CLIENT_ID
vercel env add GITHUB_CLIENT_SECRET

# Redeploy
vercel --prod
```
