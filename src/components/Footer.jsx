import React from 'react'

import Container from '../UI/Footer/Container'
import Left from '../UI/Footer/Left'
import { Middle, List, ListItem } from '../UI/Footer/Middle'
import Right from '../UI/Footer/Right'
import Description from '../UI/Footer/Description';
import { MailOutline, Phone } from '@mui/icons-material';
import ContactItem from '../UI/Footer/ContactItem';
import Title from '../UI/Title';
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <Container>
      <Left>
        <Title style={{ textAlign: 'left' }}>WOMEN'S FASHION</Title>
        <Description>
          Enjoy your life while you can
        </Description>
        <SocialMedia />
      </Left>
      <Middle>
        <Title>Useful Links</Title>
        <List>
          <ListItem>HOME</ListItem>
          <ListItem>CARRY</ListItem>
          <ListItem>MEN</ListItem>
          <ListItem>WOMEN</ListItem>
          <ListItem>APTR</ListItem>
          <ListItem>ACCOUNT</ListItem>
          <ListItem>TRACK YOUR ORDER</ListItem>
          <ListItem>WISHLIST</ListItem>
          <ListItem>WHISLIST</ListItem>
          <ListItem>TERMs AND CONTITIONS</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact us through</Title>
        <ContactItem>
          <Phone />
          +21100423928
        </ContactItem>
        <ContactItem>
          <MailOutline />
          sararady60@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer