function GenreDetail ({genre}) {
    return(
        <>
        <p>{genre.genre_name}</p>
        <p>{genre.genre_image}</p>
        </>
    )
}

export default GenreDetail