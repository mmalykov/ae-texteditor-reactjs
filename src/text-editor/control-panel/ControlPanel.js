import React from 'react';
import './ControlPanel.css';
import SynonymPicker from "../synonym-picker/SynonymPicker";

function makeFormat(format, formats, formatChange) {
    const formatClassName = `format-action${formats.includes(format) ? ' active' : ''}`;
    const applyFormat = () => formatChange(format);

    return [formatClassName, applyFormat];
}

function ControlPanel({formats, onFormatChange}) {
    const [boldClassName, applyBoldFormat] = makeFormat('bold', formats, onFormatChange);
    const [italicClassName, applyItalicFormat] = makeFormat('italic', formats, onFormatChange);
    const [underlineClassName, applyUnderlineFormat] = makeFormat('underline', formats, onFormatChange);


    function onSynonymPick(word) {
        onFormatChange('insertText', word, false);
    }

    return (
        <div id="control-panel">
            <div id="format-actions">
                <button
                    className={boldClassName}
                    type="button"
                    onClick={applyBoldFormat}>
                    <b>B</b>
                </button>
                <button
                    className={italicClassName}
                    type="button"
                    onClick={applyItalicFormat}>
                    <i>I</i>
                </button>
                <button
                    className={underlineClassName}
                    type="button"
                    onClick={applyUnderlineFormat}>
                    <u>U</u>
                </button>
                <SynonymPicker onPick={onSynonymPick}/>
            </div>
        </div>
    );
}

export default ControlPanel;
