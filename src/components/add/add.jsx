import { gql, useMutation } from "@apollo/client";

const ADD_COMPANY = gql`
    mutation newCompany($company_name: String!) {
        newCompany(company_name: $company_name) {
        id
        company_name
    }
    }
`

const AddCompany = () => {
    const [ fn, { data, loading, error } ] = useMutation(ADD_COMPANY)
    console.log(data);

    const handle = e => {
        e.preventDefault()

        const { company_name } = e.target

        fn({
            variables: {
                company_name: company_name.value
            }
        })
    }

    if (loading) return <>Loading...</>
    if (error) return <>Error</>


    return (<>
        <form action="" onSubmit={handle}>
            <input name="company_name" type="text" placeholder="Kompaniya nomi" />
            <button type="submit">Add company</button>
        </form>
    </>)
}

export default AddCompany;