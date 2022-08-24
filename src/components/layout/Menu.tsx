import React from 'react'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { menuOptions } from './menuOptions';
import '../../styles/menu.scss';
import { Divider } from '@mui/material';

const Menu = () => {

  return(
    <MenuList>
      {
        menuOptions.map((menuItem, index) => {
          const ButtonIcon = menuItem.icon;
          return (
            <span key={index}>
              <MenuItem 
                // onClick={() => emitClickedOption(menuItem.onClick)}
                // onMouseEnter={() => emitOnMouseEnter(menuItem)}
              >
                <ListItemIcon sx={{marginBottom: menuItem.borderBottom ? '10px': '18px'}}>
                <ButtonIcon />
                </ListItemIcon>
              </MenuItem>
              {menuItem.borderBottom && <Divider orientation="horizontal" />}
            </span>
          )
      })
    }
      </MenuList>
  )
}

export default Menu;