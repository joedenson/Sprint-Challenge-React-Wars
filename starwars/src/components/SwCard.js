import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';



const SwCard = (props) => {
    return (
        <div className="container" key={props.name}>
            <div className="starwars-card">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardBody className='card'>
                        <CardTitle>Name: {props.name}</CardTitle>
                        <hr></hr>
                        <CardText>Height: {props.height}</CardText>
                        <hr></hr>
                        <CardText>Mass: {props.mass}</CardText>

                    </CardBody>
                </Card>
            </div>
        </div>
    );
};


export default SwCard;
