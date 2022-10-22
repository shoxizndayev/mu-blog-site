import { gql, useMutation, useQuery } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation newProject($prprojects_name: String!, $price_kv: Int!, $project_location: String!, $company_id: ID! ) {
        newProject(projects_name: $prprojects_name, price_kv: $price_kv, project_location: $project_location, company_id: $company_id) {
        id
        projects_name
        price_kv
        project_location
        }
    }
`

const AddProject = () => {
    const [ fn, { data, loading, error } ] = useMutation(ADD_PROJECT)

    const handle = e => {
        e.preventDefault()

        const { projects_name, price_kv, project_location, company_id } = e.target
        
        fn({
            variables: {
                projects_name: projects_name.value,
                price_kv: price_kv.value,
                project_location: project_location.value,
                company_id: company_id.value
            }
        })
    }

    if (loading) return <>Loading...</>
    if (error) return <>{error.message}</>



    return (<>
        <form action="" onSubmit={handle}>
            <input name="projects_name" type="text" placeholder="Proyekt nomi" />
            <input name="price_kv" type="number" placeholder="KvM narxi" />
            <input name="project_location" type="text" placeholder="Manzil" />
            {/* <select name="company_id" placeholder="Kompaniya">
                {company.company.map((company) => (
            <option key={company.id} value={company.id}>
                {company.company_name}
            </option>
            ))}
            </select> */}
            <button type="submit">Add project</button>
        </form>
    </>)
}

export default AddProject;