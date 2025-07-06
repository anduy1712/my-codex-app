const comments = `
// Auto-generated file created by svgr-cli source svg-icon-template.js
// Run npm run generate-icons to update
// Do not edit
`;
const template = (variables, { tpl }) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${variables.exports};
`;
};

module.exports = template;
