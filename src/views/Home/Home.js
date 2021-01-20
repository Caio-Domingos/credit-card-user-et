import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

import Card from './../../components/Card/Card.vue';

// eslint-disable-next-line no-unused-vars

export default {
  components: { Card },
  data() {
    return {
      _cards: [],
      cards: [],
      pageCards: [],
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
    console.log('Cards', this._cards);
  },
  methods: {
    ...mapActions({
      delete$: 'deleteCard',
    }),
    goEdit(id) {
      console.log('Edit', id);
      this.$router.push(`/card-details/${id}`);
    },
    goNew() {
      console.log('New');
      this.$router.push(`/card-details`);
    },
    deleteCard(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          console.log('Deleted!', id);
          this.delete$(id);
        }
      });
    },

    changeFilter(event) {
      const value = event.target.value.toLowerCase();
      const verificationLength = event.target.value.length;

      if (!value) this.cards = this._cards;
      else {
        this.cards = this._cards.filter(
          card => card.name.substr(0, verificationLength).toLowerCase() === value
        );
      }
    },

    changePage(pageOfItems) {
      console.log('on change page!');
      this.pageCards = pageOfItems;
      this.scrollToTop();
    },

    scrollToTop() {
      if (document.scrollingElement.scrollTop === 0) return;

      const totalScrollDistance = document.scrollingElement.scrollTop;
      let scrollY = totalScrollDistance,
        oldTimestamp = null;

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / 1000;
          if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
          document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
  },
};
