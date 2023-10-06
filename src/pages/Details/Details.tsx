import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom'
import { BackButton } from './BackButton';
import { Info } from './Info';
import { useCountryDetails } from '../../services/useCountryDetails';
import {InfoSkeleton} from './InfoSkeleton';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
   
  const {data: country, isLoading, error} = useCountryDetails(name!)
    
    if (isLoading) {
      return <InfoSkeleton/>
    }

    if (error && error instanceof Error) {
      return <>{error.message}</>
    }
  
  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </BackButton>
      <Info
        name={country.name}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        tld={country.tld}
        currencies={country.currencies}
        languages={country.languages}
        borders={country.borders}
        flags={country.flags}
      />
    </>
  )
}

export default Details