import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as k,w as n,a as t,b as y,e as f,F as x,d as F,t as b,f as d}from"./index-7a1dae20.js";import{F as C}from"./Form-833ca105.js";const D={};function L(s,m){const v=e("v-img"),h=e("v-card");return c(),k(h,{class:"rounded-lg elevation-6",color:"deep-orange-lighten-4"},{default:n(()=>[t(v,{src:"/logos/main-logo.png",height:"400px",cover:""})]),_:1})}const M=$(D,[["render",L]]),B={data(){return{information:[{title:"Fiestas Infantiles",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Baby Shower",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Despedida de Soltera",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{title:"Show adultos",info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]}}};function A(s,m,v,h,r,u){const o=e("v-card-text"),l=e("v-card-item"),a=e("v-divider");return c(),y(x,null,[t(o,{class:"text-h6"},{default:n(()=>[f("Caracteristicas:")]),_:1}),(c(!0),y(x,null,F(r.information,i=>(c(),k(l,null,{default:n(()=>[t(o,{class:"pa-0 text-h6"},{default:n(()=>[f(b(i.title),1)]),_:2},1024),t(o,{class:"text--primary pa-0"},{default:n(()=>[f(b(i.info),1)]),_:2},1024)]),_:2},1024))),256)),t(a)],64)}const N=$(B,[["render",A]]),E={data(){return{items:[{title:"Animadora",icon:"mdi-human-female"},{title:"DJ (Auxiliar)",icon:"mdi-play-circle"},{title:"Equipo de sonido",icon:"mdi-music"},{title:"Concursos dinámicos",icon:"mdi-soccer"},{title:"Apertura de regalos",icon:"mdi-gift"},{title:"2 horas de animación",icon:"mdi-numeric-2-box-outline"},{title:"Diversión 100% garantizada",icon:"mdi-star-circle"}]}}},P=d("p",{class:"text-h4 text--primary font-weight-bold text-grey-darken-3"},"Show animado para Baby Shower, Fiestas de Cumpleaños y más...",-1),S=d("p",{class:"text-h6"},"Paquete incluye:",-1);function V(s,m,v,h,r,u){const o=e("v-card-text"),l=e("v-divider"),a=e("v-icon"),i=e("v-list-item-title"),p=e("v-list-item"),g=e("v-list");return c(),y(x,null,[t(o,null,{default:n(()=>[P]),_:1}),t(l),t(o,{class:"py-4 px-6"},{default:n(()=>[S,t(g,{density:"compact"},{default:n(()=>[(c(!0),y(x,null,F(r.items,(_,w)=>(c(),k(p,{key:w},{prepend:n(()=>[t(a,null,{default:n(()=>[f(b(_.icon),1)]),_:2},1024)]),default:n(()=>[t(i,{textContent:b(_.title)},null,8,["textContent"])]),_:2},1024))),128))]),_:1})]),_:1}),t(l)],64)}const U=$(E,[["render",V]]),j={data(){return{payments:[{title:"Depósito bancario o transferencia",props:{prependIcon:"mdi-credit-card"}},{title:"Efectivo",props:{prependIcon:"mdi-cash"}}]}}},q=d("p",{class:"text--primary mb-2"},"Precio:",-1),H=d("p",{class:"text-h4"},"$ 2,500 MXN",-1),J=d("p",{class:"text--primary mb-2"},"Duración del servicio:",-1),T=d("p",{class:"text-h4"},"2 Horas",-1),W=d("p",null,"Formas de pago:",-1);function Z(s,m,v,h,r,u){const o=e("v-col"),l=e("v-row"),a=e("v-card-text"),i=e("v-divider"),p=e("v-list");return c(),y(x,null,[t(a,{class:"py-4 px-6"},{default:n(()=>[t(l,null,{default:n(()=>[t(o,null,{default:n(()=>[q,H]),_:1}),t(o,null,{default:n(()=>[J,T]),_:1})]),_:1})]),_:1}),t(i),t(a,{class:"py-4 px-6"},{default:n(()=>[W,t(p,{items:r.payments},null,8,["items"])]),_:1}),t(i)],64)}const z=$(j,[["render",Z]]),Q={props:{open_form:{type:Boolean}},components:{Form:C},data(){return{dialog:!1}},methods:{closeDialog(){this.dialog=!1,this.$emit("close-form")}},watch:{open_form:function(s){this.dialog=s}}};function R(s,m,v,h,r,u){const o=e("v-card-text"),l=e("Form"),a=e("v-card"),i=e("v-spacer"),p=e("v-btn"),g=e("v-card-actions"),_=e("v-dialog"),w=e("v-row");return c(),k(w,{justify:"center"},{default:n(()=>[t(_,{modelValue:r.dialog,"onUpdate:modelValue":m[1]||(m[1]=I=>r.dialog=I),persistent:"",width:"50%"},{default:n(()=>[t(a,null,{default:n(()=>[t(o,{class:"text-center text-h4 pb-0"},{default:n(()=>[f("Contactanos")]),_:1}),t(o,{class:"text-center text-grey-darken-2 pt-0"},{default:n(()=>[f("Envianos tus datos y nosotros nos comunicaremos contigo lo antes posible")]),_:1}),t(a,{class:"ma-4"},{default:n(()=>[t(l)]),_:1}),t(g,null,{default:n(()=>[t(i),t(p,{color:"red-darken-1",variant:"text",onClick:m[0]||(m[0]=I=>u.closeDialog())},{default:n(()=>[f(" Cerrar ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const X=$(Q,[["render",R]]),Y={components:{Dialog:X},data(){return{buttons:[{title:"Llamar por teléfono",name:"phone",icon:"mdi-cellphone",color:"#FFA726",action:""},{title:"Enviar msj a WhatsApp",name:"whats",icon:"mdi-whatsapp",color:"#26A69A",action:"https://wa.me/message/WZQZJUBNRUFYF1"},{title:"Enviar e-mail",name:"email",icon:"mdi-email",color:"#2196F3",action:""}],dialog:!1,message:"Pongase en contacto al (+52)",phone:"961-297-8513"}},methods:{action(s){s.name=="whats"&&(window.location=s.action),s.name=="email"&&(this.dialog=!0),s.name=="phone"&&(this.emitter.emit("openDialog",{message:this.message+this.phone}),navigator.clipboard.writeText(this.phone),this.emitter.emit("snackbarNotify",{message:"Número telefónico copiado al portapapeles",color:"success"}))},closeDialog(){this.dialog=!1}},mounted(){this.emitter.on("closeDialog",s=>{this.closeDialog()})}},G=d("p",{class:"text-h4 font-weight-bold text-grey-darken-3"},"Contrata ahora",-1),K=d("p",{class:"text-h6"},"Dudas?",-1);function O(s,m,v,h,r,u){const o=e("v-icon"),l=e("v-btn"),a=e("v-card-item"),i=e("v-card-text"),p=e("v-divider"),g=e("Dialog");return c(),y(x,null,[t(i,{class:"text-center mt-6"},{default:n(()=>[G,K,(c(!0),y(x,null,F(r.buttons,(_,w)=>(c(),k(a,null,{default:n(()=>[t(l,{class:"rounded-pill elevation-2 ma-1 px-4",color:_.color,onClick:I=>u.action(_)},{default:n(()=>[t(o,null,{default:n(()=>[f(b(_.icon),1)]),_:2},1024),d("span",null,b(_.title),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),256))]),_:1}),t(p),t(g,{open_form:r.dialog,onCloseForm:u.closeDialog},null,8,["open_form","onCloseForm"])],64)}const tt=$(Y,[["render",O]]),et={components:{MainImage:M,FeaturesInfo:N,MainInfo:U,Prices:z,MainContact:tt},data(){return{}}};function nt(s,m,v,h,r,u){const o=e("MainImage"),l=e("FeaturesInfo"),a=e("v-col"),i=e("MainInfo"),p=e("Prices"),g=e("MainContact"),_=e("v-row"),w=e("v-container");return c(),k(w,null,{default:n(()=>[t(_,{"no-gutters":""},{default:n(()=>[t(a,{class:"pa-2",sm:"5",md:"6"},{default:n(()=>[t(o),t(l)]),_:1}),t(a,{sm:"5",md:"6"},{default:n(()=>[t(i),t(p),t(g)]),_:1})]),_:1})]),_:1})}const it=$(et,[["render",nt]]);export{it as default};
