<template>
  <div>
    <h1>Tree</h1>
    <input type="number" v-model="value" placeholder="edit me" />
    <button v-on:click="add">Add</button>
    <button v-on:click="print">Search BFS</button>
    <div style="white-space: pre" :key="line.value" v-for="line in str">
      {{ line }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import BinaryTree from "@/scripts/BinaryTree";
import Node from "@/scripts/node";

export default class CreateTree extends Vue {
  tree: BinaryTree = new BinaryTree();
  value: number = 0;
  str: string[] = [];
  add() {
    this.tree.insertBasic(new Node(this.value));
  }
  print() {
    this.str = this.tree.bfs(this.tree.root) ?? "";
    console.log(this.str);
  }
}
</script>

<style scoped>
</style>
