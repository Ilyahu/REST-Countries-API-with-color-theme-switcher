import { useFilteredCountries } from '../../services/useFilteredCountries';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

type BorderProps = {
  borderCodes: string[]
}

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const BorderCountries = ({borderCodes}: BorderProps) => {
  
  const {data: borderCountries, isLoading, error} = useFilteredCountries(borderCodes, !!borderCodes.length)
  const navigate = useNavigate()

  if (!!borderCodes.length && isLoading) {
    return <Skeleton/>
  }

  if (error && error instanceof Error) {
    return <p>{error.message}</p>
  }

  return (
    <Meta>
    <b>Border Countries</b>
    {(borderCodes.length) ? (
      <TagGroup>
      {borderCountries.map((borderCountry: string) => {
        return <Tag key={borderCountry} onClick={() => navigate(`/country/${borderCountry}`)}>{borderCountry}</Tag>
      })}
    </TagGroup>
    ) : (
      <span>There is no border countries</span>
    )}
  </Meta>
  )
}

export default BorderCountries