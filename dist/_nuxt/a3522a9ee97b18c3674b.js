(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(t,e,r){var content=r(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("f19a732e",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(35),r(34);var n=r(75),o=r.n(n),l={props:["type"],data:function(){return{socialList:[{icon:"fab fa-facebook-f",linkType:"social-link_fb",link:"https://www.facebook.com/yogacmexa/"},{icon:"fab fa-vk",linkType:"social-link_vk",link:"https://vk.com/yogacmexa"},{icon:"fab fa-odnoklassniki",linkType:"social-link_ok",link:"https://ok.ru/yogacmexa"},{icon:"fab fa-telegram-plane",linkType:"social-link_telegram",link:"#"},{icon:"fab fa-instagram",linkType:"social-link_instagram",link:"https://www.instagram.com/yogacmexa/"}],name:"",email:"",phone:"",msg:""}},computed:{title:function(){return"book"===this.type?"КНИГА В ПОДАРОК":"callback"===this.type?"ОСТАЛИСЬ ВОПРОСЫ?":"order"===this.type?"ЗАПИСЬ НА ЗАНЯТИЕ":void 0},subTitle:function(){return"book"===this.type?"Заполните форму и получите книгу основателя Йоги Cмеха Мадана Катарии в подарок!":"callback"===this.type?"Свяжитесь с нами любым удобным для вас способом.":"order"===this.type?"Свяжитесь с нами любым удобным для вас способом.":void 0}},methods:{formSubmit:function(){var t={name:this.name,email:this.email,phone:this.phone,msg:this.msg,param:this.title};"book"===this.type?o.a.post("http://yogacmexa.ru/include/send_book.php",t).then(function(t){window.location.replace("/thanks")}):o.a.post("http://yogacmexa.ru/include/mail.php",t).then(function(t){window.location.replace("/thanks")})}}},c=(r(336),r(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"primary-form"},[r("div",{staticClass:"primary-form__heading"},[r("div",{staticClass:"primary-form__heading-title"},[t._v(t._s(t.title))]),r("div",{staticClass:"primary-form__heading-subtitle"},[t._v(t._s(t.subTitle))])]),r("div",{staticClass:"primary-form__contacts"},[r("div",{staticClass:"primary-form__social"},[r("ul",{staticClass:"primary-form__social-list"},t._l(t.socialList,function(t,e){return r("li",{key:e,staticClass:"primary-form__social-item"},[r("a",{staticClass:"primary-form__social-link",class:t.linkType,attrs:{href:t.link,target:"_blank"}},[r("i",{class:t.icon})])])}),0)]),t._m(0)]),r("div",{staticClass:"primary-form__body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)}}},[r("input",{attrs:{type:"hidden"},domProps:{value:t.title}}),r("div",{staticClass:"p-15"},[r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input__field",attrs:{type:"text",placeholder:"Имя *",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),r("div",{staticClass:"p-15"},[r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input__field",attrs:{type:"email",placeholder:"Ваш E-mail *",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),r("div",{staticClass:"p-15"},[r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input__field",attrs:{type:"text",placeholder:"Телефон *",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),r("div",{staticClass:"p-15"},[r("div",{staticClass:"textarea"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"textarea__field",attrs:{placeholder:"Вопрос *",required:""},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})])]),t._m(1),t._m(2)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"primary-form__tel"},[e("a",{staticClass:"primary-form__tel-link",attrs:{href:"tel:+79262194868"}},[this._v("+7 (926) 219 48 68")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox pl-15 pr-15"},[e("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",id:"privacy",required:""}}),e("label",{staticClass:"checkbox__text",attrs:{for:"privacy"}},[this._v("Даю согласие на обработку персональных данных")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-15"},[e("button",{staticClass:"button button_primary button_medium button_uc",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);e.a=component.exports},336:function(t,e,r){"use strict";var n=r(331);r.n(n).a},337:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,'.primary-form{max-width:600px;margin:0 auto}.primary-form__heading{text-align:center;position:relative;padding-bottom:30px;margin-bottom:30px}.primary-form__heading:after{content:"";position:absolute;width:130px;height:4px;background:#f7a936;bottom:0;left:50%;margin-left:-65px}.primary-form__heading-title{font-family:Comfortaa,Arial,Helvetica,sans-serif;font-size:42px;font-weight:500;text-transform:uppercase;margin-bottom:15px;padding:15px}.primary-form__heading-subtitle{color:#6c6c6c;font-size:24px;font-weight:300}.primary-form__contacts{display:flex;align-items:center;justify-content:space-between;padding:15px}.primary-form__social-list{display:flex}.primary-form__social-item{margin-right:30px}.primary-form__social-link,.primary-form__tel-link{font-size:24px;transition:.15s ease}.primary-form__tel-link{font-weight:600}.primary-form__tel-link:hover{color:#f7a936}',""])},342:function(t,e,r){var content=r(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("b2de9b5c",content,!0,{sourceMap:!1})},343:function(t,e,r){var content=r(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("426e0612",content,!0,{sourceMap:!1})},348:function(t,e,r){"use strict";var n={props:["content"]},o=(r(355),r(2)),l={components:{AppReviewItem:Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"review-video"},[e("a",{staticClass:"review-video__link",attrs:{href:this.content.videoSrc,"data-fancybox":""}},[e("div",{staticClass:"review-video__image-wrapper"},[e("img",{attrs:{src:this.content.img,alt:"content.name"}}),e("div",{staticClass:"review-video__overlay"})]),e("div",{staticClass:"review-video__content"},[e("h5",{staticClass:"review-video__title"},[this._v(this._s(this.content.name))]),e("p",{staticClass:"review-video__text text-overflow",domProps:{innerHTML:this._s(this.content.text)}})])])])},[],!1,null,null,null).exports},props:["content"],data:function(){return{swiperReviewsOptions:{slidesPerView:3,watchOverflow:!0,navigation:{nextEl:".slider-review__control_next",prevEl:".slider-review__control_prev"}}}}},c=(r(357),Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider-review"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperReviews",value:this.swiperReviewsOptions,expression:"swiperReviewsOptions",arg:"swiperReviews"}]},[e("div",{staticClass:"swiper-wrapper"},this._l(this.content,function(t,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("app-review-item",{attrs:{content:t}})],1)}),0)]),this._m(0),this._m(1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider-review__control slider-review__control_next"},[e("i",{staticClass:"fal fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider-review__control slider-review__control_prev"},[e("i",{staticClass:"fal fa-chevron-left"})])}],!1,null,null,null));e.a=c.exports},355:function(t,e,r){"use strict";var n=r(342);r.n(n).a},356:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,'.review-video{padding:15px}.review-video__link{display:block;border-radius:7px;overflow:hidden;box-shadow:1px 7px 10px 0 rgba(0,0,0,.1);background:#fff;position:relative;text-align:center}.review-video__link:hover .review-video__overlay{opacity:1}.review-video__image-wrapper{position:relative;z-index:1}.review-video__overlay{position:absolute;z-index:2;top:0;right:0;bottom:0;left:0;background:rgba(247,169,54,.8);transition:.25s ease;opacity:0}.review-video__overlay:after{content:"";position:absolute;width:60px;height:60px;background:url(/img/play.png) no-repeat 50%/cover;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.review-video__content{padding:30px 15px}.review-video__title{text-transform:uppercase;font-size:20px;font-weight:600;margin-bottom:5px}.review-video__text{font-size:14px;font-weight:400;line-height:1.6;height:44px;overflow:hidden;color:#909090}',""])},357:function(t,e,r){"use strict";var n=r(343);r.n(n).a},358:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".slider-review{position:relative}.slider-review__control{position:absolute;z-index:20;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:50px;height:50px;border-radius:100%;background:#f7a936;color:#fff;box-shadow:0 0 7px rgba(0,0,0,.2);text-align:center;line-height:50px;font-size:20px;cursor:pointer}.slider-review__control_next{right:-50px}.slider-review__control_prev{left:-50px}",""])},359:function(t,e,r){var content=r(375);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("22ffed9d",content,!0,{sourceMap:!1})},374:function(t,e,r){"use strict";var n=r(359);r.n(n).a},375:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".intro{position:relative}.intro__image-wrapper{position:relative;z-index:1}.intro__content{position:absolute;width:100%;left:0;right:0;bottom:0;z-index:2;text-align:center;color:#fff;padding:90px 0}.intro__title{font-size:48px;font-weight:400;font-family:Comfortaa,Arial,Helvetica,sans-serif;text-transform:uppercase;line-height:1.2}.intro__subtitle{font-size:20px;font-weight:300;margin-top:15px}",""])},391:function(t,e,r){"use strict";var n={props:["content"]},o=(r(374),r(2)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("div",{staticClass:"intro__image-wrapper"},[e("img",{attrs:{src:this.content.background,alt:"content.title"}})]),e("div",{staticClass:"intro__content"},[e("h2",{staticClass:"intro__title"},[this._v(this._s(this.content.title))]),e("p",{staticClass:"intro__subtitle"},[this._v(this._s(this.content.subtitle))])])])},[],!1,null,null,null);e.a=component.exports},430:function(t,e,r){"use strict";r.r(e);var n=r(391),o=r(335),l=r(348),c={layout:"club",head:{title:"Тренеры | Йога смеха"},components:{AppPrimaryForm:o.a,AppIntro:n.a,AppReviewSlider:l.a},data:function(){return{introContent:{background:"/img/club-reviews.jpg",title:"Отзывы",subtitle:"Посмотрите короткие отзывы от наших «харрррррррашистов»"},reviewContent:[{img:"/img/review-2.jpg",name:"Дмитрий Колпиков",text:"Каждый из нас должен заниматься Йогой смеха, это раскрепощает, оздоравливает и делает нас счастливее.",videoSrc:"/video/reviews/dmitry.mp4"},{img:"/img/review-3.jpg",name:"Надежда Акимова",text:"Это заряжает таким светом, такими эмоциями! Я в восторге!",videoSrc:"/video/reviews/nadejda.mp4"},{img:"/img/review-4.jpg",name:"Софья Шевякова",text:"Очень позитивные и яркие эмоции остаются с вами на весь день!",videoSrc:"/video/reviews/sofia.mp4"},{img:"/img/review-5.jpg",name:"Тейа Багурина",text:"Ребята приходите на смеминар, смейтесь, учитесь, будьте счастливы!",videoSrc:"/video/reviews/teya.mp4"},{img:"/img/review-1.jpg",name:"Василий Попович",text:"Очень позитивные и яркие эмоции остаются с вами на весь день!",videoSrc:"/video/reviews/vasiliy.mp4"}]}}},m=r(2),component=Object(m.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("section",[e("app-intro",{attrs:{content:this.introContent}})],1),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("app-review-slider",{attrs:{content:this.reviewContent}})],1)]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("app-primary-form",{attrs:{type:"callback"}})],1)])])},[],!1,null,null,null);e.default=component.exports}}]);