import React from 'react'

const Toolbar = ({cans, seeker}) => {

  const totalCount = cans.length

  const searchFor = (e) => {
    e.preventDefault()
    seeker(e.target.value)
  }

  const clear = (e) => {
    e.target.search.value = ''
  }

  return(
    <div className="row justify-content-center ">
      <br />
      <div className="col align-self-center">
        <h4>Can Count: <span className="badge badge-pill badge-primary">{totalCount}</span></h4>
        <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="Search Size Here"></input>
        <br />
      </div>
      <br />
    </div>
  )
}

export default Toolbar
