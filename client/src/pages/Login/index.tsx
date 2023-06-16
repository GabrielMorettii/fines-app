import { FormProvider } from 'react-hook-form'

import logo from '../../assets/logo.svg'
import { FormInput } from '../../components/FormInput'

import { useLogin } from './useLogin'

import {
  Container,
  InfoDescription,
  Footer,
  FormButton,
  LoginForm,
  ChangePageButton,
} from './styles'

export function Login() {
  const {
    formProps,
    handleSubmit,
    hasError,
    isSubmitting,
    handleChangePage,
    changePageText,
    submitFormText,
  } = useLogin()

  return (
    <FormProvider {...formProps}>
      <Container>
        <LoginForm onSubmit={formProps.handleSubmit(handleSubmit)}>
          <img src={logo} alt="Logo" />

          <FormInput label="Usuário" name="username" />
          <FormInput label="Senha" type="password" name="password" />

          <ChangePageButton
            className="change-page"
            type="button"
            onClick={handleChangePage}
          >
            {changePageText}
          </ChangePageButton>

          <InfoDescription className="error-message">
            {hasError && hasError.message}
          </InfoDescription>

          <FormButton type="submit" disabled={isSubmitting}>
            {submitFormText}
          </FormButton>
        </LoginForm>

        <Footer>Desenvolvido com ❤️ por Parvi Inovação</Footer>
      </Container>
    </FormProvider>
  )
}
