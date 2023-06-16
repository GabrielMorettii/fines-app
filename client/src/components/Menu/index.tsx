import { useContext } from 'react'

import { LogoutButton, MenuContainer, MenuList, ModalTrigger } from './styles'

import { FaRegListAlt } from 'react-icons/fa'
import { RxExit } from 'react-icons/rx'
import { IoIosArrowForward } from 'react-icons/io'

import { MenuModal } from './MenuModal'

import logoSimple from '../../assets/logo-simple.svg'
import { SessionContext } from '../../contexts/SessionContext'

export function Menu() {
  const { closeSession } = useContext(SessionContext)

  return (
    <MenuContainer>
      <MenuModal>
        <ModalTrigger>
          <IoIosArrowForward />
        </ModalTrigger>
      </MenuModal>

      <img src={logoSimple} alt="Logo Simple" />

      <MenuList>
        <h3>Menu</h3>
        <li onClick={() => window.location.assign('/fines')}>
          <FaRegListAlt />
        </li>
      </MenuList>

      <LogoutButton onClick={closeSession}>
        <RxExit />
      </LogoutButton>
    </MenuContainer>
  )
}
