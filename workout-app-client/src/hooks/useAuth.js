import { useContext } from 'react'

import { authContext } from '../providers/AuthProvider'

export const useAuth = () => useContext(authContext)
