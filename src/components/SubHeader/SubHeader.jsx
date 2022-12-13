import "./SubHeader.scss"

function SubHeader ({title}){
    return(
        <section className="subheader">
        <nav className="subheader__nav">
            <ul className="subheader__nav-list">
                <li className="subheader__nav-item">List</li>
                <li className="subheader__nav-item">Map</li>
            </ul>
        </nav>
        <div className="subheader__title-container">
            <p className="subheader__title">{title}</p>
        </div>
        <div className="subheader__search-container">
            <button className="subheader__search">Search</button>
        </div>  
    </section>
    )
}

export default SubHeader