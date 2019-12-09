import React, { Component } from 'react';
import UserInput from '../UserInput/UserInput';

export default class UserOutput extends Component {
    render() {
        return (
            <React.Fragment>

                <div>
                    <div>Info for {this.props.user.name}</div>
                    <p>Age: {this.props.user.age}</p>
                    <p>Nationality: {this.props.user.nationality}</p>
                </div>

                <div>
                    <UserInput onNameChanged={this.props.onNameChanged}
                        userName={this.props.user.name}
                        userId={this.props.user.id} />
                </div>
            </React.Fragment>
        )
    }
}