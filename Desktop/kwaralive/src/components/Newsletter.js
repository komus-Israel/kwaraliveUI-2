 import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

export default function Newsletter() {
	return (
		<Container>
			<Title>Subscribe</Title>
			<InputContainer>
				<form
					className='contact-form'
					action='https://formspree.io/f/xvodvgyp'
					method='POST'>
					<Input
						type='email'
						placeholder='enter email'
						name='_replyto'
					/>
					<Button type="submit">
						 <Send />
					</Button>
				</form>
			</InputContainer>
			<Description>
				Subscribe for information and new letter from us.
			</Description>
		</Container>
	);
}

const Container = styled.div`
	height: 30vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	margin: 50px 50px;
`;
const Title = styled.h4`
	font-size: 30px;
	margin-bottom: 20px;
`;
const Description = styled.p`
	font-size: 14px;
	font-weight: 100;
	margin-top: 20px;
	${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
	width: 30%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	${mobile({ width: "80%" })}

	.contact-form {
	width: 90vw;
	max-width: 500px;
	display: flex;
// 	}
`;
const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background: #1e35ad;
	color: white;
`;
// import React from "react";
// import styled from "styled-components";

// const Contact = () => {
// 	return (
// 		<Wrapper>
// 			<Title>Subscribe</Title>
// 			<InputContainer>
// 				<form
// 					className='contact-form'
// 					action='https://formspree.io/f/xvodvgyp'
// 					method='POST'>
// 					<Input
// 						tyoe='email'
						
// 						placeholder='enter email'
// 						name='_replyto'
// 					/>
// 					<Button type="submit">
// 						 <Send />
// 					</Button>
// 				</form>
// 			</InputContainer>
// 			<Description>
// 				Subscribe for information and new letter from us.
// 			</Description>
// 		</Wrapper>
// 	);
// };
// const Wrapper = styled.section`
// 	.contact-form {
// 		width: 90vw;
// 		max-width: 500px;
// 		display: flex;
// 	}
// 	.form-input,
// 	.submit-btn {
// 		font-size: 1rem;
// 		padding: 0.5rem 1rem;
// 		border: 2px solid var(--clr-black);
// 	}
// 	.form-input {
// 		border-right: none;
// 		color: var(--clr-grey-3);
// 		border-top-left-radius: var(--radius);
// 		border-bottom-left-radius: var(--radius);
// 	}
	
// 	@media (min-width: 992px) {
// 		.content {
// 			width: 30%;
// 			height: 40px;
// 			background-color: white;
// 			display: flex;
// 			justify-content: space-between;
// 			border: 1px solid lightgray;
// 		}
// 		p {
// 			margin-bottom: 0;
// 		}
// 	}
// 	@media (min-width: 1280px) {
// 		padding: 15rem 0;
// 	}
// `;
// const Title = styled.h4`
// font-size: 30px;
// margin-bottom: 20px;
// `
// const Description = styled.p`
// font-size: 14px;
// font-weight: 100;
// margin-top: 20px;
// `;
// const InputContainer = styled.div`
// width: 30%;
// height: 40px;
// background-color: white;
// display: flex;
// justify-content: space-between;
// border: 1px solid lightgray;
// `;
// const Button = styled.button`
// 	flex: 1;
// 	border: none;
// 	background: #1e35ad;
// 	color: white;
// `;
// const Input = styled.input`
// 	border: none;
// 	flex: 8;
// 	padding-left: 20px;
// `;

// export default Contact;