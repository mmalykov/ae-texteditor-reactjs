import React, {useEffect, useState} from 'react';
import './App.css';
import getMockText from "./services/text.service";
import TextEditor from "./text-editor/TextEditor";

function App() {
    const [text, setText] = useState('');

    useEffect(() => {
        getMockText().then(mockText => setText(mockText))
    });

    return (
        <div className="App">
            <header>
                <span>Simple Text Editor</span>
            </header>
            <main>
                <TextEditor text={text}/>
            </main>
        </div>
    );
}

export default App;
