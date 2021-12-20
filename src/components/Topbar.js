import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";


export default function Topbar() {
    return (
			<Container>
				<Wrapper>
					<Left>
						<ImageContainer>
							<Image src='http://www.kwaralive.com/images/logo.png' />
						</ImageContainer>
						<Text>Register Your Business</Text>
					</Left>
					<Right>
						<MenuItem>
							<Button>Log In</Button>
						</MenuItem>
						<MenuItem>
							<SearchIcon />
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		);
}

const Container = styled.div`
	height: 60px;
	
	margin-top: 2rem;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	background-color: transparent;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const ImageContainer = styled.div`

margin-left: 20%;
`
const Image = styled.img`
width: 150px;
color: white;`
const Text = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;
const Button = styled.button`
	display: inline-block;
	background: transparent;
	color: #000;
	padding: 0.25rem 0.75rem;
	border-radius: var(--radius);
	border-color: transparent;
	text-transform: capitalize;
	font-size: 1rem;
	letter-spacing: var(--spacing);
	cursor: pointer;
	transition: var(--transition);
`;
