
export function setupToggleAnchor(anchorParent) {

    console.assert(anchorParent !== null, "Fail to add toggle listener: target element is null");
    if (anchorParent === null) {
        return;
    }

    // Turn all htmx children into toggles
    //    the fetched content will be removed after 2nd click
    anchorParent?.addEventListener("htmx:beforeSwap", (htmxEvt) => {
        const tgt = htmxEvt.detail.target;

        const numOfChildren = tgt.childNodes.length;
        if (numOfChildren > 0) {
            htmxEvt.detail.serverResponse = "";
            return;
        }

        // preloading
        console.log(htmxEvt.detail.requestConfig.triggeringEvent.type);
        if (htmxEvt.detail.requestConfig.triggeringEvent.type === "load") {
            htmxEvt.detail.shouldSwap=false;
        }
    });
}
