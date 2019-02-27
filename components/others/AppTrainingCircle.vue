<template lang="pug">
    .training-item
        nuxt-link.training-item__link(:to="content.to")
            .training-item__image-wrapper
                img(:src="content.img" :alt="content.title")
            .training-item__content {{content.title}}
</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.training-item {
	max-width: 290px;
	margin: 0 auto;
	text-align: center;
	&__link {
		display: block;
	}
	&__image-wrapper {
		position: relative;
		border-radius: 100%;
		overflow: hidden;
		border: 5px solid $c-orange;
		margin-bottom: 15px;
		&:after {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgba($c-orange, 0.4);
			border-radius: 100%;
			transition: 0.15s ease;
			opacity: 0;
		}
	}
	&__content {
		font-size: 20px;
		font-weight: 600;
		text-transform: uppercase;
	}
	&:hover {
		.training-item__image-wrapper {
			&:after {
				opacity: 1;
			}
		}
	}
}
</style>
