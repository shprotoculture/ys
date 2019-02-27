export const state = () => ({
    navLinks: [
        { title: 'Главная', to: '/', exact: true },
        { title: 'Йога смеха', to: '/yogacmexa', exact: false },
        { title: 'Клуб', to: '/club', exact: false },
        { title: 'Услуги', to: '/services', exact: false },
        { title: 'Академия', to: '/academy', exact: true },
    ],
    ycSubmenuLinks: [
        { title: 'История', to: '/yogacmexa/history' },
        { title: 'Мадан Катария', to: '/yogacmexa/madan' },
        { title: 'Мадури Катария', to: '/yogacmexa/maduri' },
        { title: 'Концепция', to: '/yogacmexa/concept' },
        { title: 'Направления', to: '/yogacmexa/directions' },
        { title: 'Получить книгу', to: '/yogacmexa/get-the-book' },
    ],
    servicesSubmenuLinks: [
        {
            title: 'Групповые занятия',
            to: '/services/group',

        },
        {
            title: 'Онлайн курсы',
            to: '/services/online',

        },
        {
            title: 'Для бизнеса',
            to: '/services/for-business',
            submenu: [
                {
                    title: 'Смехозарядки',
                    to: '/services/for-business/exercise',
                },
                {
                    title: 'Тренинги',
                    to: '/services/for-business/trainings',
                },
                {
                    title: 'Тимбилдинги',
                    to: '/services/for-business/teambuildings',
                },
                {
                    title: 'Форумы',
                    to: '/services/for-business/forums',
                },
            ]

        },
    ],
    clubSubmenuLinks: [
        { title: 'О клубе', to: '/club/about' },
        { title: 'Руководитель', to: '/club/dmitry-efimov' },
        { title: 'Тренеры', to: '/club/team' },
        { title: 'Отзывы', to: '/club/reviews' },
    ],

});