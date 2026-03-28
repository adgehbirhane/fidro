const https = require('https');
const fs = require('fs');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Blog images to download with their URLs
const blogImages = [
  {
    filename: 'streamlining-gym-operations.jpg',
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Gym operations and management technology'
  },
  {
    filename: 'boosting-member-retention.jpg', 
    url: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Fitness community and member retention'
  },
  {
    filename: 'future-of-fitness-tech.jpg',
    url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Future fitness technology and wearable devices'
  }
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve(filePath);
        });
      } else {
        file.close();
        fs.unlink(filePath, () => {}); // Delete the partial file
        reject(new Error(`Failed to download ${filename}. Status code: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {}); // Delete the partial file
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('📥 Starting download of blog images...\n');
  
  try {
    for (const image of blogImages) {
      console.log(`Downloading: ${image.description}`);
      await downloadImage(image.url, image.filename);
    }
    
    console.log('\n✅ All images downloaded successfully!');
    console.log(`📁 Images saved to: ${imagesDir}`);
    
    // Update the blogs.ts file with new image paths
    console.log('\n📝 Updating blogs.ts with new image paths...');
    updateBlogsTsFile();
    
  } catch (error) {
    console.error('❌ Error downloading images:', error.message);
  }
}

// Update the blogs.ts file with new image paths
function updateBlogsTsFile() {
  const blogsTsPath = path.join(__dirname, '..', 'src', 'content', 'blogs.ts');
  
  if (fs.existsSync(blogsTsPath)) {
    let content = fs.readFileSync(blogsTsPath, 'utf8');
    
    // Replace the SVG image paths with JPG paths
    content = content.replace(
      '/blog/images/streamlining-gym-operations.svg',
      '/blog/images/streamlining-gym-operations.jpg'
    );
    content = content.replace(
      '/blog/images/boosting-member-retention.svg',
      '/blog/images/boosting-member-retention.jpg'
    );
    content = content.replace(
      '/blog/images/future-of-fitness-tech.svg',
      '/blog/images/future-of-fitness-tech.jpg'
    );
    
    fs.writeFileSync(blogsTsPath, content);
    console.log('✅ Updated blogs.ts with new image paths');
  } else {
    console.log('⚠️  blogs.ts file not found, please update manually');
  }
}

// Run the download
downloadAllImages();
