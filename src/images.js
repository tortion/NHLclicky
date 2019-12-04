import dryden1 from './images/card1.jpg';
import vachon from './images/card2.jpg';
import esposito from './images/card3.jpg';
import sawchuck1 from './images/card4.jpg';
import edwards from './images/card5.jpg';
import bouchard from './images/card6.jpg';
import stephenson from './images/card7.jpg';
import asmith from './images/card8.jpg';
import bsmith from './images/card9.jpg';
import irbe from './images/card10.jpg';
import desjardins from './images/card11.jpg';
import resch from './images/card12.jpg';
import roy from './images/card13.jpg';
import dryden2 from './images/card14.jpg';
import bower from './images/card15.jpg';
import plante from './images/card16.jpg';

const imagesAll = [
  dryden1,
  vachon,
  esposito,
  sawchuck1,
  edwards,
  bouchard,
  stephenson,
  asmith,
  bsmith,
  irbe,
  desjardins,
  resch,
  roy,
  dryden2,
  bower,
  plante
];

const fieldSize = [8,10,12,14,16];

var images = [];
var maxCards = Math.floor(Math.random() * fieldSize.length);
for (var x=0;x<fieldSize[maxCards];x++) {
  images.push(imagesAll[x]);
}

export default images;
