export default {
  data() {
    return {
      title: 'NavText!',
    };
  },
  props: {},
  computed: {},
  methods: {
    setTitle(nameRoute) {
      switch (nameRoute) {
        case 'Home':
          this.title = 'User - Home';
          break;
        case 'Card-Details':
          this.title = 'User - Creating Card';
          break;
        case 'Card-Details-Prop':
          this.title = 'User - Updating Card';
          break;
      }
    },
  },
  created() {
    console.log('atual route', this.$route);
    this.setTitle(this.$route.name);
  },
  watch: {
    $route(to) {
      this.setTitle(to.name);
    },
  },
};
