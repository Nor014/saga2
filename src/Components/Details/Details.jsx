import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/actions';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

class Details extends React.Component {
  componentDidMount = () => {
    this.props.getDetails(this.props.match.params.id)
  }

  retry = () => {
    this.props.getDetails(this.props.match.params.id)
  }

  render() {
    const { details, loading, error } = this.props.state

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <Error error={error} retry={this.retry} id={this.props.match.params.id} />
    }

    return (
      <div className="details">
        <div className="details__item">Название: {details.name}</div>
        <div className="details__item">Описание: {details.content}</div>
        <div className="details__item">Цена: {details.price}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { detailsState } = state
  return { state: detailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (id) => dispatch(getDetails(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details)