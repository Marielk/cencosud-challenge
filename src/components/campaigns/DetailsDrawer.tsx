import React, { useState } from "react";
import { MoreHorizRounded, CampaignOutlined, ArrowForward } from "@mui/icons-material";
import { Drawer, Grid, IconButton } from "@mui/material";
import { Tabs, Tab } from '@mui/material';
import Campaign from '../../models/campaign';
import '../../styles/drawer.scss';
import InfoTab from './InfoTab';

interface Props {
  openDrawer: boolean;
  campaignData: Campaign;
  closeDrawer: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const DetailsDrawer = ({ openDrawer, closeDrawer, campaignData }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const close = () => {
    closeDrawer()
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>{children}</>
        )}
      </div>
    );
  }

  return (
    <Drawer
      anchor={'right'}
      open={openDrawer}
      onClose={() => close()}
      className='drawerContainer'
    >
      <IconButton className='closeDrawerButton' onClick={() => close()}>
        <ArrowForward />
      </IconButton>
      <Grid container rowSpacing={1} columnSpacing={12} alignItems='center'>
        <Grid item md={6} className='HeaderGrid-left'>
          <CampaignOutlined />
          <h5 className='Title'>{campaignData.name}</h5>
        </Grid>
        <Grid item md={6} className='HeaderGrid-right'>
          <IconButton>
            <MoreHorizRounded />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={12} alignItems='center'>
        <Grid item md={12}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Información" {...a11yProps(0)} />
            <Tab label="Retroplanning" {...a11yProps(1)} />
            <Tab label="Promociones vinculadas" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item md={12}>
          <TabPanel value={value} index={0}>
            <InfoTab campaignData={campaignData}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default DetailsDrawer;