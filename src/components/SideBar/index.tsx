import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWraper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWraper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWraper>
      
          <StickyBox>
            <Body>
              <List 
                title="Talvez você curta"
                elements = {[

                  <FollowSugestion name="Isaac Newton" nickname="@força_pessoal" />,
                  <FollowSugestion name="Nicolau Maquiavel" nickname="@oprincipe" />,
                  <FollowSugestion name="René Descartes" nickname="@penso_logo_existo" />
              ]}
              />
              <List 
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
              />
              <List 
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
              />
              <List 
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
              />
            </Body>
          </StickyBox>
          
      </Container>
  );
}

export default SideBar;