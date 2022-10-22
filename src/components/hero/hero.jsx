import React, { useEffect } from "react";
import "./hero.scss"
import { useRef, useState } from "react"
import Time from "../times/time"

import { useQuery, useMutation, gql } from "@apollo/client";


const GET_COMPANY = gql`
      query {
        company {
          id
          company_name
          projects {
            id
            projects_name
            price_kv
            project_location
            rooms {
              id
              rooms_value
              size
            }
          }
        }
      }
    `;

const Hero = ( ) => {



  const [id, setId] = React.useState();
  const [projectid, setprojectId] = React.useState(0);

  const [ idCompany, setidCompany ] = React.useState()


  const { data, loading, error } = useQuery(GET_COMPANY);

  if (loading) return "Loading..";
  if (error) return  <>{error.message}</>;

  return (
    <>
      <div className="hero">

      <div>
        <p>Kompaniya nomi</p>
      <select className="hero_select"
        name="company"
        onChange={(evt) => {
          const number = evt.target.value;
          setId(number);
        }}
      > 
        <option className="hero__option" value="" selected disabled hidden>Kompaniyani tanlang</option>
        {data.company.map((company, index) => (
          <option placeholder="Company" key={company.id} value={index}>
            {company.company_name}
          </option>
        ))}
      </select>
      </div>

      <div>
      <p>Proyektni tanlang</p>
      <select className="hero_select" name="company" onChange={ (evt) => {
        const number = evt.target.value

        setprojectId(number)
      }}>
        <option value="" selected disabled hidden>Loyihani tanlang</option>
        {data.company[projectid].projects.map((company, index) => (
          <option placeholder="Projects" key={company.id} value={index}>
            {company.projects_name}
          </option>
        ))}
      </select>
      </div>

      <div>
      <p>Honalar sonini tanlang</p>
      <select className="hero_select" name="company" onChange={(evt) => {
        const number = evt.target.value;
      }}>
        <option value="" selected disabled hidden>Honalar sonini tanlang</option>
        {data.company[projectid].projects[projectid].rooms.map((projects) => (
          <option placeholder="Rooms" key={projects.id} value={projects.id}>
            {projects.rooms_value}
          </option>
        ))}
      </select>
      </div>

      <div>
          <Time />
      </div>
      </div>
    </>
  );
};

export default Hero;