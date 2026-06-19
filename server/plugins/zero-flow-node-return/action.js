async function r(n,e,t){let o=n.value!==void 0?n.value:e;return t?.log?.(`[Return] Flow completed with result: ${JSON.stringify(o)}`),{output:o,done:!0,next:null}}export{r as execute};
