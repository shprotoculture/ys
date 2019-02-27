<template lang="pug">
main.main
    section
        app-feature(:content="introContent")
    section.section
        .container
            .section-heading
                h4.section-heading__title 6 причин заняться Йогой смеха
            .section-content
                .motivation
                    .row
                        .col-3.p-0
                            .motivation-block.motivation-block_align-right
                                .motivation-block__title Здоровье
                                .motivation-block__text Во время смеха начинают активно работать многие системы организма, благодаря чему укрепляется здоровье, повышается иммунитет и замедляются процессы старения.
                            .motivation-block.motivation-block_align-right
                                .motivation-block__title Стиль жизни
                                .motivation-block__text Занимаясь йогой смеха вы сможете сформировать у себя привычку относиться ко всему с позитивом и меньше реагировать на стресс.
                            .motivation-block.motivation-block_align-right
                                .motivation-block__title Антистресс
                                .motivation-block__text Йога смеха избавляет от депрессии, психологических зажимов, комплексов и дарит хорошее настроение.
                        .col-6.p-15
                            .motivation__media-obj
                                .motivation__media-obj-text Посмотрите короткое интервью основателя «Йоги смеха» Мадана Катарии
                                a.motivation__media-obj-link(href="#")
                            .motivation-block__image
                                img(src="/img/madan.png" alt="Мадан Катария")
                        .col-3.p-0

                            .motivation-block
                                .motivation-block__title Фитнес
                                .motivation-block__text Йога смеха — это отличная физическая тренировка! Во время часа смеха сжигается до 500 калорий.
                            .motivation-block
                                .motivation-block__title Мышление
                                .motivation-block__text Йога смеха — это отличная физическая тренировка! Во время часа смеха сжигается до 500 калорий.
                            .motivation-block
                                .motivation-block__title Новые знакомства
                                .motivation-block__text Йога Смеха объединяет и сближает людей. В клубах смеха люди знакомиться и обретают новых друзей.





    section
        app-feature(:content="officialContent")




    section.section
        .container
            .section-heading
                h4.section-heading__title МЫ рЕГУЛЯРНО ПРОВОДИМ ЗАНЯТИЯ И ТРЕНИНГИ
                p.section-heading__subtitle
                    | Наши тренеры помогут снять эмоциональное и физическое напряжение, избавиться от депрессии,
                    br
                    | укрепить здоровье и поднимут настроение
            .section-content
                .row
                    .col-6.p-15(v-for="(content, i) in usefulContent" :key="i")
                        app-roter-card(:content="content")


    section
        app-feature(:content="beingTrainer")




    
    section.section
        .container
            .section-heading
                h4.section-heading__title ВСЕ О ПОЛЬЗЕ СМЕХА В НАШЕМ БлоГЕ
                p.section-heading__subtitle Мы ведем просветительскую работу в нашем блоге. Рассказываем о научных исследованиях, связанных со смехом и его влиянии на организма, практические советы, как быть счастливым, интересные истории людей, которые уже занимаются Йогой смеха, берем интервью у основателей методики, публикую видео и фотоотчеты.
        app-slider-report(:slides="newsSlides")
    


    section
        app-feature(:content="beingVolunteer")




    section.section
        .container
            .section-heading
                h4.section-heading__title НАС ХВАЛЯТ
                p.section-heading__subtitle Послушайте мнение людей, которые уже побывали на наших занятиях и тренингах.
            .section-content
                app-review-slider(:content="reviewContent")
    section
        app-feature(:content="getTheBookContent")


    section.section
        .container
            app-primary-form(:type="'callback'")
</template>

