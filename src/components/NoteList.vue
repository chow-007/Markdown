<template>
  <div class="note-list">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">笔记列表</h3>
      </div>
      <div class="panel-body">
        <ul>
          <NoteListItem :notes="allNotes"></NoteListItem>
        </ul>
      </div>
    </div>


  </div>
</template>
<script>
  import NoteListItem from './NoteListItem'
  import {mapGetters} from 'vuex'

  export default {
    name: 'noteList',
    data() {
      return {}
    },
    methods: {},
    computed: {
      // allNotes(){
      // 	console.log(this.$store.state.allNotes)
      // 	return this.$store.getters.getAllNotes
      // 	// return this.$store.state.getAllNotes
      ...mapGetters({
        allNotes: 'getAllNotes'
      })
      // 组件中的事件名字跟store中的getters属性中的名字一样
      // ...mapGetters([
      // 	'getAllNotes'

      // ])
    },
    components: {
      NoteListItem
    }
  }
</script>
<style scoped>
  .note-list {
    margin-top: -15px;
    margin-left: 5px;
  }
  ul {
    padding: 0;
  }
  .panel-body {
    overflow: auto;
  }
</style>
