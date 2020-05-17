import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../Redux/Prueba/actions';

class Prueba extends Component {

  componentDidMount() {
    this.props.getData(1, this.Render);
  }

Render = () => {
  console.log('retorna nueva vista');
}

  render() {
  return (<div>{this.props.posts.title}</div>)
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
  getData: (id, fn) => dispatch(getData(id, fn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Prueba);
