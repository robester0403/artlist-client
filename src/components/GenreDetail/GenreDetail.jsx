import "./GenreDetail.scss"

function GenreDetail ({genre}) {
    return(
        <section className="genre-detail">
            <div className="organization-detail__hero-container">
                <img src={genre.genre_image} alt={genre.genre_name} className="genre-detail__hero"/>
            </div>
            <div className="genre-detail__title-container">
                <h1 className="genre-detail__title">{genre.genre_name}</h1>
            </div>
            <div className="genre-detail__subtitle-container">
                <h2 className="genre-detail__subtitle">Events</h2>
            </div>
        </section>
    )
}

export default GenreDetail