import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationIdPage = () => {

    const { userId, orgId } = auth()

    return (
        <div>
            {/* Organization Page! */}
            <OrganizationSwitcher
                hidePersonal
            />
        </div>
    )
}

export default OrganizationIdPage