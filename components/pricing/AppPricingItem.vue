<template lang="pug">
.pricing-item(:class="{'pricing-item_full': pricingItem.full === true}")
    .pricing-item__heading
        h5.pricing-item__heading-title {{pricingItem.title}}
        .pricing-item__heading-price(v-if="pricingItem.headingOldPrice || pricingItem.headingCurrentPrice")
            span.pricing-item__heading-price_old {{pricingItem.headingOldPrice}}
            span.pricing-item__heading-price_current {{pricingItem.headingCurrentPrice}}
    .pricing-item__body
        .pricing-item__text(v-if="pricingItem.text") {{pricingItem.text}}
        ul.pricing-item__list(v-if="pricingItem.list")
            li.pricing-item__list-item(v-for="(item, i) in pricingItem.list") {{item}}
        button.button.button_primary.button_uc.button_fluid(type="button" @click.prevent="openModalForm('ТАРИФ ' + pricingItem.title)" v-if="pricingItem.callToAction") Выбрать
    .pricing-item__cost(v-if="pricingItem.cost") {{pricingItem.cost}}
</template>

<script>
export default {
	props: ['pricingItem'],
	methods: {
		openModalForm(title) {
			this.$store.commit('modalForm/openModalForm');
			this.$store.commit('modalForm/changeFormTitle', title);
		}
	}
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.pricing-item {
	text-align: center;
	border-radius: 7px;
	box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	background: #fff;

	&_full {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	&__heading {
		padding: 20px 60px;
		color: #fff;
		background: #074c84;

		&-title {
			font-size: 24px;
			font-weight: 600;
			text-transform: uppercase;
		}

		&-price {
			&_old {
				font-size: 18px;
				font-weight: 400;
				text-decoration: line-through;
				color: #3c8dcf;
				display: inline-block;
				padding-right: 5px;
			}

			&_current {
				font-size: 24px;
				font-weight: 500;
			}
		}
	}

	&__body {
		padding: 40px 40px;
		color: #222;
		font-size: 16px;
		font-weight: 400;
	}

	&__cost {
		padding: 20px 60px;
		border-top: 1px solid #e5e5e5;
		font-size: 18px;
		font-weight: 600;
	}

	&__list {
		margin-bottom: 30px;
		&-item {
			font-size: 18px;
			letter-spacing: -1px;
			margin-bottom: 5px;
		}
	}
}
</style>
