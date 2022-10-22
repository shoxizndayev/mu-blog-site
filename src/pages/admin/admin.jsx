import React from "react";
import { Link } from "react-router-dom";
import AddCompany from "../../components/add/add"; 
import AddProject from "../../components/addProject/addProject";
import AddBank from "../../components/addBank/addBank";


const Admin = () => {
    return(<>
        <AddCompany />
        <AddProject />
        <AddBank />

        <Link className="" to="/">
            <button>Home</button>
        </Link>
    </>)
}

export default Admin;