<template lang="pug">
#app
    app-header
    app-submenu(:links="clubSubmenuLinks")
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
        clubSubmenuLinks() {
            return this.$store.state.header.clubSubmenuLinks;
        }
    }
}
</script>


<style lang="scss">
</style>
