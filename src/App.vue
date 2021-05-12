<template>
  <div id="app">
    <keep-alive :include="['About', 'Message', 'Amusement', 'Paper','Production']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  div {
    display: block;
  }
  body{
    font-family: ywfzt!important;
  }
  #main_bg {
    background-image: url("./assets/bg-003.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    -moz-opacity: 0.4;
    opacity: 0.4;

  }
</style>
