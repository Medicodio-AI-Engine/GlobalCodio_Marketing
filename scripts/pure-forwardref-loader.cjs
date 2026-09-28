/* Webpack loader for @animateicons/react, which ships every icon in one file:
   - its top-level "use client" directive makes Next treat the file as a client
     reference and keep all ~290 exports (every importer here is already a client
     component, so the directive is redundant);
   - each icon is a `var X=forwardRef(...)` without a /*#__PURE__*\/ annotation,
     followed by a top-level `X.displayName="..."` side effect (dev-only nicety).
   Without both fixes the whole ~480 KB icon set ships; with them, tree-shaking
   keeps only the icons we import. */
module.exports = function pureForwardRefLoader(source) {
  return source
    .replace(/^\s*["']use client["'];?/, '')
    .replace(/([=,(]\s*)forwardRef\(/g, '$1/*#__PURE__*/forwardRef(')
    .replace(/;[A-Za-z_$][\w$]*\.displayName="[\w]+"/g, '');
};
