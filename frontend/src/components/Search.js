import React, { useState } from 'react'
function Search(props) {
  const [state, setState] = useState({
    query: '',
    results: {},
    loading: false,
    message: '',
  })
  return (
    <div className='container'>
      {/*Heading*/}
      <h2 className='heading'>Live Search: React Application</h2>
      {/*Search Input*/}
      <label className='search-label' htmlFor='search-input'>
        <input type='text' value='' id='search-input' placeholder='Search...' />
        <i className='fa fa-search search-icon' />
      </label>
    </div>
  )
}
export default Search
