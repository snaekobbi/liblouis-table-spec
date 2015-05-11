window.onload = function() {

	// create links from include ... in liblouis table code blocks
	var srcBlocks = document.getElementsByClassName("src-liblouis");
	for (var i = 0, srcBlock; srcBlock = srcBlocks[i]; i++) {
		var spans = srcBlock.getElementsByTagName("span");
		for (var j = 0, span; span = spans[j]; j++) {
			if (span.className == "org-keyword" && span.innerHTML == "include") {
				span = spans[++j];
				var includeTable = span.innerHTML;
				var link = document.createElement("a");
				link.href = "#" + includeTable;
				link.appendChild(document.createTextNode(includeTable));
				span.innerHTML = "";
				span.appendChild(link);
			}
		}
	}
}
