import { execSync } from 'child_process';
import { existsSync, cpSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting Safe Build for Vercel...');

try {
  // Step 1: Clean dist
  console.log('🧹 Cleaning dist directory...');
  execSync('rm -rf dist', { stdio: 'inherit' });
  
  // Step 2: Run Vite build
  console.log('🔨 Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Step 3: Copy public assets
  console.log('📦 Copying public assets...');
  const publicAssetsPath = join(process.cwd(), 'public', 'assets');
  const distAssetsPath = join(process.cwd(), 'dist', 'assets');
  
  if (existsSync(publicAssetsPath)) {
    cpSync(publicAssetsPath, distAssetsPath, { recursive: true, force: true });
    console.log('✅ Assets copied successfully!');
  }
  
  // Step 4: Verify dist exists
  if (existsSync('dist')) {
    console.log('✅ Build successful! dist directory exists.');
    execSync('ls -la dist/', { stdio: 'inherit' });
  } else {
    console.error('❌ Build failed! dist directory not found.');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Build error:', error.message);
  process.exit(1);
}

console.log('🎉 Build completed successfully!');