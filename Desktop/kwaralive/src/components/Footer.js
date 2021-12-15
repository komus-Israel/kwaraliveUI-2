import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { logo } from "../data";
import { mobile } from "../responsive";
export default function Footer() {
	return (
		<Container>
			<Left>
				<Logo src='http://www.kwaralive.com/images/logo.png' />
				<Desc>
					{logo.map((item) => (
						<Box key={item.id}>
							<ImageContainer>
								<Image src={item.img} />
							</ImageContainer>
							<Info>
								<Text1>{item.text1}</Text1>
								<Text2>{item.text2}</Text2>
							</Info>
						</Box>
					))}
				</Desc>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
					Tobinchester 98336
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
    background: #1C2226;
    color: #fff;
	${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.img`
width: 222px;
`;
const Desc = styled.p`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	width: 50%;
`;

const Box = styled.div`
	display: flex;
	width: 200px;
	height: 10vh;
	text-align: left;
	padding: 15px 25px;
	background: #000;
	border-radius: 8px;
	color: #fff;
	margin-top: 15px;
	margin: auto;
`;
const ImageContainer = styled.div``;
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
`;
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
