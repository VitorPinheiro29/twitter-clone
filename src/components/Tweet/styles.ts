import styled, {css} from 'styled-components';

import profileImage from '../../assets/avatar-feed.jpg';

import thumbTweet from '../../assets/thumb-tweet.jpg';
import thumbTweet2 from '../../assets/thumb-tweet2.jpg';

import { Chat, Rocketseat, Favorite, Foguete, HappyHeartEyes } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);
    max-width: 100%;
`;
export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;

export const RocketseatIcon = styled(Rocketseat)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path {
        fill: var(--gray);
    }
`;
export const Rocket = styled(Foguete)`
    width: 16px;
    height: 16px;
`;
export const HeartEyes = styled(HappyHeartEyes)`
    width: 16px;
    height: 16px;
    align-items: center;

    > svg {
        background: var(--twitter);
    }
`
export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    position: relative;
`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    flex-shrink: 0;
    background-image: url(${profileImage});

    position: absolute;
    top: 0;
    left: 0px;
`;
export const Content = styled.div`  
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }  

    > span, time {
        color: var(--gray);
    } 

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis; /**colocar "..." quando a tela estiver muito pequena */
        overflow: hidden;
    } 
`;
export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;
export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
    align-items: center;

    > strong {
        color: var(--twitter);
        font-weight: normal;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));

    background-image: url(${thumbTweet});
    border-radius: 14px;

    cursor: pointer;

    &:hover {
        opacity: .7;
    }

    @media (max-width: 430px) {
        background-image: url(${thumbTweet2});
    }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%; /**Mobile */

    @media (min-width: 330px) {
        width: 63%; /**Tablet, Computador */
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;
export const Status = styled.div`   
    display: flex;
    align-items: center;

    font-size: 14px;

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &, > svg path {
            color: var(--gray);
        }
    }  

        &:nth-child(2) {
            color: var(--retweet);
        > svg path {
            fill: var(--retweet);
        }
    } 

        &:nth-child(3) {
            color: var(--like);
        > svg {
            fill: var(--like);
        }
    }       
`;

const iconCSS = css`
    width: 19px;
    height: 19px;
`;
export const CommentIcon = styled(Chat)`
    ${iconCSS};
`;
export const RetweetIcon = styled(Rocketseat)`
    ${iconCSS};  
`;
export const LikeIcon = styled(Favorite)`
    ${iconCSS};  
`;