<template lang="pug">
    .header-logo
        nuxt-link.header-logo__link(to="/")
            img.header-logo__image(src="/img/logo.png" alt="Сайт йоги смеха")
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-logo {
	max-width: 72px;
	flex: 0 0 72px;
	&__link {
		display: block;
	}
}
</style>
