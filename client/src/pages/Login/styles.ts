import styled from 'styled-components'

export const Container = styled.div`
  max-width: 550px;

  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

export const LoginForm = styled.form`
  width: 100%;
  margin-top: 50%;

  height: 30vh;
  min-height: 370px;

  background: ${({ theme }) => theme.colors['on-primary']};
  border-radius: 20px;

  padding: 0 75px;
  text-align: center;

  img {
    margin: 28px 0;
  }
`

export const Footer = styled.footer`
  width: 100%;
  color: ${({ theme }) => theme.colors['dark-gray']};

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  margin-top: auto;
  margin-bottom: 30px;
  text-align: center;
`

export const FormButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors['on-primary']};

  height: 40px;

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;

  border-radius: 100px;

  margin: 22px 0;

  &:hover {
    cursor: pointer;

    opacity: 0.92;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const InfoDescription = styled.span`
  display: block;

  margin-top: 10px;

  color: ${({ theme }) => theme.colors.error};
`

export const ChangePageButton = styled.button`
  all: unset;

  display: block;

  margin: 5px 0;
  margin-left: auto;

  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
