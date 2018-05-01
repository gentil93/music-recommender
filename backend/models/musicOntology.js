const mongoose = require('mongoose');

let Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
  
let musicSchema = new Schema({
  property: {
    type: new Schema({
      name: {
        type: String,
        select: true
      },
      _id: false
    }),
    select: true
  },
  album: {
    type: String,
    select: true
  },
  band: {
    type: String,
    select: true
  },
  duration: {
    type: String,
    select: true
  },
  artist: {
    type: new Schema({
      singer: {
        type: String,
        select: true
      },
      composer: {
        type: String,
        select: true
      },
      _id: false
    }),
    select: true
  },
  musicStyle: {
    type: String,
    enum: ['Funk', 'Sertanejo', 'Rock', 'Pagode', 'MPB']
  }
});

const MusicOntology = mongoose.model('MusicOntology', musicSchema);

MusicOntology.count((err, count) => {
  if(count == 0) {
    MusicOntology.create({
      property: {
        name: 'Meiga e Abusada'
      },
      album: 'Anitta',
      band: 'Anitta',
      duration: '3:49',
      artist: {
        composer: 'Larissa Machado',
        singer: 'Anitta'
      },
      musicStyle: 'Funk'
    }, (err, small) => {
      if(err) console.log(err);
    });
  }
});

module.exports = MusicOntology;