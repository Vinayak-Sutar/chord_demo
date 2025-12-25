# 🚀 Deploying Chords Extractor to Vercel

This guide will help you deploy the standalone frontend demo to Vercel.

## Prerequisites

1. **GitHub Account** (recommended for easy deployment)
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
cd /home/vinayak/FILES/code/chords-project/chord-frontend-solo-deploy
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Chords Extractor standalone frontend"

# Create a new repository on GitHub named "chords-extractor-frontend"
# Then push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/chords-extractor-frontend.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub repository `chords-extractor-frontend`
4. Vercel will auto-detect it's a Create React App
5. **Framework Preset**: Create React App (should be auto-detected)
6. **Build Command**: `npm run build` (already set)
7. **Output Directory**: `build` (already set)
8. Click **"Deploy"**
9. Wait 2-3 minutes ⏳
10. Your site is live! 🎉

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
cd /home/vinayak/FILES/code/chords-project/chord-frontend-solo-deploy

# Deploy to preview
vercel

# Or deploy to production directly
vercel --prod
```

Follow the prompts:

- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- What's your project's name? **chords-extractor** (or any name)
- In which directory is your code located? \*\*./` (press Enter)
- Want to override settings? **No**

Wait for deployment... Done! 🎉

## Method 3: Deploy Existing Build Folder

If you already have the `build` folder:

```bash
cd /home/vinayak/FILES/code/chords-project/chord-frontend-solo-deploy
vercel --prod ./build
```

## Environment Variables (Optional)

If you need to add environment variables (like different API keys):

1. Go to your project on Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Add variables like:
   - `REACT_APP_YOUTUBE_API_KEY` = your YouTube API key

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as shown

## Post-Deployment Checklist

✅ Site loads correctly
✅ Default song (Kehna) displays on load
✅ YouTube search works
✅ Cached songs (9 total) can be clicked and play
✅ Songs list page shows when clicking uncached videos
✅ Video player works
✅ Chord grid displays properly
✅ Capo functionality works
✅ Flat/Sharp notation toggle works

## Troubleshooting

### Issue: "Page not found" on refresh

**Solution**: The `vercel.json` file with rewrites is already configured. Make sure it's included in your repository.

### Issue: Build fails

**Solution**:

```bash
# Clear cache and rebuild
rm -rf node_modules build
npm install
npm run build
```

### Issue: Videos don't play

**Solution**: Check that YouTube API key is valid. The current key in the code should work, but you can replace it with your own.

## Your Deployed Site

After deployment, you'll get a URL like:

- **Preview**: `https://chords-extractor-abc123.vercel.app`
- **Production**: `https://chords-extractor.vercel.app`

## Updating the Deployment

Whenever you push changes to your GitHub repository:

1. Vercel automatically detects the push
2. Builds the new version
3. Deploys it automatically 🚀

Or via CLI:

```bash
vercel --prod
```

## Performance Tips

Your site is already optimized with:

- ✅ Production build (minified JS/CSS)
- ✅ Gzipped assets (71.93 KB main bundle)
- ✅ Code splitting (React Player chunks)
- ✅ Static JSON data (no API calls)
- ✅ Cached songs (instant load)

## Analytics (Optional)

Enable Vercel Analytics:

1. Go to your project dashboard
2. Click **Analytics** tab
3. Enable Analytics
4. Track real-time visitors!

---

**Need Help?**

- Vercel Docs: https://vercel.com/docs
- Vercel Support: support@vercel.com

Good luck with your deployment! 🎸🚀
