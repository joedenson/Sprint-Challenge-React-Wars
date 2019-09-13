import React from 'react';
import { CardText } from 'reactstrap';
import styled from "styled-components";


const CustomCard = styled.div`
background: #333;
 border-color: #333;
color: white;
 padding: 2% 0 1% 0;
  margin-bottom: 5%;
`;

const CustomTitle = styled.div`
border-bottom: 1px solid white;
padding: 0 0 5% 0;
`;

const CustomText = styled.div`
border-bottom: 1px solid white;
padding: 2% 0 2% 0;
`;

const CustomBody = styled.div`
padding: 2% 0 2% 0;
margin-bottom: 5%;
`;

const SwCard = (props) => {
    return (
        <div className="container" key={props.name}>
            <div className="starwars-card">
                <CustomCard>
                    <CustomBody>
                        <CustomTitle>Name: {props.name}</CustomTitle>
                        <CustomText>Height: {props.height}</CustomText>
                        <CustomText>Mass: {props.mass}</CustomText>
                        <CardText className="card-text">Birth Year: {props.birthYear}</CardText>

                    </CustomBody>
                </CustomCard>
            </div>
        </div>
    );
};


export default SwCard;
