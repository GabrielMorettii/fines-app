import { useFormContext } from 'react-hook-form'

import { IoMdArrowDropdown } from 'react-icons/io'

import { SelectContainer, Select, SelectOption } from './styles'

import { IOption } from '../../interfaces/IOption'

interface SelectHandlerProps {
  name: string
  options: IOption[]
  type?: string
}

export function SelectHandler({ name, options }: SelectHandlerProps) {
  const { register } = useFormContext()

  return (
    <SelectContainer>
      <Select {...register(name)}>
        {options.map((option) => (
          <SelectOption key={option.label} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </Select>
      <IoMdArrowDropdown />
    </SelectContainer>
  )
}
