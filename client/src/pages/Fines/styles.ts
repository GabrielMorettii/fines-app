import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;

  overflow-x: scroll;
`

export const FinesContainer = styled.div`
  width: 100vw;
  min-width: 928px;

  padding: 45px;
`

export const SearchForm = styled.form`
  padding: 21px 16px;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['on-primary']};

  width: 100%;
  height: 241px;

  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
    margin-left: auto;
    cursor: pointer;
  }
`

export const FormInputSection = styled.section`
  max-width: 700px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    margin-top: 0 !important;
  }

  > div {
    display: flex;
    gap: 20px;
  }
`

export const FormBottomSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;

  width: 110px;
  height: 40px;

  padding: 10px 24px;
  border-radius: 100px;

  background: ${({ theme }) => theme.colors.primary};

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  color: ${({ theme }) => theme.colors['on-primary']};

  &:hover {
    opacity: 0.92;
  }
`

export const FinesTable = styled.table`
  max-width: 1139px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['on-primary']};

  margin: 31px auto;

  td,
  th {
    width: 185px;
    height: 75px;

    text-align: center;

    color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors['light-gray']};
  }

  tr:last-child td {
    border-bottom: 0;
  }

  td svg {
    width: 24px;
    height: 24px;

    color: ${({ theme }) => theme.colors['light-primary']};
  }
`

export const ErrorDescription = styled.span`
  color: ${({ theme }) => theme.colors.error};
`

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 700px;

  margin: 60px auto;

  gap: 20px;

  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: 20px;
  padding: 10px 30px;

  span {
    font-size: 25px;
    text-align: center;
  }

  svg {
    width: 100px;
    height: 100px;
  }
`
