import{a3 as c,r as l,bI as f,_ as x,c as u,a as o,bC as d,bu as i,t as g,U as b,bF as h,o as p}from"./entry.D4FtvXkr.js";import{u as w,a as S}from"./Loader.D6LtYdDC.js";const y=c({name:"login",setup(){const e=l(""),t=l(""),n=f(),r=w(),a=S();return{username:e,password:t,onSubmit:async()=>{a.toggleIsLoading(!0);const s=await r.authenticateUser(e.value,t.value);a.toggleIsLoading(!1),s&&n.push("/")},authStore:r}}}),_={class:"flex flex-col gap-6"},v={class:"flex flex-col gap-2"},U=o("span",{class:"font-medium text-2xl"}," User name: ",-1),L={class:"flex flex-col gap-2"},M=o("span",{class:"font-medium text-2xl"}," Password: ",-1),V=o("button",{type:"submit",class:"mx-auto px-4 py-2 h-16 text-2xl font-medium text-white bg-blue-800 w-full hover:bg-blue-700 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-100"}," Login ",-1),$={key:0,class:"text-red-500"};function k(e,t,n,r,a,m){return p(),u("form",{onSubmit:t[2]||(t[2]=h((...s)=>e.onSubmit&&e.onSubmit(...s),["prevent"])),class:"flex flex-col gap-12 text-white mx-auto w-4/5 2xl:w-2/4 mt-32"},[o("div",_,[o("label",v,[U,d(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.username=s),class:"border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl",type:"text",placeholder:"User name",required:"",autocomplete:"username"},null,512),[[i,e.username]])]),o("label",L,[M,d(o("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),class:"border text-xl md:text-3xl bg-[#262626] border-gray-900 h-20 pl-2 rounded-2xl",type:"password",placeholder:"********",required:"",autocomplete:"current-password"},null,512),[[i,e.password]])])]),V,e.authStore.errorMessage?(p(),u("div",$,g(e.authStore.errorMessage),1)):b("",!0)],32)}const I=x(y,[["render",k]]);export{I as default};
