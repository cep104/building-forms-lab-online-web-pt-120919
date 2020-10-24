import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from '../components/BandInput'
class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand = {this.props.addBand}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (band) => dispatch({type: "ADD_BAND", band})
})

export default connect(null, mapDispatchToProps)(BandsContainer)
