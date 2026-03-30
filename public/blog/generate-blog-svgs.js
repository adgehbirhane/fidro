import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Enterprise-grade Teal Palette
const COLORS = {
  primary: '#004d4d', // Darker Teal
  secondary: '#008080', // Medium Teal
  accent: '#00b3b3', // Light Teal
  bg: '#f0fdfa', // Very light teal background
  text: '#134e4a', // Dark teal for text
  muted: '#99f6e4', // Muted teal
  white: '#ffffff',
  slate: '#64748b'
};

// SVG templates for each blog post
const svgTemplates = {
  'streamlining-gym-operations': {
    filename: 'streamlining-gym-operations.svg',
    content: `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${COLORS.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${COLORS.muted};stop-opacity:0.3" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#grad1)"/>
      
      <!-- Abstract Tech Pattern -->
      <g opacity="0.1">
        <path d="M0 100 Q 300 50 600 100 T 1200 100" fill="none" stroke="${COLORS.primary}" stroke-width="2"/>
        <path d="M0 200 Q 300 150 600 200 T 1200 200" fill="none" stroke="${COLORS.primary}" stroke-width="2"/>
        <path d="M0 300 Q 300 250 600 300 T 1200 300" fill="none" stroke="${COLORS.primary}" stroke-width="2"/>
      </g>

      <!-- Central Element: Dashboard Layout -->
      <g transform="translate(300, 150)" filter="url(#shadow)">
        <rect width="600" height="350" rx="20" fill="${COLORS.white}" stroke="${COLORS.muted}" stroke-width="2"/>
        <rect width="600" height="60" rx="20" fill="${COLORS.primary}"/>
        <rect x="0" y="40" width="600" height="20" fill="${COLORS.primary}"/>
        
        <!-- Header Elements -->
        <circle cx="40" cy="30" r="6" fill="${COLORS.white}" opacity="0.5"/>
        <circle cx="65" cy="30" r="6" fill="${COLORS.white}" opacity="0.5"/>
        <circle cx="90" cy="30" r="6" fill="${COLORS.white}" opacity="0.5"/>
        <rect x="150" y="20" width="300" height="20" rx="10" fill="${COLORS.white}" opacity="0.2"/>

        <!-- Sidebar -->
        <rect x="20" y="80" width="140" height="250" rx="10" fill="${COLORS.bg}"/>
        <rect x="35" y="100" width="110" height="12" rx="6" fill="${COLORS.secondary}" opacity="0.3"/>
        <rect x="35" y="130" width="90" height="12" rx="6" fill="${COLORS.muted}"/>
        <rect x="35" y="160" width="100" height="12" rx="6" fill="${COLORS.muted}"/>
        <rect x="35" y="190" width="80" height="12" rx="6" fill="${COLORS.muted}"/>

        <!-- Content Area: Analytics -->
        <rect x="180" y="80" width="400" height="150" rx="10" fill="${COLORS.bg}"/>
        <text x="200" y="110" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${COLORS.primary}">Operational Efficiency</text>
        
        <!-- Bar Chart -->
        <rect x="200" y="140" width="20" height="70" rx="4" fill="${COLORS.primary}"/>
        <rect x="235" y="120" width="20" height="90" rx="4" fill="${COLORS.secondary}"/>
        <rect x="270" y="160" width="20" height="50" rx="4" fill="${COLORS.accent}"/>
        <rect x="305" y="130" width="20" height="80" rx="4" fill="${COLORS.primary}"/>
        <rect x="340" y="150" width="20" height="60" rx="4" fill="${COLORS.secondary}"/>

        <!-- Bottom Cards -->
        <rect x="180" y="245" width="190" height="85" rx="10" fill="${COLORS.primary}" opacity="0.1"/>
        <rect x="390" y="245" width="190" height="85" rx="10" fill="${COLORS.secondary}" opacity="0.1"/>
        
        <circle cx="215" cy="275" r="15" fill="${COLORS.primary}"/>
        <path d="M210 275 L215 280 L225 270" fill="none" stroke="${COLORS.white}" stroke-width="2"/>
        <text x="240" y="280" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${COLORS.primary}">Automation</text>

        <circle cx="425" cy="275" r="15" fill="${COLORS.secondary}"/>
        <path d="M420 280 L425 270 L430 280" fill="none" stroke="${COLORS.white}" stroke-width="2"/>
        <text x="450" y="280" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${COLORS.secondary}">Growth</text>
      </g>

      <!-- Decorative Floats -->
      <circle cx="150" cy="500" r="40" fill="${COLORS.primary}" opacity="0.1"/>
      <rect x="1000" y="100" width="80" height="80" rx="20" fill="${COLORS.secondary}" opacity="0.1" transform="rotate(15, 1040, 140)"/>
    </svg>`,
    description: 'Enterprise dashboard for gym operations streamlining'
  },
  
  'boosting-member-retention': {
    filename: 'boosting-member-retention.svg',
    content: `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${COLORS.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${COLORS.muted};stop-opacity:0.3" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#grad2)"/>
      
      <!-- Abstract Pattern: Connection Nodes -->
      <g opacity="0.05">
        <circle cx="100" cy="100" r="50" fill="${COLORS.primary}"/>
        <circle cx="1100" cy="530" r="70" fill="${COLORS.secondary}"/>
        <line x1="100" y1="100" x2="1100" y2="530" stroke="${COLORS.primary}" stroke-width="2"/>
      </g>

      <!-- Central Element: Community & Growth -->
      <g transform="translate(300, 115)" filter="url(#shadow)">
        <rect width="600" height="400" rx="20" fill="${COLORS.white}" stroke="${COLORS.muted}" stroke-width="2"/>
        
        <!-- Retention Wheel -->
        <circle cx="300" cy="180" r="100" fill="none" stroke="${COLORS.bg}" stroke-width="20"/>
        <path d="M 300 80 A 100 100 0 1 1 210 230" fill="none" stroke="${COLORS.primary}" stroke-width="20" stroke-linecap="round"/>
        <text x="300" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${COLORS.primary}">94%</text>
        <text x="300" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="${COLORS.secondary}">RETENTION</text>

        <!-- Member Avatars (Stylized) -->
        <g transform="translate(0, 0)">
          <circle cx="150" cy="100" r="30" fill="${COLORS.muted}"/>
          <circle cx="450" cy="100" r="30" fill="${COLORS.muted}"/>
          <circle cx="120" cy="280" r="30" fill="${COLORS.muted}"/>
          <circle cx="480" cy="280" r="30" fill="${COLORS.muted}"/>
          
          <circle cx="150" cy="95" r="10" fill="${COLORS.primary}"/>
          <circle cx="450" cy="95" r="10" fill="${COLORS.secondary}"/>
          <circle cx="120" cy="275" r="10" fill="${COLORS.accent}"/>
          <circle cx="480" cy="275" r="10" fill="${COLORS.primary}"/>
        </g>

        <!-- Strategies List -->
        <rect x="50" y="320" width="500" height="60" rx="10" fill="${COLORS.primary}" opacity="0.05"/>
        <text x="300" y="355" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="${COLORS.primary}">Community • Engagement • Loyalty</text>
      </g>

      <!-- Success Indicators -->
      <g transform="translate(950, 200)" filter="url(#shadow)">
        <rect width="180" height="100" rx="15" fill="${COLORS.white}"/>
        <text x="90" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${COLORS.slate}">LIFETIME VALUE</text>
        <text x="90" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="${COLORS.primary}">+42%</text>
      </g>
    </svg>`,
    description: 'Member retention and community visualization'
  },
  
  'future-of-fitness-tech': {
    filename: 'future-of-fitness-tech.svg',
    content: `<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${COLORS.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${COLORS.muted};stop-opacity:0.3" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="10" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#grad3)"/>
      
      <!-- Digital Grid -->
      <g opacity="0.1">
        <line x1="0" y1="315" x2="1200" y2="315" stroke="${COLORS.primary}" stroke-width="1"/>
        <line x1="600" y1="0" x2="600" y2="630" stroke="${COLORS.primary}" stroke-width="1"/>
        <circle cx="600" cy="315" r="100" fill="none" stroke="${COLORS.primary}" stroke-width="1"/>
        <circle cx="600" cy="315" r="200" fill="none" stroke="${COLORS.primary}" stroke-width="1"/>
      </g>

      <!-- Central Element: Futuristic Interface -->
      <g transform="translate(300, 115)" filter="url(#shadow)">
        <rect width="600" height="400" rx="20" fill="${COLORS.white}" stroke="${COLORS.muted}" stroke-width="2"/>
        
        <!-- AI Core -->
        <circle cx="300" cy="200" r="80" fill="${COLORS.bg}" stroke="${COLORS.primary}" stroke-width="2" stroke-dasharray="10,5"/>
        <circle cx="300" cy="200" r="50" fill="${COLORS.primary}" filter="url(#glow)"/>
        <path d="M 300 170 L 330 200 L 300 230 L 270 200 Z" fill="${COLORS.white}" opacity="0.8"/>
        
        <!-- Floating Nodes -->
        <g>
          <!-- Smart Wearable Node -->
          <rect x="50" y="50" width="120" height="80" rx="10" fill="${COLORS.white}" stroke="${COLORS.secondary}" stroke-width="2"/>
          <text x="110" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${COLORS.secondary}">WEARABLES</text>
          <circle cx="110" cy="105" r="5" fill="${COLORS.secondary}"/>
          
          <!-- VR Node -->
          <rect x="430" y="50" width="120" height="80" rx="10" fill="${COLORS.white}" stroke="${COLORS.primary}" stroke-width="2"/>
          <text x="490" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${COLORS.primary}">VIRTUAL REALITY</text>
          <circle cx="490" cy="105" r="5" fill="${COLORS.primary}"/>
          
          <!-- Biometrics Node -->
          <rect x="50" y="270" width="120" height="80" rx="10" fill="${COLORS.white}" stroke="${COLORS.accent}" stroke-width="2"/>
          <text x="110" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${COLORS.accent}">BIOMETRICS</text>
          <circle cx="110" cy="325" r="5" fill="${COLORS.accent}"/>

          <!-- Connection Lines to Core -->
          <line x1="170" y1="90" x2="250" y2="160" stroke="${COLORS.muted}" stroke-width="2"/>
          <line x1="430" y1="90" x2="350" y2="160" stroke="${COLORS.muted}" stroke-width="2"/>
          <line x1="170" y1="310" x2="250" y2="240" stroke="${COLORS.muted}" stroke-width="2"/>
        </g>
      </g>

      <!-- Tech Stats -->
      <g transform="translate(100, 100)" filter="url(#shadow)">
        <rect width="140" height="70" rx="10" fill="${COLORS.primary}"/>
        <text x="70" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${COLORS.white}" opacity="0.7">AI ACCURACY</text>
        <text x="70" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${COLORS.white}">99.8%</text>
      </g>
    </svg>`,
    description: 'Futuristic fitness technology and AI integration'
  }
};

// Generate each SVG file
Object.keys(svgTemplates).forEach(key => {
  const template = svgTemplates[key];
  const filePath = path.join(imagesDir, template.filename);
  
  fs.writeFileSync(filePath, template.content);
  console.log(`Generated: ${template.filename} - ${template.description}`);
});

console.log('\nAll enterprise-grade blog hero SVGs have been generated in public/blog/images/');
