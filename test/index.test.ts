import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

import { Utterances } from "../src";

test("utterances", () => {
	const app = mount(Utterances, {
		props: {
			repo: "so1ve/utterances-vue-comments",
		},
	});

	expect(app.text()).toMatchInlineSnapshot(`""`);
	expect(app.html()).toMatchInlineSnapshot(`
		"<div>
		  <script async="" src="https://utteranc.es/client.js" repo="so1ve/utterances-vue-comments" issue-term="pathname" theme="github-light" crossorigin="anonymous"></script>
		</div>"
	`);
});
