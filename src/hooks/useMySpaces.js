import useFetch from "./useFetch"
import { useCookies } from 'react-cookie'

const useMySpaces = () => {
    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    const { data, loading, error } = useFetch(`${REACT_APP_BACKEND_END_POINT}/user/my-spaces`, 'POST', {
        'auth-token': authToken['auth-token']
    }, {})

    return { data, loading, error }
}

export default useMySpaces