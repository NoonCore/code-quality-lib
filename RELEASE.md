# Release Process

This document describes the automated release process for `code-quality-lib`.

## 🚀 Automated Release Workflow

The project uses GitHub Actions for automated releases when tags are pushed.

### Triggering a Release

1. **Update Version**: Update the version in `package.json`
2. **Commit Changes**: 
   ```bash
   git add package.json
   git commit -m "chore: bump version to X.Y.Z"
   ```
3. **Create Tag**: 
   ```bash
   git tag vX.Y.Z
   ```
4. **Push Tag**: 
   ```bash
   git push origin vX.Y.Z
   ```

The release workflow will automatically trigger and:
- ✅ Run comprehensive tests across multiple OS and package managers
- ✅ Validate version consistency
- ✅ Generate changelog from git commits
- ✅ Create GitHub release with notes
- ✅ Publish to NPM
- ✅ Test installation across package managers

## 🧪 Testing Release Locally

Before creating a release, you can test the process locally:

```bash
npm run test-release
```

This script validates:
- Package structure and required files
- Version format consistency
- NPM package validation
- Changelog generation

## 📋 Workflow Jobs

### 1. Test Matrix
- **OS**: Ubuntu, Windows, macOS
- **Package Managers**: npm, bun, pnpm, yarn
- **Timeout**: 15 minutes

### 2. Version Validation
- Extracts version from `package.json`
- Validates tag matches package version
- Checks if version already exists on NPM

### 3. Create GitHub Release
- Generates changelog from git commits
- Creates release with installation instructions
- Includes auto-generated release notes

### 4. NPM Publishing
- Validates package with dry run
- Publishes to NPM with proper access
- Verifies successful publication

### 5. Installation Testing
- Tests fresh installation with all package managers
- Verifies CLI functionality
- Ensures package is immediately usable

## 🔧 Required Secrets

Ensure these secrets are configured in your GitHub repository:

- `NPM_TOKEN`: NPM publishing token with publishing permissions
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

## 📦 Environment Protection

The publishing job uses a `production` environment for:
- Additional safety checks
- Manual approval if configured
- Environment-specific secrets

## 🚨 Rollback Process

If a release needs to be rolled back:

1. **Unpublish from NPM** (if critical):
   ```bash
   npm unpublish code-quality-lib@X.Y.Z
   ```

2. **Delete GitHub Release**:
   - Go to the release page on GitHub
   - Click "Delete release"

3. **Delete Tag**:
   ```bash
   git tag -d vX.Y.Z
   git push origin --delete vX.Y.Z
   ```

4. **Create Hotfix**:
   - Fix the issue
   - Bump version appropriately
   - Follow normal release process

## 📊 Release Monitoring

After a release:

- Check GitHub Actions workflow status
- Verify NPM package publication
- Monitor download statistics
- Watch for any issue reports

## 🔄 Version Bumping

Use semantic versioning:
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

Example:
```bash
# Patch release
npm version patch

# Minor release  
npm version minor

# Major release
npm version major
```
