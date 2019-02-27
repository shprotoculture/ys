<template lang="pug">
div.slider-feature(v-swiper:swiperFeature="swiperFeatureOptions")
    .swiper-wrapper
        .swiper-slide(v-for="(slide, i) in slides" :key="i")
            app-feature(:content="slide")
    .slider-feature__control.slider-feature__control_next(v-if="slides.length > 1")
        i.fas.fa-chevron-circle-right
    .slider-feature__control.slider-feature__control_prev(v-if="slides.length > 1")
        i.fas.fa-chevron-circle-left
    .slider-feature__pagination.swiper-pagination(v-if="slides.length > 1")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
export default {
    props: ['slides'],
    components: {
        AppFeature
    },
    data() {
        return {
            swiperFeatureOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.slider-feature__control_next',
                    prevEl: '.slider-feature__control_prev',
                },
                pagination: {
					el: '.swiper-pagination',
					clickable: true
                },
            },
        }
    }
}
</script>

<style lang="scss">
.slider-feature {
	position: relative;

	&__control {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 36px;
		color: #fff;
		z-index: 20;
		cursor: pointer;

		&.swiper-button-disabled {
			opacity: 0.5;
		}

		&_next {
			right: 2%;
		}

		&_prev {
			left: 2%;
		}
	}

	&__pagination {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;

		.swiper-pagination-bullet {
			width: 15px;
			height: 15px;
			margin: 0 15px !important;
			cursor: pointer;
			background: #fff;
		}
	}
}
</style>
