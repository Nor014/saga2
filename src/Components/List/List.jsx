import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions/actions';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import { Link } from "react-router-dom";

class List extends React.Component {
  componentDidMount = () => {
    this.props.getService()
  }

  render() {
    const { serviceList, loading, error } = this.props.state;
    console.log(serviceList, loading, error)

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <Error error={error} retry={this.props.getService} />
    }

    return (
      <ul className="service-list">
        {serviceList.map(el => <Link key={el.id} to={`/${el.id}/details`} className='service-list__item'>{el.name}</Link>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const { listState } = state;
  return { state: listState }
}

const mapDispatchToProps = (dispatch) => {
  return { getService: () => dispatch(getList()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)