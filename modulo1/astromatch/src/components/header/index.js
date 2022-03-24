import React, { useState } from "react";

import { IconMetch, Title, IconAdd, Container } from './styles'

const Header = ({hide, setIsHide}) => {   
    return(
        <>
            <IconMetch hide={hide} onClick={() => setIsHide(true)} />
            <Title>Astromatch</Title>
            <IconAdd hide={!hide}  onClick={() => setIsHide(false)}/>
        </>
    );
}

export default Header;