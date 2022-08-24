import React from 'react'
import { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import Campaign from '../models/campaign';
import IndexTable from '../components/campaigns/IndexTable';
import '../styles/campaigns.scss';

const Campaigns = () => {
  const [campaignsList, setCampaignsList] = useState<Array<Campaign>>([]);

  useEffect(() => {
    fetch('mockData.json')
      .then(response => response.json())
      .then(campaigns => {
        setCampaignsList(campaigns)
      });
  }, []);

  return(
    <Grid container rowSpacing={1} columnSpacing={12} alignItems='center' mt={1}>
      <Grid item md={6} className='Grid-button-left'>
        <h5 className='Title'>Campañas</h5>
        <Button variant='contained' endIcon={<ArrowDropDownIcon />}>
          Jumbo - AR
        </Button>
      </Grid>
      <Grid item md={6} className='Grid-button-right'>
        <Button variant='contained' startIcon={<AddIcon />}>
          Crear campaña
        </Button>
      </Grid>
      <Grid item md={12} mr={6}>
        <IndexTable campaignsList={campaignsList}/>
      </Grid>
    </Grid>
  )
};

export default Campaigns;