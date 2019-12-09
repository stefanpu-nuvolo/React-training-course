import React, { Component } from 'react';
import './UserInput.css'

export default class UserInput extends Component {
    render() {
        return (
            <div className="UserInput">
                <label htmlFor="inp" className="inp">
                    <input
                        type="text"
                        placeholder="&nbsp;"
                        value={this.props.userName}
                        onChange={(ev) => this.props.onNameChanged(ev.target.value, this.props.userId)}
                    />
                    <span className="label">Label</span>
                    <span className="border"></span>
                </label>
            </div>
        )
    }
}