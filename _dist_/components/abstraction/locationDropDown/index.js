import{h as e}from"../../../../web_modules/preact.js";import{useStoreon as o}from"../../../../web_modules/storeon/preact.js";import{SelectionAction as n}from"../../../stores/selection/index.js";import{DropDown as m}from"../../base/index.js";import{LocationIcon as d}from"../../../icons/index.js";export default({Icon:r,...t})=>{let{provinces:i}=o("provinces"),{provinceSelection:c,dispatch:s}=o("provinceSelection");return e(m,{name:"Location",value:["พื้นที่ใกล้ฉัน",...i],onSelect:e=>{s(n.PROVINCE,e)},Icon:e(d,null),active:c,...t},"พื้นที่ใกล้ฉัน")};