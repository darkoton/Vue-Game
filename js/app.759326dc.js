(function(){"use strict";var e={5935:function(e,a,t){var r=t(4161);const o=r.Z.create({baseURL:{NODE_ENV:"production",VUE_APP_BACKEND_URL:"https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/",BASE_URL:"/Vue-Game/"}.VUE_BACKEND_URL,headers:{Authorization:"Bearer {token}"}}),s=r.Z.create({baseURL:{NODE_ENV:"production",VUE_APP_BACKEND_URL:"https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/",BASE_URL:"/Vue-Game/"}.VUE_BACKEND_URL2,headers:{Authorization:"Bearer {token}"}});a.Z={axios1:o,axios2:s}},9897:function(e,a,t){var r=t(9242),o=t(3396),s=t(7139);const n={class:"wrapper"};function i(e,a,t,r,i,l){const c=(0,o.up)("the-header-banner"),u=(0,o.up)("the-header"),d=(0,o.up)("router-view"),h=(0,o.up)("the-footer");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",{class:(0,s.C_)(["content",e.$store.state.theme])},[(0,o.Wm)(c),(0,o.Wm)(u),(0,o.Wm)(d,{class:"page"}),(0,o.Wm)(h)],2)])}const l=e=>((0,o.dD)("data-v-31d11959"),e=e(),(0,o.Cn)(),e),c={class:"header-banner"},u={class:"header-banner__wrapper"},d={class:"header-banner__container _container"},h={class:"header-banner__body"},_={class:"header-banner__info header-banner__top-left"},g={class:"header-banner__info-item"},f=l((()=>(0,o._)("div",{class:"header-banner__info-icon icon-phone"},null,-1))),m={class:"header-banner__info-title"},p=l((()=>(0,o._)("a",{href:"tel:+380235266490",class:"header-banner__info-tel"},"+380235266490",-1))),v={class:"header-banner__info-item"},b=l((()=>(0,o._)("div",{class:"header-banner__info-icon icon-time"},null,-1))),A={class:"header-banner__info-title"},k={class:"header-banner__info-ordinary"},w={class:"header-banner__top-right"},y={class:"header-banner__languages"},S={class:"header-banner__languages-body"};function C(e,a,t,r,n,i){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[(0,o._)("div",d,[(0,o._)("div",h,[(0,o._)("div",_,[(0,o._)("div",g,[f,(0,o._)("span",m,(0,s.zw)(e.$t("message.support"))+":",1),p]),(0,o._)("div",v,[b,(0,o._)("span",A,(0,s.zw)(e.$t("message.workingHours"))+":",1),(0,o._)("div",k,(0,s.zw)(e.$t("message.workingHoursInfo")),1)])]),(0,o._)("div",w,[(0,o._)("div",y,[(0,o._)("div",S,[(0,o._)("span",{class:"header-banner__language",onClick:a[0]||(a[0]=a=>{e.$store.commit("selectLanguage","en"),e.$i18n.locale="en"})},"EN"),(0,o._)("span",{class:"header-banner__language",onClick:a[1]||(a[1]=a=>{e.$store.commit("selectLanguage","ru"),e.$i18n.locale="ru"})},"RU"),(0,o._)("div",{class:(0,s.C_)(["header-banner__select",{en:"en"==e.$i18n.locale,ru:"ru"==e.$i18n.locale}])},null,2)])]),(0,o._)("div",{class:(0,s.C_)(["header-banner__theme",{"icon-sun":"dark"==e.$store.state.theme,"icon-moon":"light"==e.$store.state.theme}]),onClick:a[2]||(a[2]=a=>e.$store.commit("changeTheme"))},null,2)])])])])])}var I={data(){return{language:"ru"}}},x=t(89);const B=(0,x.Z)(I,[["render",C],["__scopeId","data-v-31d11959"]]);var E=B,U=(t(7658),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAfCAYAAAClDZ5ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOBSURBVHgB3VhLT1NBFP7mlpa2tlBK1aaKtBB5+MQXJLjBx8Ygie7cYGDhxhj9E/oHNHErhAVxYTAxLjRRUZSIboD4JOGl4VEQyiuUtvSOc+fSy4XevrBBvV8y7Tlzz5k5M/fMuecMQRqobmh8QCiakCZCy0vofdmh+azq7GXkWm1IF5Sg5cOTtuZUcgJ0ghw1U3epyaElFFyNmpHpwEZTRvLIEUCM8r7SiAisipxmnmBOZFfn45a5GE3UD2rqG4dZjxd/AcIVH8gpF6fFZ2Ogz8eTK1CM9Dxt8yn60Al0sxBS3XA1oDCUOrCNEK6VgXjlCCZ2jIJ+XnN5fkZoSn1KiHJGcrbb+A2QDrfZsM4Ho8gEatv1GX7VGOztxvLiLKeLblyA8/wRTvvb32Hy4VtOO1x7UFR5DFuF2D4EWNZMmA0p/VOjA/D/GIibYykwjeFPPZw25lpQUX0u9UJCwSUsz8vHJ2ojIB4rpyOmVaXfanfijxAIy20TwqGg5hyiGFX6c62RDTr6iVo1Fxs1w8NyrRmRfJm2V3lhdNk5HRzyszbFadO4CEtf/I6uRsIY6uvWGha+wzXcLTbDz9xpflr+CFrzCliT34SZ5WUSHxt3YcbPaSlzyCvcregndC0bM56U2uP6LSW7eZNAP/6C2DccJxNlEwYmf2qOW3zgpGa/5P8xHclwp7soTkYyXqtfgv6j1kRLJ0IW2W1c9SdgP+rldKDrK+a6vnDaFrbDiYI4XQPbueKD2jtvMGknky6PDzvyZXeyOXYiUyRcyMyLfiyu+eOOir3KQpZ6RzDR+lqefG8pnFW18YOyhbh9lcgE+bs8yIcHW4X+XavQ41VetXmMxfA38tuxLVjgLpF32+Zw4V9BwvD7v0E/rkUOrSe/dHAxowyU5LEItM+KrGA8CKrKt1KCZc6kPE9hc4Tm/QoTvd2fWSpdbmclagmyAZ5AZrIQuxFq2/UUtWhvjCGFpgpYDPzGhE4FU1ZpNCyyCo2OIBsIRt3s151MhEgpf8HaB9Up/atsVwvWfr8rJU5eiY7e/8aKksVk46Z9eZYO0rkElHI/4XpFjB3pLr+pv1uUjR9EQqVinhf0xGJwKNVbAlBRRLYgmFjtLpDkQgQrzMYVeXLMqR9tsLS77JZSt54euPeKUlqHZJNLR+hRK7IB4c7xTY4eD2bPe2bjGU196AS6WchvR1UbMpGi5JQAAAAASUVORK5CYII=");const N=e=>((0,o.dD)("data-v-57ddadfa"),e=e(),(0,o.Cn)(),e),R={class:"header__wrapper"},O={class:"header__container _container"},D={class:"header__body"},Z={class:"header__bottom"},F=N((()=>(0,o._)("span",null,null,-1))),z=N((()=>(0,o._)("span",null,null,-1))),T=N((()=>(0,o._)("span",null,null,-1))),V=[F,z,T],L=N((()=>(0,o._)("img",{src:U,alt:"",class:"header__logo-img"},null,-1))),P=N((()=>(0,o._)("span",{class:"header__logo-text"},"Vue Game",-1))),j={class:"header__search"},H={class:"header__search-left"},G=N((()=>(0,o._)("div",{class:"header__search-icon icon-search"},null,-1))),Q=["placeholder","value"],W={key:1,class:"header__search-result"},K=["onClick"],$={class:"header__search-result-img"},M=["src"],J={class:"header__search-result-text"},Y={class:"header__search-result-title"},X={key:0,class:"header__search-result-price"},q={class:"header__actions"},ee={class:"header__counter"},ae={class:"header__counter"},te={class:"burger-menu__top"},re=N((()=>(0,o._)("img",{src:U,alt:"",class:"header__logo-img"},null,-1))),oe=N((()=>(0,o._)("span",{class:"header__logo-text"},"Vue Game ",-1))),se={class:"header__info burger-menu__info"},ne={class:"header__info-item"},ie=N((()=>(0,o._)("div",{class:"header__info-icon icon-phone"},null,-1))),le={class:"header__info-title"},ce=N((()=>(0,o._)("a",{href:"tel:+380235266490",class:"header__info-tel"},"+380235266490",-1))),ue={class:"header__info-item"},de=N((()=>(0,o._)("div",{class:"header__info-icon icon-time"},null,-1))),he={class:"header__info-title"},_e={class:"header__info-ordinary"},ge={class:"burger-menu__actions header__actions"},fe=N((()=>(0,o._)("span",{class:"icon-backet"},null,-1))),me={class:"header__counter"},pe=N((()=>(0,o._)("span",{class:"icon-favorite"},null,-1))),ve={class:"header__counter"},be={class:"header__languages"},Ae={class:"header__languages-body"};function ke(e,a,t,n,i,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["header",{_focus:i.searchFocus}])},[(0,o._)("div",R,[(0,o._)("div",O,[(0,o._)("div",D,[(0,o._)("div",Z,[(0,o._)("div",{class:"header__burger",onClick:a[0]||(a[0]=e=>i.burger=!0)},V),(0,o.Wm)(c,{to:"/",class:"header__logo"},{default:(0,o.w5)((()=>[L,P])),_:1}),(0,o._)("div",j,[(0,o._)("div",H,[G,(0,o._)("input",{type:"text",placeholder:e.$t("message.search"),class:"header__search-input",value:i.search,onInput:a[1]||(a[1]=(...e)=>l.searchInput&&l.searchInput(...e)),onBlur:a[2]||(a[2]=(...e)=>l.blur&&l.blur(...e)),onFocus:a[3]||(a[3]=e=>i.searchFocus=!0),onKeyup:a[4]||(a[4]=(0,r.D2)(((...e)=>l.searchSubmit&&l.searchSubmit(...e)),["enter"]))},null,40,Q),i.search.length>0?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"header__search-close icon-close",onClick:a[5]||(a[5]=e=>i.search="")})):(0,o.kq)("",!0),i.searchFocus?((0,o.wg)(),(0,o.iD)("ul",W,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.gamesResult,(a=>((0,o.wg)(),(0,o.iD)("li",{class:"header__search-result-li",key:a,onClick:t=>e.$router.push(`/product/${a.genreId}/${a.id}`)},[(0,o._)("div",$,[(0,o._)("img",{src:a.uploadImg,alt:""},null,8,M)]),(0,o._)("div",J,[(0,o._)("div",Y,(0,s.zw)(a.title),1),a.price?((0,o.wg)(),(0,o.iD)("div",X,(0,s.zw)(a.price)+"$ ",1)):(0,o.kq)("",!0)])],8,K)))),128))])):(0,o.kq)("",!0)]),(0,o._)("button",{onClick:a[6]||(a[6]=(...e)=>l.searchSubmit&&l.searchSubmit(...e)),class:"header__search-submit"},(0,s.zw)(e.$t("message.search")),1)]),(0,o._)("div",q,[(0,o.Wm)(c,{to:"/basket",class:"header__action header__backet icon-backet"},{default:(0,o.w5)((()=>[(0,o._)("span",ee,(0,s.zw)(e.$store.state.basket.length),1)])),_:1}),(0,o.Wm)(c,{to:"/favorites",class:"header__action header__favorite icon-favorite"},{default:(0,o.w5)((()=>[(0,o._)("span",ae,(0,s.zw)(e.$store.state.favorites.length),1)])),_:1})])]),(0,o._)("div",{class:(0,s.C_)(["header__burger-menu burger-menu",{active:i.burger}])},[(0,o._)("div",te,[(0,o.Wm)(c,{to:"/",class:"burger-menu__logo header__logo"},{default:(0,o.w5)((()=>[re,oe])),_:1}),(0,o._)("div",{class:"burger-menu__close icon-close-pixel",onClick:a[7]||(a[7]=e=>i.burger=!1)})]),(0,o._)("div",se,[(0,o._)("div",ne,[ie,(0,o._)("span",le,(0,s.zw)(e.$t("message.support"))+":",1),ce]),(0,o._)("div",ue,[de,(0,o._)("span",he,(0,s.zw)(e.$t("message.workingHours"))+":",1),(0,o._)("div",_e,(0,s.zw)(e.$t("message.workingHoursInfo")),1)])]),(0,o._)("div",ge,[(0,o.Wm)(c,{to:"/basket",class:"header__action header__backet"},{default:(0,o.w5)((()=>[fe,(0,o._)("span",null,(0,s.zw)(e.$t("message.basket")),1),(0,o._)("span",me,(0,s.zw)(e.$store.state.basket.length),1)])),_:1}),(0,o.Wm)(c,{to:"/favorites",class:"header__action header__favorite"},{default:(0,o.w5)((()=>[pe,(0,o._)("span",null,(0,s.zw)(e.$t("message.favorites")),1),(0,o._)("span",ve,(0,s.zw)(e.$store.state.favorites.length),1)])),_:1}),(0,o._)("div",be,[(0,o._)("div",Ae,[(0,o._)("span",{class:"header__language",onClick:a[8]||(a[8]=a=>{e.$store.commit("selectLanguage","en"),e.$i18n.locale="en"})},"EN"),(0,o._)("span",{class:"header__language",onClick:a[9]||(a[9]=a=>{e.$store.commit("selectLanguage","ru"),e.$i18n.locale="ru"})},"RU"),(0,o._)("div",{class:(0,s.C_)(["header__select",{en:"en"==e.$i18n.locale,ru:"ru"==e.$i18n.locale}])},null,2)])])]),(0,o._)("div",{class:(0,s.C_)(["burger-menu__theme header__theme",{"icon-sun":"dark"==e.$store.state.theme,"icon-moon":"light"==e.$store.state.theme}]),onClick:a[10]||(a[10]=a=>e.$store.commit("changeTheme"))},null,2)],2),(0,o._)("div",{class:(0,s.C_)(["header__backdrop-shadow",{active:i.burger}]),onClick:a[11]||(a[11]=e=>i.burger=!1)},null,2)])])])],2)}var we={name:"TheHeader",data(){return{burger:!1,searchFocus:!1,timerId:null,search:""}},computed:{gamesResult(){return this.$store.getters.searchResult}},watch:{$route(){this.burger=!1}},methods:{blur(){setTimeout((()=>{this.searchFocus=!1}),100)},searchInput(e){this.timerId&&clearTimeout(this.timerId),this.search=e.target.value,this.timerId=setTimeout((()=>{this.$store.dispatch("getSearch",this.search)}),500)},searchSubmit(){this.search.length&&(this.$router.push("/search/"+this.search),this.search="")}}};const ye=(0,x.Z)(we,[["render",ke],["__scopeId","data-v-57ddadfa"]]);var Se=ye,Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAArCAYAAAAuc0UDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQISURBVHgB7ZrPbxtFFMe/sz9sx6mdxhgbAi1BoWpRU/ClgRiBKg4IRBDlgOihRYgTSEj9A0BqjxxRT4ETqBKnCgmBkEgFQlRNSg5gBMKRSNOkP5K6Tdv8qOs4rnc6WzXrnfV4J1t7D63mI22c92bmefy13/jNeAnugxdGDlG0yX8TY1i9VmrZHo1vQe7Vd9AueqTeP/7dt3NBxmhQNKFEEaBEEUC8jhdH3j9CKfb7j6I5tEm1UkZ9fb1lu6briG1Jwncaw4+C5DMNx9xNWCc8ywclBb8YlNAzkz8e/9jtM7ydLEL7mVJtv2gZ0a5uwL7aIWGC9MUdk9663dxH8gYS0CWvT6WPACWKAMLWkKNuBytA3mZ/Q0+f+0F7JctSjs94ClfJtFIDnbiKILDRlzWQL90+gwU9ggeFl7MgqahjWj9fAh2bRzuw9fMxrwYqfQQoUQQYsg7raxWslZc5X8/QDs5e/XsWVrXm2JFoF6sxetBxzpdBr1cbtvt/iOea6GW1jKY7duXmMmrVCvzmKhVleXEeM4Vxzpf/+i3OvnBoDCuT046dfnIAA7k8Oo11/Kxvuy1IceIk57M3lfbmcoP56X+xeHHGsZOPZPHs8GvcGJU+ApQoApQoAojswMjaGUf9zcc5X+yJFGfXFldQrzb2HfpUGdpPl/3C4v8/T6F8o3WhZca6sPulN/xCYOFcEaWZomN396Swffderk/Us7+yF1nLshzbXoQj0RjXR7rQ6skumB4RvJjpJEyXTectWPDHnpy9U24JIZBRr61zMewFNSrZZJrs20aGSh8BShQB0vRZLczhqqdOeebzg5x98auTWJtpHEJ31xLIoM83bt/AIGrbBlq262YEMlLZ7VwNEtlEamwGqSiVcyVcKUxyPq8oS6eKTcVbJucvytaMf/tmiPf03r06jUofAUoUAdL0sb/CerPbOB/95wZnJ+Np6NnG5iyRSuNBhnTi176HDZU+ApQoAgziPQiusQL9tqxIl0VlR8Fm+HqHNVdD++w5zmGdmAX96zragQxuhfZuP8LG+mUB9NcFtAN5qhvah/xJooGYzvfS5RsxKSaL4Y0bBkYH5mrjmataUwQoUQQY0Ch3hwHZk/qI7Ol9fcOmZ1dBfy8FiQl6ofwbi/sFQoZOrxxgDweCjCHDGZBdrrsZKApsrkfdfYzxHYe/dzvyU8f2czdoVOoIWt3R0tqsN24YDI0czBEEW1fshZUMNjaRlNIl71xV+ghQogho2hAS0D8odX0kI1o/2ZvehwAQVhDhB4SONpSxP/+BxtCEeYZQTDk2yJS3T5Mop3cdHmUPoxt2vnjsA/J8ah8CPTO7PkXoaO89fe/JNg+BNnp65yff+MaFogkligAlioA7NWUmlensKD4AAAAASUVORK5CYII=";const Ie=e=>((0,o.dD)("data-v-42365540"),e=e(),(0,o.Cn)(),e),xe={class:"footer"},Be={class:"footer__wrapper"},Ee={class:"footer__container _container"},Ue={class:"footer__body"},Ne={class:"footer__logo"},Re=Ie((()=>(0,o._)("img",{src:Ce,class:"footer__img",alt:""},null,-1))),Oe=Ie((()=>(0,o._)("h2",{class:"footer__title"},"Vue Game",-1))),De={class:"footer__subtitle"};function Ze(e,a,t,r,n,i){return(0,o.wg)(),(0,o.iD)("div",xe,[(0,o._)("div",Be,[(0,o._)("div",Ee,[(0,o._)("div",Ue,[(0,o._)("div",Ne,[Re,Oe,(0,o._)("p",De,(0,s.zw)(e.$t("message.tagline")),1)])])])])])}var Fe={name:"TheFooter"};const ze=(0,x.Z)(Fe,[["render",Ze],["__scopeId","data-v-42365540"]]);var Te=ze,Ve={components:{TheHeaderBanner:E,TheHeader:Se,TheFooter:Te},created(){localStorage.favorites||localStorage.setItem("favorites",JSON.stringify([])),localStorage.basket||localStorage.setItem("basket",JSON.stringify([])),localStorage.language||localStorage.setItem("language","ru"),localStorage.theme||localStorage.setItem("theme","dark"),this.$store.state.theme=localStorage.theme}};const Le=(0,x.Z)(Ve,[["render",i]]);var Pe=Le,je=t(2483);const He=[{path:"/",name:"home",component:()=>t.e(443).then(t.bind(t,4651))},{path:"/favorites",name:"favorites",component:()=>t.e(443).then(t.bind(t,3754))},{path:"/basket",name:"basket",component:()=>t.e(443).then(t.bind(t,6111))},{path:"/product/:genre/:id",name:"product",component:()=>t.e(443).then(t.bind(t,6262))},{path:"/search/:search",name:"search",component:()=>t.e(443).then(t.bind(t,5693))},{path:"/:pathMatch(.*)",component:()=>t.e(443).then(t.bind(t,9540))}],Ge=(0,je.p7)({history:(0,je.PO)("/Vue-Game/"),routes:He});var Qe=Ge,We=t(5935),Ke=t(65);const $e=(0,Ke.MT)({state(){return{favorites:localStorage.favorites?JSON.parse(localStorage.favorites):[],basket:localStorage.basket?JSON.parse(localStorage.basket):[],games:[],theme:"dark"}},actions:{async getSearch({commit:e},a=""){if(a.length){let t=await We.Z.axios2.get(`https://64ba26555e0670a501d5b2be.mockapi.io/api/v1//games?filter=${a}`);e("setSearchResult",t.data)}else e("setSearchResult",[])}},getters:{searchResult(e){return e.games}},mutations:{setSearchResult(e,a){e.games=a},changeTheme(e){"dark"==localStorage.theme?localStorage.setItem("theme","light"):localStorage.setItem("theme","dark"),e.theme=localStorage.theme},favorite(e,a){let t=JSON.parse(localStorage.favorites);if(t.find((e=>e.id==a.id)))t.splice(t.findIndex((e=>e.id==a.id)),1),localStorage.setItem("favorites",JSON.stringify(t));else{const e=new Date,r=e.getFullYear();let o=e.getMonth()+1,s=e.getDate();s<10&&(s="0"+s),o<10&&(o="0"+o),a.dateFavoriteAdded=s+"."+o+"."+r,t.push(a),localStorage.setItem("favorites",JSON.stringify(t))}e.favorites=t},basket(e,a){let t=JSON.parse(localStorage.basket);if(t.find((e=>e.id==a.id)))t.splice(t.findIndex((e=>e.id==a.id)),1),localStorage.setItem("basket",JSON.stringify(t));else{const e=new Date,r=e.getFullYear();let o=e.getMonth()+1,s=e.getDate();s<10&&(s="0"+s),o<10&&(o="0"+o),a.dateBasketAdded=s+"."+o+"."+r,t.push(a),localStorage.setItem("basket",JSON.stringify(t))}e.basket=t},selectLanguage(e,a){localStorage.setItem("language",a)}}});var Me=$e,Je={install:(e,a)=>{e.config.globalProperties.$get=e=>We.Z.axios1.get("https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/"+e).then((e=>e)),e.config.globalProperties.$post=(e,a)=>We.Z.axios1.post("https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/"+e,a).then((e=>e)),e.config.globalProperties.$put=(e,a)=>We.Z.axios1.put("https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/"+e,a).then((e=>e)),e.config.globalProperties.$delete=(e,a)=>We.Z.axios1.delete("https://64ba26555e0670a501d5b2be.mockapi.io/api/v1/"+e,a).then((e=>e)),e.provide("axiosOp",a)}},Ye=t(7660);const Xe={message:{support:"Support",workingHours:"Working hours",workingHoursInfo:"Mon-Sun: 10:00 - 23:00",search:"Search",basket:"Basket",favorites:"Favorites",tagline:"Have fun with us!",godOfWar:"Epic adventure",look:"See more",gta5:"Criminal world",tekken8:"Beautiful tricks",rdr2:"Beautiful open world",hollowKnight:"Fascinating plot",price:"Price",soon:"Soon",buy:"Buy",inBasket:"In basket",released:"Release date",addCart:"Add to cart",added:"Added",description:"Description",cleare:"Cleare",totalProducts:"Total products",totalAmount:"Total amount",basketEmpty:"Cart is empty",back:"Back",favoritesEmpty:"Favorites is empty",new:"New",popular:"Popular",notFound:"Page not found",backHome:"Go back to home page",recommendations:"Recommendations",resultSearch:"Results on request",noResult:"No results"}};var qe=Xe;const ea={message:{support:"Техподдержка",workingHours:"Режим работы",workingHoursInfo:"ПН-ВС: 10:00 - 23:00",search:"Поиск",basket:"Корзина",favorites:"Избраное",tagline:"Развлекайтесь с нами!",godOfWar:"Эпические приключения",look:"Посмотреть",gta5:"Криминальный мир",tekken8:"Красивые приёмы",rdr2:"Красивый открыйтый мир",hollowKnight:"Завораживающий сюжет",price:"Стоимость",soon:"Скоро",buy:"Купить",inBasket:"В корзине",released:"Дата выхода",addCart:"В корзину",added:"Добавлено",description:"Описание",cleare:"Очистить",totalProducts:"Всего товаров",totalAmount:"Общая сумма",basketEmpty:"Корзина пуста",back:"Вернуться",favoritesEmpty:"Список желаний пуст",new:"Новинки",popular:"Популярные",notFound:"Страницу не найдено",backHome:"Вернуться на главную",recommendations:"Рекомендации",resultSearch:"Результаты по запросу",noResult:"Нет результатов"}};var aa=ea;const ta=(0,Ye.o)({locale:localStorage.language?localStorage.language:"ru",fallbackLocale:"ru",messages:{en:qe,ru:aa}});var ra=ta;const oa=(0,r.ri)(Pe);oa.use(Qe),oa.use(Me),oa.use(Je),oa.use(ra),oa.mount("#app")}},a={};function t(r){var o=a[r];if(void 0!==o)return o.exports;var s=a[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,r,o,s){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(a,r){return t.f[r](e,a),a}),[]))}}(),function(){t.u=function(e){return"js/about.0929821f.js"}}(),function(){t.miniCssF=function(e){return"css/about.eb10e7e1.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="vue-template:";t.l=function(r,o,s,n){if(e[r])e[r].push(o);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==a+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",a+s),i.src=r),e[r]=[o];var h=function(a,t){i.onerror=i.onload=null,clearTimeout(_);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),a)return a(t)},_=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue-Game/"}(),function(){if("undefined"!==typeof document){var e=function(e,a,t,r,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(t){if(s.onerror=s.onload=null,"load"===t.type)r();else{var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.href||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,s.parentNode&&s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=n,s.href=a,t?t.parentNode.insertBefore(s,t.nextSibling):document.head.appendChild(s),s},a=function(e,a){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===a))return o}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){o=n[r],s=o.getAttribute("data-href");if(s===e||s===a)return o}},r=function(r){return new Promise((function(o,s){var n=t.miniCssF(r),i=t.p+n;if(a(n,i))return o();e(r,i,null,o,s)}))},o={143:0};t.f.miniCss=function(e,a){var t={443:1};o[e]?a.push(o[e]):0!==o[e]&&t[e]&&a.push(o[e]=r(e).then((function(){o[e]=0}),(function(a){throw delete o[e],a})))}}}(),function(){var e={143:0};t.f.j=function(a,r){var o=t.o(e,a)?e[a]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(t,r){o=e[a]=[t,r]}));r.push(o[2]=s);var n=t.p+t.u(a),i=new Error,l=function(r){if(t.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+a+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};t.l(n,l,"chunk-"+a,a)}},t.O.j=function(a){return 0===e[a]};var a=function(a,r){var o,s,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t)}for(a&&a(r);c<n.length;c++)s=n[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},r=self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9897)}));r=t.O(r)})();
//# sourceMappingURL=app.759326dc.js.map