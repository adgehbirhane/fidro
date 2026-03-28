const fs = require('fs');
const path = require('path');

// Create SVG placeholder images for blog posts
const blogImages = [
  'streamlining-gym-operations-2024',
  'boosting-member-retention-strategies', 
  'future-fitness-technology-trends',
  'gym-marketing-strategies',
  'data-driven-fitness',
  'mobile-app-integration',
  'staff-training-excellence',
  'sustainable-fitness-business',
  'personal-training-growth',
  'community-building-gyms',
  'automating-admin-tasks',
  'member-journey-optimization',
  'author-avatar'
];

const createSVG = (filename, title, type = 'blog') => {
  const colors = {
    blog: ['#0891b2', '#06b6d4', '#22d3ee', '#67e8f9'],
    avatar: ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc']
  };
  
  const colorSet = colors[type] || colors.blog;
  const primaryColor = colorSet[Math.floor(Math.random() * colorSet.length)];
  
  const svg = type === 'avatar' 
    ? `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${primaryColor}20"/>
        <circle cx="100" cy="80" r="30" fill="${primaryColor}40"/>
        <ellipse cx="100" cy="140" rx="40" ry="30" fill="${primaryColor}40"/>
        <text x="100" y="105" text-anchor="middle" fill="${primaryColor}" font-family="Arial, sans-serif" font-size="24" font-weight="bold">FT</text>
      </svg>`
    : `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:0.1" />
            <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.3" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#grad)"/>
        <rect x="50" y="50" width="700" height="300" rx="20" fill="${primaryColor}10" stroke="${primaryColor}30" stroke-width="2"/>
        <circle cx="150" cy="200" r="40" fill="${primaryColor}20"/>
        <rect x="250" y="150" width="400" height="30" rx="5" fill="${primaryColor}30"/>
        <rect x="250" y="200" width="300" height="20" rx="5" fill="${primaryColor}20"/>
        <rect x="250" y="230" width="350" height="20" rx="5" fill="${primaryColor}20"/>
        <text x="400" y="320" text-anchor="middle" fill="${primaryColor}" font-family="Arial, sans-serif" font-size="18" font-weight="600">${title}</text>
      </svg>`;

  const imagesDir = path.join(__dirname, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  fs.writeFileSync(path.join(imagesDir, `${filename}.svg`), svg);
  console.log(`Created ${filename}.svg`);
};

// Generate all images
console.log('Generating blog images...');
blogImages.forEach(image => {
  const isAvatar = image === 'author-avatar';
  const title = isAvatar ? 'Author' : image.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  createSVG(image, title, isAvatar ? 'avatar' : 'blog');
});

console.log('All blog images generated successfully!');
