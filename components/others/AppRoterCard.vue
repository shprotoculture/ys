<template lang="pug">
    .roter-card
        .roter-card__front(:style="{backgroundImage: 'url(' + content.background + ')'}")
            .roter-card__front-title {{content.frontTitle}}
        .roter-card__back
            .roter-card__back-title {{content.backTitle}}
            .roter-card__back-text {{content.backText}}
</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.roter-card {
	position: relative;
	perspective: 1000px;
	&__front {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		backface-visibility: hidden;
		transition: all 0.5s;
		perspective: 1000px;
		border-radius: 8px;
		overflow: hidden;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
		text-align: center;
		&-title {
			font-size: 36px;
			font-weight: 400;
			color: #fff;
			position: relative;
			&:after {
				content: "\F175";
				font-family: "Font Awesome 5 Pro";
				font-weight: 100;
				font-size: 24px;
				position: absolute;
				top: 100%;
				left: 50%;
				transform: translate3d(-50%, 0, 0);
				margin-top: 5px;
			}
		}
	}
	&__back {
		padding: 60px 30px;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		transition: all 0.5s;
		transform: rotateY(180deg);
		height: 300px;
		background: #fff;
		box-shadow: 0 23px 33px 0 rgba(0, 0, 0, 0.07);
		perspective: 1000px;
		border-radius: 8px;
		&-title {
			font-size: 24px;
			margin-bottom: 15px;
		}
	}
	&:hover {
		.roter-card__back {
			transform: rotateY(0deg);
		}
		.roter-card__front {
			transform: rotateY(-180deg);
		}
	}
}
</style>
