/* src/index.svelte generated by Svelte v3.18.2 */
import {
	SvelteComponentDev,
	add_location,
	append_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	listen_dev,
	noop,
	safe_not_equal,
	set_data_dev,
	space,
	text
} from "svelte/internal";

const file = "src/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let t2;
	let button;
	let t3;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			div.textContent = "HEY";
			t2 = space();
			button = element("button");
			t3 = text(/*msg*/ ctx[0]);
			document.title = "Svelte static";
			add_location(div, file, 11, 0, 162);
			add_location(button, file, 13, 0, 178);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t3);
			dispose = listen_dev(button, "click", /*changeMsg*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*msg*/ 1) set_data_dev(t3, /*msg*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(button);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let msg = "changes with JS";

	function changeMsg() {
		$$invalidate(0, msg = "changed");
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("msg" in $$props) $$invalidate(0, msg = $$props.msg);
	};

	return [msg, changeMsg];
}

class Src extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Src",
			options,
			id: create_fragment.name
		});
	}
}

export default Src;