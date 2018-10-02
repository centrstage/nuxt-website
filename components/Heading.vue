<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function (createElement) {
    return createElement(
      'h' + this.level,
      {
        class: "heading font-brand font-normal",
        attrs: { 'data-component': 'Heading' }
      },
      this.$slots.default
    )
  }
}
</script>

