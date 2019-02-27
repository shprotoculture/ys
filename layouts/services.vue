<template lang="pug">
#app
    app-header
    app-submenu(:links="servicesSubmenuLinks")
    nuxt
    app-footer
    app-modal-form
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
import AppFooter from '~/components/footer/AppFooter';
import AppSubmenu from '~/components/header/AppSubmenu';
import AppModalForm from '~/components/forms/AppModalForm';
export default {
    components: {
        AppHeader,
        AppFooter,
        AppSubmenu,
        AppModalForm
    },
    computed: {
        servicesSubmenuLinks() {
            return this.$store.state.header.servicesSubmenuLinks;
        }
    }
}
</script>


<style lang="scss">
</style>
