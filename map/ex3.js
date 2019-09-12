/* Array.prototype.map - Exercice 3

Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets représentant des films.
Chaque film a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com

La fonction getMoviesWithFreshness doit renvoyer un tableau contenant les objets du tableau
d'entrée, auxquels on aura ajouté une propriété, dont la clé sera label, et la valeur,
une chaîne, dépendante de la valeur de rating :

* Si `rating` est infériéur à 60, la valeur à attribuer à label sera "rotten".
* Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à label sera "fresh".
* Si `rating` est supérieur à 75, la valeur à attribuer à label sera "certified fresh".

Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */

  const getMoviesFreshness = (movies) => movies.map(movie =>{
  // C'est bien de retourner une nouvel objet.
  // C'est le meme , en moins 'verbose' :)

 
  if(movie.rating < 60){
    movie.label = "rotten" // utilise `=` 
    return movie;
  }else if (movie.rating >= 60 && movie.rating <= 75 ){
    movie.label ="fresh"
    return movie;
  }else if (movie.rating > 75){
    movie.label = "certified fresh";
    return movie
  }});


//   const getMoviesFreshness = (movies) => movies.map(movie =>{
//     switch(movie.rating){
//       case (movie.rating < 60):
//         movie.label = "rotten"
//         return movie;
//       case (movie.rating >= 60 && movie.rating <= 75):
//         movie.label = "fresh"
//         return movie;
//       case (movie.rating > 75):
//         movie.label = "certified fresh"
//         return movie;  
//     }
// });


// Ne pas modifier l'export
module.exports = getMoviesFreshness;


// * Si `rating` est infériéur à 60, la valeur à attribuer à label sera "rotten".
// * Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à label sera "fresh".
// * Si `rating` est supérieur à 75, la valeur à attribuer à label sera "certified fresh".