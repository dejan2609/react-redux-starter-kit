import {push} from 'react-router-redux';
/* eslint-disable no-undef */
const ROOT_URL = CONF.API;
/* eslint-enable no-undef */

export function apiUrl () {
  return function (dispatch) {
    console.log(ROOT_URL);
    dispatch(push('/foo'));
  };
}
