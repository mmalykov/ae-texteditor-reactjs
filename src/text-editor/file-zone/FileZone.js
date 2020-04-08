import React from 'react';
import './FileZone.css';
import {useMutationObserver} from "../mutation-observer.hook";

function FileZone({text = '', onChange = () => {}}) {
    const editableContentRef = useMutationObserver(mutation => onChange(mutation));

    return (
        <div id="file-zone">
            <div
                id="file"
                contentEditable="true"
                suppressContentEditableWarning={true}
                ref={editableContentRef}>
                {text}
            </div>
        </div>
    );
}

export default FileZone;
