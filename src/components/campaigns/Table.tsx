import React, { useEffect, useRef, useState } from 'react';
// MUI icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// MUI elements
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';


// table config
import { CAMPAIGNS_STATES, columns } from '../../models/tableConfig';
import Campaign from '../../models/campaign';
import { Tooltip } from '@mui/material';
import SearchBar from './searchBar';

interface Props {
  campaignsList: Array<Campaign>;
  openPopMenu: (campaignClicked: Campaign, 
    buttonClicked: HTMLButtonElement) => void;
}

const TableUI = ({ campaignsList, openPopMenu }: Props) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [campaignsListFiltered, setCampaignsFiltered]= useState<Array<Campaign>>([]);
  const buttonsRefs = useRef<Array<HTMLButtonElement>>([]);
  buttonsRefs.current = [];

  useEffect(() => {
    if(campaignsList.length > 0 && campaignsListFiltered.length === 0) {
      setCampaignsFiltered(campaignsList)
    }
  })
  
  const getBackground = (state: string): string => {
    return CAMPAIGNS_STATES[state];
  }

  const emitClick = (campaignClicked: Campaign, buttonClicked: HTMLButtonElement) => {
    openPopMenu(campaignClicked, buttonClicked)
  }

  const addToButtonRef = (button: HTMLButtonElement) => {
    if (button && !buttonsRefs.current.includes(button)) {
      buttonsRefs.current.push(button)
    }
  }

  const checkButtonClicked = (campaign: Campaign, event: React.MouseEvent) => {
    const findButton = buttonsRefs.current.find(button => button === event.currentTarget);
    emitClick(campaign, findButton as HTMLButtonElement)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onEmitSearchResults = (campaigns: Array<Campaign>) => {
    setCampaignsFiltered(campaigns)
  }

  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <div className='toolbarContainer'>
          <div className='searchContainer'>
          <SearchBar 
            campaignsList={campaignsList} 
            emitSearchResult={(campaigns: Array<Campaign>) => 
            onEmitSearchResults(campaigns)}
            />
          </div>
          <div className='actionsContainer'>
            <IconButton>
              <FilterListOutlinedIcon />
            </IconButton>
            <IconButton>
              <FileDownloadOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Toolbar>
      <Table sx={{ minWidth: 1120 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            {columns.map((column) => (
              <TableCell key={column.field}>
                {column.title}
                <ArrowDownwardIcon className='arrowIcon' />
              </TableCell>
            ))}
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaignsListFiltered
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((campaign) => (
              <TableRow key={campaign.name}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.type}</TableCell>
                <TableCell>{campaign.dates}</TableCell>
                <TableCell>{campaign.chanel}</TableCell>
                <TableCell>{campaign.promotions}</TableCell>
                <TableCell>{campaign.flag}</TableCell>
                <TableCell>
                  <span className={getBackground(campaign.state)}>
                    {campaign.state}
                  </span>
                </TableCell>
                <TableCell>
                  <Tooltip title="Descargar">
                    <IconButton>
                      <SimCardDownloadOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Más acciones">
                    <IconButton ref={addToButtonRef} onClick={(event) => checkButtonClicked(campaign, event)}>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={columns.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default TableUI;