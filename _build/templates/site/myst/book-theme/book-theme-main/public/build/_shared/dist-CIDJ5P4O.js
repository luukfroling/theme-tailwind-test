import{a as t,b as m}from"/myst_assets_folder/_shared/chunk-4GOGFBZ2.js";import"/myst_assets_folder/_shared/chunk-3CVK3PYF.js";import"/myst_assets_folder/_shared/chunk-S4SWV34C.js";import"/myst_assets_folder/_shared/chunk-GUCIBHGO.js";import"/myst_assets_folder/_shared/chunk-2NH4LW52.js";var l={name:"proof",alias:["prf:proof","prf:theorem","prf:axiom","prf:lemma","prf:definition","prf:criterion","prf:remark","prf:conjecture","prf:corollary","prf:algorithm","prf:example","prf:property","prf:observation","prf:proposition","prf:assumption"],arg:{type:"myst"},options:{...t("proof"),nonumber:{type:Boolean,doc:"Legacy flag to disable numbering of proofs; equivalent to `enumerated: false`"}},body:{type:"myst",required:!0},run(o){var r,e,n;let i=[];o.arg&&i.push({type:"admonitionTitle",children:o.arg}),o.body&&i.push(...o.body);let p;((r=o.options)===null||r===void 0?void 0:r.nonumber)!==void 0?p=!o.options.nonumber:p=(n=(e=o.options)===null||e===void 0?void 0:e.enumerated)!==null&&n!==void 0?n:!0;let f={type:"proof",kind:o.name!=="proof"?o.name.replace("prf:",""):void 0,enumerated:p,children:i};return m(o,f),[f]}};export{l as proofDirective};
