export const state = () => ({
    thanksType: 'default'
});

export const mutations = {
    changeThanksType(state, payload) {
        state.thanksType = payload;
    },
};