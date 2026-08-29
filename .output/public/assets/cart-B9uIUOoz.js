import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{r as t,s as n}from"./index-CaU4AeFe.js";var r=e();function i(){let{cart:e,totalPrice:i,increaseQty:a,decreaseQty:o,removeFromCart:s}=n();return(0,r.jsxs)(`section`,{className:`mx-auto max-w-7xl px-5 py-20`,children:[(0,r.jsx)(`h1`,{className:`mb-8 font-display text-4xl text-gold`,children:`Shopping Cart`}),e.length===0?(0,r.jsx)(`div`,{className:`glass rounded-xl p-8`,children:(0,r.jsx)(`p`,{className:`text-muted-foreground`,children:`Your cart is empty.`})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`div`,{className:`space-y-4`,children:e.map(e=>(0,r.jsxs)(`div`,{className:`glass flex items-center gap-4 rounded-xl p-4`,children:[(0,r.jsx)(`img`,{src:e.image,alt:e.name,className:`h-24 w-24 rounded-lg object-cover`}),(0,r.jsxs)(`div`,{className:`flex-1`,children:[(0,r.jsxs)(`h3`,{className:`font-semibold`,children:[e.brand,` `,e.name]}),(0,r.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:t(e.price)}),e.size&&(0,r.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Size: `,e.size]})]}),(0,r.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,r.jsx)(`button`,{onClick:()=>o(e.id),className:`rounded border px-3 py-1`,children:`-`}),(0,r.jsx)(`span`,{children:e.quantity}),(0,r.jsx)(`button`,{onClick:()=>a(e.id),className:`rounded border px-3 py-1`,children:`+`})]}),(0,r.jsx)(`button`,{onClick:()=>s(e.id),className:`rounded border border-red-500 px-3 py-1 text-red-500`,children:`Remove`})]},e.id))}),(0,r.jsxs)(`div`,{className:`mt-8 glass rounded-xl p-6 space-y-4`,children:[(0,r.jsxs)(`h2`,{className:`text-2xl font-semibold`,children:[`Total: `,t(i)]}),(0,r.jsx)(`a`,{href:`https://wa.me/916366121895?text=${encodeURIComponent(`Hello Elite Vault,

I would like to order:

${e.map(e=>`• ${e.brand} ${e.name}
Quantity: ${e.quantity}
Size: ${e.size||`N/A`}
Price: ${t(e.price)}`).join(`

`)}

Total: ${t(i)}`)}`,target:`_blank`,rel:`noreferrer`,className:`inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white`,children:`Order Entire Cart on WhatsApp`})]})]})]})}export{i as component};