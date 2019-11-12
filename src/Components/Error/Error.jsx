import React from 'react';

export default class Error extends React.Component {
  render() {
    const { id } = this.props
    console.log(this.props)

    return (
      <div className="error">
        <p className="error__text">{this.props.error}</p>
        <button className="error__btn" onClick={this.props.retry}>Повторить запрос</button>
      </div>
    )
  }
}