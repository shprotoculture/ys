<template lang="pug">
    .topic-item
        .topic-item__heading {{topic.title}}
        .topic-item__content(:style="{backgroundImage: 'url(' + topic.background + ')'}")
            ul.topic-item__list
                li.topic-item__item(v-for="(item, i) in topic.list" :key="i")
                    span.topic-item__text {{item}}
</template>

<script>
export default {
    props: ['topic']
}
</script>

<style lang="scss">
.topic-item {
	background: #fff;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 1px 8px 20px 0 rgba(0, 0, 0, 0.15);
	height: 100%;
	&__heading {
		text-align: center;
		text-transform: uppercase;
		font-size: 24px;
		color: #fff;
		background: #074c84;
		padding: 15px;
	}
	&__content {
		padding: 40px 30px;
		overflow: hidden;
		background-position: 100%;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&__list {
		padding-left: 15px;
	}
	&__item {
		list-style: disc;
		color: #fcac45;
		margin-bottom: 25px;
	}
	&__text {
		color: #5a5a5a;
		font-size: 16px;
	}
}
</style>
