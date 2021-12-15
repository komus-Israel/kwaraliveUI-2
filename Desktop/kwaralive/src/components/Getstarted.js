import React from 'react'
import styled from "styled-components"
import { getStarted } from '../data';

export default function Getstarted() {
    return (
			<Container>
				<Wrapper>
					<InfoContainer>
						<Info>Get started with KarawaLive</Info>
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
const InfoContainer = styled.div`
margin-top: 2rem;
`
const Info = styled.h3`
	color: #0a1035;
	font-family: Gilroy Semibold;
	font-size: 2.4rem;
`;
const Text = styled.p`
	color: #8397aa;
	font-family: Gilroy Semibold;
	font-size: 1.1rem;
	
`;
const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: #fff;
	box-shadow: 0 4px 24px rgb(10 16 53 / 12%);
	border-radius: 13px;
	padding: 3.5rem 2.4rem;
	margin-right: 2.5rem;
`;
const Box = styled.div`
	display: flex;
`;
const Icon = styled.div``
const Image = styled.img`

`
const IconText = styled.div`
	margin-left: 1rem;
	
`;   
const Text1 = styled.h5`
	font-size: 1.3rem;
	color: #0a1035;
	font-family: Gilroy Semibold;
`;
