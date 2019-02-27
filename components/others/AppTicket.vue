<template lang="pug">
.row
	.col-6.p-15
		.ticket
			.ticket__inner
				.ticket__price 1 000 ₽
				.ticket__sub Скидки:
				.ticket__sale
					span.ticket__sale-item 1 + 1 - 20%
					span.ticket__sale-item 1 + 2 - 30%
					span.ticket__sale-item 1 + 4 - 40%
			.ticket__label 1 ЗАНЯТИЕ
	.col-6.p-15
		.ticket
			.ticket__inner
				.ticket__price
					| 2 500 ₽
					span.ticket__price-sum +
					span.ticket__price-img
						img(src="/img/price-smile.png")
				.ticket__sub мячик антистресс в подарок
				.ticket__text Абонемент действителен на текущий месяц с момента покупки.
			.ticket__label 4 ЗАНЯТИЯ
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.ticket {
	background: #fff;
	display: block;
	padding: 10px;
	border-radius: 5px;
	position: relative;
	height: 100%;

	&__inner {
		height: 100%;
		border: 2px solid #e8e8e8;
		border-radius: 5px;
		padding: 40px 60px 10px;
		text-align: center;
	}
	&__price {
		font-size: 70px;
		font-weight: 600;
		white-space: nowrap;
		&-sum {
			display: inline-block;
			padding: 0 10px;
		}
	}
	&__sub {
		font-size: 18px;
		margin-bottom: 20px;
	}
	&__sale {
		white-space: nowrap;
		&-item {
			display: inline-block;
			padding: 0 10px;
			border-right: 1px solid #e8e8e8;
			&:last-child {
				border: none;
			}
		}
	}
	&__text {
		font-size: 14px;
		font-weight: 400;
	}
	&__label {
		white-space: nowrap;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		font-family: Comfortaa, Arial, Helvetica, sans-serif;
		text-transform: uppercase;
		padding: 15px 30px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		z-index: 2;
		border-radius: 0 0 5px 5px;
		background: #fcac45;
		box-shadow: 0 5px 11.52px 0.48px rgba(0, 0, 0, 0.13);
	}
}
</style>
