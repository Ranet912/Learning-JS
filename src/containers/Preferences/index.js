import React from 'react'
import {
  ScreenTitle,
  DetailsBox,
  SettingsBox,
  PreferencesImage
} from '../../components'
import '../../styles/containers/Preferences/preferences.css'


const Preferenes = () => {
  return(
    <div className="preferencesWraper">
      <ScreenTitle
        label="Preferences"
        className="Prefrences"
        labelClassName="preferencesLabel"
      />
      <PreferencesImage />
      <DetailsBox />
      <SettingsBox />
    </div>
  )
}

export default Preferenes
