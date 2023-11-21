const key = "05cd19a5f61f4e9026c6f6c4d3542a94"

const requestsApi = {
        requestpopular :`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en=US&page=1`,
        requestToprated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en=US&page=1`,
        requestapifor:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en=US&page=2`,
        requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en=US&page=2`
}

export default requestsApi