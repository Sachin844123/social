#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Social Elite Setup...\n');

const checks = [
  {
    name: 'Tailwind Config',
    file: 'tailwind.config.ts',
    required: true
  },
  {
    name: 'PostCSS Config',
    file: 'postcss.config.mjs',
    required: true
  },
  {
    name: 'Global CSS',
    file: 'app/globals.css',
    required: true
  },
  {
    name: 'Next Config',
    file: 'next.config.ts',
    required: true
  },
  {
    name: 'Package JSON',
    file: 'package.json',
    required: true
  }
];

let allGood = true;

checks.forEach(check => {
  const exists = fs.existsSync(path.join(__dirname, check.file));
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${check.name}: ${check.file}`);
  
  if (!exists && check.required) {
    allGood = false;
  }
});

console.log('\n📦 Checking Dependencies...\n');

try {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
  );
  
  const deps = {
    'next': packageJson.dependencies?.next,
    'react': packageJson.dependencies?.react,
    'framer-motion': packageJson.dependencies?.['framer-motion'],
    'lucide-react': packageJson.dependencies?.['lucide-react'],
    'tailwindcss': packageJson.devDependencies?.tailwindcss,
  };
  
  Object.entries(deps).forEach(([name, version]) => {
    const status = version ? '✅' : '❌';
    console.log(`${status} ${name}: ${version || 'NOT INSTALLED'}`);
    if (!version) allGood = false;
  });
} catch (error) {
  console.log('❌ Error reading package.json');
  allGood = false;
}

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('✅ All checks passed! Setup is correct.');
  console.log('\n📝 Next steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Open: http://localhost:3000');
  console.log('   3. Hard refresh browser: Ctrl+Shift+R');
} else {
  console.log('❌ Some checks failed. Please fix the issues above.');
  console.log('\n🔧 Try running:');
  console.log('   npm install');
}

console.log('='.repeat(50) + '\n');
