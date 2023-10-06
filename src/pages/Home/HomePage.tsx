import List from './List'
import Card from './Card'
import Controls from './Controls/Controls'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CardListItem } from './Card'
import { useCountries } from '../../services/useCountries'
import CardSkeleton from './CardSkeleton';

export type Country = {
  region: string,
  name: {common: string},
  flags: {png: string},
  population: number,
  capital: string,
  info: CardListItem[]
}

const HomePage: React.FC = () => {
  const {data: countries, isLoading, error} = useCountries()
  const [filtredCountries, setFiltredCountries] = useState<Country[]>([])
  const navigate = useNavigate()

  const handleSearch = (search: string = "", region: string = "") => {
    let data = [...countries]
    if (region) {
      data = data.filter(country => country.region.includes(region))
    }
    if (search) {
      data = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    
    setFiltredCountries(data)
  }

  useEffect(() => {
    if (!isLoading)
    handleSearch()
  }, [countries])

  if (isLoading) {
    return (
      <List>
        <CardSkeleton cards={8}/>
      </List>
    )
  }

  if (error && error instanceof Error) {
    return <p>
      {error.message}
    </p>
  }
  
  return (
    <>
      <Controls onSearch={handleSearch}/>
    <List>
      {filtredCountries.map((country) => {
        const countryInfo = {
          img: country.flags.png,
          name: country.name.common,
          info: [
            {
              title: 'Population',
              description: country.population.toLocaleString()
            },
            {
              title: 'Region',
              description: country.region
            },
            {
              title: 'Capital',
              description: country.capital
            },
          ]
        }
        const {name, img, info} = countryInfo
        return (
          <Card 
            key={name} 
            img={img}
            name={name}
            info={info}
            onClick={() => navigate(`/country/${country.name.common}`)} 
          />)
      })}
    </List>
    </>
  )
}

export default HomePage