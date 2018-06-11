<template class="notebody">
  <div class="note">
    <div class="row">

      <div class="col-sm-2">
        <NoteList></NoteList>
      </div>

      <div class="col-sm-10">
        <Markdown></Markdown>
      </div>
    </div>
  </div>
</template>
<script>
  import NoteList from './NoteList'
  import Markdown from './Markdown'

  export default {
    name: 'note',
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      NoteList,
      Markdown
    }
  }
</script>
<style scoped>
</style>
