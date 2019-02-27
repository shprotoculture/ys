<template lang="pug">
main.main
    section
        app-feature(:content="becomeATrainerContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title СЕМИНАР БУДЕТ ПОЛЕЗЕН
                p.section-heading__subtitle
                    | Всем, кто решил поменять вид деятельности и обрести интересную и востребованную работу.
                    br
                    | Но особенно мы рекомендуем пройти его:
            .section-content
                .row
                    .col-6.p-15(v-for="(content, i) in usefulContent" :key="i")
                        app-roter-card(:content="content")
    section
        app-feature(:content="shipContent")
    section.section
        .container
            .section-heading
                p.section-heading__sup ТРЕНЕР ПО РАДОСТИ
                h4.section-heading__title РАБОТА МЕЧТЫ
                p.section-heading__subtitle
                    | Став тренером по Йоге смеха, вы больше никогда не будете испытывать стресс на работе.  
                    br
                    | И каждый ваш день будет наполнен смыслом и радостью
            .section-content
                app-benefits-grid(:benefits="workBenefits")
    section
        app-feature(:content="miracleContent")
    section.section
        .container
            .section-heading
                p.section-heading__sup ПРОГРАММА
                h4.section-heading__title СЕМИНАРА
                p.section-heading__subtitle Курс разработан доктором Маданом Катарией и Laughter Yoga University (Индия)
            .section-content
                app-tabs
    section
        app-feature(:content="cerificateContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ВЫПУСКНИКИ
                p.section-heading__subtitle Посмотрите короткие видео-отзывы инструкторов, которые уже прошли семинар.
            .section-content
                app-review-slider(:content="reviewContent")
    section
        app-feature(:content="ambassadorContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title РАСПИСАНИЕ
                h4.section-heading__subtitle Мы находимся в пешей доступности от метро «Красные ворота»
            .section-content
                app-schedule(:schedule="schedule")
    section
        app-feature(:content="seminarContent")
    section.section
        .container
            app-primary-form(:type="'callback'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppRoterCard from '~/components/others/AppRoterCard';
import AppBenefitsGrid from '~/components/others/AppBenefitsGrid';
import AppTabs from '~/components/others/AppTabs';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppSchedule from '~/components/schedule/AppSchedule';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
export default {
    head: {
        title: 'Академия | Йога смеха'
    },
    components: {
        AppFeature,
        AppRoterCard,
        AppBenefitsGrid,
        AppTabs,
        AppReviewSlider,
        AppSchedule,
        AppPrimaryForm
    },
    data() {
        return {
            becomeATrainerContent: {
                alignRight: false,
                background: '/img/become-a-trainer.jpg',
                note: '<p class="feature-content__note-paragraph">23 - 24 февраля <br> Москва, М. Красные ворота</p><p class="feature-content__note-paragraph">МЕЖДУНАРОДНЫЙ СЕМИНАР <br> ДЛЯ ТРЕНЕРОВ ПО ЙОГЕ СМЕХА</p>',
                title: 'СТАНЬ ТРЕНЕРОМ <br> ПО РАДОСТИ!',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/cKbHQtL_pzQ',
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Стать тренером'
                }
            },
            usefulContent: [{
                    background: '/img/psihologam.png',
                    frontTitle: 'Психологам',
                    backTitle: 'На семинаре',
                    backText: 'Вы узнаете игровые техники, основанные на смехотерапии, которые помогут вам в работе с людьми, страдающими депрессией, стрессами и психологическим выгоранием.'
                },
                {
                    background: '/img/hr.png',
                    frontTitle: 'HR-менеджерам',
                    backTitle: 'На семинаре',
                    backText: 'Вы сможете повысить вовлеченность и внутреннюю мотивацию сотрудников, а также сформировать позитивный климат в компании.'
                },
                {
                    background: '/img/coach.png',
                    frontTitle: 'Коучам',
                    backTitle: 'На семинаре',
                    backText: 'Вы получите практические инструменты и упражнения для личностного роста ваших клиентов и сможете повысить свою компетенцию.'
                },
                {
                    background: '/img/vracham.png',
                    frontTitle: 'Врачам',
                    backTitle: 'На семинаре',
                    backText: 'Вы овладеете оздоровительной гимнастикой, которая прошла клинические испытания и пользуется популярностью во всем мире.'
                },
                {
                    background: '/img/treneram.png',
                    frontTitle: 'Тренерам',
                    backTitle: 'На семинаре',
                    backText: 'Вы дополните свой багаж знаний, упражнениями из смехотерапии, йоги, медитации и релаксации.'
                },
                {
                    background: '/img/prepod.png',
                    frontTitle: 'Педагогам и родителям',
                    backTitle: 'На семинаре',
                    backText: 'Вы получить новые методики работы с детьми и молодежью, а также сможете проводить занятия по Йоге смеха в рамках программ дополнительного образования.'
                },
            ],
            shipContent: {
                alignRight: true,
                background: '/img/instability.jpg',
                note: 'Посмотрите этот короткий <br> ролик и ответьте себе на вопрос, кем вы <br> будете работать в 2030 году.',
                title: 'ТРЕНЕР ПО ЙОГЕ СМЕХА <br> БУДЕТ ВОСТРЕБОВАН ВСЕГДА!',
                subtitle: null,
                hasVideo: true,
                videoSrc: '/video/ship.mp4',
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Стать тренером'
                }
            },
            workBenefits: [{
                    img: '/img/svoboda.png',
                    title: 'Свобода',
                    text: 'Вы забудете про нелюбимую работу и сможете сами планировать свой график.'
                },
                {
                    img: '/img/radost.png',
                    title: 'Радость',
                    text: 'Вы станете жизнерадостнее, обретете много новых друзей и будете дарить людям радость.'
                },
                {
                    img: '/img/blago.png',
                    title: 'Благополучие',
                    text: 'Вы сможете открыть свое дело и будете помогать людям и зарабатывать приличные деньги.'
                },
                {
                    img: '/img/zdorovie.png',
                    title: 'Здоровье',
                    text: 'Вы укрепите свое здоровье, повысите иммунитет помолодеете и обретете гармонию в душе и теле.'
                },
                {
                    img: '/img/stabilnost.png',
                    title: 'Стабильность',
                    text: 'Вы будете востребованы в любом возрасте и сможете работать в любой стране мира.'
                },
            ],
            miracleContent: {
                alignRight: false,
                background: '/img/miracle.jpg',
                note: 'Посмотрите истории трех тренеров, <br> которым йога смеха помогла <br> изменить жизнь к лучшему',
                title: 'ЙОГА СМЕХА <br> ТВОРИТ ЧУДЕСА!',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/YWLJ0-LMEi4',
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Стать тренером'
                }
            },
            cerificateContent: {
                alignRight: false,
                background: '/img/sertificate-bg.jpg',
                note: 'Всего за 2 дня вы получите между- <br> народный сертификат и сможете <br> работать в любом уголке мира.',
                title: 'ПОМОГАЙТЕ ЛЮДЯМ И <br> ЗАРАБАТЫВАЙТЕ ДЕНЬГИ',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Стать тренером'
                }
            },
            reviewContent: [{
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
            ambassadorContent: {
                alignRight: false,
                background: '/img/ambassador-bg.jpg',
                note: 'Тренер амбассадор международной ассоциации <br> Laughter Yoga International <br> Представитель доктора Мадана Катария <br> и Laughter Yoga University в России и СНГ <br> Мотивационный тренер, спикер <br> Эксперт Первого канала и Yoga Journal',
                title: 'МИТЯ ЕФИМОВ <br> АМБАССАДОР СМЕХА',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/YWLJ0-LMEi4',
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Записаться'
                }
            },
            schedule: {
                items: [
                    {
                        img: '/img/calendar.png',
                        title: 'Время:',
                        texts: ['23 февраля с 10:00 до 19:00', '24 февраля с 10:00 до 19:00']
                    },
                    {
                        img: '/img/placemark.png',
                        title: 'Адрес:',
                        texts: ['М. Красные ворота', 'Мясницкий проезд 3, стр 1']
                    },
                ],
                coords: [55.768719, 37.646723]
            },
            seminarContent: {
                alignRight: false,
                background: '/img/seminar-bg.jpg',
                note: null,
                title: 'СТОИМОСТЬ СМЕМИНАРА <br> 15000 РУБЛЕЙ',
                subtitle: 'Оплатите участие до 10 февраля <br> и получите скидку 10%!',
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Стать тренером по радости',
                    buttonText: 'Записаться'
                }
            },
        }
    }
}
</script>

<style lang="scss">
</style>
