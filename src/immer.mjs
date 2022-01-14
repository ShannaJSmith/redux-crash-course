import {produce} from 'immer';

let anime = { title: "Inuyasha" };

const publish = (anime) => {
  return produce(anime, draftAnime => { 
    // anime (first argument) is the initial state. draftAnime(second argument) is a function that specifies the mutations
    draftAnime.isPublished = true;
    draftAnime.date = 'April 2003';
    draftAnime.title = 'InuYasha';
  });
}
let updated = publish(anime);

console.log("anime:", anime);
console.log("updated:", updated);