<template>
    <button id="tagbutton"style="margin: 0 10px"class="btn btn-sm" v-on:click="increment">
      <i class="tagicon"></i>
      {{ tagName }}
      <i class="deleteicon"></i>
    </button>
</template>

<script>
export default {
  name: 'tag',
  props: ['tagName'],
  methods: {
    increment: function () {
      this.$emit('increment')
    }
  }
}
</script>

<style scoped>
.deleteicon{
  background: url('../assets/delete.svg') no-repeat;
}
.tagicon{
  background: url('../assets/tag.svg') no-repeat;
}
</style>
