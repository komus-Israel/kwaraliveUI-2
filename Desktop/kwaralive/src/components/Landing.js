import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";

export default function Landing() {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction='left' onClick={() => handleClick("left")}>
				<ArrowLeftOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImageContainer>
							<Topbar>
								<Left>
									<Images src='http://www.kwaralive.com/images/logo.png' />
									<MenuItem>Register Your Business</MenuItem>
								</Left>
								<Right>
									<MenuItem>
										<Button>Log In</Button>
									</MenuItem>
									<MenuItem>
										<SearchIcon />
									</MenuItem>
								</Right>
							</Topbar>
							<Image src={item.img} />
						</ImageContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction='right' onClick={() => handleClick("right")}>
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({ display: "none" })}
`;
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
    width: 100%;
	height: 100%;
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Topbar = styled.div`
	width: 1333px;
	height: 60px;
	margin-top: 2rem;
	position: absolute;
	top: 0;
	bottom: 0;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Button = styled.button`
	width: 100%;
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
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Images = styled.img`
	width: 150px;
	color: white;
    margin-left:10rem;
`;
const Text = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;
    color: white;
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
	color: white;
`;
const Waves = styled.div`

	.waves {
		position: absolute;
		bottom: 0;
		left:0;
		width:100%;
		
	}
`;