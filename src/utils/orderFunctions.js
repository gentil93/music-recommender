export const arrangeByGenre = (musics) => {
  let arrangedByStyleObj = {}
  for (let id = 0; id < musics.length; id++) {
    let music = musics[id]
    if(!arrangedByStyleObj[music.Style.genre]) {
      arrangedByStyleObj[music.Style.genre] = {}
    }
    if(!arrangedByStyleObj[music.Style.genre][music.Style.subgenre]) {
      arrangedByStyleObj[music.Style.genre][music.Style.subgenre] = {}
    }
    if(!arrangedByStyleObj[music.Style.genre][music.Style.subgenre][music.artists.singer]) {
      arrangedByStyleObj[music.Style.genre][music.Style.subgenre][music.artists.singer] = []
    }
    arrangedByStyleObj[music.Style.genre][music.Style.subgenre][music.artists.singer].push(musics[id])
  }
  return arrangedByStyleObj
}

export const findRecomendation = (music, musics) => {
  //Verificar se tem musicas do mesmo artista
  let musicsFromSameSinger = getMusicBySinger(music, musics)
  if(musicsFromSameSinger) {
    let musicFromSameAlbum = getMusicFromSameAlbum(music, musics)
    if(musicFromSameAlbum) {
      return musicFromSameAlbum
    } else {
      return musicsFromSameSinger
    }
  } else {
    console.log('else')
    let musicsFromSameSubGenre = getMusicsFromSameSubGenre(music, musics)
    if(musicsFromSameSubGenre) {
      console.log('musicsFromSameSubGenre', musicsFromSameSubGenre)
      return musicsFromSameSubGenre
    } else {
      let musicsFromSameGenre = getMusicsFromSameGenre(music, musics)
      if(musicsFromSameGenre) {
        return musicsFromSameGenre
      } else {
        return false
      }
    }
  }

}

export const getMusicBySinger = (music, musics) => {
  const { singer } = music.artists
  const { genre, subgenre } = music.Style
  if(musics[genre][subgenre][singer] && musics[genre][subgenre][singer].length > 1 ) {
    
    return musics[genre][subgenre][singer]
  } 
  return false
}

export const getMusicFromSameAlbum = (music, musics) => {
  let album = music.Album
  for (let id = 0; id < musics.length; id++) {
    if(music[Album] == musics[id].Album) return musics[id] 
  } return false

}

export const getMusicsFromSameSubGenre = (music, musics) => {
  let subgenre = music.style.subgenre
  let musicsFromSameSubGenre = []
  for (let id = 0; id < musics.length; id++) {
    if(musics[id].style.subgenre == subgenre ) {
      musicsFromSameSubGenre.push(musics[id])
    }
  }
  return musicsFromSameSubGenre
}

export const getMusicsFromSameGenre = (music, musics) => {
  let genre = music.style.genre
  let musicsFromSameGenre = []
  for (let id = 0; id < musics.length; id++) {
    if(musics[id].style.genre == genre ) {
      musicsFromSameGenre.push(musics[id])
    }
  }
  return musicsFromSameGenre
}

// pos = myArray.map(function(e) { return e.name; }).indexOf('stevie');