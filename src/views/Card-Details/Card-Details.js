import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      id: +this.$route.params.id,
      card: {},
      brand: {},
      categorie: {},
    };
  },
  created() {
    this.setCard();
  },
  computed: {
    ...mapGetters({
      getCard: 'getCardById',
      brand$: 'getBrandById',
      category$: 'getCategoryById',
    }),
  },
  methods: {
    async setCard() {
      this.card = await this.getCard(this.id);
      this.brand = this.brand$(this.card.brand);
      this.category = this.category$(this.card.category);
      console.log('MY CARD', this.card);
      console.log('MY BRAND', this.brand);
      console.log('MY CATEGORY', this.category);
    },
  },
};
