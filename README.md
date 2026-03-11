# Code Quality Library

[![npm version](https://img.shields.io/npm/v/code-quality-lib)](https://www.npmjs.com/package/code-quality-lib)
[![CI/CD](https://github.com/NoonCore/code-quality-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/NoonCore/code-quality-lib/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-included-blue)](https://www.typescriptlang.org/)

> A configurable code quality checker for Node.js — auto-detects your package manager and runs **TypeScript**, **ESLint**, **Prettier**, **Knip**, and **Snyk** with all dependencies bundled.

## Features

- **All tools bundled** — no need to install TypeScript, ESLint, Prettier, Knip, or Snyk separately
- **Auto-detects package manager** — npm, bun, pnpm, yarn
- **CLI + Library** — use from terminal or programmatically
- **Detailed reports** — generates `.quality-report.md` with AI-friendly error info
- **`--logs` flag** — verbose terminal output for debugging
- **`--fix` flag** — auto-fix ESLint and Prettier issues automatically
- **Environment-based configs** — different tools for dev vs CI/CD
- **Snyk token validation** — validates tokens before running security scans
- **TypeScript definitions** — full type safety included

## Installation

```bash
npm install -D code-quality-lib     # npm
bun add -D code-quality-lib         # bun
pnpm add -D code-quality-lib        # pnpm
yarn add -D code-quality-lib        # yarn
```

## Quick Start

```bash
# Install and run (first time will auto-start wizard)
npm install -D code-quality-lib && npx code-quality

# Or with bun
bun add -D code-quality-lib && bunx code-quality

# Or with yarn
yarn add -D code-quality-lib && yarn code-quality
```

## CLI Usage

```bash
code-quality              # run all quality checks
code-quality --wizard     # run interactive setup wizard
code-quality --config     # generate .code-quality.json config file
code-quality --logs       # show detailed error output
code-quality --fix        # auto-fix ESLint and Prettier issues
code-quality --env dev    # run development checks (ESLint, TS, Prettier)
code-quality --env ci     # run CI/CD checks (all tools)
code-quality --env prod    # run production checks (all tools)
code-quality --help       # show help
code-quality --version    # show version
```

### Interactive Wizard

Use the wizard to configure options before running:

```bash
code-quality --wizard
```

The wizard will guide you through:

```
🧙‍♂️ Code Quality Setup Wizard
──────────────────────────────────────────────────
Let's configure your quality checks!

📦 Detected package manager: npm
Use npm? (Y/n):

🔧 Select tools to run (default = all checked):
[✓] TypeScript? (Y/n):
[✓] ESLint? (Y/n):
[✓] Prettier? (Y/n):
[✓] Knip? (Y/n):
[✓] Snyk? (Y/n):

🌍 Set up environment-specific tool sets?
This allows different tools for development vs CI/CD
Configure environments? (y/N):

📋 Configuration Summary:
──────────────────────────────────────────────────
📦 Package Manager: npm
⚙️  Config: Project configs (detected)
🔧 Tools: TypeScript, ESLint, Prettier, Knip, Snyk
🌍 Load .env: Yes (always)
──────────────────────────────────────────────────
Run checks with these settings? (Y/n):
```

**Smart Features:**

- **Remember settings** — First run creates `.code-quality.json`, future runs skip questions
- **Yes/No questions** — Simple Y/n prompts with sensible defaults
- **Checkbox-style tools** — Each tool can be individually enabled/disabled
- **Always uses project configs** — Automatically detects and uses your existing ESLint/Prettier configs
- **Always loads .env** — Environment variables are always available for your tools

After confirmation, it runs the quality checks with your selected settings.

### Auto-Wizard on First Run

If you run `code-quality` without any configuration file, it automatically starts the wizard:

```bash
code-quality    # First run: no config found → starts wizard
code-quality    # Subsequent runs: uses saved settings
```

This ensures proper setup on first use while being fast on subsequent runs.

### Terminal Output

The CLI provides step-by-step progress like setup wizards:

```
🚀 Code Quality Setup
──────────────────────────────────────────────────
📦 Package Manager: npm
⚙️  Config: Project configs
🔧 Tools: 5 quality checks

 1. TypeScript... ✅ Done
 2. ESLint... ✅ Done
 3. Prettier... ✅ Done
 4. Knip... ✅ Done
 5. Snyk... ✅ Done

──────────────────────────────────────────────────
📊 Quality Check Summary

✅ TypeScript  Passed
✅ ESLint      Passed
✅ Prettier    Passed
✅ Knip        Passed
✅ Snyk        Passed

──────────────────────────────────────────────────
🎉 Success! All quality checks passed.

✅ Your code is ready for production!
```

### Auto-Fix with --fix

Automatically fix ESLint and Prettier issues:

```bash
code-quality --fix                    # Fix all issues
code-quality --env prod --fix          # Fix in production mode
code-quality --ESLint --fix           # Fix only ESLint
code-quality --Prettier --fix         # Fix only Prettier
```

The `--fix` flag will:

1. Run quality checks normally
2. If ESLint or Prettier fail, automatically run:
   - `eslint --fix` for ESLint issues
   - `prettier --write` for Prettier issues
3. Re-run checks to verify fixes
4. Show final results

### Environment-Based Configuration

Different tool sets for different environments:

```bash
code-quality --env development    # ESLint, TypeScript, Prettier
code-quality --env ci             # All tools (ESLint, TS, Prettier, Knip, Snyk)
code-quality --env production     # All tools (ESLint, TS, Prettier, Knip, Snyk)
```

Or configure environments in `.code-quality/config.json`:

```json
{
  "environments": {
    "development": {
      "tools": ["ESLint", "TypeScript", "Prettier"]
    },
    "ci": {
      "tools": ["ESLint", "TypeScript", "Prettier", "Knip", "Snyk"]
    },
    "production": {
      "tools": ["ESLint", "TypeScript", "Prettier", "Knip", "Snyk"]
    }
  },
  "packageManager": "npm"
}
```

### Configuration Directory

Generate a configuration directory with reference configs:

```bash
code-quality --config
```

This creates `.code-quality/` directory with:

- **config.json** — Main configuration file
- **tsconfig.json** — TypeScript reference config
- **eslint.config.mjs** — ESLint reference config
- **.prettierrc** — Prettier reference config
- **knip.json** — Knip reference config
- **README.md** — Usage documentation

The CLI automatically loads `.code-quality/config.json` if it exists:

```bash
code-quality    # uses your custom config
```

Or use it programmatically:

```javascript
const config = require('./.code-quality/config.json')
const checker = new CodeQualityChecker(config)
await checker.run()
```

### Configuration

The library automatically detects and uses your project's existing configuration files (`.eslintrc`, `.prettierrc`, `tsconfig.json`, etc.) if they exist. If no project configs are found, it uses bundled configurations.

**Environment variables** from `.env` files are always loaded automatically.

## Library Usage

```javascript
const { CodeQualityChecker, runQualityCheck } = require('code-quality-lib')

// Quick — run all checks with defaults (auto-detects project configs)
const result = await runQualityCheck()
console.log(result.success ? 'All passed' : 'Some failed')

// Advanced — custom configuration
const customChecker = new CodeQualityChecker({
  environments: {
    development: { tools: ['ESLint', 'TypeScript'] },
    ci: { tools: ['ESLint', 'TypeScript', 'Prettier', 'Knip', 'Snyk'] },
  },
  packageManager: 'npm',
  commands: {
    TypeScript: 'tsc --noEmit',
    ESLint: 'eslint src/ --ext .ts,.tsx',
  },
})

const result = await customChecker.run({ showLogs: true })
console.log(result.results) // per-tool results array
```

## Configuration Options

| Option             | Type                                 | Default       | Description                                                                                 |
| ------------------ | ------------------------------------ | ------------- | ------------------------------------------------------------------------------------------- |
| `tools`            | `string[]`                           | All 5 tools   | Which tools to run (deprecated - use environments instead)                                    |
| `packageManager`   | `'npm' \| 'bun' \| 'pnpm' \| 'yarn'` | auto-detected | Force a specific package manager                                                            |
| `commands`         | `Record<string, string>`             | bundled paths | Custom commands per tool                                                                    |
| `descriptions`     | `Record<string, string>`             | built-in      | Custom descriptions per tool                                                                |
| `environment`      | `string`                             | auto-detected | Override environment (development, ci, production)                                          |
| `environments`     | `Record<string, EnvironmentConfig>`  | -             | Environment-specific tool configurations                                                    |

**EnvironmentConfig:**

```typescript
interface EnvironmentConfig {
  tools: string[]
}
```

## Tool Resolution

The library intelligently resolves tools in this order:

1. **Project's `node_modules/.bin`** — Uses your project's installed versions first
2. **Library's bundled tools** — Falls back to bundled versions if not found in project
3. **Custom commands** — If you specify custom commands in config, uses them as-is

This means:

- ✅ Uses your project's tool versions and configurations by default
- ✅ Works out-of-the-box with bundled tools as fallback
- ✅ Custom commands use tools from your project's PATH

### Bundled Tools

All tools are included as dependencies for fallback:

| Tool           | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| **TypeScript** | Type checking (`tsc --noEmit`)                                   |
| **ESLint**     | Linting with plugins (react, sonarjs, unicorn, import, prettier) |
| **Prettier**   | Code formatting validation                                       |
| **Knip**       | Dead code and unused export detection                            |
| **Snyk**       | Security vulnerability scanning                                  |

## Package Manager Detection

Automatically detected by lock file presence:

1. `bun.lock` / `bun.lockb` → bun
2. `pnpm-lock.yaml` → pnpm
3. `yarn.lock` → yarn
4. `package-lock.json` → npm
5. Fallback: checks installed binaries, defaults to npm

## Error Reporting

Every run generates `.quality-report.md` with:

- Status of each check (pass/fail)
- Full error output for failed checks
- AI-friendly structured information for automated fixes

Add `.quality-report.md` to your `.gitignore`.

## Snyk Token Validation

The library validates Snyk tokens before running security scans:

```bash
# Set your Snyk token
export SNYK_TOKEN=your_token_here

# Or add to .env file
echo "SNYK_TOKEN=your_token_here" >> .env

# Run with validation
code-quality --env production
```

**Token Validation Features:**

- **Pre-scan validation** - Checks token before running full scan
- **Clear cache** - Forces token validation by clearing Snyk cache
- **Detailed errors** - Shows helpful fix instructions for invalid tokens
- **Fallback handling** - Graceful degradation for token issues

**Error Messages:**

```
❌ Snyk token validation failed. Token may be expired or invalid.

To fix:
1. Get a new token at: https://snyk.io/login
2. Set SNYK_TOKEN in your .env file
3. Or run: npx snyk auth
```

## AI Skills

This library includes `.ai/skills/` — markdown files that teach AI coding assistants (Cursor, Copilot, Windsurf, etc.) to follow the project's coding standards. See [`.ai/skills/README.md`](.ai/skills/README.md).

## Requirements

- **Node.js** >= 18.0.0

## Testing & CI/CD

Tested on every push across 4 runtimes:

- **Node.js 25.x** (npm)
- **Bun 1.3.x**
- **pnpm 10.x**
- **Yarn 4.13.0**

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## License

MIT — see [LICENSE](LICENSE).
