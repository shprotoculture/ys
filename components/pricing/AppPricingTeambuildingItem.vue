<template lang="pug">
    .teambuilding-pricing-item
        .teambuilding-pricing-item__heading
            h5.teambuilding-pricing-item__heading-title {{pricingItem.title}}
            p.teambuilding-pricing-item__heading-subtitle {{pricingItem.subtitle}}
        .teambuilding-pricing-item__content
            ul.teambuilding-pricing-item__list
                li.teambuilding-pricing-item__list-item(v-for="(item, i) in pricingItem.list" :key="i")
                    .teambuilding-pricing-item__list-item-image
                        img(:src="item.img")
                    .teambuilding-pricing-item__list-item-text {{item.text}}
        .teambuilding-pricing-item__btm
            .teambuilding-pricing-item__cost {{pricingItem.cost}}
            .teambuilding-pricing-item__minimal(v-html="pricingItem.minimal")

        
</template>

<script>
export default {
    props: ['pricingItem'],
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.teambuilding-pricing-item {
	background: #fff;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.15);
	&__heading {
		text-align: center;
		padding: 20px 15px;
		color: #fff;
		background: #074c84;
		&-title {
			font-size: 24px;
			font-weight: 600;
			text-transform: uppercase;
		}
		&-subtitle {
			font-size: 18px;
			font-weight: 400;
			color: #4997d7;
		}
	}
	&__list {
		&-item {
			padding: 10px 30px;
			border-bottom: 1px solid #e5e5e5;
			display: flex;
			align-items: center;
			&-text {
				padding-left: 15px;
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
	&__btm {
		text-align: center;
		padding: 15px 30px;
	}
	&__cost {
		font-size: 24px;
		font-weight: 600;
	}
	&__minimal {
		font-size: 16px;
		font-weight: 400;
		color: #909090;
	}
}
</style>
