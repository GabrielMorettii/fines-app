import { ReactNode, createContext, useCallback, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { ISessionContext } from '../interfaces/ISessionContext'
import { InitSessionDTO } from '../interfaces/InitSessionDTO'

export const SessionContext = createContext<ISessionContext>(
  {} as ISessionContext,
)

interface SessionContextProviderProps {
  children: ReactNode
}

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const navigate = useNavigate()

  const checkSession = useCallback(() => {
    const params = new URLSearchParams(document.location.search)

    const hasToken = localStorage.getItem('token') || params.get('token')

    const currentLocation = document.location.href

    const isOnLoginPage =
      import.meta.env.VITE_APP_CLIENT_SERVICE === currentLocation.slice(0, -1)

    if (!isOnLoginPage && !hasToken) {
      return window.location.replace(import.meta.env.VITE_APP_CLIENT_SERVICE)
    } else if (isOnLoginPage && hasToken) {
      return window.location.replace(
        import.meta.env.VITE_APP_CLIENT_SERVICE + '/fines',
      )
    }

    return null
  }, [])

  const closeSession = useCallback(() => {
    localStorage.removeItem('token')

    window.location.replace(import.meta.env.VITE_APP_CLIENT_SERVICE)
  }, [])

  const initSession = useCallback(
    (data: InitSessionDTO) => {
      localStorage.setItem('username', data.username)

      localStorage.setItem('token', data.token)

      navigate('/fines')
    },
    [navigate],
  )

  useEffect(() => {
    checkSession()
  }, [checkSession])

  return (
    <SessionContext.Provider
      value={{
        closeSession,
        initSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
