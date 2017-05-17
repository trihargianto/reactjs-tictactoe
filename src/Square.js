import React from 'react';

export default class Square extends React.Component {

    handleOnClick(event) {

        if (this.props.value === null && this.props.winner === null) {

            const nextTurn = this.props.xIsNext ? 'X' : 'O';

            this.props.onClick(this.props.index, nextTurn);

            event.target.className += " animated rubberBand square-container-active";
        }
        else {
            event.target.className += " animated shake";
        }
    }

    render() {
        return (
            <div onClick={this.handleOnClick.bind(this)} className="col-xs-4 square-container">
                {this.props.value}
            </div>
        )
    }
}
