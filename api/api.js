

export const fetchMovies = async (val) => {
  try {
  
const url='http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page='+val

    const response = await fetch(url, {
      "method": "GET",

    }
    )


    const results = await response
    if (results.status == 200) {
      const jsondata = await results.json().then()
     
      const Movies = jsondata.results.map(movie => (
        {
          id: movie.poster_path+ movie.original_title,
          title: movie.original_title,
          overview: movie.overview,
          date: movie.release_date,
          poster: movie.poster_path,

        }
      )

      )
      return Movies
    } else {
      throw "Network problem"
    }

  } catch (err) {
    console.log(err)
    throw err
  }
}