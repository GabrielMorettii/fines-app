import { FormProvider } from 'react-hook-form'

import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { FormInput } from '../../components/FormInput'
import { Menu } from '../../components/Menu'

import {
  VehicleServicesTypesEnum,
  vehicleServicesOptions,
} from '../../config/vehicleServices'

import { SelectHandler } from '../../components/SelectHandler'

import { brazilianStatesOptions } from '../../config/brazilianStates'

import { Spinner } from '../../components/Spinner'

import {
  Container,
  ErrorDescription,
  FinesContainer,
  FinesTable,
  FormBottomSection,
  FormInputSection,
  NotFoundContainer,
  SearchButton,
  SearchForm,
} from './styles'
import { useCallback } from 'react'
import { useFines } from './useFines'

export function Fines() {
  const {
    fines,
    handleSubmit,
    hasError,
    hasNotFoundFines,
    hasFines,
    isSubmitting,
    parsePrice,
    serviceChoosen,
    formProps,
  } = useFines()

  const handleShowFormOptions = useCallback((service: string) => {
    switch (service) {
      case VehicleServicesTypesEnum.DETRAN: {
        return null
      }

      case VehicleServicesTypesEnum.DNIT: {
        return <FormInput name="renavam" label="Renavam" />
      }

      case VehicleServicesTypesEnum.DPRF: {
        return (
          <>
            <FormInput name="renavam" label="Renavam" />
            <FormInput name="chassis" label="Chassis" />
          </>
        )
      }

      case 'all': {
        return (
          <>
            <FormInput name="renavam" label="Renavam" />
            <FormInput name="chassis" label="Chassis" />
          </>
        )
      }

      default:
        break
    }
  }, [])

  return (
    <Container>
      <Menu />
      <FinesContainer>
        <FormProvider {...formProps}>
          <SearchForm onSubmit={formProps.handleSubmit(handleSubmit)}>
            <FormInputSection>
              <div>
                <SelectHandler name="state" options={brazilianStatesOptions} />
                <SelectHandler
                  name="service"
                  options={vehicleServicesOptions}
                />
              </div>

              <div>
                <FormInput name="license_plate" label="Placa" />

                {handleShowFormOptions(serviceChoosen)}
              </div>
            </FormInputSection>

            <FormBottomSection>
              <ErrorDescription>
                {hasError && hasError.message}
              </ErrorDescription>

              <SearchButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'Consultar'}
              </SearchButton>
            </FormBottomSection>
          </SearchForm>
        </FormProvider>

        {hasNotFoundFines && (
          <NotFoundContainer className="not-found-container">
            <AiOutlineInfoCircle />
            <span>Nenhum resultado encontrado com essas informações.</span>
          </NotFoundContainer>
        )}

        {hasFines && (
          <FinesTable>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Chassis</th>
                <th>Serviço</th>
                <th>Status</th>
                <th>Multa</th>
              </tr>
            </thead>
            <tbody>
              {fines.map((fine) => (
                <tr key={fine.id}>
                  <td>{fine.license_plate}</td>
                  <td>{fine.chassis}</td>
                  <td>{fine.service}</td>
                  <td>
                    <BsCheckLg />
                  </td>
                  <td>
                    {fine.value === 0 ? 'Nada consta' : parsePrice(fine.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </FinesTable>
        )}
      </FinesContainer>
    </Container>
  )
}
