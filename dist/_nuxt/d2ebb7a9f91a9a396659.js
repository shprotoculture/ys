(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{333:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7647bb8b",content,!0,{sourceMap:!1})},340:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("817dc9ee",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d1c3dcae",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";var c=n(333);n.n(c).a},347:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".benefit-grid{display:flex;align-items:flex-start;justify-content:space-between}.benefit-item{text-align:center}.benefit-item__title{font-size:20px;font-weight:400;display:flex;align-items:center;justify-content:center;margin-bottom:15px}.benefit-item__text{color:#707070;font-size:14px}",""])},349:function(t,e,n){"use strict";var c={props:["benefits"]},o=(n(346),n(2)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"benefit-grid"},t._l(t.benefits,function(e,i){return n("div",{key:i,staticClass:"benefit-item p-15",style:{"max-width":100/t.benefits.length+"%",flex:"0 0 "+100/t.benefits.length+"%"}},[n("div",{staticClass:"benefit-item__image-wrapper"},[n("img",{attrs:{src:e.img,alt:e.title}})]),n("div",{staticClass:"benefit-item__content"},[n("h5",{staticClass:"benefit-item__title"},[t._v(t._s(e.title))]),n("p",{staticClass:"benefit-item__text"},[t._v(t._s(e.text))])])])}),0)},[],!1,null,null,null);e.a=component.exports},350:function(t,e,n){"use strict";var c=n(340);n.n(c).a},351:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".ymap-container{width:100%;height:270px}",""])},352:function(t,e,n){"use strict";var c=n(341);n.n(c).a},353:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".schedule{margin:0 auto}.schedule .vpd-input-group{display:none}.schedule__item{display:flex;margin-bottom:15px}.schedule__item:last-child{margin-bottom:0}.schedule__item-content{padding-left:30px}.schedule__item-title{font-size:20px;font-weight:600}.schedule__item-text{margin-top:15px;font-size:18px}",""])},354:function(t,e,n){"use strict";var c={props:["eventCords"],data:function(){return{placemarks:[{coords:this.eventCords,properties:{},options:{},clusterName:"1",balloonTemplate:'<div>"Your custom template"</div>'}]}}},o=(n(350),n(2)),r={components:{AppScheduleMap:Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("yandex-map",{attrs:{coords:this.eventCords,zoom:"16",controls:["trafficControl"],placemarks:this.placemarks,"map-type":"map"}},[e("ymap-marker",{attrs:{"marker-id":"1","marker-type":"placemark",coords:this.eventCords}})],1)],1)},[],!1,null,null,null).exports},data:function(){return{}},props:["schedule"]},l=(n(352),Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"schedule"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-5 p-0"},t._l(t.schedule.items,function(e,i){return n("div",{key:i,staticClass:"schedule__item p-15"},[n("div",{staticClass:"schedule__item-img"},[n("img",{attrs:{src:e.img}})]),n("div",{staticClass:"schedule__item-content"},[n("div",{staticClass:"schedule__item-title"},[t._v(t._s(e.title))]),t._l(e.texts,function(text,e){return n("div",{key:e,staticClass:"schedule__item-text"},[t._v(t._s(text))])})],2)])}),0),n("div",{staticClass:"col-7 p-0"},[n("app-schedule-map",{attrs:{eventCords:t.schedule.coords}})],1)])])},[],!1,null,null,null));e.a=l.exports},372:function(t,e,n){var content=n(397);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b38f877a",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";var c=n(372);n.n(c).a},397:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'.tabs{max-width:585px;margin:0 auto}.tabs__top{display:flex;align-items:center;justify-content:center;max-width:380px;margin:0 auto;position:relative}.tabs__top:after{content:"";position:absolute;left:6px;right:6px;bottom:0;height:2px;background:#f7a936}.tabs__tab{display:inline-block;padding:5px 0;width:50%;flex:0 0 50%;text-align:center;border-radius:6px;color:#5a5a5a;font-size:18px;font-weight:600;font-family:Comfortaa,Arial,Helvetica,sans-serif;text-transform:uppercase;border:none;background:none}.tabs__tab_active{background:#f7a936;color:#fff}.tabs__content{margin-top:60px;text-align:center;color:#5a5a5a}.tabs__content-title{font-size:24px;font-weight:400;text-transform:uppercase;margin-bottom:5px}.tabs__content-text{font-size:18px;font-weight:400}',""])},413:function(t,e,n){"use strict";n.r(e);var c=n(334),o=n(370),r=n(349),l={data:function(){return{activeTab:1}}},_=(n(396),n(2)),d=Object(_.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("div",{staticClass:"tabs__top"},[n("button",{staticClass:"tabs__tab",class:{tabs__tab_active:1===t.activeTab},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.activeTab=1}}},[t._v("1 День")]),n("button",{staticClass:"tabs__tab",class:{tabs__tab_active:2===t.activeTab},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.activeTab=2}}},[t._v("2 День")])]),n("div",{staticClass:"tabs__body"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.activeTab,expression:"activeTab === 1"}],staticClass:"tabs__item"},[t._m(0),t._m(1),t._m(2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:2===t.activeTab,expression:"activeTab === 2"}],staticClass:"tabs__item"},[t._m(3),t._m(4),t._m(5)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ТЕОРИЯ:")]),e("div",{staticClass:"tabs__content-text"},[this._v("Вы узнаете историю и концепцию Йоги смеха, противопоказания и научные исследования, связанные со смехом, как строятся занятия, выучите базовые упражнения на смех и релаксацию.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ПРАКТИКА:")]),e("div",{staticClass:"tabs__content-text"},[this._v("Вы поучаствуете в групповом занятии, освоите целый ряд упражнений на смех и игровые практики. Попробуете провести презентацию и рассказать о Йоге смеха, а также попрактикуетесь в ведении урока, как тренер перед однокурсниками.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ВРЕМЯ:")]),e("div",{staticClass:"tabs__content-text"},[this._v(" с 10-19 часов, с перерывами"),e("br"),this._v("на обед и кофе-брейк.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ТЕОРИЯ:")]),e("div",{staticClass:"tabs__content-text"},[this._v("Вы узнаете как организовывать и проводить занятия для различных групп людей (дети, больные, пожилые люди, бизнес и тд.). Как открыть свой клуб и начать зарабатывать на занятиях по Йоге смеха.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ПРАКТИКА:")]),e("div",{staticClass:"tabs__content-text"},[this._v("Пройдете курс смехомедетации и Йога Нидра. Закрепите пройденный материал и попробуете провести презентацию и демонстрацию нескольких упражнений, как тренер перед однокурсниками и гостями семинара.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabs__content"},[e("div",{staticClass:"tabs__content-title"},[this._v("ВРЕМЯ:")]),e("div",{staticClass:"tabs__content-text"},[this._v(" с 10-19 часов, с перерывами"),e("br"),this._v("на обед и кофе-брейк.")])])}],!1,null,null,null).exports,m=n(348),v=n(354),h=n(335),f={head:{title:"Академия | Йога смеха"},components:{AppFeature:c.a,AppRoterCard:o.a,AppBenefitsGrid:r.a,AppTabs:d,AppReviewSlider:m.a,AppSchedule:v.a,AppPrimaryForm:h.a},data:function(){return{becomeATrainerContent:{alignRight:!1,background:"/img/become-a-trainer.jpg",note:'<p class="feature-content__note-paragraph">23 - 24 февраля <br> Москва, М. Красные ворота</p><p class="feature-content__note-paragraph">МЕЖДУНАРОДНЫЙ СЕМИНАР <br> ДЛЯ ТРЕНЕРОВ ПО ЙОГЕ СМЕХА</p>',title:"СТАНЬ ТРЕНЕРОМ <br> ПО РАДОСТИ!",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/cKbHQtL_pzQ",callToAction:{formTitle:"Стать тренером по радости",buttonText:"Стать тренером"}},usefulContent:[{background:"/img/psihologam.png",frontTitle:"Психологам",backTitle:"На семинаре",backText:"Вы узнаете игровые техники, основанные на смехотерапии, которые помогут вам в работе с людьми, страдающими депрессией, стрессами и психологическим выгоранием."},{background:"/img/hr.png",frontTitle:"HR-менеджерам",backTitle:"На семинаре",backText:"Вы сможете повысить вовлеченность и внутреннюю мотивацию сотрудников, а также сформировать позитивный климат в компании."},{background:"/img/coach.png",frontTitle:"Коучам",backTitle:"На семинаре",backText:"Вы получите практические инструменты и упражнения для личностного роста ваших клиентов и сможете повысить свою компетенцию."},{background:"/img/vracham.png",frontTitle:"Врачам",backTitle:"На семинаре",backText:"Вы овладеете оздоровительной гимнастикой, которая прошла клинические испытания и пользуется популярностью во всем мире."},{background:"/img/treneram.png",frontTitle:"Тренерам",backTitle:"На семинаре",backText:"Вы дополните свой багаж знаний, упражнениями из смехотерапии, йоги, медитации и релаксации."},{background:"/img/prepod.png",frontTitle:"Педагогам и родителям",backTitle:"На семинаре",backText:"Вы получить новые методики работы с детьми и молодежью, а также сможете проводить занятия по Йоге смеха в рамках программ дополнительного образования."}],shipContent:{alignRight:!0,background:"/img/instability.jpg",note:"Посмотрите этот короткий <br> ролик и ответьте себе на вопрос, кем вы <br> будете работать в 2030 году.",title:"ТРЕНЕР ПО ЙОГЕ СМЕХА <br> БУДЕТ ВОСТРЕБОВАН ВСЕГДА!",subtitle:null,hasVideo:!0,videoSrc:"/video/ship.mp4",callToAction:{formTitle:"Стать тренером по радости",buttonText:"Стать тренером"}},workBenefits:[{img:"/img/svoboda.png",title:"Свобода",text:"Вы забудете про нелюбимую работу и сможете сами планировать свой график."},{img:"/img/radost.png",title:"Радость",text:"Вы станете жизнерадостнее, обретете много новых друзей и будете дарить людям радость."},{img:"/img/blago.png",title:"Благополучие",text:"Вы сможете открыть свое дело и будете помогать людям и зарабатывать приличные деньги."},{img:"/img/zdorovie.png",title:"Здоровье",text:"Вы укрепите свое здоровье, повысите иммунитет помолодеете и обретете гармонию в душе и теле."},{img:"/img/stabilnost.png",title:"Стабильность",text:"Вы будете востребованы в любом возрасте и сможете работать в любой стране мира."}],miracleContent:{alignRight:!1,background:"/img/miracle.jpg",note:"Посмотрите истории трех тренеров, <br> которым йога смеха помогла <br> изменить жизнь к лучшему",title:"ЙОГА СМЕХА <br> ТВОРИТ ЧУДЕСА!",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/YWLJ0-LMEi4",callToAction:{formTitle:"Стать тренером по радости",buttonText:"Стать тренером"}},cerificateContent:{alignRight:!1,background:"/img/sertificate-bg.jpg",note:"Всего за 2 дня вы получите между- <br> народный сертификат и сможете <br> работать в любом уголке мира.",title:"ПОМОГАЙТЕ ЛЮДЯМ И <br> ЗАРАБАТЫВАЙТЕ ДЕНЬГИ",subtitle:null,hasVideo:!1,videoSrc:null,callToAction:{formTitle:"Стать тренером по радости",buttonText:"Стать тренером"}},reviewContent:[{img:"/img/review-2.jpg",name:"Дмитрий Колпиков",text:"Каждый из нас должен заниматься Йогой смеха, это раскрепощает, оздоравливает и делает нас счастливее.",videoSrc:"/video/reviews/dmitry.mp4"},{img:"/img/review-3.jpg",name:"Надежда Акимова",text:"Это заряжает таким светом, такими эмоциями! Я в восторге!",videoSrc:"/video/reviews/nadejda.mp4"},{img:"/img/review-4.jpg",name:"Софья Шевякова",text:"Очень позитивные и яркие эмоции остаются с вами на весь день!",videoSrc:"/video/reviews/sofia.mp4"},{img:"/img/review-5.jpg",name:"Тейа Багурина",text:"Ребята приходите на смеминар, смейтесь, учитесь, будьте счастливы!",videoSrc:"/video/reviews/teya.mp4"},{img:"/img/review-1.jpg",name:"Василий Попович",text:"Очень позитивные и яркие эмоции остаются с вами на весь день!",videoSrc:"/video/reviews/vasiliy.mp4"}],ambassadorContent:{alignRight:!1,background:"/img/ambassador-bg.jpg",note:"Тренер амбассадор международной ассоциации <br> Laughter Yoga International <br> Представитель доктора Мадана Катария <br> и Laughter Yoga University в России и СНГ <br> Мотивационный тренер, спикер <br> Эксперт Первого канала и Yoga Journal",title:"МИТЯ ЕФИМОВ <br> АМБАССАДОР СМЕХА",subtitle:null,hasVideo:!0,videoSrc:"https://www.youtube.com/embed/YWLJ0-LMEi4",callToAction:{formTitle:"Стать тренером по радости",buttonText:"Записаться"}},schedule:{items:[{img:"/img/calendar.png",title:"Время:",texts:["23 февраля с 10:00 до 19:00","24 февраля с 10:00 до 19:00"]},{img:"/img/placemark.png",title:"Адрес:",texts:["М. Красные ворота","Мясницкий проезд 3, стр 1"]}],coords:[55.768719,37.646723]},seminarContent:{alignRight:!1,background:"/img/seminar-bg.jpg",note:null,title:"СТОИМОСТЬ СМЕМИНАРА <br> 15000 РУБЛЕЙ",subtitle:"Оплатите участие до 10 февраля <br> и получите скидку 10%!",hasVideo:!1,videoSrc:null,callToAction:{formTitle:"Стать тренером по радости",buttonText:"Записаться"}}}}},C=Object(_.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("section",[n("app-feature",{attrs:{content:t.becomeATrainerContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"section-content"},[n("div",{staticClass:"row"},t._l(t.usefulContent,function(content,i){return n("div",{key:i,staticClass:"col-6 p-15"},[n("app-roter-card",{attrs:{content:content}})],1)}),0)])])]),n("section",[n("app-feature",{attrs:{content:t.shipContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(1),n("div",{staticClass:"section-content"},[n("app-benefits-grid",{attrs:{benefits:t.workBenefits}})],1)])]),n("section",[n("app-feature",{attrs:{content:t.miracleContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(2),n("div",{staticClass:"section-content"},[n("app-tabs")],1)])]),n("section",[n("app-feature",{attrs:{content:t.cerificateContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(3),n("div",{staticClass:"section-content"},[n("app-review-slider",{attrs:{content:t.reviewContent}})],1)])]),n("section",[n("app-feature",{attrs:{content:t.ambassadorContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(4),n("div",{staticClass:"section-content"},[n("app-schedule",{attrs:{schedule:t.schedule}})],1)])]),n("section",[n("app-feature",{attrs:{content:t.seminarContent}})],1),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("app-primary-form",{attrs:{type:"callback"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("СЕМИНАР БУДЕТ ПОЛЕЗЕН")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Всем, кто решил поменять вид деятельности и обрести интересную и востребованную работу."),e("br"),this._v("Но особенно мы рекомендуем пройти его:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("p",{staticClass:"section-heading__sup"},[this._v("ТРЕНЕР ПО РАДОСТИ")]),e("h4",{staticClass:"section-heading__title"},[this._v("РАБОТА МЕЧТЫ")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Став тренером по Йоге смеха, вы больше никогда не будете испытывать стресс на работе.  "),e("br"),this._v("И каждый ваш день будет наполнен смыслом и радостью")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("p",{staticClass:"section-heading__sup"},[this._v("ПРОГРАММА")]),e("h4",{staticClass:"section-heading__title"},[this._v("СЕМИНАРА")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Курс разработан доктором Маданом Катарией и Laughter Yoga University (Индия)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("ВЫПУСКНИКИ")]),e("p",{staticClass:"section-heading__subtitle"},[this._v("Посмотрите короткие видео-отзывы инструкторов, которые уже прошли семинар.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-heading"},[e("h4",{staticClass:"section-heading__title"},[this._v("РАСПИСАНИЕ")]),e("h4",{staticClass:"section-heading__subtitle"},[this._v("Мы находимся в пешей доступности от метро «Красные ворота»")])])}],!1,null,null,null);e.default=C.exports}}]);