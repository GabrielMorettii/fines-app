import * as Dialog from '@radix-ui/react-dialog'

import { ReactNode, useContext, useState } from 'react'

import { SessionContext } from '../../../contexts/SessionContext'

import { RxExit } from 'react-icons/rx'
import { IoIosArrowBack } from 'react-icons/io'

import logo from '../../../assets/logo.svg'

import {
  DialogContent,
  DialogOverlay,
  LogoutButton,
  MenuList,
  UserAvatar,
} from './styles'

import { MenuContainer, ModalTrigger } from '../styles'

interface MenuModalProps {
  children: ReactNode
}

export function MenuModal({ children }: MenuModalProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const { closeSession } = useContext(SessionContext)

  const username = localStorage.getItem('username')

  return (
    <Dialog.Root open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <MenuContainer>
            <Dialog.Close asChild>
              <ModalTrigger>
                <IoIosArrowBack />
              </ModalTrigger>
            </Dialog.Close>

            <img src={logo} alt="Logo" />

            <MenuList>
              <h3>Menu</h3>
              <li onClick={() => window.location.assign('/fines')}>Consulta</li>
            </MenuList>
            <UserAvatar>
              <img
                src="https://assets.codepen.io/1480814/av+1.png"
                alt="avatar"
              />
              <span>{username}</span>
            </UserAvatar>
            <LogoutButton onClick={closeSession}>
              <RxExit />
              <span>Sair</span>
            </LogoutButton>
          </MenuContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
