<template lang="pug">
    .main-nav
        ul.main-nav__list
            li.main-nav__item(v-for="(navLink, index) in navLinks" :key="index")
                nuxt-link.main-nav__link(:to="navLink.to" :exact="navLink.exact") {{navLink.title}}
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState({
            navLinks: state => state.header.navLinks
        })
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.main-nav {
	&__list {
		display: flex;
		align-items: center;
	}
	&__item {
		margin-left: 30px;
	}
	&__link {
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase;
		color: #000;
		display: inline-block;
		position: relative;
		padding: 7px 0;
		transition: 0.25s ease;
		&:after {
			content: "";
			display: block;
			width: 100%;
			height: 3px;
			background: $c-orange;
			bottom: 0;
			left: 0;
			position: absolute;
			transition: 0.25s ease;
			transform-origin: center;
			transform: scaleX(0);
		}
		&.nuxt-link-active {
			color: $c-orange;
			&:after {
				transform: scaleX(1);
			}
		}
		&:hover {
			color: $c-orange;
		}
	}
}
</style>
