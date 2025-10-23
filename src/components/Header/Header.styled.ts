import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 90px;
	background-color: #4682b4;
	display: flex;
	align-items: center;
  padding-block: 10px;
`;

export const HeaderContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	display: flex;
	gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px 20px;
	color: #fff;

	&.active {
		color: #390ac6b4;
		background: #fff;
		border-radius: 10px;
	}
`;
