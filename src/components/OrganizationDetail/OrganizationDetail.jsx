function OrganizationDetail ({organization}) {
    return(
        <>
        <p>{organization.organization_name}</p>
        <p>{organization.organization_image}</p>
        <p>{organization.organization_website_link}</p>
        </>
    )
}

export default OrganizationDetail