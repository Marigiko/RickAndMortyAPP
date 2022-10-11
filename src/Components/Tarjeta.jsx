import React from 'react';
import Card from 'react-bootstrap/Card';

const Tarjeta = ({data}) => {
    console.log(data);
    return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data.image}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>
              {data.status}
            </li>
            <li>
              {data.species}
            </li>
            <li>
              {data.gender}
            </li>
            <li>
              {data.origin.name}
            </li>
            <li>
              {data.location.name}
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    );
}

export default Tarjeta;