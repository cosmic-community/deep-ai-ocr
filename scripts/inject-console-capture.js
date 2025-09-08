const fs = require('fs');
const path = require('path');

function injectConsoleScript() {
  const buildDir = path.join(process.cwd(), '.next');
  
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found. Skipping console capture injection.');
    return;
  }
  
  // Read the console capture script
  const scriptPath = path.join(process.cwd(), 'public', 'dashboard-console-capture.js');
  
  if (!fs.existsSync(scriptPath)) {
    console.log('Console capture script not found. Skipping injection.');
    return;
  }
  
  const script = fs.readFileSync(scriptPath, 'utf8');
  const scriptTag = `<script>${script}</script>`;
  
  // Find all HTML files in the build output
  function findHTMLFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findHTMLFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
  
  const htmlFiles = findHTMLFiles(buildDir);
  let injectedCount = 0;
  
  for (const file of htmlFiles) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Skip if script already injected
      if (content.includes('console-capture-ready')) {
        continue;
      }
      
      // Inject script at the end of head or beginning of body
      if (content.includes('</head>')) {
        content = content.replace('</head>', `${scriptTag}</head>`);
        fs.writeFileSync(file, content);
        injectedCount++;
      } else if (content.includes('<body>')) {
        content = content.replace('<body>', `<body>${scriptTag}`);
        fs.writeFileSync(file, content);
        injectedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Console capture script injected into ${injectedCount} HTML files.`);
}

// Run the injection
injectConsoleScript();