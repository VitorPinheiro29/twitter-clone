//rfc

import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                
                <h1>Vitor Pinheiro</h1>
                <h2>@vtr_pinheiro</h2>

                <p>
                      Web Development's Student at <a href="https://etevav.com.br/new1/">@Etevav</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Jundiaí, SP
                    </li>
                    <li>
                        <CakeIcon />
                        29 de julho de 2003
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>22</strong>
                    </span>

                    <span>
                        <strong>11 </strong>seguidores
                    </span>
                </Followage>

            </ProfileData>

            <Feed />
      </Container>
  );
}

export default ProfilePage;