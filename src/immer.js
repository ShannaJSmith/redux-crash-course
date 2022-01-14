import { produce } from 'immer';

let anime = { title: "Inuyasha" };

const publish = (anime) => {
  return produce(anime, draftAnime => { // <-anime (first argument) is the initial state. draftAnime is a function that specifies the mutations
    draftAnime.isPublished = true;
  });
}
let updated = publish(anime);

console.log("anime:", anime);
console.log("updated:", updated);