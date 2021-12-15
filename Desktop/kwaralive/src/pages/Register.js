import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

export default function Register() {
    return (
			<Container>
				<Wrapper>
					<Title1>Register as</Title1>
					<Button>A Business Owner</Button>
					<Button>A Regular User</Button>
				</Wrapper>
			</Container>
		);
};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #1e35ad;
`;
const Wrapper = styled.div`
	width: 30%;
	height: 60vh;
	background: #1e35ad;
	box-shadow: 0 2px 12px rgb(10 16 53 / 12%);
	border-radius: 6px;
	padding: 2.5 rem 0.5 rem;
`;
const Title1 = styled.h3`
	margin-top: 3rem;
	margin-bottom: 3rem;
	color: white;
    text-align: center;
`;

const Button = styled.button`
margin-left: 5rem;
	width: 60%;
	display: inline-block;
	background: hsla(0, 0%, 100%, 0.2);
	color: white;
	padding: 1rem 5rem;
	border-radius: 8px;
	border-color: transparent;
	text-transform: capitalize;
	font-size: 1rem;
	letter-spacing: var(--spacing);
	cursor: pointer;
	transition: var(--transition);
    margin-bottom: 2rem;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

