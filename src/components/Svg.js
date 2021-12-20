import React from 'react'
import styled from "styled-components"

export default function Svg() {
    return (
			<Container>
				<svg className='waves' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#fff'
						fill-opacity='1'
						d='M0,0L48,26.7C96,53,192,107,288,117.3C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
				</svg>
			</Container>
		);
}

const Container = styled.div`
	background: white;
	position: relative;
    

	.waves {
		postion: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
        margin-top: -8rem;
	}
`;