<template lang="pug">
transition(name="modal-form")
    .modal-form(v-if="modalFormIsActive")
        .modal-form__overlay(@click="closeModalForm")
            .modal-form__container(@click.stop="")
                .modal-form__heading {{modalFormTitle}}
                .modal-form__body
                    form(@submit.prevent="formSubmit")
                        input(type="hidden" :value="modalFormTitle")
                        .p-15
                            .input
                                input.input__field(type="text" placeholder="Имя *" required v-model="name")
                        .p-15
                            .input
                                input.input__field(type="email" placeholder="Ваш E-mail *" required v-model="email")
                        .p-15
                            .input
                                input.input__field(type="text" placeholder="Телефон *" required v-model="phone")
                        .checkbox.p-15
                            input.checkbox__input(type="checkbox" id="privacy-modal" required)
                            label.checkbox__text(for="privacy-modal") Даю согласие на обработку персональных данных
                        .p-15
                            button.button.button_primary.button_medium.button_uc(type="submit") Отправить
                    button.modal-form__close(type="button" @click.prevent="closeModalForm")
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
        }
    },
    computed: {
        modalFormIsActive() {
            return this.$store.state.modalForm.modalFormIsActive;
        },
        modalFormTitle() {
            return this.$store.state.modalForm.modalFormTitle;
        }
    },
    methods: {
        closeModalForm() {
            this.$store.commit('modalForm/closeModalForm');
        },
        formSubmit() {
            let sendData = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                param: this.modalFormTitle
            };
            axios.post('http://yogacmexa.ru/include/mail.php', sendData).then(res => {
                window.location.replace('/thanks');
            });
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/common/vars";

.modal-form {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1200;
	transition: 0.4s ease;

	&__overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(#000, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
	}

	&__container {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0 0 15px rgba(#000, 0.2);
		position: relative;
		min-width: 450px;
		flex: 0 0 450px;
		transition: 0.4s ease;
	}

	&__heading {
		font-size: 18px;
		font-weight: 600;
		text-align: center;
		text-transform: uppercase;
		padding: 30px 15px;
		border-bottom: 1px dotted #e5e5e5;
	}

	&__body {
		padding: 30px 15px 15px;
	}

	&__close {
		display: block;
		position: absolute;
		width: 30px;
		height: 30px;
		font-size: 24px;
		line-height: 30px;
		background: none;
		border: none;
		top: -30px;
		right: -30px;

		&:after {
			content: "\f00d";
			font-family: "Font Awesome 5 Pro";
			font-size: 24px;
			font-weight: 300;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
		}
	}

	&-enter {
		opacity: 0;
	}

	&-enter-active {
		.modal-form__container {
			animation: modalOpen 0.4s ease forwards;
		}
	}

	&-leave-to {
		opacity: 0;
	}
}

@keyframes modalOpen {
	0% {
		transform: scale(0);
	}

	50% {
		transform: scale(1.2);
	}

	100% {
		transform: scale(1);
	}
}
</style>
