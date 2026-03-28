import fs from 'fs';
import path from 'path';

// All referenced images from the codebase scan
const referencedImages = new Set([
  '/images/hero-poster.jpg',
  '/images/team-experts.jpg',
  '/blog/images/streamlining-gym-operations.jpg',
  '/blog/images/boosting-member-retention.jpg',
  '/blog/images/future-of-fitness-tech.jpg',
  '/blog/images/author-avatar.svg',
  '/og-image.jpg'
]);

// Function to get all image files in a directory recursively
function getAllImageFiles(dir, basePath = '') {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item).replace(/\\/g, '/');
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllImageFiles(fullPath, relativePath));
    } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(item)) {
      files.push('/' + relativePath);
    }
  }
  
  return files;
}

// Function to remove unused images
function removeUnusedImages() {
  const publicDir = path.join(__dirname);
  const allImages = getAllImageFiles(publicDir);
  
  console.log('🔍 Scanning for unused images...\n');
  
  const unusedImages = allImages.filter(image => !referencedImages.has(image));
  const usedImages = allImages.filter(image => referencedImages.has(image));
  
  console.log('✅ Referenced images:');
  usedImages.forEach(img => console.log(`   ${img}`));
  
  console.log('\n🗑️  Unused images found:');
  if (unusedImages.length === 0) {
    console.log('   None! All images are being used.');
  } else {
    unusedImages.forEach(img => {
      console.log(`   ${img}`);
      const fullPath = path.join(publicDir, img.substring(1));
      try {
        fs.unlinkSync(fullPath);
        console.log(`   ✅ Deleted: ${img}`);
      } catch (error) {
        console.log(`   ❌ Failed to delete: ${img} - ${error.message}`);
      }
    });
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total images found: ${allImages.length}`);
  console.log(`   Used images: ${usedImages.length}`);
  console.log(`   Unused images removed: ${unusedImages.length}`);
}

// Run the cleanup
removeUnusedImages();
