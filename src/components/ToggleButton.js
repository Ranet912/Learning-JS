import React, {Component} from 'react'
import '../styles/components/ToggleButton.css'

class ToggleButton extends Component {
  render() {
    return(
      <div className="toggleButton">
        <label className="switch">
          <input
            type="checkbox"
            value={this.props.toggleValue}
            onChange={this.props.onToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

export default ToggleButton
