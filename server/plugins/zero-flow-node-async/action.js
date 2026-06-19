async function r(n,e,t){let o=n.fork!==void 0?!!n.fork:!0;return t?.log?.(`[Async] Instructing background execution (fork: ${o})`),{output:e,async:{enabled:!0,fork:o},next:null}}export{r as execute};
