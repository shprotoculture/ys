<template>
	<no-ssr>
		<yandex-map
		 :coords="eventCords"
		 zoom="16"
		 :controls="['trafficControl']"
		 :placemarks="placemarks"
		 map-type="map"
		>
			<ymap-marker
			 marker-id="1"
			 marker-type="placemark"
			 :coords="eventCords"
			></ymap-marker>
		</yandex-map>
	</no-ssr>
</template>

<script>
export default {
	props: ['eventCords'],
	data() {
		return {
			placemarks: [
				{
					coords: this.eventCords,
					properties: {}, // define properties here
					options: {}, // define options here
					clusterName: "1",
					balloonTemplate: '<div>"Your custom template"</div>'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.ymap-container {
	width: 100%;
	height: 270px;
}
</style>
