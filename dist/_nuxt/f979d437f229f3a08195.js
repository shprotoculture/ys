(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{331:function(t,e,n){var content=n(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f19a732e",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("80f9e7c6",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var o=n(36),r=n.n(o),l={props:["content"],methods:{openModalForm:function(title){this.$store.commit("modalForm/openModalForm"),this.$store.commit("modalForm/changeFormTitle",title)},anchor:function(t,e){var n=r()(e).offset().top;r()("html, body").animate({scrollTop:n},500)}}},c=(n(338),n(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("div",{staticClass:"feature-bg"},[n("img",{attrs:{src:t.content.background}})]),n("div",{staticClass:"feature-overlay"},[n("div",{staticClass:"container"},[n("div",{staticClass:"feature-content",class:{"feature-content_right":t.content.alignRight}},[t.content.note?n("div",{staticClass:"feature-content__note",class:{"feature-content__note_left":!t.content.alignRight,"feature-content__note_right":t.content.alignRight},domProps:{innerHTML:t._s(t.content.note)}}):t._e(),t.content.title?n("div",{staticClass:"feature-content__title",domProps:{innerHTML:t._s(t.content.title)}}):t._e(),t.content.subtitle?n("div",{staticClass:"feature-content__subtitle",domProps:{innerHTML:t._s(t.content.subtitle)}}):t._e(),t.content.hasVideo?n("div",{staticClass:"feature-content__video"},[n("a",{staticClass:"feature-content__video-link",attrs:{href:t.content.videoSrc,"data-fancybox":""}},[t._v("Смотреть видео")])]):t._e(),t.content.benefits?n("div",{staticClass:"feature-content__benefits"},t._l(t.content.benefits,function(e,i){return n("div",{key:i,staticClass:"feature-content__benefits-item"},[n("div",{staticClass:"feature-content__benefits-img"},[n("img",{attrs:{src:e.img}})]),n("div",{staticClass:"feature-content__benefits-text",domProps:{innerHTML:t._s(e.text)}})])}),0):t._e(),t.content.callToAction?n("div",{staticClass:"feature-content__call-to-action"},[n("button",{staticClass:"button button_primary button_large button_uc",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.openModalForm(t.content.callToAction.formTitle)}}},[t._v(t._s(t.content.callToAction.buttonText))])]):t._e(),t.content.hasAnchor?n("div",{staticClass:"feature-content__anchor"},[n("button",{staticClass:"button button_primary button_large button_uc",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.anchor(e,t.content.anchorURL)}}},[t._v(t._s(t.content.anchorText))])]):t._e(),t.content.hasInternalLink?n("div",{staticClass:"feature-content__internal"},[n("nuxt-link",{staticClass:"feature-content__internal-link button button_primary button_large button_uc",attrs:{to:t.content.internalLink}},[t._v(t._s(t.content.internalLinkText))])],1):t._e()])])])])},[],!1,null,null,null);e.a=component.exports},335:function(t,e,n){"use strict";n(35),n(34);var o=n(75),r=n.n(o),l={props:["type"],data:function(){return{socialList:[{icon:"fab fa-facebook-f",linkType:"social-link_fb",link:"https://www.facebook.com/yogacmexa/"},{icon:"fab fa-vk",linkType:"social-link_vk",link:"https://vk.com/yogacmexa"},{icon:"fab fa-odnoklassniki",linkType:"social-link_ok",link:"https://ok.ru/yogacmexa"},{icon:"fab fa-telegram-plane",linkType:"social-link_telegram",link:"#"},{icon:"fab fa-instagram",linkType:"social-link_instagram",link:"https://www.instagram.com/yogacmexa/"}],name:"",email:"",phone:"",msg:""}},computed:{title:function(){return"book"===this.type?"КНИГА В ПОДАРОК":"callback"===this.type?"ОСТАЛИСЬ ВОПРОСЫ?":"order"===this.type?"ЗАПИСЬ НА ЗАНЯТИЕ":void 0},subTitle:function(){return"book"===this.type?"Заполните форму и получите книгу основателя Йоги Cмеха Мадана Катарии в подарок!":"callback"===this.type?"Свяжитесь с нами любым удобным для вас способом.":"order"===this.type?"Свяжитесь с нами любым удобным для вас способом.":void 0}},methods:{formSubmit:function(){var t={name:this.name,email:this.email,phone:this.phone,msg:this.msg,param:this.title};"book"===this.type?r.a.post("http://yogacmexa.ru/include/send_book.php",t).then(function(t){window.location.replace("/thanks")}):r.a.post("http://yogacmexa.ru/include/mail.php",t).then(function(t){window.location.replace("/thanks")})}}},c=(n(336),n(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"primary-form"},[n("div",{staticClass:"primary-form__heading"},[n("div",{staticClass:"primary-form__heading-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"primary-form__heading-subtitle"},[t._v(t._s(t.subTitle))])]),n("div",{staticClass:"primary-form__contacts"},[n("div",{staticClass:"primary-form__social"},[n("ul",{staticClass:"primary-form__social-list"},t._l(t.socialList,function(t,e){return n("li",{key:e,staticClass:"primary-form__social-item"},[n("a",{staticClass:"primary-form__social-link",class:t.linkType,attrs:{href:t.link,target:"_blank"}},[n("i",{class:t.icon})])])}),0)]),t._m(0)]),n("div",{staticClass:"primary-form__body"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)}}},[n("input",{attrs:{type:"hidden"},domProps:{value:t.title}}),n("div",{staticClass:"p-15"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input__field",attrs:{type:"text",placeholder:"Имя *",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("div",{staticClass:"p-15"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input__field",attrs:{type:"email",placeholder:"Ваш E-mail *",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("div",{staticClass:"p-15"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input__field",attrs:{type:"text",placeholder:"Телефон *",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),n("div",{staticClass:"p-15"},[n("div",{staticClass:"textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"textarea__field",attrs:{placeholder:"Вопрос *",required:""},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})])]),t._m(1),t._m(2)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"primary-form__tel"},[e("a",{staticClass:"primary-form__tel-link",attrs:{href:"tel:+79262194868"}},[this._v("+7 (926) 219 48 68")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox pl-15 pr-15"},[e("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",id:"privacy",required:""}}),e("label",{staticClass:"checkbox__text",attrs:{for:"privacy"}},[this._v("Даю согласие на обработку персональных данных")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-15"},[e("button",{staticClass:"button button_primary button_medium button_uc",attrs:{type:"submit"}},[this._v("Отправить")])])}],!1,null,null,null);e.a=component.exports},336:function(t,e,n){"use strict";var o=n(331);n.n(o).a},337:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'.primary-form{max-width:600px;margin:0 auto}.primary-form__heading{text-align:center;position:relative;padding-bottom:30px;margin-bottom:30px}.primary-form__heading:after{content:"";position:absolute;width:130px;height:4px;background:#f7a936;bottom:0;left:50%;margin-left:-65px}.primary-form__heading-title{font-family:Comfortaa,Arial,Helvetica,sans-serif;font-size:42px;font-weight:500;text-transform:uppercase;margin-bottom:15px;padding:15px}.primary-form__heading-subtitle{color:#6c6c6c;font-size:24px;font-weight:300}.primary-form__contacts{display:flex;align-items:center;justify-content:space-between;padding:15px}.primary-form__social-list{display:flex}.primary-form__social-item{margin-right:30px}.primary-form__social-link,.primary-form__tel-link{font-size:24px;transition:.15s ease}.primary-form__tel-link{font-weight:600}.primary-form__tel-link:hover{color:#f7a936}',""])},338:function(t,e,n){"use strict";var o=n(332);n.n(o).a},339:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'.feature,.feature-bg{position:relative}.feature-bg{z-index:1}.feature-overlay{position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:flex-start}.feature-content{color:#fff}.feature-content__internal{margin-top:60px}.feature-content_right{text-align:right}.feature-content__note{font-size:22px;font-weight:400;font-style:italic;letter-spacing:-1px;line-height:25px;margin-bottom:70px;text-transform:uppercase}.feature-content__note-paragraph{margin-bottom:15px}.feature-content__note-paragraph:last-child{margin-bottom:0}.feature-content__note_left{padding-left:10px;border-left:5px solid #f7a936}.feature-content__note_right{padding-right:10px;border-right:5px solid #f7a936}.feature-content__title{font-size:48px;font-family:Comfortaa,Arial,Helvetica,sans-serif;text-transform:uppercase;line-height:1.2}.feature-content__subtitle{font-size:24px;font-weight:300;letter-spacing:-1px;line-height:1.4;margin-top:30px}.feature-content__video{margin-top:15px}.feature-content__video-link{font-size:22px;font-style:italic;display:inline-block;text-decoration:underline;padding-left:29px;position:relative;color:#fff}.feature-content__video-link:after{content:"";width:24px;height:24px;background:url(/img/play-icon.png) no-repeat 50%/cover;display:inline-block;position:absolute;top:50%;left:0;margin-top:-12px}.feature-content__call-to-action{margin-top:30px}.feature-content__benefits{display:flex;margin-top:60px}.feature-content__benefits-item{display:flex;margin-right:60px}.feature-content__benefits-img{max-width:43px;flex:0 0 43px}.feature-content__benefits-text{padding-left:15px;font-size:16px;color:#fff}.feature-content__anchor{margin-top:60px}',""])},416:function(t,e,n){"use strict";n.r(e);var o=n(334),r=n(335),l={layout:"yogacmexa",head:{title:"История | Йога смеха"},components:{AppFeature:o.a,AppPrimaryForm:r.a},data:function(){return{historyContent:{alignRight:!1,background:"/img/yogasmeha-bg.jpg",note:'"Мы смеемся не потому что <br> мы счастливы, мы счастливы <br> потому что мы смеемся"',title:"ИСТОРИЯ <br> ЙОГИ СМЕХА",subtitle:"Зарождение Йоги смеха, с чего все началось.",hasVideo:!0,videoSrc:"https://www.youtube.com/embed/oLcPkKMr9Ew?list=PLVQ75ZuC0ayAb6gJu2oV0TZb3QVkyptuY"}}}},c=n(2),component=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("section",[e("app-feature",{attrs:{content:this.historyContent}})],1),this._m(0),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("app-primary-form",{attrs:{type:"callback"}})],1)])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"section-heading"},[n("p",{staticClass:"section-heading__sup"},[t._v("История")]),n("h4",{staticClass:"section-heading__title"},[t._v("Йоги смеха")])]),n("div",{staticClass:"section-content"},[n("div",{staticClass:"about"},[n("img",{staticClass:"about__img",attrs:{src:"/img/history-pic.jpg",alt:"История йоги смеха"}}),n("div",{staticClass:"about__text"},[n("p",[t._v("В марте 1995 года индийский доктор Мадан Катария писал научную статью, посвященную пользе смеха для организма. Работая над публикацией, его очень заинтересовали исследования ученых Ли Берка и Ульяма Ф. Фрая, а также история чудесного выздоровления американского журналиста Нормана Казинса. Врачи поставили ему смертельный диагноз - анкилозирующий спондилит. В результате этого заболевания у человека возникают боли и плохая подвижность пораженных суставов, которая приводит к смерти. Но Норман не собирался сдаваться, в одном медицинском журнале он вычитал, что при смехе вырабатывается гормон эндорфин, который помогает снять боль. Казинс тут же нанял себе сиделку и круглые сутки смотрел кинокомедии, благодаря чему смог не только выздороветь, но и удивить всю научную общественность.")]),n("p",[t._v("История Нормана Казинса очень заинтересовала доктора Катария и он начал постоянно об этом думать. 13 марта, проснувшись ранним утром, Мадан не мог найти себе места. Мысли роились в его голове и не давали заснуть. «Если смех так полезен, то почему бы не организовать Клуб смеха и не попробовать на себе всю его пользу» - эта простая мысль вдруг яркой вспышкой озарила сознание Мадана. Стоять на месте уже не было сил, и доктор Катария, в сопровождении супруги Мадури, поспешил в городской парк, где обычно совершал утренние прогулки.")]),n("p",[t._v("Придя в парк, он начал общаться с разными людьми, рассказывая о пользе смеха и приглашать их посмеяться вместе с ним. Реакция людей, спешащих утром по своим делам, на такие разговоры была предсказуема. В лучшем случае ему вежливо отказывали, некоторые с ужасом в глазах старались побыстрее уйти, а были и такие, кто всерьез принимал его за сумасшедшего. Но, к счастью, среди нескольких сотен людей, с кем пообщался в то утро Мадан Катария нашлось трое, кто прислушался к его словам и согласился попробовать.")]),n("p",[t._v("Вскоре их заразительный смех привлек внимание прохожих, положительная энергия и позитив, исходившая от смеющихся, собирал все новых и новых участников. Люди рассказывали смешные истории, шутили, каждый получал свою порцию смеха и чувствовал себя замечательно.")]),n("p",[t._v("Первые две недели все шло очень хорошо, но вскоре участники Клуба исчерпали смешные истории и анекдоты, в ход пошли вульгарные, а иногда и оскорбительные шутки. Многим это не понравилось, и люди начали покидать клуб.")]),n("p",[t._v("Тогда доктор Катария попросил участников Клуба дать ему возможность подумать, как им выйти из этого положения. Он взял на размышление всего один. Ему во что бы то ни стало нужно было найти выход из сложившейся ситуации.")]),n("p",[t._v("Мадан заперся у себя в кабинете и начал просматривать книги и журналы на тему смеха и здоровья. И вскоре наткнулся на статью «Эмоции и здоровье» в журнале Health (США). Прочитав одну из глав, он с удивлением обнаружил научно доказанный факт, что, оказывается, наш мозг не может отличить настоящий смех от поддельного. А значит, можно смеяться… притворившись.")]),n("p",[t._v("Утром, Мадан предстал перед челнами клуба невыспавшимся, но очень довольным, при этом хитро улыбаясь. «Я нашел выход, сказал он единомышленникам! Давайте смеяться без шуток и юмора, просто так». Собравшиеся люди начали спорить и говорить, что он не в себе, что это не естественно и против природы… Но доктор Катария был не преступен и настаивал на своем. В конце концов все согласились и в знак уважения,решили попробовать посмеяться одну минуту.")]),n("p",[t._v("По мере развития Клуба доктор Катария заметил много сходства между смехом и йогой Пранаяма. Обе практики базируются на принципе оптимального дыхания, что позволяет увеличивать подачу кислорода в организм, укрепляя тем самым иммунную систему. Мадан включил в занятия смехом упражнения из традиционной йоги и назвал свое детище - Йога смеха.")]),n("p",[t._v("«Мы объединили мудрость йоги, дыхательные упражнения и смех – это сочетание получило название Йога смеха».")]),n("p",[t._v("Сегодня Йога смеха представлена в 107 странах, открыто тысячи клубов, в которых занимаются миллионы адептов. Мадан и его супруга Мадури много путешествуют по миру и далятся своими знаниями, помогая людям стать здоровыми и счастливыми. Доктор Катария любит повторять: «Мы смеемся не потому, что мы счастливы, а мы счастливы от того, что мы смеемся».")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);