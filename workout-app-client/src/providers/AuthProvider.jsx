import Cookies from 'js-cookie'
import { createContext } from 'react'
import { useState } from 'react'

import { TOKEN } from '../app.constans'

export const authContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	return (
		<authContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</authContext.Provider>
	)
}

export default AuthProvider
