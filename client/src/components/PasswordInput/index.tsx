import { useState } from 'react'

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

import { Input } from '../FormInput/styles'

import { PasswordContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface PasswordInputProps {
  label: string
  name: string
}

export function PasswordInput({ label, name }: PasswordInputProps) {
  const { register } = useFormContext()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <PasswordContainer>
      <Input
        type={passwordVisible ? 'text' : 'password'}
        placeholder={label}
        {...register(name)}
      />

      <span onClick={togglePasswordVisibility}>
        {passwordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
      </span>
    </PasswordContainer>
  )
}
