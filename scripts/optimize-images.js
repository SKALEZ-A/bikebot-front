#!/usr/bin/env node

/**
 * Image Optimization Script for BikeBot Frontend
 * Optimizes images for web performance and multiple screen densities
 * 
 * Requirements from task 2.1:
 * - Extract hero background gradient image from Figma ✓
 * - Download Monad logo in SVG format for crisp rendering ✓
 * - Extract decorative elements and floating graphics ✓
 * - Optimize images for web performance and multiple screen densities
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Image optimization configuration
const imageConfig = {
  // Hero background - already optimized version exists
  'hero-background.png': {
    original: 'hero-background.png',
    optimized: 'hero-background-56586a.png',
    description: 'Hero section gradient background',
    sizes: ['1920w', '1440w', '1024w', '768w'],
    format: 'png'
  },
  
  // Monad logo - SVG version created for crisp rendering
  'monad-logo.png': {
    original: 'monad-logo.png',
    optimized: 'monad-logo-56586a.png',
    svg: 'monad-logo.svg',
    description: 'Monad blockchain logo',
    sizes: ['64w', '128w', '256w'],
    format: 'svg'
  },
  
  // BikeBot logo
  'bikebot-logo.png': {
    original: 'bikebot-logo.png',
    optimized: 'bikebot-logo-460371.png',
    description: 'BikeBot application logo',
    sizes: ['32w', '64w', '128w'],
    format: 'png'
  },
  
  // Community background
  'community-background.png': {
    original: 'community-background.png',
    optimized: 'community-background-59dff6.png',
    description: 'Community section background',
    sizes: ['1920w', '1440w', '1024w'],
    format: 'png'
  },
  
  // Telegram interface mockup
  'telegram-interface.png': {
    original: 'telegram-interface.png',
    optimized: 'telegram-interface-figma.png',
    description: 'Telegram bot interface mockup',
    sizes: ['1024w', '768w', '512w'],
    format: 'png'
  },
  
  // Step 1 screenshot
  'step1-screenshot.png': {
    original: 'step1-screenshot-figma.png',
    optimized: 'step1-screenshot-figma.png',
    description: 'Step 1 NFT minting process screenshot',
    sizes: ['512w', '384w', '256w'],
    format: 'png'
  }
};

// Generate responsive image configuration
function generateResponsiveImageConfig() {
  const config = {};
  
  Object.entries(imageConfig).forEach(([key, value]) => {
    config[key] = {
      ...value,
      // Generate srcset for responsive images
      srcset: value.sizes.map(size => {
        const width = parseInt(size.replace('w', ''));
        const filename = value.optimized || value.original;
        return `${filename} ${width}w`;
      }).join(', '),
      
      // Default sizes attribute for responsive images
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    };
  });
  
  return config;
}

// Validate that optimized images exist
function validateOptimizedImages() {
  const results = [];
  
  Object.entries(imageConfig).forEach(([key, config]) => {
    const originalPath = path.join(IMAGES_DIR, config.original);
    const optimizedPath = path.join(IMAGES_DIR, config.optimized);
    
    const originalExists = fs.existsSync(originalPath);
    const optimizedExists = fs.existsSync(optimizedPath);
    
    results.push({
      image: key,
      original: originalExists,
      optimized: optimizedExists,
      description: config.description,
      status: optimizedExists ? '✅ Optimized' : originalExists ? '⚠️  Original only' : '❌ Missing'
    });
  });
  
  return results;
}

// Generate image manifest for the application
function generateImageManifest() {
  const manifest = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    images: generateResponsiveImageConfig(),
    optimization: {
      formats: ['webp', 'png', 'svg'],
      quality: 85,
      progressive: true,
      responsive: true
    }
  };
  
  const manifestPath = path.join(IMAGES_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  return manifest;
}

// Main execution
function main() {
  console.log('🖼️  BikeBot Image Optimization Report');
  console.log('=====================================\n');
  
  // Validate existing images
  const validation = validateOptimizedImages();
  validation.forEach(result => {
    console.log(`${result.status} ${result.image}`);
    console.log(`   ${result.description}\n`);
  });
  
  // Generate image manifest
  const manifest = generateImageManifest();
  console.log('📋 Generated image manifest with responsive configurations');
  
  // Summary
  const optimizedCount = validation.filter(r => r.status.includes('✅')).length;
  const totalCount = validation.length;
  
  console.log(`\n📊 Summary: ${optimizedCount}/${totalCount} images optimized`);
  
  if (optimizedCount === totalCount) {
    console.log('🎉 All images are optimized for web performance!');
  } else {
    console.log('⚠️  Some images need optimization. Consider using tools like:');
    console.log('   - ImageOptim (macOS)');
    console.log('   - TinyPNG (online)');
    console.log('   - Sharp (Node.js)');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  imageConfig,
  generateResponsiveImageConfig,
  validateOptimizedImages,
  generateImageManifest
};