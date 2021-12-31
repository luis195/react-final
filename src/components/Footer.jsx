import React from 'react';
import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {Link} from "@material-ui/core";

const Container = styled.div`
  display: flex;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  `;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>RUAH</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi dignissimos doloremque fuga quod tenetur. A architecto commodi dolorum error
                    itaque laudantium libero, non nostrum numquam quam qui rerum veniam voluptas.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Utiles</Title>
                <List>
                    <ListItem><Link to = "/">Inicio</Link></ListItem>
                    <ListItem><Link to = "/cart">Carrito</Link></ListItem>
                    <ListItem>Hombre </ListItem>
                    <ListItem>Mujer </ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Mi Cuenta</ListItem>
                    <ListItem>Rastreo de pedido</ListItem>
                    <ListItem>Lista de deseos</ListItem>
                    <ListItem>Terminos y Condiciones</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> CABA, Argentina.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +5491199999999
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contacto@ruahvelas.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;