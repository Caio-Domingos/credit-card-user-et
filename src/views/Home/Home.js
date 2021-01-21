import { mapActions, mapGetters } from 'vuex';

import Card from './../../components/Card/Card.vue';

// eslint-disable-next-line no-unused-vars

export default {
  components: { Card },
  data() {
    return {
      _cards: [],
      cards: [],
      pageCards: [],
      infinityScrollBusy: false,
    };
  },
  computed: {
    ...mapGetters({
      getAllCards: 'getAllCards',
    }),
  },
  created() {
    this._cards = this.getAllCards.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    this.cards = this._cards;
    this.addMoreCards(true, 'init');
  },
  mounted() {
    this.scroll();
  },
  methods: {
    ...mapActions({
      delete$: 'deleteCard',
    }),
    goTo(id) {
      console.log('Edit', id);
      this.$router.push(`/card-details/${id}`);
    },

    changeFilter(event) {
      const value = event.target.value.toLowerCase();
      const verificationLength = event.target.value.length;

      if (!value) {
        this.cards = this._cards;
        this.addMoreCards(true, 'meth');
      } else {
        this.cards = this._cards.filter(
          card => card.name.substr(0, verificationLength).toLowerCase() === value
        );
        this.addMoreCards(true, 'meth');
      }
    },

    addMoreCards(reset, origin) {
      console.log('add more items!', this.pageCards);
      console.log('who call', origin);
      if (this.infinityScrollBusy) return;
      if (this.cards.length === 0) {
        this.pageCards = [];
        return;
      }
      if (this.cards.length === this.pageCards.length) return;

      this.infinityScrollBusy = true;
      if (reset) this.pageCards = [];

      console.log('add more items!', this.pageCards);
      console.log('who call', origin);
      const atualIndex = this.pageCards.length;
      const finalIndex = this.pageCards.length + 6;

      console.log('atualIndex!', atualIndex);
      console.log('finalIndex!', finalIndex);

      setTimeout(() => {
        for (let index = atualIndex; index < finalIndex; index++) {
          const element = this.cards[index];

          if (element) {
            console.log('NEW ITEM', element.id);
            this.pageCards.push(element);
          }
        }
        this.infinityScrollBusy = false;
      }, 1000);

      return;
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.addMoreCards(false, 'scroll');
        }
      };
    },
  },
};
