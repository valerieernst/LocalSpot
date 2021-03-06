import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import { Button, Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

import Navigationbar      from '../components/NavBar_Component.jsx'
import FacebookLogin      from '../actions/action_authentication'
import Lucky              from '../containers/Lucky.jsx';

import { checkAuth, logout } from '../actions/action_authentication'
import { setQuery, startFetch, receivePlaces, filterPlaces } from '../actions/action_get_places';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigate: browserHistory.push,
  checkAuth: () => {dispatch(checkAuth())},
  logout: () => {dispatch(logout())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigationbar)
