export const selectMusic = music => {
  return  {
      type: 'SELECTED_MUSIC_CHANGED',
      payload: music
  }
}

export const recomendationFinded = recomendations => {
  return  {
      type: 'MUSIC_RECOMENDATIONS_CHANGED',
      payload: recomendations
  }
}

export const parsedMusicChanged = musicsParsed => {
  return  {
      type: 'PARSED_MUSICS_CHANGED',
      payload: musicsParsed
  }
}
export const musicsChanged = musics => {
  return  {
      type: 'MUSICS_CHANGED',
      payload: musics
  }
}
