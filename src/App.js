import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, getFilteredData } from './store/actions/tableData'
import {
  DataSelector,
  LoadingSelector,
  ErrorSelector,
  SearchSelector,
  FilteredDataSelector,
} from './store/selectors'

import Spinner from './components/Spinner'
import Table from './components/Table'

import './index.scss'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(DataSelector)
  const loading = useSelector(LoadingSelector)
  const error = useSelector(ErrorSelector)
  const searchValue = useSelector(SearchSelector)
  const filteredData = useSelector(FilteredDataSelector)

  useEffect(() => {
    dispatch(getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {error && <div>Oops, something went wrong</div>}
      {loading ? (
        <Spinner />
      ) : (
        <Table data={searchValue.length > 0 ? filteredData : data} />
      )}
      <div className='inputWrapper'>
        <input
          onChange={e => dispatch(getFilteredData(e.target.value))}
          value={searchValue}
          placeholder='Search'
          className='inputField'
        />
      </div>
    </>
  )
}

export default App
