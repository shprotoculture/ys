export const state = () => ({
    modalFormIsActive: false,
    modalFormTitle: 'Заполните форму',
    modalFormType: null
});

export const mutations = {
    openModalForm(state) {
        state.modalFormIsActive = true;
    },
    closeModalForm(state) {
        state.modalFormIsActive = false;
    },
    changeFormTitle(state, payload) {
        state.modalFormTitle = payload;
    },
};