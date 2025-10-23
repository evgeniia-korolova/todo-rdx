import {
	HeaderContainer,
	StyledHeader,
	StyledNavLink,
} from './Header.styled';

export const Header = () => {
	return (
		<StyledHeader>
			<HeaderContainer>
				<StyledNavLink to='/'>ToDo</StyledNavLink>
				<StyledNavLink to='/list'>List</StyledNavLink>
			</HeaderContainer>
		</StyledHeader>
	);
};
