import React from 'react'
import { Stethoscope32, Portfolio32, HealthCross32, Grid32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/dashboard">
          <NavButton
            hasIconOnly
            renderIcon={Grid32}
            iconDescription="Dashboard"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/payments">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Payments"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/withdrawal">
          <NavButton
            hasIconOnly
            renderIcon={HealthCross32}
            iconDescription="Withdrawals"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/transfers">
          <NavButton
            hasIconOnly
            renderIcon={Stethoscope32}
            iconDescription="Transfers"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;