import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	platform: "neutral",
	fromVite: true,
	dts: { vue: true },
});
