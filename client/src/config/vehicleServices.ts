/* eslint-disable no-unused-vars */
import { IOption } from '../interfaces/IOption'

export enum VehicleServicesTypesEnum {
  DETRAN = 'DETRAN',
  DNIT = 'DNIT',
  DPRF = 'DPRF',
}

export const vehicleServicesOptions: IOption[] = [
  {
    label: 'DETRAN',
    value: 'DETRAN',
  },
  {
    label: 'DNIT',
    value: 'DNIT',
  },
  {
    label: 'DPRF',
    value: 'DPRF',
  },
  {
    label: 'DETRAN, DNIT, DPRF',
    value: 'all',
  },
]
