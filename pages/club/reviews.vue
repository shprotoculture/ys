<template lang="pug">
main.main
    section
        app-intro(:content="introContent")
    section.section
        .container
            app-review-slider(:content="reviewContent")
    section.section
        .container
            app-primary-form(:type="'callback'")
</template>

<script>
import AppIntro from '~/components/others/AppIntro';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
export default {
    layout: 'club',
    head: {
        title: 'Тренеры | Йога смеха'
    },
    components: {
        AppPrimaryForm,
        AppIntro,
        AppReviewSlider
    },
    data() {
        return {
            introContent: {
                background: '/img/club-reviews.jpg',
                title: 'Отзывы',
                subtitle: 'Посмотрите короткие отзывы от наших «харрррррррашистов»'
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
            ]
        }
    }
}
</script>

<style lang="scss">
</style>
