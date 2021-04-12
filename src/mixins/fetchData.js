export default function (defaultVaule = {}) {
  return {
    data() {
      return {
        data: defaultVaule,
        isLoading: true
      }
    },
    async created() {
      this.data = await this.fetchData()
      this.isLoading = false;
    }
  }
}