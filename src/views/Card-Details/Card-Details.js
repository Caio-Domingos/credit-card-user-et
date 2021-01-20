import { mapActions, mapGetters } from 'vuex';

const slugify = require('slugify');

export default {
  data() {
    return {
      id: +this.$route.params.id,
      card: {},
      brands: [],
      categories: [],
      handleErrors: {
        name: {
          valid: false,
          required: false,
          minLength: false,
          showStatus: false,
          msg: '',
        },
        image: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
        brand: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
        category: {
          valid: false,
          required: false,
          showStatus: false,
          msg: '',
        },
      },
      handleImage: null,
    };
  },
  created() {
    this.setCard()
      .then(() => {
        if (this.id) this.checkForm();
        this.brands = this.brands$;
        this.categories = this.categories$;
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  },
  computed: {
    ...mapGetters({
      getCard: 'getCardById',
      brands$: 'getBrands',
      categories$: 'getCategories',
    }),
  },
  methods: {
    ...mapActions({
      newCard$: 'createNewCard',
      createId$: 'createNewIdToCard',
      setCard$: 'setCard',
      updateCard$: 'updateCard',
    }),
    async setCard() {
      if (this.id) {
        this.card = await this.getCard(this.id);
      } else {
        this.card = await this.newCard$();
      }

      console.log('MY CARD', this.card);
    },
    // Form Handles
    checkForm() {
      Object.keys(this.card)
        .filter(
          key => key !== 'id' && key !== 'slug' && key !== 'creditCardLimit' && key !== 'feeAmount'
        )
        .forEach(key => {
          this.checkInput(key, key.charAt(0).toUpperCase() + key.slice(1));
        });

      const keysErrors = Object.keys(this.handleErrors);

      const valid =
        !keysErrors.map(key => this.handleErrors[key].valid).filter(valid => !valid).length > 0;

      return valid;
    },
    checkInput(input, field, event) {
      let valid = true;

      // Name validate
      switch (input) {
        case 'name':
          {
            // Required
            if (!this.card.name) {
              valid = false;
              this.handleErrors.name.required = true;
            } else {
              this.handleErrors.name.required = false;
            }

            if (this.card.name.length > 80) {
              valid = false;
              this.handleErrors.name.minLength = true;
            } else {
              this.handleErrors.name.minLength = false;
            }

            this.handleErrors.name.valid = valid;
            this.handleErrors.name.msg = valid
              ? 'Name is valid'
              : this.handleErrors.name.required
              ? 'Name is required!'
              : 'Name cannot exceed 80 characters';
            this.handleErrors.name.showStatus = true;
          }

          break;

        case 'image':
          {
            let file;
            if (event) {
              file = event.target.files[0];
            }

            if (file || this.card.image) {
              this.handleErrors.image.required = false;
              if (file) this.card.image = file.name;
            } else {
              valid = false;
              this.handleErrors.image.required = true;
            }

            this.handleErrors.image.valid = valid;
            this.handleErrors.image.msg = valid ? 'Image is valid' : 'Image is required!';
            this.handleErrors.image.showStatus = true;
          }

          break;

        default:
          {
            if (!this.card[input]) {
              valid = false;
              this.handleErrors[input].required = false;
            } else {
              this.handleErrors[input].required = true;
            }
            this.handleErrors[input].msg = valid ? `${field} is valid` : `${field} is required!`;
            this.handleErrors[input].valid = valid;
            this.handleErrors[input].showStatus = true;
          }
          break;
      }
    },
    async saveCard(event) {
      console.log('EVENT', event);
      event.preventDefault();

      const _id = this.id ? this.id : await this.createId$();
      console.log('My ID', _id);
      const validCard = this.checkForm();

      console.log('FORM IS VALID?', validCard);

      if (!validCard) return;

      this.card.id = _id;
      this.card.slug = slugify(this.card.name, '_');
      console.log('final card', this.card);

      if (this.id) await this.updateCard$(this.card);
      else await this.setCard$(this.card);

      this.$router.push('/');
    },
  },
};
