import { gql, useMutation } from "@apollo/client";

const ADD_BANK = gql`
    mutation newBank($bank_name: String!, $cash_limit: Int!, $duration: Int!, $starting_pay: Int!) {
        newBank(bank_name: $bank_name, cash_limit: $cash_limit, duration: $duration, starting_pay: $starting_pay) {
        id
        bank_name
        cash_limit
        duration
        starting_pay
        }
    }
`

const AddBank = () => {
    const [ fn, { data, loading, error } ] = useMutation(ADD_BANK)

    const bank = e => {
        e.preventDefault()

        const { bank_name, cash_limit, duration, starting_pay } = e.target

        fn({
            variables: {
                bank_name: bank_name.value,
                cash_limit: cash_limit.value,
                duration: duration.value,
                starting_pay: starting_pay.value
            }
        })
    }

    if (loading) return <>Loading...</>
    if (error) return <>{error.message}</>


    return (<>
        <form action="" onSubmit={bank}>
            <input name="bank_name" type="text" placeholder="Bank nomi" />
            <input name="cash_limit" type="Int" placeholder="Beriladigan summa" />
            <input name="duration" type="Int" placeholder="Beriladigan muhlat" />
            <input name="starting_pay" type="Int" placeholder="Boshlangich tolov" />
            <button type="submit">Add bank</button>
        </form>
    </>)
}

export default AddBank;