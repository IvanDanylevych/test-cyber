import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getDataStart = () => {
  return {
    type: actionTypes.GET_DATA_START,
  }
}

export const getDataSuccess = data => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data,
  }
}

export const getDataFail = error => {
  return {
    type: actionTypes.GET_DATA_FAIL,
    error,
  }
}

export const getData = () => {
  return dispatch => {
    dispatch(getDataStart())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(getDataSuccess(response.data))
      })
      .catch(err => {
        dispatch(getDataFail(err.response.data.error))
      })
  }
}

export const getFilteredData = searchValue => {
  return {
    type: actionTypes.FILTER_DATA,
    searchValue,
  }
}
