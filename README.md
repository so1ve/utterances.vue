# utterances-vue

[![NPM version](https://img.shields.io/npm/v/utterances-vue?color=a1b858&label=)](https://www.npmjs.com/package/utterances-vue)

Typed Vue 3 component for [Utterances](https://utteranc.es/), a lightweight comments widget built on GitHub issues.

## 📦 Installation

```bash
$ npm install utterances-vue
$ yarn add utterances-vue
$ pnpm add utterances-vue
```

## 🚀 Usage

```vue
<script setup lang="ts">
import { Utterances } from "utterances-vue";
</script>

<template>
	<Utterances
		issue-term="pathname"
		label="comments"
		repo="username/repo"
		theme="github-light"
	/>
</template>
```

## 📖 Props

Check [source code](./src/Utterances.vue) for the full list of props.

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [Ray](https://github.com/so1ve)
