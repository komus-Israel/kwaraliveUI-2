import React from 'react'
import styled from "styled-components";
import { business } from '../data' 
import { registration } from '../data';
export default function Business() {
    return (
			<Container>
				<Wrapper>
					<First>
						<Left>
							<Info>
								Everything you need to start your business. Professionally
							</Info>
						</Left>
						<Right>
							{business.map((item) => (
								<Item key={item.id}>
									<Icon>
										<Images src={item.img} />
									</Icon>
									<Texts>
										<Text>{item.text}</Text>
									</Texts>
								</Item>
							))}
						</Right>
					</First>
					<Second>
						<h2>Streamlined process from start to finish</h2>
						<p>
							In just a few steps you’ll have a registered business and a
							business bank account
						</p>
					</Second>
					<Third>
						{registration.map((item) => (
							<ImageContainer key={item.id}>
								<Image src={item.img} />
								<Register>{item.text}</Register>
								<Sha>{item.sha}</Sha>
							</ImageContainer>
						))}
					</Third>
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
color: black;
`
const Wrapper = styled.div`
	
`;
const First = styled.div`
	font-family: Gilroy Semibold;
	width: 100%;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.div`
width:35%;
margin-left: 10rem;
text-align: center;
margin-top: -5rem;
z-index: 999;
`
const Info = styled.p`
	font-size: 45px;
	font-weight: 400;
	font-family: Gilroy Semibold;
	color: #0a1035;
`;
const Right = styled.div`
	width: 30%;
	margin-top: -20rem;
	margin-right: 15rem;
	background: white;
	height: 55vh;
	z-index: 999;
	padding: 1rem;
	border-radius: 15px;
	box-shadow: 0 2px 12px rgb(10 16 53 / 12%);
`;
const Item = styled.div`
margin-top: 2rem;
margin-left: 2rem;
display: flex;
width: 60%;

`;
const Icon = styled.div`
`;
const Images = styled.img`
	font-size: 20px;
	font-weight: 700;
`;
const Texts = styled.div`
	
`;
const Text = styled.h4`
margin-left: 2rem;
	font-size: 1.5rem;
	color: #0a1035;
	font-family: Gilroy Semibold;
	margin-bottom: 1.6 rem;
`;
const Second = styled.div`
	margin-top: 5rem;
	text-align: center;
	h2 {
		font-size: 2.4rem;
		color: #0a1035;
        font-weight:500;
		font-family: Gilroy Semibold;
	}
`;
const Third = styled.div`
	
	display: flex;
	margin-top: 5rem;
	margin-left: 10rem;
`;
const ImageContainer = styled.div`
	max-width: 18rem;
	width: 100%;
	height: 40vh;
	display: flex;
	flex-direction: column;
	margin-right: 0;
	margin-bottom: 1 rem;
	margin-left: 0.5rem;
	background: #fff;
	box-shadow: 0 2px 12px rgb(10 16 53 / 12%);
	border-radius: 6 px;
	padding: 2.5 rem 0.5 rem;
`;
const Image = styled.img`
width: 100px;
margin-top: 2rem;
margin:auto
`;
const Register = styled.p`
text-align: center;
margin-left: 1rem;
`;
const Sha = styled.p`
text-align: center;`;
