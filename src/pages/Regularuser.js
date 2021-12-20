import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

export default function Regularuser() {
	return (
		<Container>
			<Title1 src='http://www.kwaralive.com/images/logo.png' />
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>

				<Wrapper>
				<Form>
					<Input placeholder='First Name' />
					<Input placeholder='Last Name' />
					<Input placeholder='Phone' />
					<Input placeholder='Email' />
					<Input placeholder='Username' />
					<Input placeholder='Address' />
					<Input placeholder='password' />
					<Input placeholder='confirm password' />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Link to='/'>
						<Button>Register</Button>
					</Link>
				</Form>
				</Wrapper>
				
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 5px;
`;
const Title1 = styled.img`
	margin-bottom: 60px;
`;

const Wrapper = styled.div`
	height: 70vh;
	width: 50%;
	padding: 20px;
	background: #1e35ad;
	box-shadow: 0 2px 12px rgb(10 16 53 / 12%);
	border-radius: 6px;
	padding: 2.5 rem 0.5 rem;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
    color:white;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
    border: none;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
    color: white;
`;

const Button = styled.button`
	margin-left: 12.5rem;
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
	margin-top: 1rem;
	margin-bottom: 2rem;
`;