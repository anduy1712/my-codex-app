/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrderParserPlugins: ["decorators", "typescript", "jsx"],
  importOrder: [
    // External dependencies
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    // Internal dependencies
    // "^vul-super-app/app/(.*)$",
    // "^vul-super-app/domain/(.*)$",
    // "^vul-super-app/infrastructure/(.*)$",
    // "^vul-super-app/components/(.*)$",
    // "^vul-super-app/components/atoms/(.*)$",
    // "^vul-super-app/components/molecules/(.*)$",
    // "^vul-super-app/components/organisms/(.*)$",
    // "^vul-super-app/components/templates/(.*)$",
    // "^vul-super-app/utils/(.*)$",
    // Assets & Stylesheets
    "",
    "^@/public/(.*)$",
    "^[./]",
    "^.+\\.css$",
  ],
};
