<template lang="pug">
.benefit-square-grid.row
    .col-6.p-15(v-for="(benefit, i) in benefits" :key="i")
        .benefit-square-item
            .benefit-square-item__image-wrapper
                img(:src="benefit.img" :alt="benefit.title")
            .benefit-square-item__content
                h5.benefit-square-item__title {{benefit.title}}
                p.benefit-square-item__text {{benefit.text}}
</template>

<script>
export default {
    props: ['benefits']
}
</script>

<style lang="scss">
.benefit-square-item {
	width: 100%;
	height: 180px;
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 6px;
	box-shadow: 0px 23px 33px 0px rgba(0, 0, 0, 0.07);
	padding: 30px;
	&__image-wrapper {
		max-width: 96px;
		flex: 0 0 96px;
	}
	&__content {
		padding-left: 30px;
	}
	&__title {
		font-size: 20px;
		font-weight: 400;
		margin-bottom: 30px;
	}
	&__text {
		color: #707070;
		font-size: 14px;
	}
}
</style>
