import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectMusic, recomendationFinded } from './musicsAction'
import { findRecomendation } from '../utils/orderFunctions'


class TableMusics extends Component {
  constructor(props) {
    super(props)
    this.renderRows = this.renderRows.bind(this)
    this.handleSelectMusic = this.handleSelectMusic.bind(this)
  }
  render() {
    return (
      <Table celled selectable style={{ height:'15em', overflow: 'auto' }}>
        <Table.Body>
          {this.renderRows()}
        </Table.Body>
      </Table>
    )
  }
  renderRows() {
    const { musics } = this.props
    let listMusic = musics || null
    return listMusic.map(music => {
      return(
        <Table.Row key={music.name}>
          <Table.Cell selectable onClick={() => {this.handleSelectMusic(music)}}>{ music.name }</Table.Cell>
        </Table.Row>
      )
    })
  }
  handleSelectMusic(music) {
    const { selectMusic, parsedMusics, recomendationFinded } = this.props
    selectMusic(music)
    let recomendation = findRecomendation(music, parsedMusics)
    let filteredRecomendation = recomendation.filter((el) => {
      return el.name != music.name
    })
    recomendationFinded(filteredRecomendation)
  }
}

const mapStateToProps = state => ({
  musics: state.musics.musics,
  parsedMusics: state.musics.parsedMusics
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    selectMusic,
    recomendationFinded
  },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TableMusics)