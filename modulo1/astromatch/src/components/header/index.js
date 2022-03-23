import React, { useState } from "react";

import { IconMetch, Title, IconAdd, Container } from './styles'

const Header = () => {
    const [isHide, setIsHide] = useState(false);

    return(
        <>
            <IconMetch hide={isHide}/>
            <Title>Astromatch</Title>
            <IconAdd />
        </>
    );
}

export default Header;