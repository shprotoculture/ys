<template lang="pug">
#app
    app-header
    nuxt
    app-footer
    app-modal-form
</template>

<script>
import AppHeader from '~/components/header/AppHeader';
import AppFooter from '~/components/footer/AppFooter';
import AppModalForm from '~/components/forms/AppModalForm';
export default {
    components: {
        AppHeader,
        AppFooter,
        AppModalForm
    },
}
</script>


<style lang="scss">
</style>
