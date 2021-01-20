/* eslint-disable no-unused-vars */
export default {
  state: {
    cards: [],
  },
  mutations: {
    SET_CARDS: (state, payload) => {
      console.log('SETTING CARDS...');

      state.cards = payload;
    },
    SET_CARD: (state, payload) => {
      console.log('SETTING CARD...');
      state.cards.push(payload);
    },
    UPDATE_CARD: (state, payload) => {
      console.log('UPDATING CARD...');
      state.cards[payload.index] = payload.data;
    },
    REMOVE_CARD: (state, index) => {
      console.log('REMOVING CARD...');
      state.cards.splice(index, 1);
    },
  },
  actions: {
    refreshLocalStorage: ({ state }) => {
      window.localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    populateCards: ({ commit }) => {
      console.log('POPULATE CARDS...');
      const cardsLocalStorage = window.localStorage.getItem('cards');
      console.log('CARDS LOCALSTORAGE...');

      if (!cardsLocalStorage) {
        commit('SET_CARDS', []);
        window.localStorage.setItem('cards', JSON.stringify([]));
      } else {
        commit('SET_CARDS', JSON.parse(cardsLocalStorage));
      }
    },
    setCard: ({ commit, dispatch }, card) => {
      console.log('ACTION - SET CARD', card);
      commit('SET_CARD', card);
      dispatch('refreshLocalStorage');
    },
    updateCard: ({ commit, dispatch }, card) => {
      console.log('ACTION - UPDATE CARD', card);
      commit('UPDATE_CARD', card);
      dispatch('refreshLocalStorage');
    },
    deleteCard: ({ commit, dispatch, state }, id) => {
      const cardIndex = state.cards.findIndex(card => card.id === id);
      commit('REMOVE_CARD', cardIndex);
      dispatch('refreshLocalStorage');
    },
    createNewCard: () => {
      return {
        id: null,
        name: '',
        slug: '',
        image: '',
        brand: null,
        category: null,
        creditCardLimit: '',
        feeAmount: '',
      };
    },
    createNewIdToCard: ({ state }) => {
      const listSorted =
        state.cards.length > 0
          ? state.cards.sort(function(a, b) {
              return a.id - b.id;
            })
          : [];
      let majorAtualId = listSorted.length > 0 ? listSorted[listSorted.length - 1].id : 0;
      console.log('majorAtualId', majorAtualId);
      console.log('majorAtualId++', majorAtualId++);
      return majorAtualId++;
    },
  },
  getters: {
    getAllCards: state => {
      return state.cards;
    },
    getCardById: state => id => {
      console.log('id', id);
      console.log('state cards', state.cards);
      return state.cards.find(card => card.id === id);
    },
  },
  modules: {},
};
