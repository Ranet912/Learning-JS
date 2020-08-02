import React from 'react'
import ToggleButton from './ToggleButton'

const SettingsListItem = (props) => {
  return(
    <div className={props.className}>
      <div className={props.titleClassName}>
        {props.title}
      </div>
      {
        props.toggleVisible
        ? (
          <ToggleButton
            toggleValue={props.toggleValue}
            onToggle={props.onToggle}
          />
        ) : (
          <div className={props.valueWrapperClassName}>
            <div className={props.valueClassName}>
              {props.value}
            </div>
            <div className={props.iconClassName}/>
          </div>
        )
      }
    </div>
  )
}

export default SettingsListItem
