#!/usr/bin/env node

/**
 * Test script for release workflow validation
 * This script simulates the key steps of the release workflow locally
 */

const fs = require('fs');
const { execSync } = require('child_process');

// Colors for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n🔧 ${description}`, 'blue');
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`✅ ${description} completed`, 'green');
    return result.trim();
  } catch (error) {
    log(`❌ ${description} failed: ${error.message}`, 'red');
    throw error;
  }
}

function validatePackage() {
  log('\n📦 Validating package...', 'yellow');
  
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    throw new Error('package.json not found');
  }
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  log(`✅ Package name: ${packageJson.name}`, 'green');
  log(`✅ Package version: ${packageJson.version}`, 'green');
  
  // Check required files
  const requiredFiles = ['index.js', 'index.d.ts', 'README.md'];
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      throw new Error(`Required file ${file} not found`);
    }
    log(`✅ Found ${file}`, 'green');
  }
  
  return packageJson;
}

function validateVersion(packageJson) {
  log('\n🏷️  Validating version...', 'yellow');
  
  const version = packageJson.version;
  const versionRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9]+)?$/;
  
  if (!versionRegex.test(version)) {
    throw new Error(`Invalid version format: ${version}`);
  }
  
  log(`✅ Version format is valid: ${version}`, 'green');
  return version;
}

function simulateNpmCheck(packageJson) {
  log('\n🔍 Simulating NPM version check...', 'yellow');
  
  try {
    // Try to get published versions (this will fail if no internet or package not published)
    const publishedVersions = runCommand(
      `npm view ${packageJson.name} versions --json 2>/dev/null || echo "[]"`,
      'Check published versions'
    );
    
    const versions = JSON.parse(publishedVersions);
    
    if (versions.includes(packageJson.version)) {
      log(`⚠️  Version ${packageJson.version} is already published`, 'yellow');
      return false;
    } else {
      log(`✅ Version ${packageJson.version} is not yet published`, 'green');
      return true;
    }
  } catch (_error) {
    log(`⚠️  Could not check published versions (package might not exist yet)`, 'yellow');
    return true; // Assume it's a new version
  }
}

function simulateDryRun(_packageJson) {
  log('\n🧪 Simulating NPM publish dry run...', 'yellow');
  
  try {
    runCommand('npm pack --dry-run', 'NPM pack dry run');
    log('✅ Package validation passed', 'green');
  } catch (_error) {
    throw new Error('Package validation failed');
  }
}

function generateChangelog(_version) {
  log('\n📝 Generating changelog...', 'yellow');
  
  try {
    // Get previous tag
    const prevTag = runCommand(
      'git describe --tags --abbrev=0 HEAD^ 2>/dev/null || echo ""',
      'Get previous tag'
    );
    
    let changelog = '';
    if (prevTag) {
      changelog = runCommand(
        `git log --pretty=format:"- %s (%h)" ${prevTag}..HEAD`,
        'Generate changelog from previous tag'
      );
    } else {
      changelog = runCommand(
        'git log --pretty=format:"- %s (%h)"',
        'Generate full changelog'
      );
    }
    
    log(`✅ Changelog generated (${changelog.split('\n').length} commits)`, 'green');
    return changelog;
  } catch (_error) {
    log(`⚠️  Could not generate changelog: ${_error.message}`, 'yellow');
    return '- Initial release';
  }
}

function main() {
  log('🚀 Testing Release Workflow Locally', 'blue');
  log('=====================================', 'blue');
  
  try {
    // Step 1: Validate package
    const packageJson = validatePackage();
    
    // Step 2: Validate version
    const version = validateVersion(packageJson);
    
    // Step 3: Simulate NPM check
    const isNewVersion = simulateNpmCheck(packageJson);
    
    if (!isNewVersion) {
      log('\n⚠️  Version already exists. Release would be skipped.', 'yellow');
      return;
    }
    
    // Step 4: Simulate dry run
    simulateDryRun(packageJson);
    
    // Step 5: Generate changelog
    const changelog = generateChangelog(version);
    
    // Step 6: Create release notes preview
    log('\n📋 Release Notes Preview:', 'blue');
    log('==========================', 'blue');
    log(`## 🚀 Release ${version}`, 'green');
    log('\n### 📋 Changes', 'blue');
    log(changelog, 'reset');
    log('\n### 📦 Installation', 'blue');
    log('```bash', 'reset');
    log(`npm install ${packageJson.name}@${version}`, 'green');
    log('```', 'reset');
    log('\n### 🔧 Usage', 'blue');
    log('```bash', 'reset');
    log(`npx code-quality --help`, 'green');
    log('```', 'reset');
    
    log('\n✅ All tests passed! Release workflow is ready.', 'green');
    log('\nTo create a release:', 'yellow');
    log(`1. Update version in package.json to ${version}`, 'yellow');
    log('2. Commit changes: git add package.json && git commit -m "chore: bump version"', 'yellow');
    log(`3. Create tag: git tag v${version}`, 'yellow');
    log('4. Push tag: git push origin v${version}', 'yellow');
    log('5. The release workflow will automatically trigger', 'yellow');
    
  } catch (error) {
    log(`\n❌ Test failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
