// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import sonarjs from 'eslint-plugin-sonarjs'
import unicorn from 'eslint-plugin-unicorn'

// Import optional plugins - these may or may not be installed
let storybookPlugin
let nextPlugin
let jsxA11yPlugin
let prettierPlugin

try {
  const storybookModule = await import('@storybook/eslint-plugin')
  storybookPlugin = storybookModule.default || storybookModule
} catch {
  // Storybook plugin not installed, skip Storybook rules
}

try {
  const nextModule = await import('@next/eslint-plugin-next')
  nextPlugin = nextModule.default || nextModule
} catch {
  // Next.js plugin not installed, skip Next.js rules
}

try {
  const jsxA11yModule = await import('eslint-plugin-jsx-a11y')
  jsxA11yPlugin = jsxA11yModule.default || jsxA11yModule
} catch {
  // jsx-a11y plugin not installed, skip accessibility rules
}

try {
  const prettierModule = await import('eslint-plugin-prettier')
  prettierPlugin = prettierModule.default || prettierModule
} catch {
  // eslint-plugin-prettier not installed, skip prettier rules
}

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      '.pnp',
      '.pnp.js',
      '.next/',
      'out/',
      'dist/',
      'build/',
      '.env*',
      '*.log',
      'pids',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      'coverage/',
      '.nyc_output',
      '.cache/',
      '.parcel-cache/',
      '*.tsbuildinfo',
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',
      '.vscode/',
      '.idea/',
      '.storybook/',
      '**/.storybook/**',
      'tmp/',
      'temp/',
      '*.tmp',
      '*.temp',
      'public/',
      '.code-quality/',
      '**/.code-quality/**', // More specific pattern
      'eslint.config.mjs',
      'next.config.ts',
      'next-env.d.ts', // Next.js environment types
      '.venv/',
    ],
  },
  js.configs.recommended,
  ...(storybookPlugin ? storybookPlugin.configs['flat/recommended'] : []),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        FormData: 'readonly',
        HeadersInit: 'readonly',
        RequestInit: 'readonly',
        TextEncoder: 'readonly',
        btoa: 'readonly',
        crypto: 'readonly',
        sessionStorage: 'readonly',
        // React globals
        React: 'readonly',
        // DOM types
        HTMLDivElement: 'readonly',
        // Node.js globals
        Buffer: 'readonly',
        // Type globals
        Item: 'readonly',
        Bundle: 'readonly',
        ConstStallCategory: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      sonarjs,
      unicorn,
      ...(nextPlugin ? { '@next/next': nextPlugin } : {}),
      ...(jsxA11yPlugin ? { 'jsx-a11y': jsxA11yPlugin } : {}),
      ...(prettierPlugin ? { prettier: prettierPlugin } : {}),
    },
    rules: {
      // React
      'react/jsx-no-literals': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'off', // Changed from warn to off
      'react/jsx-sort-props': 'off', // Changed from warn to off - too strict for dev
      'react/jsx-fragments': 'off', // Changed from warn to off
      'react/jsx-no-useless-fragment': 'off', // Changed from warn to off
      'react/jsx-pascal-case': 'warn',
      'react/no-array-index-key': 'off', // Changed from warn to off - sometimes necessary
      'react/react-in-jsx-scope': 'off',
      // JSX quotes consistency with Prettier jsxSingleQuote: true
      'jsx-quotes': ['error', 'prefer-single'],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off', // Changed from warn to off - dev friendly
      '@typescript-eslint/no-require-imports': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off', // Changed from warn to off
      '@typescript-eslint/no-non-null-assertion': 'off', // Changed from warn to off - dev friendly
      '@typescript-eslint/prefer-as-const': 'off', // Changed from warn to off

      // Next.js (if available)
      ...(nextPlugin
        ? {
            '@next/next/no-html-link-for-pages': 'off',
            '@next/next/no-img-element': 'warn',
            '@next/next/no-sync-scripts': 'warn',
          }
        : {}),

      // Accessibility (if jsx-a11y plugin available)
      ...(jsxA11yPlugin
        ? {
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/interactive-supports-focus': 'off',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
          }
        : {}),

      // Code quality
      'no-console': 'off', // Changed from error to off - dev needs console.log
      ...(prettierPlugin
        ? {
            'prettier/prettier': [
              'warn', // Changed from error to warn
              {
                endOfLine: 'auto',
              },
            ],
          }
        : {}),
      'padding-line-between-statements': 'off', // Changed from warn to off - too strict

      'react-hooks/exhaustive-deps': 'off', // Changed from warn to off - dev friendly
      'react-hooks/rules-of-hooks': 'error', // Keep as error - important rule
      'no-param-reassign': 'off', // Changed from warn to off
      'no-return-await': 'off', // Changed from warn to off
      'prefer-const': 'warn', // Changed from error to warn
      'no-var': 'error',
      eqeqeq: 'warn', // Changed from error to warn
      'no-unused-expressions': 'warn', // Changed from error to warn
      // Semicolons consistency with Prettier semi: false
      semi: ['error', 'never'],

      // SonarJS
      'sonarjs/cognitive-complexity': 'off', // Changed from error to off - too strict for dev
      'sonarjs/no-duplicate-string': 'off', // Changed from warn to off

      // Unicorn
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-node-protocol': 'warn', // Changed from error to warn
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "MemberExpression[object.object.name='process'][object.property.name='env'][property.type='Identifier'][property.name=/^NEXT_PUBLIC_/]",
          message:
            'Do not access process.env.NEXT_PUBLIC_* directly. Use src/constants/environment.ts instead.',
        },
        {
          selector:
            "MemberExpression[object.object.name='process'][object.property.name='env'][property.type='Literal'][property.value=/^NEXT_PUBLIC_/]",
          message:
            'Do not access process.env.NEXT_PUBLIC_* directly. Use src/constants/environment.ts instead.',
        },
      ],
    },
  },
  {
    files: ['src/constants/environment.ts'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
]

export default eslintConfig
