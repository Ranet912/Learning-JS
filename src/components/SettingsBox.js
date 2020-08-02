import React, {Component} from 'react'
import SettingsListItem from './SettingsListItem'
import '../styles/components/SettingsBox.css'


class SettingsBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      settings: {
        timezone: 'America',
        weekly_email: 'Wednesday',
        maintance_hours: '>',
        calibration: true,
        speedtest: true,
        shaping: false
      }
    }
  }
  render() {
    return(
      <div className="settingsListWrapper">
        <div className="listHeaderTitleSettings">
          SETTINGS
        </div>
        <SettingsListItem
          className="firstSettingsItem"
          titleClassName="settingsTitle"
          title="Timezone"
          toggleVisible={false}
          valueWrapperClassName="listItemValueWrapper"
          valueClassName="settingsValue"
          value="America/Los Angeles"
          iconClassName="listItemIconArrowRight"
        />
        <SettingsListItem
          className="middleSettingsItem"
          titleClassName="settingsTitle"
          title="Weekly Email"
          toggleVisible={false}
          valueWrapperClassName="listItemValueWrapper"
          valueClassName="settingsValue"
          value="Wednesday"
          iconClassName="listItemIconArrowRight"
        />
        <SettingsListItem
          className="lastSettingsItem"
          titleClassName="settingsTitle"
          title="Maintenance Hours"
          toggleVisible={false}
          valueWrapperClassName="listItemValueWrapper"
          valueClassName="settingsValue"
          value=""
          iconClassName="listItemIconArrowRight"
        />
        <div className="secondSettingsBox">
          <SettingsListItem
            className="firstSettingsItem"
            titleClassName="settingsTitle"
            title="Calibration"
            toggleVisible
            toggleValue={this.state.calibration}
            onToggle={() => this.setState({
              calibration: !this.state.calibration
            })}
          />
          <SettingsListItem
            className="middleSettingsItem"
            titleClassName="settingsTitle"
            title="Speedtest"
            toggleVisible
            toggleValue={this.state.speedtest}
            onToggle={() => this.setState({
              speedtest: !this.state.speedtest
            })}
          />
          <SettingsListItem
            className="lastSettingsItem"
            titleClassName="settingsTitle"
            title="Sharping"
            toggleVisible
            toggleValue={this.state.shaping}
            onToggle={() => this.setState(prevState => ({
              sharping: !prevState.sharping
            }))}
          />
        </div>
      </div>
    )
  }
}

export default SettingsBox
