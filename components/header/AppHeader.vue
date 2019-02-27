<template lang="pug">
    .nav-wrap
        header.header
            .header-content.container
                app-header-logo
                app-header-main-nav
</template>

<script>
import AppHeaderLogo from '~/components/header/AppHeaderLogo';
import AppHeaderMainNav from '~/components/header/AppHeaderMainNav';
export default {
    components: {
        AppHeaderLogo,
        AppHeaderMainNav
    }
}
</script>

<style lang="scss">
.header {
	background: #fff;
	position: relative;
	z-index: 100;
	box-shadow: 0px 3px 7px rgba(#000, 0.07);
}

.header-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 15px;
}
</style>
