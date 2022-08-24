import React, { useState } from 'react';

// sub components
import TableUI from './Table';
import PopoverMenu from './PopoverMenu';
import DetailsDrawer from './DetailsDrawer';
import '../../styles/dataTable.scss';

import Campaign from '../../models/campaign';

interface Props {
  campaignsList: Array<Campaign>;
}

const IndexTable = ({ campaignsList }: Props) => {
  const [campaignSelected, setCampaignSelected] = useState(campaignsList[0]);
  const [showPopOver, setShowPopOver] = useState(false);
  const [showDetailsDrawer, setShowDetailsDrawer] = useState(false);
  const [popButtonOrigin, setPopButtonOrigin] = useState<HTMLButtonElement>(null!);

  const openPopMenu = (buttonClicked: HTMLButtonElement) => {
    setPopButtonOrigin(buttonClicked);
    setShowPopOver(true);
  }

  const closePopMenu = () => {
    if (showPopOver) {
      setShowPopOver(false);
    }
  }

  const closeDrawer = () => {
    if (showDetailsDrawer) {
      setShowDetailsDrawer(false);
    }
  }

  const onClickEmited = (campaignClicked: Campaign, buttonClicked: HTMLButtonElement) => {
    openPopMenu(buttonClicked)
    setCampaignSelected(campaignClicked);
  }


  return (
    <>
      <TableUI campaignsList={campaignsList}
        openPopMenu={(campaignClicked: Campaign, 
        buttonClicked: HTMLButtonElement) => 
        onClickEmited(campaignClicked, buttonClicked)} 
      />
      {showPopOver &&
        <PopoverMenu
          showMe={showPopOver}
          popOrigin={popButtonOrigin}
          closePopMenu={() => closePopMenu()}
          emitOpenDrawer={() => setShowDetailsDrawer(true)}
        />
      }
      {showDetailsDrawer &&
        <DetailsDrawer 
          openDrawer={showDetailsDrawer} 
          closeDrawer={() => closeDrawer()} 
          campaignData={campaignSelected}
        />
      }
    </>
  )
}

export default IndexTable;