<template lang="pug">
.benefit-nums
    .benefit-nums-grid.row.justify-content-center
        .p-15(v-for="(benefit, i) in benefits" :key="i" :class="options.wrapperCls")
            .benefit-nums-item(:class="options.innerCls")
                .benefit-nums-item__image-wrapper
                    img(:src="benefit.img" :alt="benefit.title")
                .benefit-nums-item__content
                    h5.benefit-nums-item__title(v-html="benefit.title")
                    p.benefit-nums-item__text {{benefit.text}}
                .benefit-nums-item__number {{'0'+ (i + 1)}}
</template>

<script>
export default {
    props: ['benefits', 'options']
}
</script>

<style lang="scss">
.benefit-nums {
	margin: 0 auto;
	padding: 0 150px;
}
.benefit-nums-item {
	background: #fff;
	position: relative;
	max-width: 300px;
	margin: 0 auto;
	&__image-wrapper {
		max-width: 96px;
		flex: 0 0 96px;
		margin-bottom: 20px;
		position: relative;
		z-index: 2;
	}

	&__content {
		position: relative;
		z-index: 2;
	}

	&__title {
		font-size: 20px;
		font-weight: 400;
		margin-bottom: 30px;
		line-height: 1;
	}

	&__text {
		color: #707070;
		font-size: 14px;
		line-height: 1.6;
	}
	&__number {
		font-family: "Oswald", Arial, Helvetica, sans-serif;
		font-size: 140px;
		font-weight: 200;
		color: #f7f7f7;
		position: absolute;
		z-index: 1;
		top: 30px;
		right: 0;
		line-height: 1;
		user-select: none;
	}
}
</style>
