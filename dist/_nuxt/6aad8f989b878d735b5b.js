(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7647bb8b",content,!0,{sourceMap:!1})},340:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("817dc9ee",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d1c3dcae",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6132dd9f",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("35b60658",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";var r=n(333);n.n(r).a},347:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".benefit-grid{display:flex;align-items:flex-start;justify-content:space-between}.benefit-item{text-align:center}.benefit-item__title{font-size:20px;font-weight:400;display:flex;align-items:center;justify-content:center;margin-bottom:15px}.benefit-item__text{color:#707070;font-size:14px}",""])},349:function(t,e,n){"use strict";var r={props:["benefits"]},c=(n(346),n(2)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"benefit-grid"},t._l(t.benefits,function(e,i){return n("div",{key:i,staticClass:"benefit-item p-15",style:{"max-width":100/t.benefits.length+"%",flex:"0 0 "+100/t.benefits.length+"%"}},[n("div",{staticClass:"benefit-item__image-wrapper"},[n("img",{attrs:{src:e.img,alt:e.title}})]),n("div",{staticClass:"benefit-item__content"},[n("h5",{staticClass:"benefit-item__title"},[t._v(t._s(e.title))]),n("p",{staticClass:"benefit-item__text"},[t._v(t._s(e.text))])])])}),0)},[],!1,null,null,null);e.a=component.exports},350:function(t,e,n){"use strict";var r=n(340);n.n(r).a},351:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".ymap-container{width:100%;height:270px}",""])},352:function(t,e,n){"use strict";var r=n(341);n.n(r).a},353:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".schedule{margin:0 auto}.schedule .vpd-input-group{display:none}.schedule__item{display:flex;margin-bottom:15px}.schedule__item:last-child{margin-bottom:0}.schedule__item-content{padding-left:30px}.schedule__item-title{font-size:20px;font-weight:600}.schedule__item-text{margin-top:15px;font-size:18px}",""])},354:function(t,e,n){"use strict";var r={props:["eventCords"],data:function(){return{placemarks:[{coords:this.eventCords,properties:{},options:{},clusterName:"1",balloonTemplate:'<div>"Your custom template"</div>'}]}}},c=(n(350),n(2)),l={components:{AppScheduleMap:Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("yandex-map",{attrs:{coords:this.eventCords,zoom:"16",controls:["trafficControl"],placemarks:this.placemarks,"map-type":"map"}},[e("ymap-marker",{attrs:{"marker-id":"1","marker-type":"placemark",coords:this.eventCords}})],1)],1)},[],!1,null,null,null).exports},data:function(){return{}},props:["schedule"]},o=(n(352),Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"schedule"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5 p-0"},t._l(t.schedule.items,function(e,i){return n("div",{key:i,staticClass:"schedule__item p-15"},[n("div",{staticClass:"schedule__item-img"},[n("img",{attrs:{src:e.img}})]),n("div",{staticClass:"schedule__item-content"},[n("div",{staticClass:"schedule__item-title"},[t._v(t._s(e.title))]),t._l(e.texts,function(text,e){return n("div",{key:e,staticClass:"schedule__item-text"},[t._v(t._s(text))])})],2)])}),0),n("div",{staticClass:"col-7 p-0"},[n("app-schedule-map",{attrs:{eventCords:t.schedule.coords}})],1)])])},[],!1,null,null,null));e.a=o.exports},360:function(t,e,n){"use strict";var r=n(344);n.n(r).a},361:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".ticket{background:#fff;display:block;padding:10px;border-radius:5px;position:relative;height:100%}.ticket__inner{height:100%;border:2px solid #e8e8e8;border-radius:5px;padding:40px 60px 10px;text-align:center}.ticket__price{font-size:70px;font-weight:600;white-space:nowrap}.ticket__price-sum{display:inline-block;padding:0 10px}.ticket__sub{font-size:18px;margin-bottom:20px}.ticket__sale{white-space:nowrap}.ticket__sale-item{display:inline-block;padding:0 10px;border-right:1px solid #e8e8e8}.ticket__sale-item:last-child{border:none}.ticket__text{font-size:14px;font-weight:400}.ticket__label{white-space:nowrap;font-size:18px;font-weight:600;color:#fff;font-family:Comfortaa,Arial,Helvetica,sans-serif;text-transform:uppercase;padding:15px 30px;position:absolute;top:0;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);z-index:2;border-radius:0 0 5px 5px;background:#fcac45;box-shadow:0 5px 11.52px .48px rgba(0,0,0,.13)}",""])},363:function(t,e,n){"use strict";var r=n(345);n.n(r).a},364:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".pricing-item{text-align:center;border-radius:7px;box-shadow:2px 8px 20px rgba(0,0,0,.15);overflow:hidden;background:#fff}.pricing-item_full{display:flex;flex-direction:column;justify-content:space-between;height:100%}.pricing-item__heading{padding:20px 60px;color:#fff;background:#074c84}.pricing-item__heading-title{font-size:24px;font-weight:600;text-transform:uppercase}.pricing-item__heading-price_old{font-size:18px;font-weight:400;text-decoration:line-through;color:#3c8dcf;display:inline-block;padding-right:5px}.pricing-item__heading-price_current{font-size:24px;font-weight:500}.pricing-item__body{padding:40px;color:#222;font-size:16px;font-weight:400}.pricing-item__cost{padding:20px 60px;border-top:1px solid #e5e5e5;font-size:18px;font-weight:600}.pricing-item__list{margin-bottom:30px}.pricing-item__list-item{font-size:18px;letter-spacing:-1px;margin-bottom:5px}",""])},365:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2176e179",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("19927dce",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("18694fa8",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";var r={props:["pricingItem"],methods:{openModalForm:function(title){this.$store.commit("modalForm/openModalForm"),this.$store.commit("modalForm/changeFormTitle",title)}}},c=(n(363),n(2)),l={components:{AppPricingItem:Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pricing-item",class:{"pricing-item_full":!0===t.pricingItem.full}},[n("div",{staticClass:"pricing-item__heading"},[n("h5",{staticClass:"pricing-item__heading-title"},[t._v(t._s(t.pricingItem.title))]),t.pricingItem.headingOldPrice||t.pricingItem.headingCurrentPrice?n("div",{staticClass:"pricing-item__heading-price"},[n("span",{staticClass:"pricing-item__heading-price_old"},[t._v(t._s(t.pricingItem.headingOldPrice))]),n("span",{staticClass:"pricing-item__heading-price_current"},[t._v(t._s(t.pricingItem.headingCurrentPrice))])]):t._e()]),n("div",{staticClass:"pricing-item__body"},[t.pricingItem.text?n("div",{staticClass:"pricing-item__text"},[t._v(t._s(t.pricingItem.text))]):t._e(),t.pricingItem.list?n("ul",{staticClass:"pricing-item__list"},t._l(t.pricingItem.list,function(e,i){return n("li",{staticClass:"pricing-item__list-item"},[t._v(t._s(e))])}),0):t._e(),t.pricingItem.callToAction?n("button",{staticClass:"button button_primary button_uc button_fluid",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.openModalForm("ТАРИФ "+t.pricingItem.title)}}},[t._v("Выбрать")]):t._e()]),t.pricingItem.cost?n("div",{staticClass:"pricing-item__cost"},[t._v(t._s(t.pricingItem.cost))]):t._e()])},[],!1,null,null,null).exports},props:["pricingItems"]},o=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pricing-grid row"},this._l(this.pricingItems,function(t,i){return e("div",{key:i,staticClass:"col-4 p-15"},[e("app-pricing-item",{attrs:{pricingItem:t}})],1)}),0)},[],!1,null,null,null);e.a=o.exports},369:function(t,e,n){"use strict";var r={},c=(n(360),n(2)),component=Object(c.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 p-15"},[n("div",{staticClass:"ticket"},[n("div",{staticClass:"ticket__inner"},[n("div",{staticClass:"ticket__price"},[t._v("1 000 ₽")]),n("div",{staticClass:"ticket__sub"},[t._v("Скидки:")]),n("div",{staticClass:"ticket__sale"},[n("span",{staticClass:"ticket__sale-item"},[t._v("1 + 1 - 20%")]),n("span",{staticClass:"ticket__sale-item"},[t._v("1 + 2 - 30%")]),n("span",{staticClass:"ticket__sale-item"},[t._v("1 + 4 - 40%")])])]),n("div",{staticClass:"ticket__label"},[t._v("1 ЗАНЯТИЕ")])])]),n("div",{staticClass:"col-6 p-15"},[n("div",{staticClass:"ticket"},[n("div",{staticClass:"ticket__inner"},[n("div",{staticClass:"ticket__price"},[t._v("2 500 ₽"),n("span",{staticClass:"ticket__price-sum"},[t._v("+")]),n("span",{staticClass:"ticket__price-img"},[n("img",{attrs:{src:"/img/price-smile.png"}})])]),n("div",{staticClass:"ticket__sub"},[t._v("мячик антистресс в подарок")]),n("div",{staticClass:"ticket__text"},[t._v("Абонемент действителен на текущий месяц с момента покупки.")])]),n("div",{staticClass:"ticket__label"},[t._v("4 ЗАНЯТИЯ")])])])])}],!1,null,null,null);e.a=component.exports},379:function(t,e,n){"use strict";var r=n(365);n.n(r).a},380:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".benefit-square-item{width:100%;height:180px;display:flex;align-items:center;background:#fff;border-radius:6px;box-shadow:0 23px 33px 0 rgba(0,0,0,.07);padding:30px}.benefit-square-item__image-wrapper{max-width:96px;flex:0 0 96px}.benefit-square-item__content{padding-left:30px}.benefit-square-item__title{font-size:20px;font-weight:400;margin-bottom:30px}.benefit-square-item__text{color:#707070;font-size:14px}",""])},381:function(t,e,n){"use strict";var r=n(366);n.n(r).a},382:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".benefit-nums{margin:0 auto;padding:0 150px}.benefit-nums-item{background:#fff;position:relative;max-width:300px;margin:0 auto}.benefit-nums-item__image-wrapper{max-width:96px;flex:0 0 96px;margin-bottom:20px;position:relative;z-index:2}.benefit-nums-item__content{position:relative;z-index:2}.benefit-nums-item__title{font-size:20px;font-weight:400;margin-bottom:30px;line-height:1}.benefit-nums-item__text{color:#707070;font-size:14px;line-height:1.6}.benefit-nums-item__number{font-family:Oswald,Arial,Helvetica,sans-serif;font-size:140px;font-weight:200;color:#f7f7f7;position:absolute;z-index:1;top:30px;right:0;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""])},383:function(t,e,n){"use strict";var r=n(367);n.n(r).a},384:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".slider-feature{position:relative}.slider-feature__control{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:36px;color:#fff;z-index:20;cursor:pointer}.slider-feature__control.swiper-button-disabled{opacity:.5}.slider-feature__control_next{right:2%}.slider-feature__control_prev{left:2%}.slider-feature__pagination{position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:20}.slider-feature__pagination .swiper-pagination-bullet{width:15px;height:15px;margin:0 15px!important;cursor:pointer;background:#fff}",""])},389:function(t,e,n){"use strict";var r={props:["benefits","options"]},c=(n(381),n(2)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"benefit-nums"},[n("div",{staticClass:"benefit-nums-grid row justify-content-center"},t._l(t.benefits,function(e,i){return n("div",{key:i,staticClass:"p-15",class:t.options.wrapperCls},[n("div",{staticClass:"benefit-nums-item",class:t.options.innerCls},[n("div",{staticClass:"benefit-nums-item__image-wrapper"},[n("img",{attrs:{src:e.img,alt:e.title}})]),n("div",{staticClass:"benefit-nums-item__content"},[n("h5",{staticClass:"benefit-nums-item__title",domProps:{innerHTML:t._s(e.title)}}),n("p",{staticClass:"benefit-nums-item__text"},[t._v(t._s(e.text))])]),n("div",{staticClass:"benefit-nums-item__number"},[t._v(t._s("0"+(i+1)))])])])}),0)])},[],!1,null,null,null);e.a=component.exports},390:function(t,e,n){"use strict";var r={props:["benefits"]},c=(n(379),n(2)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"benefit-square-grid row"},t._l(t.benefits,function(e,i){return n("div",{key:i,staticClass:"col-6 p-15"},[n("div",{staticClass:"benefit-square-item"},[n("div",{staticClass:"benefit-square-item__image-wrapper"},[n("img",{attrs:{src:e.img,alt:e.title}})]),n("div",{staticClass:"benefit-square-item__content"},[n("h5",{staticClass:"benefit-square-item__title"},[t._v(t._s(e.title))]),n("p",{staticClass:"benefit-square-item__text"},[t._v(t._s(e.text))])])])])}),0)},[],!1,null,null,null);e.a=component.exports},393:function(t,e,n){"use strict";var r={props:["slides"],components:{AppFeature:n(334).a},data:function(){return{swiperFeatureOptions:{slidesPerView:1,navigation:{nextEl:".slider-feature__control_next",prevEl:".slider-feature__control_prev"},pagination:{el:".swiper-pagination",clickable:!0}}}}},c=(n(383),n(2)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperFeature",value:t.swiperFeatureOptions,expression:"swiperFeatureOptions",arg:"swiperFeature"}],staticClass:"slider-feature"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.slides,function(t,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("app-feature",{attrs:{content:t}})],1)}),0),t.slides.length>1?n("div",{staticClass:"slider-feature__control slider-feature__control_next"},[n("i",{staticClass:"fas fa-chevron-circle-right"})]):t._e(),t.slides.length>1?n("div",{staticClass:"slider-feature__control slider-feature__control_prev"},[n("i",{staticClass:"fas fa-chevron-circle-left"})]):t._e(),t.slides.length>1?n("div",{staticClass:"slider-feature__pagination swiper-pagination"}):t._e()])},[],!1,null,null,null);e.a=component.exports},414:function(t,e,n){"use strict";n.r(e);var r=n(334),c=n(390),l=n(389),o=n(370),m=n(348),_=n(354),d=n(369),f=n(335),x=n(368),v=n(393),h=n(349),C={layout:"services",head:{title:"Смехозарядка | Йога смеха"},components:{AppFeature:r.a,AppBenefitsSquare:c.a,AppRoterCard:o.a,AppReviewSlider:m.a,AppSchedule:_.a,AppTicket:d.a,AppPrimaryForm:f.a,AppPricing:x.a,AppFeatureSlider:v.a,AppBenefitsNums:l.a,AppBenefitsGrid:h.a},data:function(){return{profitBenefits:[{img:"/img/exer-benefit-team.png",title:"Сплотить команду",text:"Йога смеха способствует укреплению связей в компании, а также позитивному взаимодействию. Люди, которые смеются друг с дргугом, отлично взаимодействуют"},{img:"/img/exer-benefit-psyco.png",title:"Психологически разгрузиться",text:"Йога смеха - отличный антидепрессант! Она позволяет максимально быстро снять стресс и психологически разгрузить работников."},{img:"/img/exer-benefit-heart.png",title:"Укрепить здоровье",text:"Во время тимбилдинга сотрудники испытывают только положительные эмоции, что формирует у них чувство заботы со стороны компании и укрепляет корпоративный дух."},{img:"/img/exer-benefit-brain.png",title:"Повысить работоспособность",text:"Йога смеха помогает укрепить физическое состояние, в процессе занятия организм насыщается кислородом, что позволяет повысить работоспособность и эффективность."},{img:"/img/exer-benefit-motivation.png",title:" Мотивация и вовлеченность",text:"В позитивной обстановке познакомитесь с новыми людьми и обретете друзей и знакомых."}],usefulContent:[{background:"/img/exer-target.png",frontTitle:"Цель",backTitle:"Цель занятий",backText:"Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей."},{background:"/img/exer-who.png",frontTitle:"Для кого",backTitle:"Программа",backText:"В программу занятий входят дыхательные и медитативные практики из йоги, а также игровые и подвижные упражнения на смех."},{background:"/img/exer-format.png",frontTitle:"Формат",backTitle:"Противопоказания",backText:"На занятия не допускаются люди с хроническими заболеваниями сердца, дыхания, эпилептики, недавно перенесшие операцию, с грыжами, а также беременные на последнем месяце."},{background:"/img/exer-equip.png",frontTitle:"Оборудование",backTitle:"Экипировка",backText:"Заниматься Йогой смеха можно в любой удобной одежде, главное, чтоб она не стесняла движения. Если занятия проходят в зале, возьмите сменную обувь. Так же вам понадобиться коврик для йоги."}],exerciseMainContent:{alignRight:!1,background:"/img/exercise-main-bg.jpg",note:'<p class="text_uc">Производственная зарядка, <br> основанная на дыхательных практиках <br> и упражнениях на смех</p>',title:"СМЕХОЗАРЯДКА",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/CMnLIL08X6U",callToAction:{formTitle:"Записаться на смехозарядку",buttonText:"Записаться"}},exerciseFreeContent:{alignRight:!1,background:"/img/exer-free.jpg",note:"Приглашаем вашего <br> руководителя или HRD <br> на бесплатное занятие <br> и консультацию.",title:"БЕСПЛАТНое <br> занятие",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/CMnLIL08X6U",callToAction:{formTitle:"Записаться на смехозарядку",buttonText:"Записаться"}},themeBenefits:[{img:"/img/benefit_target.png",title:"Цель",text:"Цель тимбилдинга – эмоционально разгрузить сотрудников компании и укрепить коллективный дух."},{img:"/img/benefit_for.png",title:"Для кого",text:"Тимбилдинг Йога смеха подойдет любой компании от 10 человек."},{img:"/img/benefit_sun.png",title:"Формат",text:"Мы называем такие тимбилдинги «Детский сад для взрослых». Занятие строится на игровые и актерских упражнениях на смех."},{img:"/img/benefit_time.png",title:"Продолжительность",text:"Продолжительность тимбилдинга составляет 1-1,2 часа. После этого. Люди начинают уставать."},{img:"/img/benefit_flag.png",title:"Количество участников",text:"В тимбилдинг может принять участие до 500 человек.смех."},{img:"/img/benefit_mic.png",title:"Оборудование",text:"Для проведения не нужно никакого дополнительного оборудования. В случае большого количества людей, для удобства ведущего нужен микрофон и сцена."}],featureSlides:[{alignRight:!1,background:"/img/exercise-feature-slide01.jpg",note:null,title:"Утренняя <br> смехозарядка",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/ZNgVTj5PAvA",callToAction:null,benefits:[{img:"/img/feature-benefit-target.png",text:"Цель: поднять настроение <br> и зарядить позитивом <br> на предстоящей день."},{img:"/img/feature-benefit-list.png",text:"5-7 упражнений на <br> подвижность, смех <br> и сплочение коллектива."},{img:"/img/feature-benefit-timer.png",text:"Продолжительность <br> 10-15 минут"}]},{alignRight:!1,background:"/img/exercise-feature-slide01.jpg",note:null,title:"Утренняя <br> смехозарядка",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/ZNgVTj5PAvA",callToAction:null}],numsBenefits:{options:{wrapperCls:"col-6"},content:[{img:"/img/benefit_num_team.png",title:"Сплотить <br> команду",text:"Йога смеха способствует укреплению связей в компании, а также позитивномувзаимодействию. Люди, которые смеются друг с дргугом, отлично взаимодействуют."},{img:"/img/benefit_num_rocket.png",title:"Психологически <br> разгрузиться",text:"Йога смеха - отличный антидепрессант! Она позволяет максимально быстро снять стресс и психологически разгрузить работников."},{img:"/img/benefit_num_health.png",title:"Укрепить здоровье",text:"Во время тимбилдинга сотрудники испытывают только положительные эмоции, что формирует у них чувство заботы со стороны компании и укрепляет корпоративный дух."},{img:"/img/benefit_num_lamp.png",title:"Повысить <br> работоспособность",text:"Йога смеха помогает укрепить физическое состояние, в процессе занятия организм насыщается кислородом, что позволяет повысить работоспособность и эффективность."}]},reviewContent:[{img:"/img/opinion01.jpg",name:"Виктория Бехтерева",text:'руководитель форума <br> "Бизнес со смыслом"',videoSrc:"/video/reviews/dmitry.mp4"},{img:"/img/opinion02.jpg",name:"Юлия Кривопустова",text:"руководитель форума <br> Organic Woman",videoSrc:"/video/reviews/dmitry.mp4"},{img:"/img/opinion03.jpg",name:"Андрей Вебер",text:"руководитель форума <br> День Счастья в Сколково",videoSrc:"/video/reviews/dmitry.mp4"}],pricingItems:[{type:"text",title:"ПРИХОДЯЩИЙ ТРЕНЕР",text:"К вам в офис будет приходить профессиональный тренер по Йоге смеха и проводить смехозарядки",cost:"от 3000 рублей"},{type:"text",title:"ОБУЧЕНИЕ ТРЕНЕРА",text:"Мы обучим для вас вашего собственного тренера по Йоге смеха и он/она будет проводить для вас смехозарядки.",cost:"15000 рублей"},{type:"text",title:"СОПРОВОЖДЕНИЕ ТРЕНЕРА",text:"Мы будем расписывать для вашего тренера еженедельные программы упражнений и консультировать по вопросам.",cost:"10000 рублей в месяц"}]}}},w=n(2),component=Object(w.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("section",[n("app-feature",{attrs:{content:t.exerciseMainContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"section-content"},[n("div",{staticClass:"row"},t._l(t.usefulContent,function(content,i){return n("div",{key:i,staticClass:"col-6 p-15"},[n("app-roter-card",{attrs:{content:content}})],1)}),0)])])]),n("section",[n("app-feature-slider",{attrs:{slides:t.featureSlides}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(1),n("div",{staticClass:"section-content"},[n("app-benefits-grid",{attrs:{benefits:t.profitBenefits}})],1)])]),n("section",[n("app-feature",{attrs:{content:t.exerciseFreeContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(2),n("div",{staticClass:"section-content"},[n("app-review-slider",{attrs:{content:t.reviewContent}})],1)])]),n("section",{staticClass:"section",staticStyle:{background:"url(/img/training-stoimost.jpg) no-repeat center/cover"}},[n("div",{staticClass:"container"},[t._m(3),n("div",{staticClass:"section-content"},[n("app-pricing",{attrs:{pricingItems:t.pricingItems}})],1)])]),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("app-primary-form",{attrs:{type:"order"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("О ЗАНЯТИИ")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Групповые занятия Йогой смеха подходят всем. Они требуют специальной физической подготовки"),e("br"),this._v("и полезны в любом возрасте.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("ПОЛЬЗА")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Групповые занятия по Йоге смеха помогут вам снять эмоциональное напряжение после"),e("br"),this._v("трудовой недели и зарядиться позитивом.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("Отзывы")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Послушайте мнение заказчиков о результатах нашей работы")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading section-heading_white"},[e("h4",{staticClass:"section-heading__title"},[this._v("СТОИМОСТЬ")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Тимбилдинг Йога смеха – это лучшее предложение"),e("br"),this._v("на рынке корпоративных мероприятий!")])])}],!1,null,null,null);e.default=component.exports}}]);