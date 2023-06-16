import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  & + & {
    margin-top: 30px;
  }
`

export const InputLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 10px;
  color: #999;
  transition: all 0.2s ease-out;
  pointer-events: none;
  opacity: 0;

  ${InputContainer}:focus-within & {
    opacity: 1;
    top: -8px;
    left: 12px;
    font-size: 12px;

    color: ${({ theme }) => theme.colors.primary};
    background-color: #fbfdf9;
    padding: 0 3px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 56px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  font-size: ${({ theme }) => theme.fontSizes.large};

  padding: 0 16px;

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

export const ClearIconWrapper = styled.div`
  position: absolute;

  right: 10px;

  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.92;
  }
`
