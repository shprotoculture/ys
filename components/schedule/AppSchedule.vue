<template lang="pug">
.schedule
    .row
        .col-5.p-0
            .schedule__item.p-15(v-for="(item, i) in schedule.items" :key="i")
                .schedule__item-img
                    img(:src="item.img")
                .schedule__item-content
                    .schedule__item-title {{item.title}}
                    .schedule__item-text(v-for="(text, k) in item.texts" :key="k") {{text}}
        .col-7.p-0
            app-schedule-map(:eventCords="schedule.coords")
</template>

<script>
import AppScheduleMap from '~/components/schedule/AppScheduleMap';
export default {
    components: {
        AppScheduleMap
	},
	data() {
		return {
		}
	},
    props: ['schedule']
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.schedule {
	// max-width: 900px;
	margin: 0 auto;
	.vpd-input-group {
		display: none;
	}
	&__item {
		display: flex;
		margin-bottom: 15px;

		&:last-child {
			margin-bottom: 0;
		}

		&-content {
			padding-left: 30px;
		}

		&-title {
			font-size: 20px;
			font-weight: 600;
		}

		&-text {
			margin-top: 15px;
			font-size: 18px;
		}
	}
}
</style>
