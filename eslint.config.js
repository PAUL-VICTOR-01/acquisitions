import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import yml from 'eslint-plugin-yml';

export default [
  js.configs.recommended,
  ...yml.configs['flat/standard'],
  eslintConfigPrettier,
];
