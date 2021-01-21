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
          this.title = 'Your card';
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
