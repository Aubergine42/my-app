import React from 'react';

class Instruction extends React.Component{
    render() {
        return React.createElement(
            'p',
            { key: this.props.index},
            this.props.name
        )
    }
}


class InstructionList extends React.Component {
    renderinstructionList(){
        return this.props.Instructions.map((instruction, i) =>
            React.createElement(Instruction, { index: i, name: instruction }, null)
        )
    }

    render() {
        return React.createElement(
            "section",
            {className : "Cooking Instructions"},
            React.createElement('h2', null, 'Cooking Instructions'),
            this.renderinstructionList()
        );
    }

}

export {InstructionList as default}