import React from 'react'
import { Box, Grid, Popover } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../../styles/popOver.scss'

interface Props {
  showMe: boolean;
  popOrigin: HTMLButtonElement;
  closePopMenu: () => void;
  emitOpenDrawer: () => void;
}

const PopoverMenu = ({ showMe, popOrigin, closePopMenu, emitOpenDrawer }: Props) => {

  const close = () => {
    closePopMenu()
  }

  return (
    <Popover
      className='popMenu'
      open={showMe}
      anchorEl={popOrigin}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={() => close()}
    >
      <Box>
        <Grid container direction={'row'} onClick={() => close()}>
          <Grid item md={2}>
            <RemoveRedEyeOutlinedIcon/>
          </Grid>
          <Grid item md={10} onClick={() => emitOpenDrawer()}>
            <span>Ver Detalle</span>
          </Grid>

        </Grid>
        <Grid container direction={'row'}>
          <Grid item md={2}>
            <PowerSettingsNewOutlinedIcon/>
          </Grid>
          <Grid item md={10}>
            <span>Activar campaña</span>
          </Grid>
        </Grid>
        <Grid container direction={'row'}>
          <Grid item md={2}>
            <DeleteOutlineOutlinedIcon/>
          </Grid>
          <Grid item md={10}>
            <span>Eliminar</span>
          </Grid>
        </Grid>
      </Box>
    </Popover>
  )
}


export default PopoverMenu;