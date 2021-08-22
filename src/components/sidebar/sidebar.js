import React from 'react';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Link, useLocation } from '@reach/router';
import './sidebar.css';
import { StyledSideNav } from './styles';

const items = [
    { name: 'Dasboard', path: '/' },
    { name: 'Payments', path: '/payments' },
    { name: 'Withdrawals', path: '/withdrawal' },
    { name: 'Transfers', path: '/transfers' },
  ];

const Sidebar = () => {
    const location = useLocation();
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <h2> Ravencoin</h2>
            <SideNavItems>
            {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
           >
            {i.name }
          </SideNavLink>
        ))}
            </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidebar;