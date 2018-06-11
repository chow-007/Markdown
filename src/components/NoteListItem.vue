<template>
  <div class="note-list">
    <li v-for="(item, i) in notes" :key="i">
      <h6 @click="selectNote(item)">{{ item.title }}</h6>
      <p>{{ item.content }}</p>
      <!--<input type="button" @click="deleteNote(item)"  value="删除">-->
      <BtnNote type="danger">删除</BtnNote>
    </li>
  </div>
</template>
<script>
  import BtnNote from './BtnNote'
  export default {
    name:'NoteListItem',
    data(){
      return{

      }
    },
    props:{
      notes:Array
    },
    methods:{
      selectNote(item){
        this.$store.dispatch('selectCurrentNote',item)
      },
      deleteNote(item){
        alert(this.notes);
        this.$store.dispatch('deleteNote', item)
      }
    },
    components:{
      BtnNote
    }

  }
</script>
<style>
.note-list{
  margin-top: -15px;
}
</style>
