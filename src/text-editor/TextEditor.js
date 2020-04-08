import React from "react";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import {useFormatStore} from "./format-store.hook";

export default function TextEditor({text}) {
    const [appliedFormats, applyFormat, cleanStore] = useFormatStore();

    function onMutation(mutation) {
        if (mutation.type === 'characterData') {
            cleanStore(mutation.target);
        }
    }

    return (
        <React.Fragment>
            <ControlPanel formats={appliedFormats} onFormatChange={applyFormat}/>
            <FileZone text={text} onChange={onMutation}/>
        </React.Fragment>
    )
}
