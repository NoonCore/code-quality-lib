# Code Quality Configuration Directory

This directory contains reference configuration files for code quality tools.

## Structure

```
.code-quality/
├── config.json          # Main configuration (replaces .code-quality.json)
├── tsconfig.json        # TypeScript reference config
├── eslint.config.mjs    # ESLint reference config
├── .prettierrc          # Prettier reference config
└── knip.json            # Knip reference config
```

## Usage

### Option 1: Use Project Configs (Recommended)
Set `useProjectConfig: true` in `config.json` to use your project's existing config files.

### Option 2: Use Reference Configs
Set `useProjectConfig: false` to use the reference configs in this directory.

## Notes

- Reference configs are starting points - customize them for your project
- The library will look for configs in this order:
  1. Project root (if `useProjectConfig: true`)
  2. `.code-quality/` directory (if `useProjectConfig: false`)
  3. Library's bundled configs (fallback)
