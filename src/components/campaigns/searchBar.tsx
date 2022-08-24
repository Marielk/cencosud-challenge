
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Campaign from '../../models/campaign';
import { InputAdornment } from '@mui/material';

interface Props {
  campaignsList: Array<Campaign>;
  emitSearchResult: (campaignsListFiltered: Array<Campaign>) => void;
}

const SearchBar = ({campaignsList, emitSearchResult}: Props) => {

  const filterData = (query: string, data: Array<Campaign>) => {
    if (query.length === 0) {
      return data;
    } else {
      return data.filter((d) => d.name.toLowerCase().includes(query));
    }
  };

  const updateResults = (inputValue: string) => {
    const campaignsListFiltered = filterData(inputValue, campaignsList);
    emitSearchResult(campaignsListFiltered)
  }
  
  return(
    <form>
      <TextField
        id='search-bar'
        className='searchInput'
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement
          updateResults(target.value)
        }}
        label=''
        variant='outlined'
        placeholder='Buscar'
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
  
};

export default SearchBar;