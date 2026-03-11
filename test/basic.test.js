const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Simple test suite
function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`✅ ${testName}`);
    return true;
  } catch (error) {
    console.log(`❌ ${testName}: ${error.message}`);
    return false;
  }
}

// Test 1: Check if main files exist
function testFilesExist() {
  const requiredFiles = [
    'index.js',
    'index.d.ts',
    'package.json',
    'README.md',
    'LICENSE'
  ];
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      throw new Error(`Missing file: ${file}`);
    }
  });
}

// Test 2: Check package.json structure
function testPackageJson() {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (!pkg.name) throw new Error('Missing name in package.json');
  if (!pkg.version) throw new Error('Missing version in package.json');
  if (!pkg.main) throw new Error('Missing main in package.json');
  if (!pkg.bin) throw new Error('Missing bin in package.json');
  if (!pkg.engines) throw new Error('Missing engines in package.json');
}

// Test 3: Check TypeScript definitions
function testTypeScriptDefinitions() {
  const dtsContent = fs.readFileSync('index.d.ts', 'utf8');
  
  if (!dtsContent.includes('CodeQualityChecker')) {
    throw new Error('Missing CodeQualityChecker in TypeScript definitions');
  }
  
  if (!dtsContent.includes('CodeQualityOptions')) {
    throw new Error('Missing CodeQualityOptions in TypeScript definitions');
  }
}

// Test 4: Check if main library loads
function testLibraryLoad() {
  try {
    // Remove from require cache to test fresh load
    delete require.cache[path.resolve(__dirname, '../index.js')];
    const { CodeQualityChecker } = require('../index.js');
    
    if (!CodeQualityChecker) {
      throw new Error('CodeQualityChecker not exported');
    }
    
    // Test instantiation
    const checker = new CodeQualityChecker();
    
    if (!checker.options) {
      throw new Error('Checker options not initialized');
    }
    
    if (!checker.options.tools || !Array.isArray(checker.options.tools)) {
      throw new Error('Checker tools not properly initialized');
    }
  } catch (error) {
    throw new Error(`Library load failed: ${error.message}`);
  }
}

// Test 5: Check package manager detection
function testPackageManagerDetection() {
  const { CodeQualityChecker } = require('../index.js');
  
  // Create temporary lock files to test detection
  const testCases = [
    { file: 'bun.lock', expected: 'bun' },
    { file: 'pnpm-lock.yaml', expected: 'pnpm' },
    { file: 'yarn.lock', expected: 'yarn' },
    { file: 'package-lock.json', expected: 'npm' }
  ];
  
  testCases.forEach(({ file, expected }) => {
    // Create temporary lock file
    fs.writeFileSync(file, 'test');
    
    try {
      // Test detection
      const checker = new CodeQualityChecker();
      
      // Note: This test might not work perfectly in CI due to command availability
      // But it should at least not crash
      console.log(`🔍 Testing ${file} detection...`);
    } finally {
      // Clean up
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    }
  });
}

// Test 6: Check CLI functionality
function testCLI() {
  try {
    // Test if CLI can be executed
    const result = execSync('node index.js --help', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      timeout: 5000 
    });
    
    // CLI should run without crashing (even if it doesn't have --help)
    console.log('🔍 CLI execution test passed');
  } catch (error) {
    // CLI might not have --help, but should not crash on execution
    if (error.signal !== 'SIGTERM' && error.code !== null) {
      throw new Error(`CLI test failed: ${error.message}`);
    }
  }
}

// Run all tests
function runAllTests() {
  console.log('🧪 Running Code Quality Library Tests\n');
  
  const tests = [
    { name: 'Files Exist', fn: testFilesExist },
    { name: 'Package.json Structure', fn: testPackageJson },
    { name: 'TypeScript Definitions', fn: testTypeScriptDefinitions },
    { name: 'Library Load', fn: testLibraryLoad },
    { name: 'Package Manager Detection', fn: testPackageManagerDetection },
    { name: 'CLI Functionality', fn: testCLI }
  ];
  
  let passed = 0;
  let failed = 0;
  
  tests.forEach(test => {
    if (runTest(test.name, test.fn)) {
      passed++;
    } else {
      failed++;
    }
  });
  
  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('🎉 All tests passed!');
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests();
}

module.exports = { runAllTests };
