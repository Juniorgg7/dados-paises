export default {
  data() {
    return {
      paises: null,
    }
  },

  methods: {
    fetchData(url) {
      this.loading = true
      fetch(url)
        .then(r => r.json())
        .then(r => {
          this.paises = r
        })
    }
  }
}