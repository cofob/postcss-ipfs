const defaults = {
	gateway: "https://ipfs.io/",
};

function postCSSReplace(opts = defaults) {
	const options = Object.assign({}, defaults, opts);

	return {
		postcssPlugin: "postcss-ipfs",
		OnceExit(root) {
			root["walkComments"]((node) => {
				switch (node.constructor.name) {
					case "Comment":
						node.text = node.text.replace("ipfs://", options.gateway + "ipfs/");
						node.text = node.text.replace("ipns://", options.gateway + "ipns/");
						break;

					case "Declaration":
						node.prop = node.prop.replace("ipfs://", options.gateway + "ipfs/");
						node.prop = node.prop.replace("ipns://", options.gateway + "ipns/");
						node.value = node.value.replace(
							"ipfs://",
							options.gateway + "ipfs/"
						);
						node.value = node.value.replace(
							"ipns://",
							options.gateway + "ipns/"
						);
						break;

					case "AtRule":
						node.params = node.params.replace(
							"ipfs://",
							options.gateway + "ipfs/"
						);
						node.params = node.params.replace(
							"ipns://",
							options.gateway + "ipns/"
						);
						break;

					case "Rule":
						node.selector = node.selector.replace(
							"ipfs://",
							options.gateway + "ipfs/"
						);
						node.selector = node.selector.replace(
							"ipfs://",
							options.gateway + "ipfs/"
						);
						break;
				}
			});
		},
	};
}

postCSSReplace.postcss = true;

module.exports = postCSSReplace;
