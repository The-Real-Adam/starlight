import React from 'react'
import Can from './Can'
import CanData from './CanData.json'

const CanList = ({CanData}) => {
  console.log('CanData is: ', CanData)

    const mappedCans = CanData.map((can) =>
    <Can
    key={can.id}
    can={can}
    />
  )

  return (
    <div className="container">
      <ul className="list-group">
        {mappedCans}
      </ul>
    </div>
  )
}

export default CanList
