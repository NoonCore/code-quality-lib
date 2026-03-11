# Code Quality Configuration

This directory contains reference configuration files for code quality tools.

## Files

- **eslint.config.mjs** - ESLint flat config with React, TypeScript, and accessibility rules
- **tsconfig.json** - TypeScript configuration with strict settings
- **.prettierrc** - Prettier formatting rules
- **.prettierrcignore** - Files to ignore when formatting
- **knip.json** - Dead code detection configuration

## Usage

These files are automatically copied to your project's `.code-quality/` directory when you run:

```bash
code-quality --init
# or
code-quality --wizard
```

## Customization

You can modify these files after copying them to suit your project's needs.

## Notes

- ESLint config uses conditional loading for optional plugins (Next.js, jsx-a11y, prettier)
- TypeScript config is optimized for React/Next.js projects
- Prettier config matches ESLint semicolon settings
- Knip config is set to ignore test files and dependencies
