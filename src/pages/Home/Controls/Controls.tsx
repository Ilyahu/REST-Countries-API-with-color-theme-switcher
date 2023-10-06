import { useEffect, useState } from 'react';
import Search from './Search'
import { CustomSelect } from './CustomSelect';
import styled from 'styled-components';

type ControlsProps = {
  onSearch: (search: string, region: string) => void
}

type Option = {
  value: string,
  label: string,
} 
const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Controls = ({onSearch}: ControlsProps) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<Option | null>(null);

  useEffect(() => {
    const regionValue = region?.value || ""
    onSearch(search, regionValue)
  }, [search, region])
  
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect 
        options={options}
        isSearchable={false}
        isClearable
        value={region}
        placeholder="Filter by Region"
        onChange={setRegion}
      />
    </Wrapper>
  )
}

export default Controls