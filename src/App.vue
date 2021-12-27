<template>
  <div class="top">
    <div class="top_nav">Viper Ui</div>
  </div>
  <div class="viperUi-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{
        link.name
      }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from "packages/list.json";
import { reactive } from "vue";

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  background: #f7f8fa;
}
.top {
  height: 60px;
  width: 100%;
  background-color: #001938;
  user-select: none;
}
.top_nav {
  width: 80%;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}
.viperUi-doc {
  background: #fff;
  display: flex;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
