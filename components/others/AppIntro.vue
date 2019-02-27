<template lang="pug">
    .intro
        .intro__image-wrapper
            img(:src="content.background" alt="content.title")
        .intro__content
            h2.intro__title {{content.title}}
            p.intro__subtitle {{content.subtitle}}
</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="scss">
.intro {
	position: relative;
	&__image-wrapper {
		position: relative;
		z-index: 1;
	}
	&__content {
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
		text-align: center;
		color: #fff;
		padding: 90px 0;
	}
	&__title {
		font-size: 48px;
		font-weight: 400;
		font-family: Comfortaa, Arial, Helvetica, sans-serif;
		text-transform: uppercase;
		line-height: 1.2;
	}
	&__subtitle {
		font-size: 20px;
		font-weight: 300;
		margin-top: 15px;
	}
}
</style>
