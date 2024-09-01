import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { TOKEN } from '../app.constans'

import { useAuth } from './useAuth'

const useCheckToken = () => {
	const { setIsAuth, isAuth } = useAuth()
	const { pathname } = useLocation()
	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}

export default useCheckToken
