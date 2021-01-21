/* eslint-disable no-unused-vars */
import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import amex from 'payment-icons/min/flat/amex.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import discover from 'payment-icons/min/flat/discover.svg';
import jcb from 'payment-icons/min/flat/jcb.svg';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      brand: '',
      category: '',
      brandImgs: {
        visa,
        mastercard,
        amex,
        diners,
        discover,
        jcb,
      },
    };
  },
  props: {
    card: Object,
  },
  computed: {
    ...mapGetters({
      getBrand: 'getBrandById',
      getCategory: 'getCategoryById',
    }),
  },
  methods: {},
  created() {
    console.log('CARD COMPONENT', this.card);
    if (!this.card) return;

    this.brand = this.getBrand(this.card.brand);
    this.category = this.getCategory(this.card.category);
  },
};
