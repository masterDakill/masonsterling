import { cpSync, existsSync } from 'fs';
import { join } from 'path';

console.log('📦 Post-build: Copying public assets to dist...');

const publicAssetsPath = join(process.cwd(), 'public', 'assets');
const distAssetsPath = join(process.cwd(), 'dist', 'assets');

if (existsSync(publicAssetsPath)) {
  try {
    cpSync(publicAssetsPath, distAssetsPath, { recursive: true, force: true });
    console.log('✅ Assets copied successfully!');
  } catch (error) {
    console.error('❌ Error copying assets:', error);
    process.exit(1);
  }
} else {
  console.log('⚠️ No public/assets folder found');
}