<template lang="pug">
main.main
    section
        app-feature(:content="getTheBookContent")
    section.section(id="get-the-book")
        .container
            .book
                .book__heading
                    h4.book__heading-title Анкета
                .book__form
                    form(@submit.prevent="bookSubmit")
                        .book__input.p-15
                            label.book__input-text(for="book-name") Ваши Имя и Фамилия
                            br
                            input.book__input-field(type="text" id="book-name" name="book_name" v-model="name" required)
                        .book__input.p-15
                            label.book__input-text(for="book-email") Ваш E-mail
                            br
                            input.book__input-field(type="email" id="book-email" name="book_email" v-model="email" required)
                        .book__input.p-15
                            label.book__input-text(for="book-country" ) Страна
                            br
                            input.book__input-field(type="text" id="book-country" name="book_country" v-model="country" required)
                        .book__input.p-15
                            label.book__input-text(for="book-city" ) Город
                            br
                            input.book__input-field(type="text" id="book-city" name="book_city" v-model="city" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-knew" ) Как вы узнали про Йогу смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-knew" name="book_how_knew" v-model="howKnew" required)
                        .book__tabs.p-15
                            .book__tabs-text Вы уже занимаетесь Йогой смеха?
                            .book__tabs-body
                                button.book__tabs-tab(type="button" @click.prevent="already = 'Да'" :class="{'book__tabs-tab_active': already === 'Да'}") Да
                                button.book__tabs-tab(type="button" @click.prevent="already = 'Нет'" :class="{'book__tabs-tab_active': already === 'Нет'}") Нет
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-long") Если, да, то сколько времени и у какого тренера?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-long" name="book_how_long" v-model="howLong" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-how-knew-us" ) Как вы узнали о нас?
                            br
                            textarea.book__textarea-field(type="text" id="book-how-knew-us" name="book_how_knew_us" v-model="howKnewUs" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-why-start" ) Почему вы решили заняться Йогой смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-why-start" name="book_why_start" v-model="whyStart" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-why-now" ) Почему именно сейчас?
                            br
                            textarea.book__textarea-field(type="text" id="book-why-now" name="book_why_now" v-model="whyNow" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-pay-attention" ) На что обращали внимание, выбирая занятия Йогой смеха?
                            br
                            textarea.book__textarea-field(type="text" id="book-pay-attention" name="book_pay_attention" v-model="payAttention" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-advice" ) С кем советовались?
                            br
                            textarea.book__textarea-field(type="text" id="book-advice" name="book_advice" v-model="advice" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-criterion" ) По каким критериям отбирали?
                            br
                            textarea.book__textarea-field(type="text" id="book-criterion" name="book_criterion" v-model="criterion" required)
                        .book__textarea.p-15
                            label.book__textarea-text(for="book-decisive" ) Какие критерии в итоге стали решающими?
                            br
                            textarea.book__textarea-field(type="text" id="book-decisive" name="book_decisive" v-model="decisive" required)
                        .book__submit
                            .checkbox.p-15
                                input.checkbox__input(type="checkbox" id="privacy" required)
                                label.checkbox__text(for="privacy") Даю согласие на обработку персональных данных
                            .p-15
                                button.button.button_primary.button_uc.button_large(type="submit") Получить книгу
</template>

<script>
import axios from 'axios';
import AppFeature from '~/components/others/AppFeature';
export default {
    layout: 'yogacmexa',
    head: {
        title: 'Получить книгу | Йога смеха'
    },
    components: {
        AppFeature
    },
    data() {
        return {
            name: '',
            email: '',
            country: '',
            city: '',
            howKnew: '',
            already: '',
            howLong: '',
            howKnewUs: '',
            whyStart: '',
            whyNow: '',
            payAttention: '',
            advice: '',
            criterion: '',
            decisive: '',

            getTheBookContent: {
                alignRight: false,
                background: '/img/get-the-book-main-bg.jpg',
                note: 'Ответьте пожалуйста на вопросы анкеты <br> и получите книгу основателя Йоги Смеха <br> Мадана Катария в подарок!',
                title: 'Книга в подарок!',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                hasAnchor: true,
                anchorURL: '#get-the-book',
                anchorText: 'Получить книгу'
            }
        }
    },
    methods: {
        bookSubmit() {
            let sendData = {
                name: this.name,
                email: this.email,
                country: this.country,
                city: this.city,
                howKnew: this.howKnew,
                already: this.already,
                howLong: this.howLong,
                howKnewUs: this.howKnewUs,
                whyStart: this.whyStart,
                whyNow: this.whyNow,
                payAttention: this.payAttention,
                advice: this.advice,
                criterion: this.criterion,
                decisive: this.decisive,
            };
            axios.post('http://yogacmexa.ru/include/send_book.php', sendData).then(res => {
                window.location.replace('/thanks');
            });
        }
    }
}
</script>

<style lang="scss">
.book {
	&__heading {
		text-align: center;

		&-title {
			font-family: "Comfortaa", "Open sans", Arial, Helvetica, sans-serif;
			font-size: 42px;
			font-weight: 400;
			margin-bottom: 60px;
			text-transform: uppercase;
			position: relative;
		}
	}

	&__form {
		max-width: 570px;
		margin: 0 auto;
	}

	&__input {
		&-text {
			font-size: 14px;
			font-weight: 600;
			display: inline-block;
			margin-bottom: 10px;
		}

		&-field {
			width: 100%;
			padding: 15px;
			border: 1px solid #ddd;
			border-radius: 6px;
		}
	}

	&__textarea {
		&-text {
			font-size: 14px;
			font-weight: 600;
			display: inline-block;
			margin-bottom: 10px;
		}

		&-field {
			width: 100%;
			padding: 15px;
			border: 1px solid #ddd;
			border-radius: 6px;
			min-height: 100px;
			resize: none;
		}
	}

	&__tabs {
		&-text {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 10px;
		}

		&-tab {
			display: inline-block;
			padding: 10px 35px;
			font-size: 18px;
			font-weight: 400;
			text-transform: uppercase;
			background: #fff;
			border-radius: 6px;
			box-shadow: 0px 5px 13.8px 1.2px rgba(157, 157, 157, 0.5);
			border: none;
			margin-right: 15px;

			&_active {
				background: #fcac45;
				color: #fff;
			}
		}
	}

	&__submit {
		padding-top: 30px;
	}
}
</style>
