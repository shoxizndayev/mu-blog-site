import React  from "react";
import { useQuery, gql } from "@apollo/client";


const Duration = () => {
    const GET_DURATION = gql`
        query {
            paytime {
                id
                pay_time
            }
        }`;

const { data , loading,  error} = useQuery(GET_DURATION);


if(loading) return  "Loading...";
if(error) return  <>{error.message}</>;
   
   return (<>
    <div>
        <p>Tolov mudatini tanlang</p>
        <select className="hero_select" name="duration" onChange={(evt) => {
            const number = evt.target.value
        }}>
            <option value="" selected disabled hidden> Choose</option>
            {data.paytime.map((paytime) => (
                <option key={paytime.id} value={paytime.pay_time}>
                    {paytime.pay_time}
                </option>
            ))}
        </select>
    </div>
    </>)
}

export default Duration;