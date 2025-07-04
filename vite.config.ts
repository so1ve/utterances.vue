import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
	root: "./playground",
	plugins: [Vue()],
	test: {},
});
