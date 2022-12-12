import "./OrganizationDetail.scss"

function OrganizationDetail ({organization}) {

    return(
        <section className="organization-detail">
            <div className="organization-detail__hero-container">
                <img src={organization.organization_image} alt={organization.organization_name} className="organization-detail__hero"/>
            </div>
            <div className="organization-detail__title-container">
                <h1 className="organization-detail__title">{organization.organization_name}</h1>
            </div>
            <div className="organization-detail__body">
                <div className="organization-detail__description-container">
                    <p className="organization-detail__description">{organization.long_description}</p>
                </div>
                <div className="organization-detail__link-container">
                    <a href={organization.organization_website_link} className="organization-detail__link">
                        <p className="organization-detail__link-text">Website</p>
                    </a>
                </div>
            </div>
            <div className="organization-detail__subtitle-container">
                <h2 className="organization-detail__subtitle">Events</h2>
            </div>
        </section>
    )
}

export default OrganizationDetail