<template lang="pug">
transition(name="page-preloader")
    .page-preloader(v-if="loading")
            .page-preloader__roter
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
            
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.page-preloader {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 60;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #fff;

	&__roter {
		width: 100px;
		height: 100px;
		border: 10px solid $c-blue;
		border-radius: 100%;
		border-top-color: transparent;
		animation: roter 1s ease infinite;
	}

	&-enter {
		opacity: 0;
	}

	&-leave-to {
		opacity: 0;
		transition: 0.5s ease;
	}
}

@keyframes roter {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
