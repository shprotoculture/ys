<template lang="pug">
main.main
    section
        app-feature(:content="forumMainContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title ТЕМЫ ВЫСТУПЛЕНИЙ
                p.section-heading__subtitle Главная тема выступлений — это то, как обрести счастье, через практику смеха.
            .section-content
                .row
                    .col-4.p-15(v-for="(topic, i) in topics" :key="i")
                        app-topic-item(:topic="topic")
    section
        app-feature-slider(:slides="featureSlides")
    section.section
        .container
            .section-heading
                h4.section-heading__title ПРЕИМУЩЕСТВА ВЫСТУПЛЕНИЙ
                p.section-heading__subtitle
                    | Все выступления Дмитрия включают выполнение практических упражнений на смех, что позволяет зарядить слушателей позитивом и поднять настроение.
            .section-content
                app-benefits-grid(:benefits="profitBenefits")
    section.section.section_grey
        .container
            .section-heading
                h4.section-heading__title МНЕНИЕ УЧАСТНИКОВ
                p.section-heading__subtitle Послушайте короткие отзывы организаторов и гостей различных форумов о Дмитрие.
            .section-content
                app-review-slider(:content="reviewContent")
    section.section
        .container
            app-primary-form(:type="'callback'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppTopicItem from '~/components/others/AppTopicItem';
import AppFeatureSlider from '~/components/sliders/AppFeatureSlider';
import AppBenefitsGrid from '~/components/others/AppBenefitsGrid';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
export default {
    layout: 'services',
    head: {
        title: 'Форумы | Йога смеха'
    },
    components: {
        AppFeature,
        AppTopicItem,
        AppFeatureSlider,
        AppBenefitsGrid,
        AppReviewSlider,
        AppPrimaryForm
    },
    data() {
        return {
            forumMainContent: {
                alignRight: false,
                background: '/img/forum-main-bg.jpg',
                note: 'ОДИН ИЗ САМЫХ ЯРКИХ <br> И ЗАПОМИНАЮЩИХСЯ <br> СПИКЕРОВ РОССИИ',
                title: 'ДМИТРИЙ ЕФИМОВ',
                subtitle: 'Посмотрите короткий ролик с выступлений',
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/mY2UxbhK19g?list=PLVQ75ZuC0ayAmN6OPZbKrcIq__EZs1uuN',
                callToAction: {
                    formTitle: 'Запросить резюме',
                    buttonText: 'Запросить резюме'
                }
            },
            topics: [
                {
                    title: 'БИЗНЕС',
                    list: [
                        'Как бороться с эмоциональным выгоранием',
                        'Мотивация сотрудников',
                        'Командообразование и вовлеченность',
                        'Корпоративная культура счастья',
                        'Смехозарядки на производстве',
                    ],
                    background: '/img/case.jpg'
                },
                {
                    title: 'ЛИЧНОСТНЫЙ РОСТ',
                    list: [
                        'Эмоциональный интеллект',
                        'Мозг и гормоны, как все работает',
                        'Смех для здоровья и счастья',
                        'Смейся и худей',
                        'Как перестать бояться и начать жить',
                        'Удовольствие. Радость. Счастье',
                    ],
                    background: '/img/dimond.jpg'
                },
                {
                    title: 'ГОСУДАРСТВО',
                    list: [
                        'Гелотология – наука о смехе',
                        'Смехо-практики в медицине, туризме, образовании, менеджменте',
                        'Школа оптимистов',
                        'Доктор смех – социальный проект',
                        'Счастье граждан, как главная задача Государства.',
                    ],
                    background: '/img/bank.jpg'
                },
            ],
            featureSlides: [
                {
                    alignRight: false,
                    background: '/img/business-forum-bg.jpg',
                    note: null,
                    title: 'Выступление на <br> III международном <br> Stand-Up-форум <br> БИЗНЕС СО СМЫСЛОМ',
                    subtitle: null,
                    hasVideo: true,
                    videoSrc: 'https://www.youtube.com/embed/ZNgVTj5PAvA',
                    callToAction: {
                        formTitle: 'Связаться с Дмитрием',
                        buttonText: 'Связаться'
                    }
                },
            ],
            profitBenefits: [
                {
                    img: '/img/simple.png',
                    title: 'Простота',
                    text: 'Простота и доступность изложения'
                },
                {
                    img: '/img/examples.png',
                    title: 'Примеры',
                    text: 'Разбор конкретных жизненных примеров'
                },
                {
                    img: '/img/prac.png',
                    title: 'Практика',
                    text: 'Выполнение практических методик прямо на форуме'
                },
                {
                    img: '/img/motivation.png',
                    title: 'Мотивация',
                    text: 'Высокий уровень мотивации'
                },
                {
                    img: '/img/energy.png',
                    title: 'Энергия',
                    text: 'Эмоциональная разгрузка и заряд энергии участников'
                },
            ],
            reviewContent: [{
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
            ],
        }
    }
}
</script>

<style lang="scss">
</style>
