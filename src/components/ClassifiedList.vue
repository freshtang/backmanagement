<template>
  <div>
      <tag v-for="tag in tagList" v-bind:tag-name=tag.name v-on:increment="deletetag(tag._id)"></tag>
  </div>

</template>

<script>
import tag from './tag'

export default {
  name: 'ClassifiedList',
  computed: {
    tagList () {
      return this.$store.state.tagList
    }
  },
  components: {
    tag
  },
  methods: {
    deletetag: function (tagid) {
      alert(tagid)
    }
  }
}
</script>

<style scoped>

</style>
