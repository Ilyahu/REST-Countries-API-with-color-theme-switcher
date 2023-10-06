import {useQuery} from "@tanstack/react-query"
import { getCountryDetails } from "../api/countriesApi"

export const useCountryDetails = (name: string) => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['countryDetails', name],
    queryFn: () => getCountryDetails(name),
    retry: false,
  })

  return {data, isLoading, error}
}