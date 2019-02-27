<template lang="pug">
    .pricing-grid.row
        .col-4.p-15(v-for="(pricingItem, i) in pricingItems" :key="i")
            app-pricing-item(:pricingItem="pricingItem")
</template>

<script>
import AppPricingItem from '~/components/pricing/AppPricingItem';
export default {
    components: {
        AppPricingItem
    },
    props: ['pricingItems']
}
</script>

<style lang="scss">
</style>
