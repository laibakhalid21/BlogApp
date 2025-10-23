// Script to help set up Vercel environment variables
// Run this to get the commands you need to run in Vercel CLI

const requiredEnvVars = [
  'MONGODB_URI',
  'NEXTAUTH_SECRET', 
  'NEXTAUTH_URL',
  'NEXT_PUBLIC_BASE_URL',
  'GOOGLE_ID',
  'GOOGLE_SECRET',
  'GITHUB_CLIENT_ID',
  'GITHUB_CLIENT_SECRET'
];

console.log('=== VERCEL ENVIRONMENT VARIABLES SETUP ===\n');

console.log('1. Install Vercel CLI if you haven\'t:');
console.log('   npm i -g vercel\n');

console.log('2. Login to Vercel:');
console.log('   vercel login\n');

console.log('3. Link your project:');
console.log('   vercel link\n');

console.log('4. Add environment variables:');
requiredEnvVars.forEach(envVar => {
  console.log(`   vercel env add ${envVar}`);
});

console.log('\n5. Deploy to production:');
console.log('   vercel --prod\n');

console.log('=== MANUAL SETUP (Alternative) ===\n');
console.log('Go to Vercel Dashboard → Your Project → Settings → Environment Variables');
console.log('Add these variables:');
requiredEnvVars.forEach(envVar => {
  console.log(`- ${envVar}`);
});

console.log('\n=== VALUES YOU NEED ===\n');
console.log('MONGODB_URI: mongodb+srv://username:password@cluster.mongodb.net/blogapp');
console.log('NEXTAUTH_SECRET: Generate a random 32+ character string');
console.log('NEXTAUTH_URL: https://your-app-name.vercel.app');
console.log('NEXT_PUBLIC_BASE_URL: https://your-app-name.vercel.app');
console.log('GOOGLE_ID: From Google Cloud Console');
console.log('GOOGLE_SECRET: From Google Cloud Console');
console.log('GITHUB_CLIENT_ID: From GitHub Developer Settings');
console.log('GITHUB_CLIENT_SECRET: From GitHub Developer Settings');
