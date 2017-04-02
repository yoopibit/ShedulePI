import React, { Component } from 'react';

class DropDown extends Component {

    renderOptions = options => {
        return options.map((item, index) => {
            return <option key={ index } >{item}</option>
        });
    }

    render() {
        const { options } = this.props;
        return (
            <select className="select">
                { this.renderOptions(options) }
            </select>
        )
    }
}

export default DropDown;