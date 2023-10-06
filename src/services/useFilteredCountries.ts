import {useQuery} from "@tanstack/react-query"
import { getFilteredByRegion } from "../api/countriesApi"

export const useFilteredCountries = (codes: string[], hasBorders: boolean) => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['filteredCountries', codes],
    queryFn: () => getFilteredByRegion(codes),
    enabled: hasBorders,
    retry: false,
    meta: {
      errorMessage: 'Error while getting border countries'
    }
  }
)

  return {data, isLoading, error}
}