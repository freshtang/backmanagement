<template>
  <div class="about">
    <h1>About me</h1>
    <h3>我是汤俊健</h3>
    <p>2014至今就读于华南师范大学</p>
    <div>
      <h3>#爱好</h3>
      <h4>篮球</h4>
      <p>从高一到现在还是热情不变，享受和兄弟一起挥洒汗水的滋味。我是科比的粉丝，不仅是因为是他华丽而实用的篮球技巧，还因为他在球场上坚定的眼神</p>
      <h4>听音乐</h4>
      <p>注意是听音乐，不是音乐，本人没有什么音乐细胞，但是很多时候音乐能够点亮寂静空白的空间。音乐从让我走出浮躁，音乐能说出我的心声。喜欢陈奕迅,喜欢张敬轩,喜欢周杰伦,崇拜林夕。常用播放器为网易云音乐。</p>
      <h4>前端</h4>
      <p>在华师计算机学院确实少见打算走前端这个方向的，但是我对前端的兴趣特别浓厚，只恨入坑太迟，17年3月才入坑。我选择前端，即没有神一种的信仰，也没有鬼一般的无奈，也没有技术改变生活，代码改变世界的伟大梦想。刚开始接触的时候完全是喜欢它无需编译，所见即所得，即方便又快捷。后来发现小窗口后面藏着大世界，这个世界总是能够发现新东西。对前端的喜欢，<b>始于简单，陷于深沉。</b></p>
    </div>
    <div>
      <h3>#联系</h3>
      <h4>我希望能够交到志同道合的你</h4>
      <p>github: github.com/freshtang</p>
      <p>Wechat: junjiant</p>
      <p>Email:  11514376@qq.com</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about{
    text-align: center;
    overflow: auto;
    div{
      text-align: left;
      margin-left: 20%;
      margin-right: 20%;
    }
  }
</style>
