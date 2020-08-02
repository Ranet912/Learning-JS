import React from 'react'

const ScreenTitle = (props) => {
  return(
    <div className={props.className}>
      <div className={props.labelClassName}>
        {props.label}
      </div>
    </div>
  )
}

export default ScreenTitle
