//styled-react

import styled, {css} from 'styled-components';

import profileImage from '../../assets/perfil-twitter.jpg';
import profileImage2 from '../../assets/perfil-twitter2.jpg';
import bannerImage from '../../assets/banner-twitter.jpg';
import bannerImage2 from '../../assets/banner-twitter2.jpg';

import Button from '../Button';

import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto; /**dar scroll */

    scrollbar-width: none; /**Configuração p/ Firefox */

    ::-webkit-scrollbar {
        display: none; /**Configuração p/ Chrome */
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background-image: url(${bannerImage});

    position: relative;

    @media (max-width: 500px) {
        background-image: (${bannerImage2});
    }
`;


export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    background-image: url(${profileImage});

    border: 3.75px solid var(--primary);

    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;


    @media (max-width: 450px) {
        background-image: url(${profileImage2});
    }
`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    >h2 {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray)
    }

    > p {
        font-size: 15px;
        margin-top: 11px;

        > a {
            text-decoration:none;
            color: var(--twitter);
        }
    }

    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            display: flex;
            align-items: center;
            
            font-size: 15px;
            color: var(--gray);

            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;

const iconCSS = css `
    width: 20px;
    height: 20px;

    color: var(--gray);
`

export const LocationIcon = styled(LocationOn)`
    ${iconCSS};
`;
export const CakeIcon = styled(Cake)`
    ${iconCSS};
`;
export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px, 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;