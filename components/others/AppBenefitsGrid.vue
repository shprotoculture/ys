<template lang="pug">
    .benefit-grid
        .benefit-item.p-15(v-for="(benefit, i) in benefits" :key="i" :style="{'max-width': (100 / benefits.length) + '%', 'flex': '0 0 ' + (100 / benefits.length) + '%'}")
            .benefit-item__image-wrapper
                img(:src="benefit.img" :alt="benefit.title")
            .benefit-item__content
                h5.benefit-item__title {{benefit.title}}
                p.benefit-item__text {{benefit.text}}
</template>

<script>
export default {
    props: ['benefits']
}
</script>

<style lang="scss">
.benefit-grid {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}

.benefit-item {
	text-align: center;
	&__title {
		font-size: 20px;
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 15px;
	}
	&__text {
		color: #707070;
		font-size: 14px;
	}
}
</style>