<script>
import AppFeature from '~/components/others/AppFeature';
import AppTrainingCircle from '~/components/others/AppTrainingCircle';
import AppSliderReport from '~/components/sliders/AppSliderReport';
import AppReviewSlider from '~/components/sliders/review_slider/AppReviewSlider';
import AppPrimaryForm from '~/components/forms/AppPrimaryForm';
import AppRoterCard from '~/components/others/AppRoterCard';
export default {
    head: {
        meta: [{
            hid: 'description',
            name: 'description',
            content: 'Йога смеха'
        }],
        title: 'Главная | Йога смеха'
    },
    components: {
        AppFeature,
        AppTrainingCircle,
        AppSliderReport,
        AppReviewSlider,
        AppPrimaryForm,
        AppRoterCard
    },
    data() {
        return {
            introContent: {
                alignRight: false,
                background: '/img/main-bg.jpg',
                note: 'Уникальная методика, изменившая <br> жизнь миллионов людей по всему <br> миру, теперь и в России.',
                title: 'ЙОГА СМЕХА ДЛЯ <br> ЗДОРОВЬЯ И СЧАСТЬЯ!',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/Av8WPNhj0bM?list=PLVQ75ZuC0ayBXuMuJ8dnTmY8McUVeVDgp',
                hasInternalLink: true,
                internalLink: '#',
                internalLinkText: 'Узнать подробнее',
            },
            officialContent: {
                alignRight: false,
                background: '/img/official.jpg',
                note: 'Руководитель клуба Дмитрий Ефимов, <br> прошел обучение у доктора Мадана <br> Катария в Индии и является его <br> официальным представителем <br> в России и СНГ.',
                title: 'ОФИЦИАЛЬНое <br> ПРЕДСТАВИТЕЛЬСТВО',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/Av8WPNhj0bM?list=PLVQ75ZuC0ayBXuMuJ8dnTmY8McUVeVDgp',
                hasInternalLink: true,
                internalLink: '#',
                internalLinkText: 'Узнать подробнее',
            },
            beingTrainer: {
                alignRight: false,
                background: '/img/sertificate-bg.jpg',
                note: 'Каждый месяц мы проводим семинары <br> для тренеров по Йоге смеха по всей <br> стране. Всего за 2 дня вы сможете <br> получить багаж практических знаний <br> и международный сертификат.',
                title: 'СТАНЬ ТРЕНЕРОМ <br> ПО РАДОСТИ',
                subtitle: null,
                hasVideo: true,
                videoSrc: 'https://www.youtube.com/embed/Av8WPNhj0bM?list=PLVQ75ZuC0ayBXuMuJ8dnTmY8McUVeVDgp',
                hasInternalLink: true,
                internalLink: '#',
                internalLinkText: 'Узнать подробнее',
            },
            beingVolunteer: {
                alignRight: false,
                background: '/img/volunteer.jpg',
                note: 'Мы регулярно проводим бесплатные <br> занятия в домах престарелых, <br> реабилитационных центрах, детских домах, <br> больницах. Присоединяйтесь к нам и вы.',
                title: 'СОЦИАЛЬНЫЕ <br> ПРОЕКТЫ',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                hasInternalLink: false,
                internalLink: '#',
                internalLinkText: 'Узнать подробнее',
                callToAction: {
                    formTitle: 'Стать волонтером',
                    buttonText: 'Стать волонтером'
                }
            },
            trainingCircleContent: [{
                    title: 'Для себя',
                    img: '/img/4urself.jpg',
                    to: '/services/group'
                },
                {
                    title: 'Для Бизнеса',
                    img: '/img/4business.jpg',
                    to: '/services/for-business'
                },
                {
                    title: 'Онлайн курсы',
                    img: '/img/online-courses.jpg',
                    to: '/services/online-courses'
                },
            ],
            newsSlides: [
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_01.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_02.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_03.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_04.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_05.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_06.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_01.jpg'
                },
                {
                    title: 'Тренеровка прошла в офисе Киви',
                    link: '#',
                    img: '/img/slide_02.jpg'
                },
            ],
            reviewContent: [
                {
                    img: '/img/opinion01.jpg',
                    name: 'Виктория Бехтерева',
                    text: 'руководитель форума <br> "Бизнес со смыслом"',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion02.jpg',
                    name: 'Юлия Кривопустова',
                    text: 'руководитель форума <br> Organic Woman',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
                {
                    img: '/img/opinion03.jpg',
                    name: 'Андрей Вебер',
                    text: 'руководитель форума <br> День Счастья в Сколково',
                    videoSrc: '/video/reviews/dmitry.mp4'
                },
            ],
            usefulContent: [{
                    background: '/img/roter-group.jpg',
                    frontTitle: 'Групповые занятия',
                    backTitle: 'На семинаре',
                    backText: 'Вы узнаете игровые техники, основанные на смехотерапии, которые помогут вам в работе с людьми, страдающими депрессией, стрессами и психологическим выгоранием.'
                },
                {
                    background: '/img/roter-training.jpg',
                    frontTitle: 'Тренинги ЛР',
                    backTitle: 'На семинаре',
                    backText: 'Вы сможете повысить вовлеченность и внутреннюю мотивацию сотрудников, а также сформировать позитивный климат в компании.'
                },
                {
                    background: '/img/roter-business.jpg',
                    frontTitle: 'Бизнес-тренинги',
                    backTitle: 'На семинаре',
                    backText: 'Вы получите практические инструменты и упражнения для личностного роста ваших клиентов и сможете повысить свою компетенцию.'
                },
                {
                    background: '/img/roter-online.jpg',
                    frontTitle: 'Онлайн-тренинги',
                    backTitle: 'На семинаре',
                    backText: 'Вы овладеете оздоровительной гимнастикой, которая прошла клинические испытания и пользуется популярностью во всем мире.'
                },
                {
                    background: '/img/roter-school.jpg',
                    frontTitle: 'В школах',
                    backTitle: 'На семинаре',
                    backText: 'Вы дополните свой багаж знаний, упражнениями из смехотерапии, йоги, медитации и релаксации.'
                },
                {
                    background: '/img/roter-celebration.jpg',
                    frontTitle: 'Праздники',
                    backTitle: 'На семинаре',
                    backText: 'Вы получить новые методики работы с детьми и молодежью, а также сможете проводить занятия по Йоге смеха в рамках программ дополнительного образования.'
                },
            ],
            getTheBookContent: {
                alignRight: false,
                background: '/img/get-the-book-main-bg.jpg',
                note: 'Ответьте пожалуйста на вопросы <br> анкеты и получите книгу основателя <br> Йоги Смеха Мадана Катария в подарок!',
                title: 'Книга <br> в подарок!',
                subtitle: null,
                hasVideo: false,
                videoSrc: null,
                hasAnchor: false,
                anchorURL: '#get-the-book',
                anchorText: 'Получить книгу',
                hasInternalLink: true,
                internalLink: '/yogacmexa/get-the-book#get-the-book',
                internalLinkText: 'Получить книгу',
            }
        }
    }
}
</script>

<style lang="scss">
.motivation-block {
	padding: 15px;

	&__title {
		font-size: 20px;
		font-weight: 500;
		text-transform: uppercase;
		color: #5a5a5a;
		margin-bottom: 5px;
	}

	&__text {
		font-size: 15px;
		font-weight: 400;
		color: #5a5a5a;
		height: 132px;
	}

	&_align-right {
		text-align: right;
	}
}

.motivation__media-obj {
	max-width: 395px;
	margin: 0 auto;
	overflow: hidden;
	background: #fff;
	box-shadow: 0px 8px 14.25px 0.75px rgba(0, 0, 0, 0.15);
	display: flex;
	border-radius: 4px;
	margin-bottom: 70px;

	&-text {
		padding: 30px 15px 30px 30px;
		max-width: 325px;
		color: #5a5a5a;
		font-size: 14px;
		font-weight: 400;
	}

	&-link {
		max-width: 125px;
		flex: 0 0 125px;
		display: block;
		background: url(/img/media-obj.png) no-repeat center/cover;
	}
}
</style>
