<template lang="pug">
    .review-video
        a.review-video__link(:href="content.videoSrc" data-fancybox)
            .review-video__image-wrapper
                img(:src="content.img" alt="content.name")
                .review-video__overlay
            .review-video__content
                h5.review-video__title {{content.name}}
                p.review-video__text.text-overflow(v-html="content.text")
</template>

<script>
export default {
	props: ['content']
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.review-video {
	padding: 15px;
	&__link {
		display: block;
		border-radius: 7px;
		overflow: hidden;
		box-shadow: 1px 7px 10px 0 rgba(0, 0, 0, 0.1);
		background: #fff;
		position: relative;
		text-align: center;
		&:hover {
			.review-video__overlay {
				opacity: 1;
			}
		}
	}
	&__image-wrapper {
		position: relative;
		z-index: 1;
	}
	&__overlay {
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba($c-orange, 0.8);
		transition: 0.25s ease;
		opacity: 0;
		&:after {
			content: "";
			position: absolute;
			width: 60px;
			height: 60px;
			background: url(/img/play.png) no-repeat 50% / cover;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	&__content {
		padding: 30px 15px;
	}
	&__title {
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 5px;
	}
	&__text {
		font-size: 14px;
		font-weight: 400;
		line-height: 1.6;
		height: 44px;
		overflow: hidden;
		color: #909090;
	}
}
</style>
