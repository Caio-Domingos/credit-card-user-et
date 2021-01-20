export default {
  state: {
    categories: [
      {
        id: 1,
        category: 'national',
      },
      {
        id: 2,
        category: 'international',
      },
      {
        id: 3,
        category: 'platinum',
      },
      {
        id: 4,
        category: 'black',
      },
      {
        id: 5,
        category: 'infinite',
      },
      {
        id: 6,
        category: 'co-branded',
      },
      {
        id: 7,
        category: 'gold',
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getCategories: state => {
      return state.categories;
    },
    getCategoryById: state => id => {
      return state.categories.find(category => category.id === id);
    },
  },
  modules: {},
};
