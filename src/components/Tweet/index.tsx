import React from 'react';

import { Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot, 
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    Rocket,
    HeartEyes
} from './styles';

const Tweet: React.FC = () => {
  return(
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Rocketseat</strong>
                      <span>@rocketseat</span>
                      <Dot />
                      <time>14 de jul</time>
                  </Header>

                  <Description>Estão abertas as inscrições para a NEXT LEVEL WEEK #02. <Rocket /></Description><br />
                  <Description>A <strong>#NLW02</strong> é um projeto gratuito da Rocketseat que vai acontecer entre os dias 03 e 09 de agosto.</Description><br /> 
                  <Description>O que esperar dessa segunda edição? <HeartEyes /></Description><br />
                  <Description>Mandem suas perguntas aqui com a tag <strong>#NLW02 <LikeIcon /></strong></Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            99
                        </Status>
                    </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;