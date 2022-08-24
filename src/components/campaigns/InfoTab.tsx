import React from 'react'
import { Grid, Box, Divider, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import Campaign from '../../models/campaign';
import '../../styles/drawer.scss';
import { CalendarToday, SaveRounded } from "@mui/icons-material";

interface Props {
  campaignData: Campaign
}

const InfoTab = ({ campaignData }: Props) => {

  return (
    <Box className='InfoTabContainer'>
      <Grid container columnSpacing={12}>
        <Grid item md={12} className='TitleContainer'>
          <label className='form-title'>Segmentación</label>
          <Divider />
        </Grid>
      </Grid>
      <Grid container columnSpacing={3} maxWidth={1} mt={4}>

        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>País</InputLabel>
            <Select value={campaignData.country} label='País'>
              <MenuItem value={campaignData.country}>{campaignData.country}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Bandera</InputLabel>
            <Select value={campaignData.flag} label='Bandera'>
              <MenuItem value={campaignData.flag}>{campaignData.flag}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Zona</InputLabel>
            <Select value={campaignData.zone} label='Zona'>
              <MenuItem value={campaignData.zone}>{campaignData.zone}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Locales</InputLabel>
            <Select value={campaignData.stores} label='Locales'>
              <MenuItem value={campaignData.stores}>{campaignData.stores}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
    
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Sección</InputLabel>
            <Select value={campaignData.section} label='Sección'>
              <MenuItem value={campaignData.section}>{campaignData.section}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
      <Grid container columnSpacing={12}>
        <Grid item md={12} className='TitleContainer'>
          <label className='form-title'>Datos Generales</label>
          <Divider />
        </Grid>
      </Grid>
      <Grid container columnSpacing={3} maxWidth={1} mt={4}>
        
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Nombre campaña</InputLabel>
            <Select value={campaignData.name} label='Nombre campaña'>
              <MenuItem value={campaignData.name}>{campaignData.name}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Tipo de campaña</InputLabel>
            <Select value={campaignData.type} label='Tipo de campaña'>
              <MenuItem value={campaignData.type}>{campaignData.type}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Canal</InputLabel>
            <Select value={campaignData.chanel} label='Canal'>
              <MenuItem value={campaignData.chanel}>{campaignData.chanel}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Fecha de vigencia</InputLabel>
            <Select value={campaignData.dates} label='Fecha de vigencia' IconComponent={CalendarToday}>
              <MenuItem value={campaignData.dates}>{campaignData.dates}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item md={4}>
          <FormControl fullWidth>
            <InputLabel>Fecha de vigencia</InputLabel>
            <Select value={campaignData.dates} label='Fecha de vigencia' IconComponent={CalendarToday}>
              <MenuItem value={campaignData.dates}>{campaignData.dates}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
      </Grid>
      <Grid container columnSpacing={12} maxWidth={1} mt={2}>
        <Grid item md={12}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Administrar todas las promociones con fecha de campaña." />
          </FormGroup>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" startIcon={<SaveRounded />}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InfoTab;