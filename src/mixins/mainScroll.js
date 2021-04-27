export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);
      this.$refs[refValue].addEventListener('scroll', this.handMainleScroll);
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll')
      this.$bus.$off('setMainScroll', this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener('scroll', this.handMainleScroll);
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop
      },
      handMainleScroll() {
        this.$bus.$emit('mainScroll', this.$refs[refValue])
      }
    }
  }
}