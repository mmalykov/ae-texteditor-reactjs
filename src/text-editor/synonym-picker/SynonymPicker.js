import React, {useState} from 'react';
import './SynonymPicker.css';
import {getSynonyms} from "../../services/synonym.service";

function getSelectionRangeString(selection = getSelection(), index = 0) {
    if (selection.rangeCount === 0) {
        return '';
    }

    const range = selection.getRangeAt(index);
    return range.toString();
}

export default function SynonymPicker({onPick}) {
    const [isSynonymsVisible, setIsSynonymsVisible] = useState(false);
    const [synonyms, setSynonyms] = useState([]);

    function findSynonyms() {
        const word = getSelectionRangeString();

        getSynonyms(word).then(words => {
            if (words.length) {
                setIsSynonymsVisible(true);
                setSynonyms(words)
            }
        });
    }

    function selectSynonym(event) {
        onPick(event.target.value);
        setIsSynonymsVisible(false);
        setSynonyms([]);
    }

    return (
        <div id="picker">
            <button type="button" onClick={findSynonyms}>
                Find synonyms
            </button>
            {isSynonymsVisible
                ? <select
                    defaultValue={''}
                    onChange={selectSynonym}>
                    <option disabled value={''}> -- select an option -- </option>
                    {synonyms.map(synonym =>
                        <option
                            key={synonym}
                            value={synonym}>{synonym}
                        </option>
                    )}
                </select>
                : null
            }
        </div>
    );
}
