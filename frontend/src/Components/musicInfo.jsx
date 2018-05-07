import React, { Component } from 'react'
import { Segment, Container, Header, Button, Label, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class MusicInfo extends Component {
  constructor(props) {
    super(props)
    this.renderRecomendation = this.renderRecomendation.bind(this)
  }
  render() {
    const { selectedMusic } = this.props
    
    return(
      <Container style={{ height: '100%' }} fluid>
        <Segment style={{ height: '100%' }}>
          <Header as='h3'> Voce esta ouvindo </Header>
          <Segment textAlign='left' >
            <Form>
              <Form.Field>
                <Label style={labelStyle}>Nome: { selectedMusic && selectedMusic.name || 'Selecione uma musica' }</Label>
              </Form.Field>
              <Form.Field>
                <Label style={labelStyle}>Album: { selectedMusic && selectedMusic.Album || 'Selecione uma musica' }</Label>
              </Form.Field>
              <Form.Field>
                <Label style={labelStyle}>Artista: { selectedMusic && selectedMusic.artists.singer || 'Selecione uma musica' }</Label>
              </Form.Field>
              <Form.Field>
                <Label style={labelStyle}>Duração: { selectedMusic && selectedMusic.duration || 'Selecione uma musica' }</Label>
              </Form.Field>
            </Form>
          </Segment>
          <Segment textAlign='left' >
          <Header as='h3'> Musicas Recomendadas </Header>
            <Form>
              <Segment.Group horizontal>
                {this.renderRecomendation()}
              </Segment.Group>
            </Form>
          </Segment>
        </Segment>
      </Container>

    
    )
  }
  renderRecomendation() {
    const { musicRecomendations } = this.props
    if(musicRecomendations.length > 0 ) {
      console.log('maior')
      return musicRecomendations.map(music => {
        return(
          <Segment>
            <Form.Field>
              <Label style={labelStyle}>Nome: { music && music.name || 'Selecione uma musica' }</Label>
            </Form.Field>
            <Form.Field>
              <Label style={labelStyle}>Album: { music && music.Album || 'Selecione uma musica' }</Label>
            </Form.Field>
            <Form.Field>
              <Label style={labelStyle}>Artista: { music && music.artists.singer || 'Selecione uma musica' }</Label>
            </Form.Field>
            <Form.Field>
              <Label style={labelStyle}>Duração: { music && music.duration || 'Selecione uma musica' }</Label>
            </Form.Field>
          </Segment>
        )
      })
    } else {
      return(
        <Label>Nenhuma musica recomendada</Label>
      )
    }
  }
}


const labelStyle = {
  backgroundColor: 'transparent',
  color: 'black'
}
const mapStateToProps = state => ({
  selectedMusic: state.musics.selectedMusic,
  musicRecomendations: state.musics.musicRecomendations
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
 
  },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MusicInfo)