import styled from 'styled-components';

interface ISidebarLinkProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  activeSubmenu:
    | 'Profile details'
    | 'Account settings'
    | 'Postage'
    | 'Payments'
    | 'Notifications'
    | 'Privacy settings'
    | 'Security';
}

const SidebarLink: React.FC<ISidebarLinkProps> = ({
  text,
  onClick,
  activeSubmenu,
}) => {
  return (
    <SidebarLinkWrapper>
      <li
        onClick={onClick}
        style={activeSubmenu === text ? { color: 'black' } : undefined}
      >
        {text}
      </li>
    </SidebarLinkWrapper>
  );
};

export default SidebarLink;

const SidebarLinkWrapper = styled.div`
  cursor: pointer;
  min-width: 290px;
  padding: 16px;
  font-size: 1.2rem;
  color: rgb(105, 104, 104);

  &:hover {
    color: rgb(48, 48, 48);
  }
`;
