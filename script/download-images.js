#!/usr/bin/env node

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download function with better error handling
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, { timeout: 10000 }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file on error
      console.error(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Professional fitness and business-related images
const images = [
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=face',
    filename: 'team-experts.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop',
    filename: 'unleashing-data-power.jpg'
  }
];

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting image downloads for Fidro...');
  console.log('📁 Target directory:', imagesDir);
  
  try {
    for (const img of images) {
      console.log(`⬇️  Downloading: ${img.filename}...`);
      await downloadImage(img.url, img.filename);
    }
    
    console.log('\n🎉 All images downloaded successfully!');
    console.log('� Downloaded files:');
    images.forEach(img => console.log(`   • ${img.filename}`));
    console.log(`\n📂 Location: ${imagesDir}`);
    console.log('\n💡 Tip: You can replace these with your own high-quality fitness/business images');
    
  } catch (error) {
    console.error('💥 Some downloads failed:', error.message);
    console.log('\n🔄 You can try running the script again or manually add images to the folder');
  }
}

// Run the script
downloadAllImages();
