import React from 'react'
import { Link } from "react-router-dom";
import { Badge } from "../styles/Badge";
import { useQuery, gql } from '@apollo/client';
import { List, ListItemWithLink } from "../styles/List";

const PLANETS = gql`
{
  planets(order_by: {name: asc}) {
      name
      cuisine
      id
  }
}
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  const renderPlanets = (planets) => {
    return planets.map(({ id, name, cuisine }) => (
      <ListItemWithLink key={id}>
        <Link to={`/planet/${id}`}>
          {name} <Badge>{cuisine}</Badge>
        </Link>
      </ListItemWithLink>
    ));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return <List>{renderPlanets(newPlanets || data.planets)}</List>;
}

export default Planets
