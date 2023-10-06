import styled from "styled-components";
import BorderCountries from "./BorderCountries";

type CountryName = {
  common: string,
  nativeName: NativeName,
}

type Currency = {
  [key: string]: {name: string}
}

type NativeName = {
  [key: string]: {common: string}
}

type Language = {
  [key: string]: string
}

export type InfoProps = {
  name: CountryName,
  population: number,
  region: string,
  subregion: string,
  capital: string[],
  tld: string[],
  currencies: Currency,
  languages: Language,
  borders: string[],
  flags: {png: string},
}

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: start;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 40px 0 20px 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Info = (props: InfoProps) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies = {},
    languages = {},
    borders: borderCodes = [],
    flags
  } = props 

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name.common}/> 
      <div>
        <InfoTitle>
          {name.common}
        </InfoTitle>

        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {
              name.nativeName ? 
                Object.values(name.nativeName).map(name => name.common).toString().replaceAll(',',', ') : 
              name.common            
            }
            </ListItem>
            <ListItem>
              <b>Population: </b>{population}
            </ListItem>
            <ListItem>
              <b>Region: </b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region: </b> {subregion ? subregion : 'no'}
            </ListItem>
            <ListItem>
              <b>Capital: </b>  <span>{capital ? capital.toString().replaceAll(',',', ') : 'no'}</span>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {tld.map(domain => (
                <span key={domain}>{domain} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies:</b>{' '}
              {Object.keys(currencies).length === 0 ? 'no' : Object.values(currencies).map((currency) => {
                return <span key={currency.name}>{currency.name}</span>
              })}
            </ListItem>
            <ListItem>
              <b>Languages:</b>{' '}
              <span>
                {Object.keys(languages).length === 0 ? 'no' : Object.values(languages).toString().replaceAll(',',', ')}
              </span>
            </ListItem>
          </List>
        </ListGroup>

        <BorderCountries borderCodes={borderCodes}/>

      </div>
    </Wrapper>
)}