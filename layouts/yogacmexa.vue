<template lang="pug">
#app
    app-header
    app-submenu(:links="ycSubmenuLinks")
    nuxt
    app-footer
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
import AppFooter from '~/components/footer/AppFooter';
import AppSubmenu from '~/components/header/AppSubmenu';
export default {
    components: {
        AppHeader,
        AppFooter,
        AppSubmenu
    },
    computed: {
        ycSubmenuLinks() {
            return this.$store.state.header.ycSubmenuLinks;
        }
    }
}
</script>


<style lang="scss">
</style>
