import React from 'react'
import styled from 'styled-components'
import { category } from '../data'

export default function TopCategory() {
    return (
        <Container>
            <Wrapper>
               <Text>Top CATEGORY For You</Text>
               <hr />
               <InfoContainer>
                   {category.map((item) => {
                       <Info key={item.id}>
                           <Text>{item.name}</Text>
                       </Info>
                   })}
               </InfoContainer>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`

`
const Wrapper = styled.div``
const InfoContainer = styled.div``
const Info = styled.div``
const Text = styled.span``