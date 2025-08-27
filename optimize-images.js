// Image Optimization Script
// This script helps identify and optimize large images for better performance

const fs = require('fs');
const path = require('path');

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function analyzeImages(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  let totalSize = 0;
  const imageFiles = [];

  files.forEach(file => {
    if (file.isDirectory()) {
      const subDir = path.join(directory, file.name);
      const subAnalysis = analyzeImages(subDir);
      totalSize += subAnalysis.totalSize;
      imageFiles.push(...subAnalysis.files);
    } else {
      const filePath = path.join(directory, file.name);
      const ext = path.extname(file.name).toLowerCase();
      
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
        const size = getFileSize(filePath);
        totalSize += size;
        imageFiles.push({
          path: filePath,
          name: file.name,
          size: size,
          formattedSize: formatBytes(size)
        });
      }
    }
  });

  return { totalSize, files: imageFiles };
}

// Analyze public assets
console.log('📊 Analyzing image assets...\n');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (fs.existsSync(assetsDir)) {
  const analysis = analyzeImages(assetsDir);
  
  console.log(`Total images found: ${analysis.files.length}`);
  console.log(`Total size: ${formatBytes(analysis.totalSize)}\n`);
  
  // Sort by size (largest first)
  analysis.files.sort((a, b) => b.size - a.size);
  
  console.log('🔍 Largest files:');
  analysis.files.slice(0, 10).forEach((file, index) => {
    console.log(`${index + 1}. ${file.name} - ${file.formattedSize}`);
  });
  
  // Identify files over 1MB
  const largeFiles = analysis.files.filter(file => file.size > 1024 * 1024);
  if (largeFiles.length > 0) {
    console.log('\n⚠️  Files over 1MB (consider optimization):');
    largeFiles.forEach(file => {
      console.log(`   ${file.name} - ${file.formattedSize}`);
    });
  }
  
  console.log('\n💡 Optimization recommendations:');
  console.log('1. Convert PNG images to WebP format for better compression');
  console.log('2. Resize images to appropriate dimensions');
  console.log('3. Use lazy loading for images below the fold');
  console.log('4. Consider using progressive JPEG for large photos');
  
} else {
  console.log('Assets directory not found');
}