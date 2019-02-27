<template lang="pug">
    main.main
        section.section
            .container
                .thanks
                    .thanks__content
                        .thanks__logo
                            img(src="/img/logo.png" alt="Йога смеха")
                        .thanks__text {{text}}
                        nuxt-link.thanks__link(to="/") Вернуться на главную
</template>

<script>
export default {
    computed: {
        text() {
            return this.$cookies.get('thanksType') === 'book' ? 'Спасибо за участие в опросе!' : 'Спасибо, мы скоро с Вами свяжемся!';
        }
	}
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.thanks {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 768px;
	&__content {
		text-align: center;
	}
	&__logo {
		margin-bottom: 15px;
	}
	&__text {
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 10px;
	}
	&__link {
		font-size: 18px;
		font-weight: 600;
		color: $c-blue;
		text-decoration: underline;
	}
}
</style>
