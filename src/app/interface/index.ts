export interface dadosImdb {
adult: boolean,
backdrop_path: string
genres: [
    {
        id: number,
        name: string
    }
]
id: number
original_language: string
original_title: string
overview: string
popularity: number
poster_path: string
release_date: string
title: string
video: boolean
vote_average: number
vote_count: number
runtime: number
images: {
    jpg: {
        image_url: string,
        large_image_url: string,
        small_image_url: string 
    }
}
mal_id: number
}

export interface typeAnime {
   data: {
    images: {
        jpg: {
            image_url: string,
            large_image_url: string,
            small_image_url: string,
        }
    },
    title: string,
    mal_id: number,
    score: number,
    synopsis: string,
    url: string,
    year: number,
    episodes: number,
    popularity: number,
    genres: [
        {
            mal_id: number,
            name: string
        }
    ]
}
}

export interface dadosAnime {
    images: {
        jpg: {
            image_url: string,
            large_image_url: string,
            small_image_url: string,
        }
    },
    title: string,
    mal_id: number,
    score: number,
    synopsis: string,
    url: string,
    year: number,
    episodes: number,
    popularity: number,
    genres: [
        {
            mal_id: number,
            name: string
        }
    ]
}


export interface CatalogoFilme {
    cartFilmes_id?: number,
    user_id: number,
    apiFilme_id: string,
    cartFilmes_genero: string,
    cartFilmes_img: string,
    cartFilmes_title: string,
    cartFilmes_IMDB: boolean,
}

export interface usuario {
    email: string
    id?: number
    username: string
}