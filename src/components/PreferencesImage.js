import React, {Component} from 'react'
import '../styles/components/PreferencesImage.css'


class PreferencesImage extends Component {
  constructor(props) {
    super(props);
    this.inputFileRef = React.createRef();
  }
  render() {
    return(
      <div className="iconWrapper">
        <div className="imageWithEditWrapper">
          <img
            className="Logo-box"
            src="https://studiosmall.com/wp-content/themes/studioSmallTheme/_/images/placeholder-6x4.png"
            width="95"
            height="95"
            alt="Flowers in Chania"
          />
          <input
            className="editButton"
            type='file'
            id='single'
            ref={this.inputFileRef}
            accept="image/*"
            style={{ visibility: 'hidden' }}
            onChange={(e) => {
              console.log("here is file", Array.from(e.target.files))
            }}
          />
          <div
            className="editButton"
            onClick={() => {
              console.log('click on edit');
              this.inputFileRef.current.click()
            }}
          >EDIT</div>
        </div>
      </div>
    )
  }
}
export default PreferencesImage
