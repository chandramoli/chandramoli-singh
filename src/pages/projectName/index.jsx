import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


const ProjectName = () => {
    const {projectName } = useParams()

    return (
        <>
            <Link children="HOME" to={`home`} /><br/>
            <Link children="BUILDING" to={`building`} /><br/>
            <Link children="APARTMENT" to={`apartment`} /><br/>
            <Link children="LOCATION" to={`location`} /><br/>
        </>
    )
}

export default ProjectName