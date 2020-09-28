<template>
  <div>
    <SearchWord />
    <CreateTree />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SearchWord from "./components/SearchWord.vue";
import CreateTree from "./components/CreateTree.vue";
@Options({
  components: {
    SearchWord,
    CreateTree,
  },
})
export default class App extends Vue {}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
