const mixni = {
  data () {
    return {
      mixniName: 'baixue'
    }
  },
  created () {
    console.log('created,mixin混入')
  },
  mounted () {
    console.log('mounted,mixin混入')
  },
  methods: {
    hello () {
      console.log('mixin混入')
    }
  }
}
export default mixni
