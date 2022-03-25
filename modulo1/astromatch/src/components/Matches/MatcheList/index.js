import React from "react";

import { Container, Photo, Title } from "./styles";

const MatcheList = ({ photo, name }) => {

    return (<Container className="matches-list">
        <Photo className="photo">
            <img src={photo} alt={'matche'} />
        </Photo>

        <Title className="name">
            <h3>{name}</h3>
        </Title>

    </Container>)
}

export default MatcheList;