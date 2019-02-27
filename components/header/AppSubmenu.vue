<template lang="pug">
.submenu
        .container
            ul.submenu__list
                li.submenu__item(v-for="(link, i) in links" :key="i")
                    nuxt-link.submenu__link(:to="link.to") {{link.title}}
                    ul.submenu__lvl-2(v-if="link.submenu")
                        li.submenu__lvl-2-item(v-for="(submenu, k) in link.submenu" :key="k")
                            nuxt-link.submenu__lvl-2-link(:to="submenu.to") {{submenu.title}}
</template>

<script>
export default {
    props: ['links'],
    methods: {}
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.submenu {
	width: 100%;
	position: relative;
	z-index: 70;
	border-bottom: 1px solid #e5e5e5;
	&__list {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	&__item {
		position: relative;
		margin-right: 30px;
		&:hover {
			.submenu__lvl-2 {
				display: block;
			}
		}
	}
	&__link {
		display: block;
		height: 60px;
		line-height: 60px;
		font-size: 14px;
		font-weight: 600;
		&.nuxt-link-active {
			color: #f7a936;
		}
	}
	&__lvl-2 {
		position: absolute;
		left: 0;
		top: 100%;
		background: #fff;
		z-index: 20;
		min-width: 200px;
		margin-top: 1px;
		border: 1px solid #e5e5e5;
		border-top: none;
		display: none;
		&-link {
			font-size: 14px;
			font-weight: 600;
			display: block;
			padding: 15px;
			&.nuxt-link-active {
				color: #f7a936;
			}
		}
	}
}
</style>
