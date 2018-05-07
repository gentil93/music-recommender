import React, { Component } from 'react'
import { Grid, Container, Button, Header, Icon, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { findRecomendation, arrangeByGenre } from '../utils/orderFunctions'
import { musicsChanged, parsedMusicChanged } from './musicsAction'
import TableMusics from './tableMusics'
import MusicInfo from './musicInfo'
let ontology = require('../main/musics.json')

class MainContainer extends Component {
  componentDidMount() {
    const { musicsChanged, parsedMusicChanged } = this.props
    musicsChanged(ontology)
    let musicsParsed = arrangeByGenre(ontology)
    console.log(musicsParsed)
    parsedMusicChanged(musicsParsed)
  }
  render() {
    return(
      <Segment textAlign='center'>
        <Grid celled>
          <Header
            textAlign='center'
            as='h2'
            icon >
            <Icon name='sound' /> Music Recomendation 
          </Header> 
          <Grid.Row>
            <Grid.Column style={{ overflow: 'auto', height: '35em' }} width={3}>
              <TableMusics/>
            </Grid.Column>
            <Grid.Column width={13}>
              <MusicInfo/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    musicsChanged,
    parsedMusicChanged
  },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)