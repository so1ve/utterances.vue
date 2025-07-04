<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import type { LiteralUnion } from "./types";

export interface Props {
	repo: string;
	theme?: string;
	label?: string;
	issueTerm?: LiteralUnion<
		"pathname" | "url" | "title" | "og:title" | "discussion",
		string
	>;
	issueNumber?: number;
}

const props = withDefaults(defineProps<Props>(), {
	issueTerm: "pathname",
	theme: "github-light",
	label: "",
});

const container = ref<HTMLDivElement | null>(null);

onMounted(() => {
	const script = document.createElement("script");

	script.async = true;
	script.setAttribute("src", "https://utteranc.es/client.js");
	script.setAttribute("repo", props.repo);
	if ("issueTerm" in props && "issueNumber" in props) {
		console.warn(
			"Both issueTerm and issueNumber are set. One of them will be ignored.",
		);
	}
	if (props.issueTerm) {
		script.setAttribute("issue-term", props.issueTerm);
	}
	if (props.issueNumber) {
		script.setAttribute("issue-number", String(props.issueNumber));
	}
	if (props.label !== "") {
		script.setAttribute("label", props.label);
	}
	script.setAttribute("theme", props.theme);
	script.setAttribute("crossorigin", "anonymous");

	container.value!.appendChild(script);
});

watch(
	() => props.theme,
	(theme) => {
		container.value
			?.querySelector("iframe")
			?.contentWindow?.postMessage(
				{ type: "set-theme", theme },
				"https://utteranc.es",
			);
	},
);
</script>

<template>
	<div ref="container" />
</template>
