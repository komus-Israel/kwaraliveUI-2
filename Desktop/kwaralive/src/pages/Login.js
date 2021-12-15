import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

export default function Login() {
    return (
			<Container>
				<Title1>Welcome back to KwaraLive</Title1>
				<Title>
					An account, with powerful, personalised tools all in one place
				</Title>
				<Wrapper>
					<Form>
						<Input placeholder='username' />
						<Input placeholder='password' />
						<Button>Sign In</Button>
						<Link>Forget Password?</Link>
						<Link to='/register'>CREATE A NEW ACCOUNT</Link>
					</Form>
				</Wrapper>
			</Container>
		);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #1e35ad;
`;
const Title1 = styled.h3`
margin-bottom: 3px;`

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	
	${mobile({ width: "75%" })}
`;

const Title = styled.p`
	font-size: 16px;
	font-weight: 100;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 50%;
	margin: 10px 0;
	padding: 1rem 2rem;
	border: none;
	background: #fff;
	box-shadow: 0 2px 12px rgb(10 16 53 / 12%);
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: #1e35ad;
	color: white;
	cursor: pointer;
	margin-bottom: 15px;
	align-items: center;
	justify-content: center;
    margin-top: 15px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

