import React from 'react'

const PreferencesDetailsItem = (props) => {
  return(
    <div className={props.className}>
      <div className={props.titleClassName}>
        {props.title}
      </div>
      <div className={props.valueClassName}>
        {props.value}
      </div>
    </div>
  )
}

export default PreferencesDetailsItem
