function areYouPlayingBanjo(name) {

    for( let i = 0; i < name.length; i++ ) {

    if( name[i] == 'R' || name[i] == 'r') {

        return `${name} plays banjo`

    }

        return `${name} does not play banjo`

    }
}
  console.log(areYouPlayingBanjo("Adam"))
  console.log(areYouPlayingBanjo("Paul"))
  console.log(areYouPlayingBanjo("Ringo"))
  console.log(areYouPlayingBanjo("bravo"))
  console.log(areYouPlayingBanjo("rolf"))

  