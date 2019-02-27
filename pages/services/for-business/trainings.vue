<template lang="pug">
main.main
    section
        app-feature(:content="businessMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title о тренингах
                p.section-heading__subtitle
                    | Всем, кто решил поменять вид деятельности и обрести интересную и востребованную работу.
                    br
                    | Но особенно мы рекомендуем пройти его:
            .section-content
                .row
                    .col-6.p-15(v-for="(content, i) in usefulContent" :key="i")
                        app-roter-card(:content="content")




    
    section
        app-feature(:content="expertContent")




    
    section.section
        .container
            .section-heading
                h4.section-heading__title ТЕМЫ ТРЕНИНГОВ
                p.section-heading__subtitle
                    | Мы прокачиваем компании на культуру Счастья и помогаем внедрить практику смеха
                    br
                    | и радость в бизнес процессы.
            .section-content
                app-benefits-grid(:benefits="themeBenefits")






    


                
    section
        app-feature(:content="businessSmileContent")

    


    section.section
        .container
            .section-heading
                h4.section-heading__title ПОЛЬЗА
                p.section-heading__subtitle
                    | Вот только несколько причин провести тимбилдинг Йога смеха
                    br
                    | в вашей компании.
            .section-content
                app-benefits-grid(:benefits="aboutTraning")

    
    section
        app-feature(:content="freeContent")





    section.section
        .container
            .section-heading
                h4.section-heading__title Отзывы
                p.section-heading__subtitle Послушайте мнение заказчиков о результатах нашей работы
            .section-content
                app-review-slider(:content="reviewContent")




    section.section(style="background: url(/img/training-stoimost.jpg) no-repeat center/cover;")
        .container
            .section-heading.section-heading_white
                h4.section-heading__title СТОИМОСТЬ
                p.section-heading__subtitle
                    | Тимбилдинг Йога смеха – это лучшее предложение
                    br
                    | на рынке корпоративных мероприятий!
            .section-content
                app-pricing(:pricingItems="pricingItems")
    
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
            usefulContent: [{
                    background: '/img/roter-training-target.jpg',
                    frontTitle: 'Цель',
                    backTitle: 'На семинаре',
                    backText: 'Вы узнаете игровые техники, основанные на смехотерапии, которые помогут вам в работе с людьми, страдающими депрессией, стрессами и психологическим выгоранием.'
                },
                {
                    background: '/img/roter-training-who.jpg',
                    frontTitle: 'Для кого',
                    backTitle: 'На семинаре',
                    backText: 'Вы сможете повысить вовлеченность и внутреннюю мотивацию сотрудников, а также сформировать позитивный климат в компании.'
                },
                {
                    background: '/img/roter-training-format.jpg',
                    frontTitle: 'Формат',
                    backTitle: 'На семинаре',
                    backText: 'Вы получите практические инструменты и упражнения для личностного роста ваших клиентов и сможете повысить свою компетенцию.'
                },
                {
                    background: '/img/roter-training-equip.jpg',
                    frontTitle: 'Оборудование',
                    backTitle: 'На семинаре',
                    backText: 'Вы овладеете оздоровительной гимнастикой, которая прошла клинические испытания и пользуется популярностью во всем мире.'
                },
            ],
            businessMainContent: {
                alignRight: false,
                background: '/img/for-b-main.jpg',
                note: 'ЭФФЕКТИВНЫЕ ИНСТРУМЕНТЫ <br> ДЛЯ БИЗНЕСА, ОСНОВАННЫЕ <br> НА СМЕХОПРАКТИКАХ',
                title: 'БИЗНЕС-ТРЕНИНГИ',
                subtitle: 'Посмотрите короткий ролик с выступлений',
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                callToAction: {
                    formTitle: 'Заказать бизнес-тренинг',
                    buttonText: 'Связаться'
                }
            },
            themeBenefits: [{
                    img: '/img/emmo-thumb.png',
                    title: 'Эмоциональный интеллект от А до Я',
                },
                {
                    img: '/img/training_mozg.png',
                    title: 'Мозг, эмоции, гормоны. Как все работает',
                },
                {
                    img: '/img/training_antistress.png',
                    title: 'Антистресс, как не сгореть на работе',
                },
                {
                    img: '/img/training_prod.png',
                    title: 'Как продавать эмоции и создавать настроение',
                },
                {
                    img: '/img/training_comanda.png',
                    title: 'Как превратить коллектив в команду единомышленников',
                },
            ],
            expertContent: {
                alignRight: false,
                background: '/img/training_mnenie_bg.jpg',
                note: 'МНЕНИЕ ПРЕПОДАВАТЕЛЯ <br> СТЭНДФОРДСКОГО УНИВЕРСИТЕТА <br> ЭРИКА ЦИЦУЛИНА О РОЛИ <br> СМЕХА В БИЗНЕСЕ',
                title: 'МНЕНИЕ ЭКСПЕРТА',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/oHSJy0DzQaI?list=PLVQ75ZuC0ayDe1FPuqWroWouQ_1bQ1dAH',
                callToAction: {
                    formTitle: 'Заказать бизнес-тренинг',
                    buttonText: 'Заказать тренинг'
                }
            },
            freeContent: {
                alignRight: false,
                background: '/img/freeContent.jpg',
                note: 'ПРИГЛАШАЕМ ВАШЕГО <br> РУКОВОДИТЕЛЯ ИЛИ HRD <br> НА БЕСПЛАТНОЕ ЗАНЯТИЕ <br> И КОНСУЛЬТАЦИЮ.',
                title: 'БЕСПЛАТНое <br> занятие',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                callToAction: {
                    formTitle: 'Записаться на бизнес-тренинг',
                    buttonText: 'Записаться'
                }
            },
            aboutTraning: [
                {
                    img: '/img/benefit_motivation.png',
                    title: 'Мотивация',
                },
                {
                    img: '/img/benefit_up.png',
                    title: 'Личностный рост',
                },
                {
                    img: '/img/benefit_effect.png',
                    title: 'Эффективность',
                },
                {
                    img: '/img/benefit_brain.png',
                    title: 'Психологическая разгрузка',
                },
                {
                    img: '/img/benefit_company.png',
                    title: 'Лояльность к компании',
                },
            ],
            businessSmileContent: {
                alignRight: false,
                background: '/img/training_business_smile.jpg',
                note: null,
                title: 'ТРЕНИНГ <br> «БИЗНЕС С УЛЫБКОЙ» <br> В КОМПАНИИ КИВИ',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/oHSJy0DzQaI?list=PLVQ75ZuC0ayDe1FPuqWroWouQ_1bQ1dAH',
                callToAction: null
            },
            pricingItems: [
                {
                    type: 'text',
                    title: 'ПРИХОДЯЩИЙ ТРЕНЕР',
                    text: 'К вам в офис будет приходить профессиональный тренер по Йоге смеха и проводить смехозарядки',
                    cost: 'от 3000 рублей'
                },
                {
                    type: 'text',
                    title: 'ОБУЧЕНИЕ ТРЕНЕРА',
                    text: 'Мы обучим для вас вашего собственного тренера по Йоге смеха и он/она будет проводить для вас смехозарядки.',
                    cost: '15000 рублей'
                },
                {
                    type: 'text',
                    title: 'СОПРОВОЖДЕНИЕ ТРЕНЕРА',
                    text: 'Мы будем расписывать для вашего тренера еженедельные программы упражнений и консультировать по вопросам.',
                    cost: '10000 рублей в месяц'
                },
            ],
            reviewContent: [
                {
                    img: '/img/opinion01.jpg',
                    name: 'Виктория Бехтерева',
                    text: 'руководитель форума <br> "Бизнес со смыслом"',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion02.jpg',
                    name: 'Юлия Кривопустова',
                    text: 'руководитель форума <br> Organic Woman',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion03.jpg',
                    name: 'Андрей Вебер',
                    text: 'руководитель форума <br> День Счастья в Сколково',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
</style>
