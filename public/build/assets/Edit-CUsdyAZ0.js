import{m as u,j as e,L as p,T as i,G as x,f as c}from"./app-DfPexuAE.js";import{A as j}from"./AuthenticatedLayout-BkPt3bJ3.js";import{S as n,T as f}from"./Layout-CRUT8Ad_.js";import{T as h}from"./Textarea-DvRuz_jb.js";const T=({auth:r})=>{const{data:s,setData:t,put:o,processing:m,errors:l}=u({name:r.user.name,email:r.user.email,address:r.user.address||""}),d=a=>{a.preventDefault(),o(route("profile.update",r.user))};return e.jsxs(j,{title:"Ubah Profil",user:r.user,children:[e.jsx(p,{title:"Ubah Profil"}),e.jsxs(n,{spacing:"md",children:[e.jsx(f,{order:2,children:"Ubah Profil"}),e.jsx("form",{onSubmit:d,children:e.jsxs(n,{spacing:"md",children:[e.jsx(i,{label:"Nama",value:s.name,onChange:a=>t("name",a.target.value),error:l.name,required:!0}),e.jsx(i,{label:"Alamat Surel",value:s.email,onChange:a=>t("email",a.target.value),error:l.email,required:!0}),e.jsx(h,{label:"Alamat",value:s.address,onChange:a=>t("address",a.target.value),error:l.address}),e.jsx(x,{children:e.jsx(c,{type:"submit",loading:m,children:"Simpan Perubahan"})})]})})]})]})};export{T as default};
