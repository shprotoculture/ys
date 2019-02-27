<template lang="pug">
.feature
    .feature-bg
        img(:src="content.background")
    .feature-overlay
        .container
            .feature-content(:class="{'feature-content_right': content.alignRight}")
                .feature-content__note(v-html="content.note" v-if="content.note" :class="{'feature-content__note_left': !content.alignRight, 'feature-content__note_right': content.alignRight}")
                .feature-content__title(v-html="content.title" v-if="content.title")
                .feature-content__subtitle(v-html="content.subtitle" v-if="content.subtitle")
                .feature-content__video(v-if="content.hasVideo")
                    a.feature-content__video-link(:href="content.videoSrc" data-fancybox) Смотреть видео
                .feature-content__benefits(v-if="content.benefits")
                    .feature-content__benefits-item(v-for="(item, i) in content.benefits" :key="i")
                        .feature-content__benefits-img
                            img(:src="item.img")
                        .feature-content__benefits-text(v-html="item.text")
                .feature-content__call-to-action(v-if="content.callToAction")
                    button.button.button_primary.button_large.button_uc(type="button" @click.prevent="openModalForm(content.callToAction.formTitle)") {{content.callToAction.buttonText}}
                .feature-content__anchor(v-if="content.hasAnchor")
                    button.button.button_primary.button_large.button_uc(type="button" @click.prevent="anchor($event, content.anchorURL)") {{content.anchorText}}
                .feature-content__internal(v-if="content.hasInternalLink")
                    nuxt-link.feature-content__internal-link.button.button_primary.button_large.button_uc(:to="content.internalLink") {{ content.internalLinkText }}
</template>

<script>
import $ from 'jquery';
export default {
    props: ['content'],
    methods: {
        openModalForm(title) {
            this.$store.commit('modalForm/openModalForm');
            this.$store.commit('modalForm/changeFormTitle', title);
        },
        anchor(e, anchorURL) {
            let top = $(anchorURL).offset().top;
            $('html, body').animate({
                scrollTop: top
            }, 500)
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.feature {
	position: relative;
}

.feature-bg {
	position: relative;
	z-index: 1;
}

.feature-overlay {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.feature-content {
	color: #fff;

	&__internal {
		margin-top: 60px;
	}

	&_right {
		text-align: right;
	}

	&__note {
		font-size: 22px;
		font-weight: 400;
		font-style: italic;
		letter-spacing: -1px;
		line-height: 25px;
		margin-bottom: 70px;
		text-transform: uppercase;

		&-paragraph {
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
		}

		&_left {
			padding-left: 10px;
			border-left: 5px solid $c-orange;
		}

		&_right {
			padding-right: 10px;
			border-right: 5px solid $c-orange;
		}
	}

	&__title {
		font-size: 48px;
		font-family: Comfortaa, Arial, Helvetica, sans-serif;
		text-transform: uppercase;
		line-height: 1.2;
	}

	&__subtitle {
		font-size: 24px;
		font-weight: 300;
		letter-spacing: -1px;
		line-height: 1.4;
		margin-top: 30px;
	}

	&__video {
		margin-top: 15px;

		&-link {
			font-size: 22px;
			font-style: italic;
			display: inline-block;
			text-decoration: underline;
			padding-left: 29px;
			position: relative;
			color: #fff;

			&:after {
				content: "";
				width: 24px;
				height: 24px;
				background: url(/img/play-icon.png) no-repeat 50% / cover;
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 0;
				margin-top: -12px;
			}
		}
	}

	&__call-to-action {
		margin-top: 30px;
	}

	&__benefits {
		display: flex;
		margin-top: 60px;

		&-item {
			display: flex;
			margin-right: 60px;
		}

		&-img {
			max-width: 43px;
			flex: 0 0 43px;
		}

		&-text {
			padding-left: 15px;
			font-size: 16px;
			color: #fff;
		}
	}

	&__anchor {
		margin-top: 60px;
	}
}
</style>
