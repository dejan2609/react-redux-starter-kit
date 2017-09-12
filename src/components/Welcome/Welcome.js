import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Welcome.scss';
import LOGO_IMAGE from '../../images/react-logo.png';

export default class Welcome extends Component {
  render () {
    return (
      <div>
        <h1 className='display-1 text-center'>Welcome to</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-center'>
              <Link to='/first-page'>Page 1</Link>
            </div>
            <div className='col-lg-6 text-center'>
              <Link to='/second-page'>Page 2</Link>
            </div>
          </div>
        </div>
        <img
          className='logo mh-100'
          src={LOGO_IMAGE} />
      </div>
    );
  }
}
