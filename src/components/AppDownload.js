import React from 'react'
import styled from "styled-components";
import { logo } from '../data';
export default function AppDownload() {
    return (
			<Container>
				<Text>Register your business and open an account</Text>
				<Wrapper>
					{logo.map((item) => (
						<Box key={item.id}>
							<ImageContainer>
								<Image src={item.img}/>
							</ImageContainer>
							<Info>
								<Text1>{item.text1}</Text1>
								<Text2>{item.text2}</Text2>
							</Info>
						</Box>
					))}
				</Wrapper>
			</Container>
		);
}
const Container = styled.div`
	background: #1e35ad;
	width: 100%;
	max-width: 60%;
	margin: auto;
	display: flex;
	margin-top: 5rem;
	border-radius: 15px;
	height: 35vh;
	padding: 1rem 2rem;
	margin-bottom: 5rem;
`;
const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 3.5rem;
	margin-top: 25px;
	margin-bottom: 25px;
	
`;
const Text = styled.h3`
flex: 1;
color: white;
text-align: center;
margin-top: 5rem;
margin-left: 4rem;
`
const Box = styled.div`
	display: flex;
	width: 200px;
	height: 10vh;
	text-align: left;
	padding: 15px 25px;
	background: #000;
	border-radius: 8px;
	color: #fff;
	margin-right: 15px;
	margin-bottom: 10px;
	margin: auto;
`;
const ImageContainer = styled.div`

`
const Image = styled.img`
	width: 30px;
	flex: 0 0 30px;
	margin-right: 15px;
	cursor: pointer;
`;
const Info = styled.div`
display: flex;
flex-direction: column;
margin: 0;
`
const Text1 = styled.span`
	font-size: 9px;
	font-weight: 400;
	line-height: 1;
`;
const Text2 = styled.span`
	font-size: 15px;
	font-weight: 600;
	
	display: flex;
	margin-top: 3px;
	white-space: nowrap;
`;
