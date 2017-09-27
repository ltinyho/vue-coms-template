<template>
  <ul>
    <li v-for="(lesson,index) in lessonLists">
      {{index}}
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'LessonLists',
    props: {
      lessonLists: {
        type: Array,
        required: true,
      }
    },
    components: {},
    mixins: [],
    data() {
      return {}
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .lesson-lists {
    color: red;
  }
</style>