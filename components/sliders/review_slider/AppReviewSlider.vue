<template lang="pug">
.slider-review
    div(v-swiper:swiperReviews="swiperReviewsOptions")
        .swiper-wrapper
            .swiper-slide(v-for="(slide, index) in content" :key="index")
                app-review-item(:content="slide")
    .slider-review__control.slider-review__control_next
        i.fal.fa-chevron-right
    .slider-review__control.slider-review__control_prev
        i.fal.fa-chevron-left
</template>

<script>
import AppReviewItem from '~/components/sliders/review_slider/AppReviewItem';
export default {
    components: {
        AppReviewItem
    },
    props: ['content'],
    data() {
        return {
            swiperReviewsOptions: {
                slidesPerView: 3,
                watchOverflow: true,
                navigation: {
                    nextEl: '.slider-review__control_next',
                    prevEl: '.slider-review__control_prev',
                }
            },
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.slider-review {
	position: relative;

	&__control {
		position: absolute;
		z-index: 20;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		border-radius: 100%;
		background: $c-orange;
		color: #fff;
		box-shadow: 0 0 7px rgba(#000, 0.2);
		text-align: center;
		line-height: 50px;
		font-size: 20px;
		cursor: pointer;

		&_next {
			right: -50px;
		}

		&_prev {
			left: -50px;
		}
	}
}
</style>
