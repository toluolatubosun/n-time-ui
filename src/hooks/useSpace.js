import useFetch from "./useFetch"
import { useCookies } from 'react-cookie'

const useSpace = (spaceCode) => {
    const {REACT_APP_BACKEND_END_POINT} = process.env
    const [authToken, setAuthToken, removeAuthToken] = useCookies(['auth-token'])
    const { data, loading, error } = useFetch(`${REACT_APP_BACKEND_END_POINT}/space`, 'POST', {
        'auth-token': authToken['auth-token'],
        'Content-Type': 'application/json'
    }, { spaceCode })


    return { data, loading, error }
}

export default useSpace