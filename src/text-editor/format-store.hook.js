import {useState} from "react";
import {useSelectionChange} from "./selection-change.hook";

const store = new Map();

export function useFormatStore() {
    const [appliedFormats, setAppliedFormats] = useState([]);

    useSelectionChange(selection => {
        const [focusOffset, formatsSet] = store.get(selection.focusNode) || [];
        const formats = selection.focusOffset === focusOffset ? Array.from(formatsSet) : [];

        if (formats.length !== appliedFormats.length) {
            setAppliedFormats(formats);
        }
    });

    return [appliedFormats, applyFormat, clearStore];
}

function applyFormat(format, value, shouldReplace = false) {
    formatSelection(format, value);
    storeSelection(format, shouldReplace);
}

function formatSelection(commandId, value) {
    document.execCommand(commandId, false, value);
}

function storeSelection(format, shouldReplace) {
    const {focusNode, focusOffset} = getSelection();

    updateStore(focusNode, focusOffset, format, shouldReplace);
}

function updateStore(key, hash, item, shouldReplace) {
    if (store.has(key)) {
        const [storedHash, list] = store.get(key);

        if (shouldReplace) {
            store.set(key, [hash, new Set(list)]);
            return;
        } else if (hash !== storedHash) {
            return;
        }

        list.has(item) ? list.delete(item) : list.add(item);

        if (list.size) {
            store.set(key, [hash, list])
        } else {
            store.delete(key);
        }
    } else {
        store.set(key, [hash, new Set([item])]);
    }
}

function clearStore() {
    const removedNodes = Array.from(store.entries()).filter(node => !node.isConnected);

    removedNodes.forEach(node => store.delete(node));
}

