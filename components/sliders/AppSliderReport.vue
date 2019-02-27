<template lang="pug">
div.slider-report(v-swiper:swiperNewsReport="swiperNewsReportOptions")
    .swiper-wrapper
        .swiper-slide(v-for="(slide, i) in slides" :key="i")
            .slider-report__item
                a.slider-report__link(:href="slide.link")
                    .slider-report__image-wrapper
                        img.slider-report__img(:src="slide.img")
                    .slider-report__desc(v-html="slide.title")
    .slider-report__control.slider-report__control_next
        i.fal.fa-chevron-right
    .slider-report__control.slider-report__control_prev
        i.fal.fa-chevron-left
</template>

<script>
export default {
    props: ['slides'],
    data() {
        return {
            swiperNewsReportOptions: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.slider-report__control_next',
                    prevEl: '.slider-report__control_prev',
                }
            },
        }
    }
}
</script>

<style lang="scss">
.slider-report {
	position: relative;

	&__link {
		display: block;
	}

	&__item {
		overflow: hidden;
		position: relative;

		&:hover {
			.slider-report__desc {
				transform: translateY(0);
			}
		}
	}

	&__desc {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		padding: 30px;
		transition: 0.25s ease;
		transform: translateY(100%);
		font-family: "Comfortaa", "Open sans", Arial, Helvetica, sans-serif;
		font-size: 18px;
		font-weight: 700;
	}

	&__image-wrapper {
		position: relative;
	}

	&__control {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		color: #fff;
		z-index: 20;
		cursor: pointer;
		background: rgba(#000, 0.5);
		opacity: 0;
		transition: 0.25s ease;

		&.swiper-button-disabled {
			display: none;
		}

		&_next {
			right: 0;
		}

		&_left {
			left: 0;
		}

		&:hover {
			opacity: 1;
		}
	}
}
</style>
