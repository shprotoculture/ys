<template lang="pug">
    .pricing-grid.row
        .col-4.p-15(v-for="(pricingItem, i) in pricingItems" :key="i")
            app-pricing-teambuilding-item(:pricingItem="pricingItem")
</template>

<script>
import AppPricingTeambuildingItem from '~/components/pricing/AppPricingTeambuildingItem';
export default {
    components: {
        AppPricingTeambuildingItem
    },
    props: ['pricingItems']
}
</script>

<style lang="scss">
</style>
