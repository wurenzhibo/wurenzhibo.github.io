import{j as a}from"./jsx-runtime.D5qyYPMi.js";import{r as i}from"./index.CZlPm10g.js";import{h as n}from"./textConverter.DGF0JW5U.js";import{I as d}from"./index.ryOKkm7x.js";import"./marked.esm.DsseyvZg.js";import"./index.0vkILwrg.js";import"./play.Bslk2GjN.js";import"./star.Az5dL9Wu.js";const u=({homepage_tab:{tab_list:t,title:c,description:l}})=>{const[r,m]=i.useState(0);return a.jsxs("div",{className:"tab gx-5 row items-center",children:[a.jsx("div",{className:"lg:col-7 lg:order-2",children:a.jsx("div",{className:"tab-content",children:t.map((e,s)=>a.jsx("div",{className:`tab-content-panel ${r===s?"active":void 0}`,children:a.jsx("img",{className:"w-full object-contain",src:e.image})},s))})}),a.jsx("div",{className:"mt-6 lg:col-5 lg:order-1 lg:mt-0",children:a.jsxs("div",{className:"text-container",children:[a.jsx("h2",{className:"lg:text-4xl",children:c}),a.jsx("p",{className:"mt-4",children:l}),a.jsx("ul",{className:"tab-nav mt-8 border-b-0",children:t.map((e,s)=>{const o=d[n(e.icon)];return a.jsxs("li",{className:`tab-nav-item ${r===s?"active":void 0}`,onClick:()=>m(s),children:[a.jsxs("span",{className:"tab-icon mr-3",children:[" ",a.jsx(o,{})]}),e.title]},s)})})]})})]})};export{u as default};
