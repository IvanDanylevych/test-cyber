import * as actionTypes from '../actions/actionTypes'
import { updateObject, handleSearch } from '../../shared/utility'

const initialState = {
  data: [],
  filteredData: [],
  inputValue: '',
  loading: false,
  error: null,
}

const getDataStart = (state, action) => {
  return updateObject(state, { error: null, loading: true })
}

const getDataSuccess = (state, action) => {
  return updateObject(state, {
    data: action.data,
    error: null,
    loading: false,
  })
}

const getDataFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const getFilteredData = (state, action) => {
  const filteredData = handleSearch(state.data, action.searchValue)
  return updateObject(state, {
    inputValue: action.searchValue,
    filteredData,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START:
      return getDataStart(state, action)
    case actionTypes.GET_DATA_SUCCESS:
      return getDataSuccess(state, action)
    case actionTypes.GET_DATA_FAIL:
      return getDataFail(state, action)
    case actionTypes.FILTER_DATA:
      return getFilteredData(state, action)
    default:
      return state
  }
}

export default reducer
