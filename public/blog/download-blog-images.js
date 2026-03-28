import fs from 'fs';
import path from 'path';
import https from 'https';

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Enterprise-grade Professional Blog Images (Unsplash - High Resolution)
const blogImages = [
  {
    filename: 'streamlining-gym-operations.jpg',
    // Professional gym manager using a tablet in a modern gym environment
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&h=630&auto=format&fit=crop',
    description: 'Professional gym operations and management with modern equipment'
  },
  {
    filename: 'boosting-member-retention.jpg', 
    // Diverse fitness community high-fiving and smiling in a professional setting
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&h=630&auto=format&fit=crop',
    description: 'High-engagement fitness community for member retention'
  },
  {
    filename: 'future-of-fitness-tech.jpg',
    // Close up of a high-end smart watch or fitness tracker in a tech-focused gym
    url: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&h=630&auto=format&fit=crop',
    description: 'Futuristic fitness technology and biometric tracking'
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
  console.log('📥 Starting download of professional blog hero images...\n');
  
  try {
    for (const image of blogImages) {
      console.log(`Downloading: ${image.description}`);
      await downloadImage(image.url, image.filename);
    }
    
    console.log('\n✅ All professional images downloaded successfully!');
    console.log(`📁 Images saved to: ${imagesDir}`);
    
    // Update the blogs.ts file with new image paths
    console.log('\n📝 Ensuring blogs.ts is updated with correct image paths...');
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
    
    // Replace SVG paths with JPG paths if they exist
    content = content.replace(
      /\/blog\/images\/streamlining-gym-operations\.svg/g,
      '/blog/images/streamlining-gym-operations.jpg'
    );
    content = content.replace(
      /\/blog\/images\/boosting-member-retention\.svg/g,
      '/blog/images/boosting-member-retention.jpg'
    );
    content = content.replace(
      /\/blog\/images\/future-of-fitness-tech\.svg/g,
      '/blog/images/future-of-fitness-tech.jpg'
    );
    
    fs.writeFileSync(blogsTsPath, content);
    console.log('✅ blogs.ts updated successfully.');
  } else {
    console.log('⚠️ blogs.ts not found at: ' + blogsTsPath);
  }
}

downloadAllImages();
