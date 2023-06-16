import { useRef, useState } from 'react'
import * as zod from 'zod'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IError } from '../../interfaces/IError'
import { IFine } from '../../interfaces/IFine'
import { apiService } from '../../services/apiService'
import { useParse } from '../../hooks/useParse'

const formSchema = zod.object({
  state: zod.string().nonempty('Estado é obrigatório'),
  service: zod.string().nonempty('Serviço é obrigatório'),
  license_plate: zod
    .string({
      required_error: 'Número da placa é obrigatório',
    })
    .nonempty('Por favor, preencha o número da placa')
    .length(7, 'A número da placa deve conter 7 caracteres'),
  renavam: zod
    .string()
    .length(11, 'O renavam  deve conter 11 dígitos')
    .optional()
    .or(zod.literal('')),
  chassis: zod
    .string()
    .length(17, 'O chassi deve conter 17 caracteres')
    .optional()
    .or(zod.literal('')),
})

export type formData = zod.infer<typeof formSchema>

export function useFines() {
  const [error, setError] = useState<IError | null>(null)
  const [fines, setFines] = useState<IFine[]>([])

  const { parsePrice, parseQuery } = useParse()

  const hasSearched = useRef(false)

  const formProps = useForm<formData>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = async (data: formData) => {
    try {
      hasSearched.current = true

      const query = parseQuery(data)

      const response: IFine[] = await apiService.get(`/fines${query}`)

      setFines(response)

      setError(null)
    } catch (error) {
      setError(error as unknown as IError)
    }
  }

  const hasError = Object.values(formProps.formState.errors)[0] || error

  const hasFines = fines.length > 0

  const isSubmitting = formProps.formState.isSubmitting

  const hasNotFoundFines = hasSearched.current && !isSubmitting && !hasFines

  const serviceChoosen = formProps.watch('service')

  return {
    hasError,
    hasFines,
    hasNotFoundFines,
    hasSearched,
    serviceChoosen,
    handleSubmit,
    parsePrice,
    fines,
    isSubmitting,
    formProps,
  }
}
