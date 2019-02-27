<template lang="pug">
main.main
    section
        app-feature(:content="onlineCoursesMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ДЛЯ КОГО
                p.section-heading__subtitle
                    | На групповые занятия по Йогой смеха приглашаются все желающие в возрасте от 5 лет.
                    br
                    | Особенно наши тренинги буду полезны тем, кто испытываете эмоциональное
                    br
                    | напряжение и психологические проблемы.
            .section-content
                app-benefits-grid(:benefits="whoBenefits")
    section
        app-feature(:content="firstLeasonContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title О ЗАНЯТИИ
                p.section-heading__subtitle
                    | Каждое утро на закрытой страничке Инстаграмм марафона Митя Ефимов
                    br
                    | будет проводить в прямом эфире смехозарядку.
            .section-content
                .row
                    .col-6.p-15(v-for="(content, i) in usefulContent" :key="i")
                        app-roter-card(:content="content")
    section
        app-feature(:content="durationContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ПОЛЬЗА
                p.section-heading__subtitle
                    | Групповые занятия по Йоге смеха помогут вам снять эмоциональное напряжение после
                    br
                    | трудовой недели и зарядиться позитивом.
            .section-content
                app-benefits-grid(:benefits="profitBenefits")
    section.section.section_review-bg
        .container
            .section-heading.section-heading_white
                h4.section-heading__title ОТЗЫВЫ
                p.section-heading__subtitle Посмотрите короткие отзывы от наших «харрррррррашистов»
            .section-content
                app-review-slider(:content="reviewContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title СТОИМОСТЬ
            .section-content
                app-pricing(:pricingItems="pricingItems")
    section
        app-feature(:content="saleContent")
    section.section
        .container
            app-primary-form(:type="'order'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppBenefitsGrid from '~/components/others/AppBenefitsGrid';
import AppRoterCard from '~/components/others/AppRoterCard';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppSchedule from '~/components/schedule/AppSchedule';
import AppTicket from '~/components/others/AppTicket';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
import AppPricing from '~/components/pricing/AppPricing';
export default {
    layout: 'services',
    head: {
        title: 'Для бизнеса | Йога смеха'
    },
    components: {
        AppFeature,
        AppBenefitsGrid,
        AppRoterCard,
        AppReviewSlider,
        AppSchedule,
        AppTicket,
        AppPrimaryForm,
        AppPricing
    },
    data() {
        return {
            onlineCoursesMainContent: {
                alignRight: false,
                background: '/img/online-courses-main-bg.jpg',
                note: 'ОН-ЛАЙН МАРАФОН <br> ПО ЙОГЕ СМЕХА С МИТЕЙ ЕФИМОВЫМ <br> СТАРТ 10 ДЕКАБРЯ!',
                title: 'РЕБЕНОК <br> ВНУТРИ ТЕБЯ',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/7GtCgm7Dlkk?list=PLVQ75ZuC0ayCAh2q2FU7u6mxCU5yklWvE',
                callToAction: {
                    formTitle: 'Записаться на онлайн-курсы',
                    buttonText: 'Участвовать'
                }
            },
            whoBenefits: [{
                    img: '/img/who-depres.png',
                    title: 'Депрессия',
                    text: 'Устали от суеты и обыденности, постоянно находитесь в подавленном состоянии, часто раздражаетесь.'
                },
                {
                    img: '/img/who-apat.png',
                    title: 'Апатия',
                    text: 'Потеряли вкус жизни, ни чем не интересуетесь и перестали испытывать радость.'
                },
                {
                    img: '/img/who-immun.png',
                    title: 'Слабый иммунитет',
                    text: 'Часто болеете, быстро утомляетесь и страдаете от плохого аппетита и бессонницы.'
                },
                {
                    img: '/img/who-trev.png',
                    title: 'Тревожность',
                    text: 'Все время чего-то боитесь, не уверены в себе, испытываете чувствуете вины и занимаетесь самобичеванием.'
                },
                {
                    img: '/img/who-alone.png',
                    title: 'Одиночество',
                    text: 'У вас мало друзей, вы ведете замкнутый образ жизни и не знаете как познакомиться с новыми людьми.'
                },
            ],
            firstLeasonContent: {
                alignRight: false,
                background: '/img/online-courses-first-leason.jpg',
                note: 'ЗА 21 ДЕНЬ МЫ ПОМОЖЕМ ВАМ <br> ВСПОМНИТЬ, КАК ВЫ СМЕЯЛИСЬ В ДЕТСТВЕ И <br> СФОРМИРОВАТЬ ПРИВЫЧКУ БЫТЬ ОПТИМИСТОМ.',
                title: 'ЗАПИШИТЕСЬ НА ПЕРВОЕ <br> БЕСПЛАТНОЕ ЗАНЯТИЕ',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Записаться на онлайн-курсы',
                    buttonText: 'Записаться'
                }
            },
            usefulContent: [
                {
                    background: '/img/about-theory.png',
                    frontTitle: 'Теория',
                    backTitle: 'Цель занятий',
                    backText: 'Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей.'
                },
                {
                    background: '/img/about-prac.png',
                    frontTitle: 'Практика',
                    backTitle: 'Цель занятий',
                    backText: 'Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей.'
                },
                {
                    background: '/img/about-protiv.png',
                    frontTitle: 'Противопоказания',
                    backTitle: 'Цель занятий',
                    backText: 'Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей.'
                },
                {
                    background: '/img/about-sessions.png',
                    frontTitle: 'Персональные сессии',
                    backTitle: 'Цель занятий',
                    backText: 'Снять эмоциональное напряжение, укрепить здоровье и с пользой провести время в кругу позитивных людей.'
                },
            ],
            durationContent: {
                alignRight: false,
                background: '/img/online-courses-duration.jpg',
                note: 'ВЫ МОЖЕТЕ ДЕЛАТЬ ЗАРЯДКУ В ЛЮБОМ МЕСТЕ, <br> В ЛЮБОЕ УДОБНОЕ ДЛЯ ВАС ВРЕМЯ',
                title: 'ДЛИТЕЛЬНОСТЬ <br> ВСЕГО 30 МИНУТ',
                subtitle: 'ЗАПИСЬ ХРАНИТСЯ 24 ЧАСА В ПРОФИЛЕ',
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Записаться на онлайн-курсы',
                    buttonText: 'Записаться'
                }
            },
            profitBenefits: [
                {
                    img: '/img/who-timer.png',
                    title: 'Снимает стресс',
                    text: 'Вы сможете избавиться от стресса, морально успокоиться и перезагрузиться.'
                },
                {
                    img: '/img/who-fitness.png',
                    title: 'Фитнес',
                    text: 'Скините до 500 каллорий и укрепите мышцы спины, пресса и не только.'
                },
                {
                    img: '/img/who-heart.png',
                    title: 'Здоровье',
                    text: 'Благодаря дыхательным упражнениям укрепите иммунитет и в целом здоровье.'
                },
                {
                    img: '/img/who-eye.png',
                    title: 'Эмоциональный интеллект',
                    text: 'Узнаете о духовных практиках и сможете сформировать навык позитивного мышления.'
                },
                {
                    img: '/img/who-friends.png',
                    title: 'Новые друзья',
                    text: 'В позитивной обстановке познакомитесь с новыми людьми и обретете друзей и знакомых.'
                },
            ],
            reviewContent: [
                {
                    img: '/img/review-2.jpg',
                    name: 'Дмитрий Колпиков',
                    text: 'Каждый из нас должен заниматься Йогой смеха, это раскрепощает, оздоравливает и делает нас счастливее.',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/review-3.jpg',
                    name: 'Надежда Акимова',
                    text: 'Это заряжает таким светом, такими эмоциями! Я в восторге!',
                    videoSrc: '/video/reviews/nadejda.mp4'
                },
                {
                    img: '/img/review-4.jpg',
                    name: 'Софья Шевякова',
                    text: 'Очень позитивные и яркие эмоции остаются с вами на весь день!',
                    videoSrc: '/video/reviews/sofia.mp4'
                },
                {
                    img: '/img/review-5.jpg',
                    name: 'Тейа Багурина',
                    text: 'Ребята приходите на смеминар, смейтесь, учитесь, будьте счастливы!',
                    videoSrc: '/video/reviews/teya.mp4'
                },
                {
                    img: '/img/review-1.jpg',
                    name: 'Василий Попович',
                    text: 'Очень позитивные и яркие эмоции остаются с вами на весь день!',
                    videoSrc: '/video/reviews/vasiliy.mp4'
                },
            ],
            pricingItems: [
                {
                    type: 'list',
                    title: 'СТАНДАРТ',
                    headingCurrentPrice: '1500₽',
                    headingOldPrice: '2500₽',
                    list: ['21 занятие', 'Новости', 'Сертификат'],
                    callToAction: true
                },
                {
                    type: 'list',
                    title: 'ПРОДВИНУТЫЙ',
                    headingCurrentPrice: '3000₽',
                    headingOldPrice: '5000₽',
                    list: ['21 занятие', 'Новости', 'Общий чат', 'Вопросы и ответы', 'Конкурсы', 'Сертификат'],
                    callToAction: true
                },
                {
                    type: 'list',
                    title: 'ПЕРСОНАЛЬНЫЙ',
                    headingCurrentPrice: '15000₽',
                    headingOldPrice: '21000₽',
                    list: ['21 занятие', 'Новости', 'Общий чат', '3 персональные коуч-сессии', 'Личный чаты с наставником', 'Обучающие статьи', 'Конкурсы', 'Сертификат', 'Подарок'],
                    callToAction: true
                },
            ],
            saleContent: {
                alignRight: false,
                background: '/img/online-courses-sale.jpg',
                note: 'СДЕЛАЙ РЕПОСТ РЕКЛАМЫ МАРАФОНА <br> К СЕБЕ НА СТЕНУ В СОЦ СЕТИ, ОТМЕТЬ 10 ДРУЗЕЙ <br> ОТПРАВЬ НАМ ССЫЛКУ НА АКАУНТ И ПОЛУЧИ СКИДКУ.',
                title: 'СКИДКА 20%',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Записаться на онлайн-курсы',
                    buttonText: 'Получить скидку'
                }
            },
        }
    }
}
</script>

<style lang="scss">
</style>
