import styled from 'styled-components';
import { getRandomHexColor } from '../Utils/getRandomHexColor';

export const Section = styled.section`
    width: 480px;
    margin: 0 auto 30px;
    padding-top: 30px;
    border-radius: 4px;
    box-shadow: -1px -2px 3px #c6d4f1, 2px 3px 8px #8c9fe2;
`;
export const Title = styled.h2`
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
    color: #312111;
`;

export const List = styled.ul`
    display: flex;
    width: 480px;
    margin: 0 auto;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 20px 0;
    width: 96px;
    background-color: ${props => getRandomHexColor(props.index)};

    :first-child {
        border-radius: 0 0 0 4px;
    };

    :last-child {
        border-radius: 0 0 4px 0;
    };
`;