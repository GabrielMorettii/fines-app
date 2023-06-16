import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.25);
`

export const DialogContent = styled(Dialog.Content)`
  position: absolute;

  width: 290px;

  left: 0;
  top: 0;
  bottom: 0;

  > div {
    width: 100%;
    padding: 0 57px;

    align-items: flex-start;

    > img {
      width: 150px;
      height: 58px;
    }
  }
`

export const MenuList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  margin-top: 62px;

  color: ${({ theme }) => theme.colors.black};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 20px;
  }

  li {
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }
`

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: auto;

  img {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors['light-gray']};
  }

  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

export const LogoutButton = styled.button`
  background: ${({ theme }) => theme.colors.error};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 25px 0;

  width: 190px;
  height: 40px;

  gap: 11px;

  color: ${({ theme }) => theme.colors['on-primary']};

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  border-radius: 100px;

  &:hover {
    cursor: pointer;

    opacity: 0.92;
  }
`
