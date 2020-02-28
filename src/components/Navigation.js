import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
display: flex;
justify-content: space-evenly;
`;

const Navigation = () => {
    return (
        <Links>
            <Link to='/'>
                Home
            </Link>
            <Link to='/characters'>
                Characters
            </Link>
        </Links>
    );
};

export default Navigation;