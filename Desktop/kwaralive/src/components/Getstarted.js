import React from 'react'
import styled from "styled-components"
import { getStarted } from '../data';

export default function Getstarted() {
    return (
			<Container>
				<Wrapper>
					<InfoContainer>
						<Info>Get started with Prospa Business</Info>
						<Text>
							Thinking about starting a new business or giving your existing
							business the much-needed credibility it deserves? We’ve made it
							super easy to get up and running in no time.
						</Text>
					</InfoContainer>
					<BoxContainer>
						{getStarted.map((item) => (
							<Box key={item.id}>
								<Icon>
									<Image src={item.img} />
								</Icon>
								<IconText>
									<Text1>{item.text}</Text1>
								</IconText>
							</Box>
						))}
					</BoxContainer>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
background: #FAFAFB;
margin-top: 4rem;
padding: 2.5rem
`;
const Wrapper = styled.div`
display: flex;
width: 70%;
margin: auto;
`
const InfoContainer = styled.div``
const Info = styled.h3``
const Text = styled.p``
const BoxContainer = styled.div`
    display: flex;
	width: 100%;
    background: #fff;
    box-shadow: 0 4px 24px rgb(10 16 53 / 12%);
    border-radius: 13px;
    padding: 3.5rem 2.4rem;
`;
const Box = styled.div``
const Icon = styled.div``
const Image = styled.img``
const IconText = styled.div``   
const Text1 = styled.h5``
