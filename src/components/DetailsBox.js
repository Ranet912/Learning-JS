import React, {Component} from 'react'
import PreferencesDetailsItem from './PreferencesDetailsItem'
import '../styles/components/DetailsBox.css'

class DetailsBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {
        name: 'Sea Networks',
        email: 'grace@smart.network',
        alertmail: 'grace@smart.network',
        support: 'forum.smart.network'
      }
    }
  }

  render() {
    return(
      <div className="detailsWrapper">
        <div className="listHeaderTitleDetails">DETAILS</div>
        <PreferencesDetailsItem
          title="Name"
          value="Sea Networks"
          className="firstDetailsItem"
          titleClassName="detailsTitle"
          valueClassName="detailsValue"
        />
        <PreferencesDetailsItem
          title="Support Email"
          value="grace@smart.network"
          className="middleDetailsItem"
          titleClassName="detailsTitle"
          valueClassName="detailsValue"
        />
        <PreferencesDetailsItem
          title="Data Cap Alert Email"
          value="grace@smart.network"
          className="middleDetailsItem"
          titleClassName="detailsTitle"
          valueClassName="detailsValue"
        />
        <PreferencesDetailsItem
          title="Support URL"
          value="forum.smart.network"
          className="lastDetailsItem"
          titleClassName="detailsTitle"
          valueClassName="detailsValue"
        />
      </div>
    )
  }
}

export default DetailsBox
