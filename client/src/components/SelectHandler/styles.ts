import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  width: 100%;

  > svg {
    position: absolute;
    right: 8px;

    height: 20px;
    width: 20px;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 56px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  font-size: ${({ theme }) => theme.fontSizes.large};

  padding-left: 16px;
  padding-right: 32px;

  background: ${({ theme }) => theme.colors['on-primary']};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &,
  &::placeholder {
    color: ${({ theme }) => theme.colors['on-surface-variant']};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &::placeholder {
      color: transparent;
    }
  }
`

export const SelectOption = styled.option``
