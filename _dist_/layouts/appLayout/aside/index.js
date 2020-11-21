import{h as e}from"../../../../web_modules/preact.js";import{useStoreon as o}from"../../../../web_modules/storeon/preact.js";import{SelectionAction as n}from"../../../stores/selection/index.js";import{DropDown as m,ChoiceGroup as C}from"../../../components/base/index.js";import{LocationDropDown as F}from"../../../components/abstraction/index.js";import"./aside.css.proxy.js";export default()=>{let{categories:t,priceRange:s}=o("categories","priceRange"),{categorySelection:i,subCategorySelection:c,priceSelection:r,isFilterOpen:a,dispatch:l}=o("categorySelection","subCategorySelection","priceSelection","isFilterOpen");return e("aside",{id:"aside",class:a?"-open":""},e("h4",{class:"sub-title"},"ประเภทร้านค้า"),e(C,{active:i,choices:t.map((e=>e.name)),onSelect:e=>{l(n.CATEGORY,e)}}),e("h4",{class:"sub-title"},"จังหวัด / ใกล้ฉัน"),e(F,null),e("h4",{class:"sub-title"},"ราคา"),e(m,{name:"Price",onSelect:e=>{l(n.PRICE,e)},value:["กรุณาเลือก",...s],active:r}),e("h4",{class:"sub-title"},"ประเภทอาหารและเครื่องดื่ม"),e(C,{active:c,choices:t[i]?.subcategories||[],onSelect:e=>{l(n.SUB_CATEGORY,e)}}))};