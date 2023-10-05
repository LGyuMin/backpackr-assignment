<template>
    <div id="app">
        <h1>Test</h1>
        <TextForm :text-area-status="'input'" />
    </div>
</template>

<script>
import TextForm from './components/TextForm.vue';

export default {
    name: 'App',
    components: {
        TextForm
    }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");

/* 스타일 초기화 */
*{margin: 0; padding: 0;}
*, :after, :before { box-sizing: border-box; }
button {
    background: none;
    border: 0;
    cursor: pointer;
}
a { text-decoration: none; }
textarea { resize: none; }
div:focus,
input:focus,
button:active,
button:focus,
a:focus,
a:active,
textarea:focus {
  outline: 1px solid #dcdcdc;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  min-width: 350px;
  margin: 10px auto;
}
</style>
