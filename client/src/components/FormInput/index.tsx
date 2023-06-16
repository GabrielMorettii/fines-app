import { useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { MdOutlineCancel } from 'react-icons/md'

import { PasswordInput } from '../PasswordInput'

import { ClearIconWrapper, Input, InputContainer, InputLabel } from './styles'

interface FormInputProps {
  label: string
  name: string
  placeholder?: string
  type?: string
}

export function FormInput({
  label,
  type = 'text',
  placeholder,
  name,
}: FormInputProps) {
  const { register, watch, resetField } = useFormContext()

  const handleClearInput = useCallback(() => {
    resetField(name)
  }, [name, resetField])

  const isTextInputType = type === 'text'

  const inputValue = isTextInputType && watch(name)

  const inputIsNotEmpty =
    isTextInputType && inputValue !== '' && inputValue !== undefined

  return (
    <InputContainer>
      {type === 'password' && <PasswordInput label={label} name={name} />}

      {isTextInputType && (
        <Input
          type={type}
          placeholder={placeholder || label}
          {...register(name)}
        />
      )}

      {inputIsNotEmpty && (
        <ClearIconWrapper onClick={handleClearInput}>
          <MdOutlineCancel />
        </ClearIconWrapper>
      )}

      <InputLabel>{label}</InputLabel>
    </InputContainer>
  )
}
