import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const MenuContainer = styled.div`
  position: relative;

  height: 100%;
  width: 100px;
  background: ${({ theme }) => theme.colors['on-primary']};

  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${fadeIn} 0.5s ease-in-out forwards;

  > img {
    margin-top: 51px;
    margin-bottom: 78px;
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`

export const MenuList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;

  color: ${({ theme }) => theme.colors.black};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  li {
    svg {
      width: 18px;
      height: 18px;

      &:hover {
        opacity: 0.75;
      }
    }
  }
`

export const ModalTrigger = styled.div`
  position: absolute;

  top: 63px;
  right: 0;

  transform: translateX(50%);

  width: 20px;
  height: 25px;

  background: ${({ theme }) => theme.colors['on-primary']};
  border: 1px solid ${({ theme }) => theme.colors['light-gray']};
  border-radius: 5px;

  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 25px;

    color: ${({ theme }) => theme.colors.black};
  }
`

export const LogoutButton = styled.button`
  all: unset;
  margin-top: auto;

  &:hover {
    opacity: 0.75;
  }

  svg {
    color: ${({ theme }) => theme.colors.error};

    width: 18px;
    height: 18px;
    stroke-width: 0.5px;

    margin-bottom: 35px;
  }
`
