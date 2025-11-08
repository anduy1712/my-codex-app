// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

function pascalCase(str) {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());
}

/**
 * @param {{ path: string; filename: string; exportName?: string; }[]} files
 */
function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map((file) => {
    const fileName = path.basename(file.path, path.extname(file.path));
    const exportName = file.exportName || pascalCase(fileName); // fallback if undefined

    compoundExportEntries.push(exportName);
    return `import { default as ${exportName} } from "./${fileName}";`;
  });

  return `${importEntries.join("\n")}

export const Icons = {
  ${compoundExportEntries.join(",\n  ")}
};
`;
}

module.exports = indexTemplate;
