<template>
  <div>
    <select v-model="selected">
      <option value="Basic">Basica</option>
      <option value="Moderate">Regex</option>
    </select>
    <input v-model="words" placeholder="edit me" />
    <textarea v-model="text" placeholder="Some text" />
    <button v-on:click="handleWords">xd</button>
    <p></p>
    <div class="border">
      <div v-for="item in final" :key="item.id">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export interface Composite {
  word: string;
  time: number;
}
export interface Solution {
  searchWord(word: string, text: string): any;
}

export class BasicSolution implements Solution {
  constructor() {}
  searchWord(word: string, text: string): Composite {
    console.log(text);
    var a: string[] = text.toLowerCase().split(/[\s, ,.,\n]+/);
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      if (word === a[i]) count++;
    }
    return { word: word, time: count };
  }
}
export class RegexSolution implements Solution {
  constructor() {}
  searchWord(word: string, text: string) {
    // Use /word/to ensure that there are no false positives, e.g, word : test natural and the text is : natural view and counts natural as one word
    var a = (text.match(word) ?? []).length;
    return { word: word, time: a };
  }
}
export default class SearchWord extends Vue {
  words: string = "";
  text: string = "";
  final: Composite[] = [];
  selected: string = "";
  handleWords() {
    this.final = [];
    var temp: string[] = [];
    temp = this.words.split(",");
    const solution = this.choose(this.selected);
    console.log(solution);
    for (var word of temp) {
      if (typeof solution !== undefined) {
        console.time();
        this.final.push(solution.searchWord(word.toLowerCase(), this.text));
        console.timeEnd();
      }
    }
  }
  choose(type: string): BasicSolution | RegexSolution {
    switch (type) {
      case "Moderate": {
        return new RegexSolution();
      }
      default:
        return new BasicSolution();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.border {
  border-style: dotted;
}
</style>
