import React, { Component } from 'react'
let ontology = require('../../public/assets/musicOntology.json')


class MainContainer extends Component {
  componentDidMount() {
    console.log(ontology)
  }
  render() {
    return(
      <h1>teste</h1>
    )
  
  }
}

export default MainContainer