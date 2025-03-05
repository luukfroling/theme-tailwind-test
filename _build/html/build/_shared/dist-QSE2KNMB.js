import{B as b,b as y,c as B,j as E,m as T,n as S,s as N,t as $}from"/build/_shared/chunk-S4SWV34C.js";import{a as F}from"/build/_shared/chunk-GUCIBHGO.js";import"/build/_shared/chunk-2NH4LW52.js";var P=.7,q=800;function Z(r,e=" "){return r.replace(/\u00A0/g,e).replace(/[\u200B-\u200D\uFEFF]/g,"")}var U="\u{1F4A5}\u{1F3AF}BACKSLASHSPACE\u{1F3AF}\u{1F4A5}",X="\u{1F4A5}\u{1F3AF}BACKSLASH\u{1F3AF}\u{1F4A5}",K="\u{1F4A5}\u{1F3AF}TILDE\u{1F3AF}\u{1F4A5}",O={"&":"\\&","%":"\\%",$:"\\$","#":"\\#",_:"\\_","{":"\\{","}":"\\}","^":"\\^"},de={...O,"\u2019":"'","\u2018":"`","\u201D":"''","\u201C":"``","\xBB":">>","\xAB":"<<","\u2026":"\\dots","\u2013":"--","\u2014":"---","\xA9":"\\textcopyright ","\xAE":"\\textregistered ","\u2122":"\\texttrademark ","<":"\\textless ",">":"\\textgreater ","\xA0":"~","\u202F":"~","\u2009":"\\,"},J={"\u2194":"\\leftrightarrow","\u21D4":"\\Leftrightarrow","\u2192":"\\rightarrow","\u21D2":"\\Rightarrow","\u2190":"\\leftarrow","\u21D0":"\\Leftarrow"},Q={"\u2212":"-","-":"-","\uFE63":"-","\uFF0D":"-","\uFF0B":"+"},fe={"\u2080":"\\textsubscript{0}","\u2081":"\\textsubscript{1}","\u2082":"\\textsubscript{2}","\u2083":"\\textsubscript{3}","\u2084":"\\textsubscript{4}","\u2085":"\\textsubscript{5}","\u2086":"\\textsubscript{6}","\u2087":"\\textsubscript{7}","\u2088":"\\textsubscript{8}","\u2089":"\\textsubscript{9}","\u208A":"\\textsubscript{+}","\u208B":"\\textsubscript{-}","\u208C":"\\textsubscript{=}","\u208D":"\\textsubscript{(}","\u208E":"\\textsubscript{)}","\u2099":"\\textsubscript{n}","\u2070":"\\textsuperscript{0}","\xB9":"\\textsuperscript{1}","\xB2":"\\textsuperscript{2}","\xB3":"\\textsuperscript{3}","\u2074":"\\textsuperscript{4}","\u2075":"\\textsuperscript{5}","\u2076":"\\textsuperscript{6}","\u2077":"\\textsuperscript{7}","\u2078":"\\textsuperscript{8}","\u2079":"\\textsuperscript{9}","\u22C5":"\\textsuperscript{.}","\u207A":"\\textsuperscript{.}","\u207B":"\\textsuperscript{-}","\u207C":"\\textsuperscript{=}","\u207D":"\\textsuperscript{(}","\u207E":"\\textsuperscript{)}",\u207F:"\\textsuperscript{n}","\u2071":"\\textsuperscript{i}"},V={...de,...J,...Q,...fe},A={...J,...Q,"\xBD":"\\frac{1}{2}","\u2153":"\\frac{1}{3}","\u2154":"\\frac{2}{3}","\xBC":"\\frac{1}{4}","\u2155":"\\frac{1}{5}","\u2156":"\\frac{2}{5}","\u2157":"\\frac{3}{5}","\u2158":"\\frac{4}{5}","\u2159":"\\frac{1}{6}","\u215A":"\\frac{5}{6}","\u2150":"\\frac{1}{7}","\u215B":"\\frac{1}{8}","\u215C":"\\frac{3}{8}","\u215D":"\\frac{5}{8}","\u215E":"\\frac{7}{8}","\u2151":"\\frac{1}{9}","\u2152":"\\frac{1}{10}","\xB1":"\\pm","\xD7":"\\times","\u22C6":"\\star",\u0391:"A",\u03B1:"\\alpha",\u0392:"B",\u03B2:"\\beta",\u00DF:"\\beta",\u0393:"\\Gamma",\u03B3:"\\gamma",\u0394:"\\Delta","\u2206":"\\Delta",\u03B4:"\\delta",\u0395:"E",\u03B5:"\\epsilon",\u0396:"Z",\u03B6:"\\zeta",\u0397:"H",\u03B7:"\\eta",\u0398:"\\Theta",\u03B8:"\\theta",\u03D1:"\\vartheta",\u0399:"I",\u03B9:"\\iota",\u039A:"K",\u03BA:"\\kappa",\u039B:"\\Lambda",\u03BB:"\\lambda",\u039C:"M",\u03BC:"\\mu",\u039D:"N",\u03BD:"\\nu",\u039E:"\\Xi",\u03BE:"\\xi",\u039F:"O",\u03BF:"o",\u03A0:"\\Pi",\u03C0:"\\pi",\u03A1:"P",\u03C1:"\\rho",\u03A3:"\\Sigma",\u03C3:"\\sigma",\u03A4:"T",\u03C4:"\\tau",\u03A5:"\\Upsilon",\u03C5:"\\upsilon",\u03A6:"\\Phi",\u03D5:"\\phi",\u03C6:"\\varphi",\u03A7:"X",\u03C7:"\\chi",\u03A8:"\\Psi",\u03C8:"\\psi",\u03A9:"\\Omega",\u03C9:"\\omega","\u2202":"\\partial","\u221E":"\\infty","\u221D":"\\propto","\u29DC":"\\iinfin","\u29DD":"\\tieinfty","\u267E":"\\acidfree","\u2248":"\\approx","\u2260":"\\neq","\u2265":"\\geq","\u2264":"\\leq","\u2022":"\\cdot"};function H(r){return Array.from(r??"").map(i=>O[i]?{kind:"text",text:O[i]}:{kind:"text",text:i}).reduce((i,t)=>{let l=i.slice(-1)[0];return l?.kind===t.kind?l.text+=t.text:i.push(t),i},[]).reduce((i,t)=>i+t.text,"")}function Y(r){let e=(r??"").replace(/\\ /g,U).replace(/\\/g,X).replace(/~/g,K),t=Array.from(e).map(l=>V[l]?{kind:"text",text:V[l]}:A[l]?{kind:"math",text:A[l]}:{kind:"text",text:l}).reduce((l,o)=>{let s=l.slice(-1)[0];return s?.kind===o.kind?s.text+=o.text:l.push(o),l},[]).reduce((l,o)=>o.kind==="math"?`${l}$${o.text}$`:l+o.text,"").replace(new RegExp(U,"g"),"{\\textbackslash}~").replace(new RegExp(X,"g"),"{\\textbackslash}").replace(new RegExp(K,"g"),"{\\textasciitilde}");return Z(t,"~")}function z(r){let n=Array.from(r??"").reduce((i,t)=>{if(A[t]){let l=i.slice(-1)===" "?"":" ";return`${i}${l}${A[t]}`}return i+t},"").trim();return Z(n)}function L(r){if(typeof r=="number"&&Number.isNaN(r))return L(.7);if(typeof r=="string")return r.endsWith("%")?L(Number(r.replace("%",""))):r.endsWith("px")?L(Number(r.replace("px",""))/800):(console.log(`Unknown width ${r} in getLatexImageWidth`),L(.7));let e=r??.7;return e<1&&(e*=100),`${e/100}\\linewidth`}function D(r){var e;let n=(e=r?.split(" ").map(i=>i.trim().toLowerCase()).filter(i=>!!i))!==null&&e!==void 0?e:[];return Array.from(new Set(n))}function f(r,e){var n;!((n=r.indexEntries)===null||n===void 0)&&n.length&&(e.data.hasIndex=!0,r.indexEntries.forEach(({entry:i,subEntry:t,emphasis:l})=>{let o=i;t?.value&&(t?.kind==="see"?o+=`|see{${t.value}}`:t?.kind==="seealso"?o+=`|seealso{${t.value}}`:o+=`!${t.value}`),l&&(o+="|textbf"),e.write(`\\index{${o}}`)}))}var pe=886;function ee(r){return r===1?"p{\\dimexpr \\linewidth-2\\tabcolsep}":`p{\\dimexpr ${r.toFixed(3)}\\linewidth-2\\tabcolsep}`}function R(r){var e,n,i;let t=[],l=0;for(let u=0;u<r.children.length;u+=1){let g=r.children[u].children.reduce((m,v)=>{var C,I;let ue=new Array((C=v.colspan)!==null&&C!==void 0?C:1).fill(v.width?v.width/((I=v.colspan)!==null&&I!==void 0?I:1):null);return[...m,...ue]},[]),k=g.filter(m=>m>0).length;if((u===0||k>=l)&&(l=k,t=g,l===g.length))break}let o;if(l===t.length)o=t;else{let u=t.reduce((m,v)=>v==null?m:m+v,0),h=pe-u,g=t.length-l,k=Math.floor(h/g);o=t.map(m=>m==null||m===0?k:m)}let s=o.reduce((u,h)=>u+h,0),c=o.map(u=>u/s),a=c.map(u=>ee(u)).join(""),d=o.length>0?o.length:(i=(n=(e=r?.children[0])===null||e===void 0?void 0:e.children)===null||n===void 0?void 0:n.length)!==null&&i!==void 0?i:0;return{widths:c,columnSpec:a,numColumns:d}}function M(r,e,n,i,t,l){var o;let s=1,c=(o=e.colspan)!==null&&o!==void 0?o:1;if(c>1){let a=0;for(let d=0;d<c;d+=1)a+=t[i+d];r.write(`\\multicolumn{${c}}{${ee(a)}}{`),s=c}return e.children.length===1&&e.children[0].type==="paragraph"?r.renderChildren(e.children[0],!0):r.renderChildren(e,!0),c>1&&r.write("}"),n<l-1&&r.write(" & "),s}function re(r,e){e.usePackages("booktabs");let{widths:n,columnSpec:i,numColumns:t}=R(r);if(!t)throw new Error("invalid table format, no columns");f(r,e),e.data.isInTable=!0,e.data.isInContainer||e.write("\\bigskip\\noindent"),e.ensureNewLine();let l=0;if(e.data.longFigure){e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine();let o=!1;r.children.forEach(({children:s})=>{var c,a;if(!o){if(!((c=s[0])===null||c===void 0)&&c.header){l+=1;let d=0;s.forEach((u,h)=>{d+=M(e,u,h,d,n,s.length)}),e.write(" \\\\"),e.ensureNewLine()}!((a=s[0])===null||a===void 0)&&a.header||(o=!0)}}),l>0&&(e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endfirsthead"),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write(`\\multicolumn{${t}}{c}{\\tablename\\ \\thetable\\ -- \\textit{Continued from previous page}}\\\\`),e.ensureNewLine(),r.children.forEach(({children:s},c)=>{if(c>=l)return;let a=0;s.forEach((d,u)=>{a+=M(e,d,u,a,n,s.length)}),e.write(" \\\\"),e.ensureNewLine()}),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endhead"),e.ensureNewLine())}else e.write(`\\begin{tabular}{${i}}`),e.ensureNewLine(),e.write("\\toprule"),e.ensureNewLine();r.children.forEach(({children:o},s)=>{var c;if(s<l)return;let a=0;o.forEach((d,u)=>{a+=M(e,d,u,a,n,o.length)}),e.write(" \\\\"),e.ensureNewLine(),!((c=o[0])===null||c===void 0)&&c.header&&(e.write("\\hline"),e.ensureNewLine())}),e.data.longFigure?e.write("\\hline"):(e.write("\\bottomrule"),e.ensureNewLine(),e.write("\\end{tabular}")),e.closeBlock(r),e.data.isInTable=!1,e.data.isInContainer||e.write("\\bigskip")}var p;(function(r){r.fig="fig",r.eq="eq",r.code="code",r.table="table"})(p||(p={}));function me(r){var e;let n=(e=r?.split(" ").map(i=>i.trim().toLowerCase()).filter(i=>!!i))!==null&&e!==void 0?e:[];return[...new Set(n)]}function he(r){switch(r.type){case"iframe":case"image":return p.fig;case"table":return p.table;case"code":return p.code;case"math":return p.eq;default:return null}}function j(r){var e;let n=he(r);return(e=r.children)===null||e===void 0||e.forEach(i=>{let t=j(i);n?t&&(n=p.fig):n=t}),n}function ge(r){let e=j(r),n=me(r.class),i=n.includes("full-width")||n.includes("w-full");switch(e){case p.fig:return i?"figure*":"figure";case p.table:return i?"table*":"table";case p.code:return"figure";case p.eq:return"figure";default:return"figure"}}function ve(r){switch(j(r)){case p.fig:case p.table:return"!htbp";case p.code:return"h";case p.eq:default:return}}var ie=(r,e)=>{var n;if(e.data.isInTable){e.renderChildren(r);return}let i=N("table",r),t=!!i,l;i&&r.multipage&&(l=R(i));let o,s;r.landscape&&(e.usePackages("pdflscape"),o="\\begin{landscape}",s="\\end{landscape}");let{enumerated:c,label:a,identifier:d,multipage:u}=r,h=(n=a??d)!==null&&n!==void 0?n:void 0,g=t&&u?"longtable":ge(r);g==="longtable"&&e.usePackages("longtable");let k=t&&l?l.columnSpec:void 0,m=t?void 0:ve(r);o&&e.write(o);let v=k?`{${k}}`:"",C=m?`[${m}]`:"";e.write(`\\begin{${g}}${v}${C}
`),(!u||!t)&&e.write("\\centering"),e.ensureNewLine(),e.data.longFigure=u;let I=e.data.isInContainer;e.data.isInContainer=!0,e.data.nextCaptionNumbered=c??!!h,e.data.nextCaptionId=h,e.renderChildren(r),e.trimEnd(),e.data.longFigure=void 0,e.data.isInContainer=I,e.write(`
\\end{${g}}`),s&&e.write(s),f(r,e),e.closeBlock(r)},ne=(r,e)=>{if(e.data.isInTable&&r.type!==p.table)return null;e.ensureNewLine(!0);let{nextCaptionNumbered:n,nextCaptionId:i}=e.data,t=n===!1?"caption*":"caption[]",l=n&&i?`\\label{${i}}`:"";e.renderInlineEnvironment(r,t,{after:l})};var we=["equation","multline","gather","align","alignat","flalign","eqnarray"],be=new RegExp(`^\\\\begin{(${we.join("|")})([*]?)}`);function xe(r){let e=r.trim().match(be);if(!e)return!1;let[,n,i]=e,t=`\\end{${n}${i}}`;return!!r.trim().endsWith(t)}function te(r,e){e.options.math&&Object.entries(e.options.math).forEach(([n,i])=>{r.includes(n)&&(e.data.mathPlugins[n]=i.macro)})}function G(r,e=r.data.mathPlugins){if(!r.options.math)return e;let n=Object.entries(e),i={};Object.entries(r.options.math).forEach(([l,o])=>{e[l]||n.forEach(([,s])=>{s.includes(l)&&(i[l]=o.macro)})});let t={...i,...e};return Object.keys(i).length===0?t:G(r,t)}var ke=(r,e)=>{let{label:n,enumerated:i}=r,t=r.tight===!0||r.tight==="before",l=r.tight===!0||r.tight==="after";t&&e.ensureNewLine(!0),e.usePackages("amsmath"),te(r.value,e),f(r,e),e.data.isInTable?(e.write("\\(\\displaystyle "),e.write(r.value),e.write(" \\)")):xe(r.value)?(e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0)):(e.write(`\\begin{equation${i===!1?"*":""}}
`),n&&e.write(`\\label{${n}}`),e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0),e.write(`\\end{equation${i===!1?"*":""}}`)),!e.data.isInTable&&(l?e.ensureNewLine(!0):e.closeBlock(r))},ye=(r,e)=>{e.usePackages("amsmath"),te(r.value,e),e.write("$"),e.text(r.value,!0),e.write("$")},Ee={math:ke,inlineMath:ye},le=Ee;var $e=[],_=function(r,e,n){let i=F(n||e),t=!e||e.cascade===void 0||e.cascade===null?!0:e.cascade;return l(r);function l(o,s,c){let a=o.children||$e,d=-1,u=0;if(i(o,s,c))return null;if(a.length>0){for(;++d<a.length;)l(a[d],d,o)&&(a[u++]=a[d]);if(t&&!u)return null;a.length=u}return o}};function oe(r){$("container",r).forEach(n=>{var i;let t=(i=n.children)===null||i===void 0?void 0:i.filter(l=>l.type==="caption"||l.type==="legend");t?.length&&(t[0].type="caption",t.slice(1).forEach(l=>{var o;t[0].children&&l.children&&((o=t[0].children)===null||o===void 0||o.push(...l.children)),l.type="__delete__"}))}),_(r,"__delete__")}function Le(r){switch(r){case"theorem":return"theorem";case"proof":return"proof";case"proposition":return"proposition";case"definition":return"definition";case"example":return"example";case"remark":return"remark";case"axiom":return"axiom";case"conjecture":return"conjecture";case"lemma":return"lemma";case"observation":return"observation";case"corollary":return"corollary";default:return""}}var se=(r,e)=>{var n;e.usePackages("amsthm");let i=r,t=Le((n=i.kind)!==null&&n!==void 0?n:"proof");if(!t){y(e.file,`Unhandled LaTeX proof environment "${i.kind}"`,{node:r,source:"myst-to-tex",ruleId:b.texRenders});return}let l=N("admonitionTitle > text",r);l&&(l.type="__delete__");let o=_(r,"__delete__");f(r,e),e.write("\\begin{"),e.write(t),e.write("}"),l&&(e.write("["),e.write(l.value),e.write("]")),o.identifier&&o.identifier.length>0&&(e.write("\\label{"),e.write(o.identifier),e.write("}")),e.renderChildren(o,!0),e.write("\\end{"),e.write(t),e.write("}"),e.data.hasProofs=!0},x=class{constructor(){this.preamble=this.renderThmDefinitions()}renderThmDefinitions(){let n=T("theorem",["\\newtheorem{theorem}{Theorem}[section]","\\newtheorem{corollary}{Corollary}[theorem]","\\newtheorem{lemma}[theorem]{Lemma}","\\newtheorem{proposition}{Proposition}[section]","\\newtheorem{definition}{Definition}[section]","\\newtheorem{example}{Example}[section]","\\newtheorem{remark}{Remark}[section]","\\newtheorem{axiom}{Axiom}[section]","\\newtheorem{conjecture}{Conjecture}[section]","\\newtheorem{observation}{Observation}[section]"],x.COMMENT_LENGTH),i="".padEnd(x.COMMENT_LENGTH,"%");return`${i}
${n}${i}
`}};x.COMMENT_LENGTH=50;var w=class{constructor(e,n){let i=Object.keys(e).length>0,t=Object.keys(n).length>0;!i&&!t?(this.printedDefinitions="",this.preamble=""):(this.printedDefinitions=this.renderGlossary(),this.preamble=[this.renderCommonImports(t),this.renderImports("glossary",this.createGlossaryDirectives(e)),this.renderImports("acronyms",this.createAcronymDirectives(n))].filter(l=>!!l).join(`
`))}renderGlossary(){let e=T("acronyms & glossary",["\\printglossaries"],w.COMMENT_LENGTH),n="".padEnd(w.COMMENT_LENGTH,"%");return`${n}
${e}${n}
`}renderCommonImports(e){return`${e?"\\usepackage[acronym]{glossaries}":"\\usepackage{glossaries}"}
\\makeglossaries
`}renderImports(e,n){if(!n)return"";let i=T(e,n,w.COMMENT_LENGTH);if(!i)return;let t="".padEnd(w.COMMENT_LENGTH,"%");return`${t}
${i}${t}
`}createGlossaryDirectives(e){return Object.keys(e).map(t=>({key:t,name:e[t][0],description:e[t][1]})).map(t=>`\\newglossaryentry{${t.key}}{name=${t.name},description={${t.description}}}`)}createAcronymDirectives(e){return Object.keys(e).map(i=>({key:i,acronym:e[i][0],expansion:e[i][1]})).map(i=>`\\newacronym{${i.key}}{${i.acronym}}{${i.expansion}}`)}};w.COMMENT_LENGTH=50;function ir(r){let e=[],n="";if(r.hasProofs&&e.push(new x().preamble),r.hasIndex&&e.push("\\makeindex"),r.printGlossaries){let i=new w(r.glossary,r.abbreviations);e.push(i.preamble),i.printedDefinitions&&(n=`
${i.printedDefinitions}`)}return{preamble:e.join(`
`),suffix:n}}function nr(r,e,n){let i=r.hasProofs||e.hasProofs,t=r.hasIndex||e.hasIndex,l=r.printGlossaries||e.printGlossaries;Object.keys(e.glossary).forEach(c=>{Object.keys(r.glossary).includes(c)&&n(`duplicate glossary entry for '${c}'`)}),Object.keys(e.abbreviations).forEach(c=>{Object.keys(r.abbreviations).includes(c)&&n(`duplicate abbreviation definition for '${c}'`)});let o={...e.glossary,...r.glossary},s={...e.abbreviations,...r.abbreviations};return{hasProofs:i,hasIndex:t,printGlossaries:l,glossary:o,abbreviations:s}}var Ce=(r,e)=>{if(!e.printGlossary){e.renderChildren(r,!0);return}if(!r.identifier){e.renderChildren(r,!0);return}if(!e.glossary[r.identifier]){r.identifier.startsWith("index-heading-")?B(e.file,`Cannot cross-reference index headings in tex export "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:b.texRenders}):y(e.file,`Unknown glossary entry identifier "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:b.texRenders});let i=r;e.write(E(r).trim()||i.label||"");return}e.write("\\gls{"),e.write(r.identifier),e.write("}")},Ie=r=>Object.fromEntries($("footnoteDefinition",r).map(e=>{let n=e;return[n.identifier,n]})),Te=r=>Object.fromEntries($("glossary > definitionList > *",r).map((e,n,i)=>{if(e.type!=="definitionTerm")return[];let t=e;if(!t.identifier)return[];let l=i[n+1];if(l===void 0||l.type!=="definitionDescription")throw new Error("Definition term has no associated description");let o=E(t),s=E(l);return[t.identifier,[o,s]]}).filter(e=>e.length>0)),ce=r=>r.trim().toLowerCase(),_e=r=>Object.fromEntries($("abbreviation",r).map(e=>{let n=e,i=E(n);return!i||!n.title?[]:[ce(i),[i,n.title]]}).filter(e=>e.length>0)),ae={text(r,e){e.text(r.value)},paragraph(r,e){f(r,e),e.renderChildren(r)},heading(r,e){let{depth:n,label:i,enumerated:t}=r;if(e.data.nextHeadingIsFrameTitle)e.write("\\frametitle{"),e.data.nextHeadingIsFrameTitle=!1;else{let l=t!==!1||e.options.beamer?"":"*";n===-1&&e.write(`\\part${l}{`),n===0&&e.write(`\\chapter${l}{`),n===1&&e.write(`\\section${l}{`),n===2&&e.write(`\\subsection${l}{`),n===3&&e.write(`\\subsubsection${l}{`),n===4&&e.write(`\\paragraph${l}{`),n===5&&e.write(`\\subparagraph${l}{`),n===6&&e.write(`\\subparagraph${l}{`)}e.renderChildren(r,!0),e.write("}"),t!==!1&&i&&!r.implicit&&e.write(`\\label{${i}}`),f(r,e),e.closeBlock(r)},block(r,e){var n,i,t;let l=S(r);if(e.options.beamer){if(l.includes("outline")){e.data.nextHeadingIsFrameTitle=!1,e.renderChildren(r,!1);return}((i=(n=r.children)===null||n===void 0?void 0:n[0])===null||i===void 0?void 0:i.type)==="heading"&&(e.data.nextHeadingIsFrameTitle=!0),e.write(`

\\begin{frame}
`),e.renderChildren(r,!1),e.write(`\\end{frame}

`);return}if(!(r.visibility==="remove"||r.visibility==="hide")&&!l.includes("no-tex")&&!l.includes("no-pdf")){if(l.includes("new-page")?e.write(`\\newpage
`):l.includes("page-break")&&e.write(`\\pagebreak
`),((t=r.data)===null||t===void 0?void 0:t.part)==="index"){e.data.hasIndex=!0,e.usePackages("imakeidx"),e.write(`\\printindex
`);return}f(r,e),e.renderChildren(r,!1)}},blockquote(r,e){f(r,e),e.renderEnvironment(r,"quote")},definitionList(r,e){e.write(`\\begin{description}
`),e.renderChildren(r,!0),e.ensureNewLine(),e.write("\\end{description}"),e.closeBlock(r)},definitionTerm(r,e){e.ensureNewLine(),e.write("\\item["),e.renderChildren(r,!0),e.write("] ")},definitionDescription(r,e){e.renderChildren(r,!0)},code(r,e){var n;if(r.visibility==="remove"||r.visibility==="hide")return;f(r,e);let i=`\\begin{verbatim}
`,t=`
\\end{verbatim}`;e.options.codeStyle==="listings"||D(r.class).includes("listings")&&r.lang!==void 0?(e.usePackages("listings"),i=`\\begin{lstlisting}[language=${r.lang}]
`,t=`
\\end{lstlisting}`):(e.options.codeStyle==="minted"||D(r.class).includes("minted"))&&(e.usePackages("minted"),i=`\\begin{minted}[breaklines]{${(n=r.lang)!==null&&n!==void 0?n:"text"}}
`,t=`
\\end{minted}`),e.write(i),e.text(r.value,!0),e.write(t),e.closeBlock(r)},list(r,e){f(r,e),e.data.isInTable?r.children.forEach((n,i)=>{e.write(r.ordered?`${i}.~~`:"\\textbullet~~"),e.renderChildren(n,!0),e.write("\\newline"),e.ensureNewLine()}):e.renderEnvironment(r,r.ordered?"enumerate":"itemize",{parameters:r.ordered&&r.start!==1?"resume":void 0})},listItem(r,e){e.write("\\item "),e.renderChildren(r,!0),e.write(`
`)},thematicBreak(r,e){e.write(`
\\bigskip
\\centerline{\\rule{13cm}{0.4pt}}
\\bigskip`),e.closeBlock(r)},...le,mystRole(r,e){e.renderChildren(r,!0)},mystDirective(r,e){e.renderChildren(r,!1)},div(r,e){f(r,e),e.renderChildren(r,!1)},span(r,e){e.renderChildren(r,!0),f(r,e)},comment(r,e){var n,i;e.ensureNewLine(),e.write(`% ${(i=(n=r.value)===null||n===void 0?void 0:n.split(`
`).join(`
% `))!==null&&i!==void 0?i:""}`),e.closeBlock(r)},strong(r,e){e.renderInlineEnvironment(r,"textbf")},emphasis(r,e){e.renderInlineEnvironment(r,"textit")},underline(r,e){e.renderInlineEnvironment(r,"uline")},inlineCode(r,e){e.write("\\texttt{"),e.text(r.value,!1),e.write("}")},subscript(r,e){e.renderInlineEnvironment(r,"textsubscript")},superscript(r,e){e.renderInlineEnvironment(r,"textsuperscript")},delete(r,e){e.usePackages("ulem"),e.renderInlineEnvironment(r,"sout")},break(r,e){e.write("\\newline"),e.ensureNewLine()},abbreviation(r,e){if(!e.printGlossary){e.renderChildren(r,!0);return}let n=E(r);if(!n)return[];let i=ce(n);if(!e.abbreviations[i]){y(e.file,`Unknown abbreviation entry identifier "${i}"`,{node:r,source:"myst-to-tex",ruleId:b.texRenders});return}e.write("\\acrshort{"),e.write(i),e.write("}")},glossary(){},link(r,e){var n;e.usePackages("url","hyperref");let i=r.url;if(((n=r.children[0])===null||n===void 0?void 0:n.value)===i){e.write("\\url{"),e.write(H(i)),e.write("}");return}e.write("\\href{"),e.write(H(i)),e.write("}{"),e.renderChildren(r,!0),e.write("}")},admonition(r,e){f(r,e),e.usePackages("framed"),e.renderEnvironment(r,"framed")},admonitionTitle(r,e){e.renderInlineEnvironment(r,"textbf"),e.write(`\\\\
`)},table:re,image(r,e){f(r,e),e.usePackages("graphicx");let{width:n,url:i,align:t}=r,l=i,o=L(n);e.write(`\\includegraphics[width=${o}]{${l}}`),e.closeBlock(r)},container:ie,proof:se,caption:ne,captionNumber:()=>{},crossReference(r,e,n){var i,t;if(r.kind==="definitionTerm"){Ce(r,e,n);return}let l=!((i=r.template)===null||i===void 0)&&i.includes("%s")?r.template:void 0,o=((t=l??E(r))===null||t===void 0?void 0:t.replace(/\s/g,"~"))||"%s",s=r.label;e.write(o.replace(/%s/g,`\\ref{${s}}`))},citeGroup(r,e){if(e.options.citestyle==="numerical-only")e.write("\\cite{");else if(e.options.bibliography==="biblatex"){let n=r.kind==="narrative"?"textcite":"parencite";e.write(`\\${n}{`)}else{let n=r.kind==="narrative"?"t":"p";e.write(`\\cite${n}{`)}e.renderChildren(r,!0,", "),e.write("}")},cite(r,e,n){e.options.bibliography||e.usePackages("natbib"),n.type==="citeGroup"?e.write(r.label):e.options.bibliography==="biblatex"?e.write(`\\textcite{${r.label}}`):e.write(`\\cite{${r.label}}`)},embed(r,e){e.renderChildren(r,!0)},include(r,e){e.renderChildren(r,!0)},footnoteReference(r,e){if(!r.identifier)return;let n=e.footnotes[r.identifier];if(!n){y(e.file,`Unknown footnote identifier "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:b.texRenders});return}e.write("\\footnote{"),e.renderChildren(n,!0),e.trimEnd(),e.write("}")},footnoteDefinition(){},si(r,e){var n,i,t,l;e.usePackages("siunitx"),r.number==null?e.write(`\\unit{${(i=(n=r.units)===null||n===void 0?void 0:n.map(o=>`\\${o}`).join(""))!==null&&i!==void 0?i:""}}`):e.write(`\\qty{${r.number}}{${(l=(t=r.units)===null||t===void 0?void 0:t.map(o=>`\\${o}`).join(""))!==null&&l!==void 0?l:""}}`)},inlineExpression(r,e){var n;!((n=r.children)===null||n===void 0)&&n.length?e.renderChildren(r,!0):(e.write("\\texttt{"),e.text(r.value,!1),e.write("}"))},raw(r,e){var n;r.tex?e.write(r.tex):!((n=r.children)===null||n===void 0)&&n.length&&e.renderChildren(r)}},W=class{constructor(e,n,i){var t,l;e.result="",this.file=e,this.options=i??{},this.data={mathPlugins:{},imports:new Set},this.handlers=(t=i?.handlers)!==null&&t!==void 0?t:ae,this.references=(l=i?.references)!==null&&l!==void 0?l:{},this.footnotes=Ie(n),this.glossary=i?.printGlossaries?Te(n):{},this.abbreviations=i?.printGlossaries?_e(n):{},this.renderChildren(n)}get printGlossary(){return this.options.printGlossaries===!0}get out(){return this.file.result}usePackages(...e){e.forEach(n=>{this.data.imports.add(n)})}write(e){this.file.result+=e}text(e,n=!1){let i=n?z(e):Y(e);this.write(i)}trimEnd(){this.file.result=this.out.trimEnd()}ensureNewLine(e=!1){e&&this.trimEnd(),!this.out.endsWith(`
`)&&this.write(`
`)}renderChildren(e,n=!1,i=""){var t,l,o;let s=(l=(t=e.children)===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0;(o=e.children)===null||o===void 0||o.forEach((c,a)=>{let d=this.handlers[c.type];d?d(c,this,e):y(this.file,`Unhandled LaTeX conversion for node of "${c.type}"`,{node:c,source:"myst-to-tex",ruleId:b.texRenders}),i&&a+1<s&&this.write(i)}),n||this.closeBlock(e)}renderEnvironment(e,n,i){let t=i?.parameters?`[${i.parameters}]`:"",l=i?.arguments?`{${i.arguments.join("}{")}}`:"";this.file.result+=`\\begin{${n}}${t}${l}
`,this.renderChildren(e,!0),this.ensureNewLine(!0),this.file.result+=`\\end{${n}}`,this.closeBlock(e)}renderInlineEnvironment(e,n,i){this.file.result+=`\\${n}{`,this.renderChildren(e,!0),this.trimEnd(),this.file.result+="}",i?.after&&(this.ensureNewLine(!0),this.write(i.after))}closeBlock(e){this.ensureNewLine(!0),this.file.result+=`
`}},Ne=function(r){return this.Compiler=(e,n)=>{oe(e);let i=new W(n,e,r??{handlers:ae}),t=n.result.trim(),l={imports:[...i.data.imports],preamble:{hasProofs:i.data.hasProofs,hasIndex:i.data.hasIndex,printGlossaries:r?.printGlossaries,glossary:i.glossary,abbreviations:i.abbreviations},commands:G(i),value:t};return n.result=l,n},e=>e},pr=Ne;export{P as DEFAULT_IMAGE_WIDTH,q as DEFAULT_PAGE_WIDTH_PIXELS,pr as default,ir as generatePreamble,nr as mergePreambles};
