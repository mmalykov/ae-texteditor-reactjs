import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button"><b>B</b></button>
                    <button className="format-action" type="button"><i>I</i></button>
                    <button className="format-action" type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
