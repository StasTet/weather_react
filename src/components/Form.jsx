import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ (event) => {event.preventDefault();this.props.onChildClick(this.textInput.value)} }>
                    <input type="text" ref={(input) => { this.textInput = input; }} />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}