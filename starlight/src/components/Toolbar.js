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
        <h4>Message Count <span className="badge badge-pill badge-primary">{totalCount}</span></h4>
        <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="Search Here"></input>
        <button className="btn btn-default" onClick={toggleCompose} type="button" id="compose">Compose</button>
        <br />
      </div>
      <br />
    </div>
  )
}

export default Toolbar
