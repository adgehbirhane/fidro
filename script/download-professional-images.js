#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Professional fitness and business image URLs (alternative sources)
const images = [
  {
    url: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    filename: 'team-experts.jpg',
    description: 'Professional fitness team'
  },
  {
    url: 'https://images.pexels.com/photos/5439157/pexels-photo-5439157.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    filename: 'unleashing-data-power.jpg',
    description: 'Business analytics dashboard'
  }
];

// Simple download function using curl (more reliable)
function downloadWithCurl(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const curl = require('child_process').spawn('curl', [
      '-L', // Follow redirects
      '-s', // Silent
      '-o', filePath,
      '--connect-timeout', '30',
      '--max-time', '60',
      url
    ]);

    curl.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      } else {
        console.error(`❌ Failed to download: ${filename} (exit code: ${code})`);
        reject(new Error(`Curl failed with exit code ${code}`));
      }
    });

    curl.on('error', (err) => {
      console.error(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Alternative: Use Node.js fetch if available
async function downloadWithFetch(url, filename) {
  try {
    const filePath = path.join(imagesDir, filename);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`✅ Downloaded: ${filename}`);
  } catch (error) {
    console.error(`❌ Error downloading ${filename}:`, error.message);
    throw error;
  }
}

// Main download function
async function downloadImage(url, filename) {
  // Try curl first (most reliable)
  try {
    await downloadWithCurl(url, filename);
    return;
  } catch (curlError) {
    console.log(`⚠️  Curl failed for ${filename}, trying fetch...`);
  }

  // Fallback to fetch
  try {
    await downloadWithFetch(url, filename);
  } catch (fetchError) {
    console.log(`⚠️  Fetch failed for ${filename}, creating placeholder...`);
    createPlaceholder(filename);
  }
}

// Create a simple placeholder image
function createPlaceholder(filename) {
  const filePath = path.join(imagesDir, filename);
  const svg = `
    <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff"/>
      <text x="400" y="400" font-family="Arial, sans-serif" font-size="24" fill="#0ea5e9" text-anchor="middle">
        ${filename.replace('.jpg', '').replace(/-/g, ' ').toUpperCase()}
      </text>
    </svg>
  `;
  
  fs.writeFileSync(filePath, svg);
  console.log(`📝 Created placeholder: ${filename}`);
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting professional image downloads for Fidro...');
  console.log('📁 Target directory:', imagesDir);
  
  try {
    for (const img of images) {
      console.log(`⬇️  Downloading: ${img.filename} (${img.description})...`);
      await downloadImage(img.url, img.filename);
    }
    
    console.log('\n🎉 All images processed successfully!');
    console.log('📋 Files:');
    images.forEach(img => console.log(`   • ${img.filename} - ${img.description}`));
    console.log(`\n📂 Location: ${imagesDir}`);
    console.log('\n💡 Tip: Replace these with your own high-quality fitness/business images for best results');
    
  } catch (error) {
    console.error('💥 Process failed:', error.message);
  }
}

// Run the script
downloadAllImages();
