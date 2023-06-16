import styled from 'styled-components'

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;

  input {
    padding-right: 40px;
  }

  > span {
    position: absolute;
    right: 13px;

    svg {
      height: 22px;
      width: 22px;

      color: ${({ theme }) => theme.colors.outline};

      &:hover {
        cursor: pointer;
      }
    }
  }
`
