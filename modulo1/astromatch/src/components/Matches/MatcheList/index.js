import React from "react";

import { Container, Photo, Title } from "./styles";

const MatcheList = ({ photo, name }) => {

    return (<Container className="matche-list">
        <Photo>
            <img src={photo} alt={'matche'} />
        </Photo>

        <Title>
            <h3>{name}</h3>
        </Title>
    </Container>)
}

export default MatcheList;