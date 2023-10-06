import {useQuery} from "@tanstack/react-query"
import { getAllCountries } from "../api/countriesApi"

export const useCountries = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries,
    retry: false,
  })
  
  return {data, isLoading, error}
}