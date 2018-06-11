<template>
  <div class="marks">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">笔记</h3>
        <div class="form-inline">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" type="text" v-model="titleHandler">
            </div>
          </div>
          <input class="btn" type="button" value="添加笔记" @click="addOneNote">
        </div>
      </div>
      <div class="panel-body">
        <!--v-model 监听表单控件内容变化, msgHandler如果有setter,内容变化会触发setter-->
        <textarea class="markdown" v-model="msgHandler"></textarea>
        <!--v-html 把标签数据转换成真正的html-->
        <div class="box" v-html="currentMarked"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Marked from 'marked'

  export default {
    name: 'marks',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      addOneNote() {
        var content=document.getElementsByClassName('box')[0].innerText;
        var info={
          id:Math.random(),
          title:this.$store.state.note.title,
          date: new Date().toLocaleString(),
          content: content,
          markdown: this.$store.state.note.markdown
        };
        // dispatch触发mutations中的方法
        this.$store.dispatch('addOneNote', info)
      }
    },
    computed: {
      currentMarked() {
        // 从store仓库拿数据,翻译成marked语法标签
        return Marked(this.$store.state.note.markdown)
      },
      msgHandler: {
        // textarea标签实时获取store仓库的数据
        get: function () {
          return this.$store.state.note.markdown
        },
        // textarea标签实时更新store仓库的数据
        set: function (newValue) {  // 表单控件内容变化,同步跟新store仓库的markdown数据
          console.log(newValue)
          this.$store.state.note.markdown = newValue
        }
      },
      titleHandler: {
        // input标签实时获取store仓库的数据
        get: function () {
          return this.$store.state.note.title
        },
        // input标签实时更新store仓库的数据
        set: function (newValue) {  // 表单控件内容变化,同步跟新store仓库的title数据
          this.$store.state.note.title = newValue
        }
      }
    },
  }
</script>
<style scoped>
  .markdown, .box {
    width: 50%;
    height: 400px;
    border: 1px solid gray;
    float: left;
    box-sizing: border-box; /* 一行显示2个盒子 */
  }

  textarea {
    width: 100%;
    height: 100%;
    border: none;
  }
  .marks{
    margin-top: -15px;
  }
</style>
