import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import { apiService } from '../../services/apiService'

import { ISignInResponseDTO } from '../../interfaces/ISignResponseDTO'
import { IError } from '../../interfaces/IError'

import { SessionContext } from '../../contexts/SessionContext'

const formSchema = zod.object({
  username: zod.string().nonempty('O usuário é obrigatório'),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export type formData = zod.infer<typeof formSchema>

export function useLogin() {
  const [isOnLogin, setIsOnLogin] = useState(true)

  const [error, setError] = useState<IError | null>(null)

  const { initSession } = useContext(SessionContext)

  const formProps = useForm<formData>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = async (data: formData) => {
    try {
      if (isOnLogin) {
        const { token }: ISignInResponseDTO = await apiService.post(
          '/users/sign-in',
          {
            username: data.username,
            password: data.password,
          },
        )

        return initSession({ token, username: data.username })
      }

      await apiService.post('/users', {
        username: data.username,
        password: data.password,
      })

      handleChangePage()

      alert('Cadastrado com sucesso')
    } catch (error) {
      setError(error as unknown as IError)
    }
  }

  const handleChangePage = () => {
    setIsOnLogin((prevState) => !prevState)

    formProps.clearErrors()

    formProps.reset()
  }

  const hasError = Object.values(formProps.formState.errors)[0] || error

  const isSubmitting = formProps.formState.isSubmitting

  const changePageText = isOnLogin ? 'Criar uma conta' : 'Fazer login'

  const submitFormText = isOnLogin ? 'Entrar' : 'Cadastrar'

  return {
    formProps,
    hasError,
    isSubmitting,
    handleSubmit,
    handleChangePage,
    isOnLogin,
    changePageText,
    submitFormText,
  }
}
