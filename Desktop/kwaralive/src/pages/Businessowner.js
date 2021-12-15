import { width } from '@mui/system';
import React, { useState } from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

export default function Businessowner() {
    const [filter, setFilter] = useState({});

    	const handleFilters = (e) => {
				const value = e.target.value;
				setFilter({
					...filter,
					[e.target.name]: value,
				});
			};

	return (
		<Container>
			<Title1 src='http://www.kwaralive.com/images/logo.png' />
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='First Name' />
					<Input placeholder='Last Name' />
					<Input placeholder='Phone' />
					<Input placeholder='Email' />
					<Input placeholder='Business Name' />
					<Input placeholder='Website Url' />
					<Select name='size' onChange={handleFilters}>
						<Option>Select Business Catgory</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
					<Input placeholder='Address' />
					<Input placeholder='password' />
					<Input placeholder='confirm password' />
					<Input placeholder='Business Description' />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>Register</Button>
				</Form>
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
	color: white;
	
    
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 50%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	border: none;
	border-radius: 8px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
	color: white;
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
const Select = styled.select`
	border-radius: 8px;
	padding: 5px;
	margin-right: 50px;
	margin-top: 1rem;
	min-width: 40%;
	${mobile({ margin: "10px" })}
`;
const Option = styled.option`
border: none;
width: 50%;
`;