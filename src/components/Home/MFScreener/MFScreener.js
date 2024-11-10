import React,{useState} from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography, Rating, Paper,
} from '@mui/material';
import {
    Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Box, Grid,
  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const equityOptions = [
    "Equity : Large Cap",
    "Equity : Large & Mid Cap",
    "Equity : Multi Cap",
    "Equity : Flexi Cap",
    "Equity : Mid Cap",
    "Equity : Small Cap",
  ];
  
  const debtOptions = [
    "Debt : Overnight",
    "Debt : Liquid",
    "Debt : Ultra Short Duration",
    "Debt : Low Duration",
    "Debt : Money Market",
    "Debt : Floater",
  ];


const fundData = [
  {
    name: "Aditya Birla SL Focused Fund (G)",
    manager: "Kunal Sangoi",
    category: "EQ-LC",
    rating: 3,
    aum: "8,230.3",
    expenseRatio: "1.80",
    exitLoad: "1.00",
    return1yr: "35.87",
    return3yr: "13.61",
    return5yr: "17.66",
  },
  {
    name: "Aditya Birla SL Frontline Equity Fund (G)",
    manager: "Mahesh Patil",
    category: "EQ-LC",
    rating: 4,
    aum: "31,389.2",
    expenseRatio: "1.63",
    exitLoad: "1.00",
    return1yr: "32.02",
    return3yr: "13.75",
    return5yr: "17.61",
  },
  {
    name: "Axis Bluechip Fund-Reg (G)",
    manager: "Shreyash Devalkar",
    category: "EQ-LC",
    rating: 3,
    aum: "36,108.6",
    expenseRatio: "1.55",
    exitLoad: "1.00",
    return1yr: "26.62",
    return3yr: "7.35",
    return5yr: "13.25",
  },
  {
    name: "Bajaj Finserv Large Cap Fund-Reg (G)",
    manager: "Nimesh Chandan",
    category: "EQ-LC",
    rating: 0, // Unrated
    aum: "1,224.3",
    expenseRatio: "2.11",
    exitLoad: "1.00",
    return1yr: "-",
    return3yr: "-",
    return5yr: "-",
  },
];


function FundTable() {

const [allEquity, setAllEquity] = useState(false);
const [allDebt, setAllDebt] = useState(false);
const [equitySelections, setEquitySelections] = useState({});
const [debtSelections, setDebtSelections] = useState({});


const handleAllEquityChange = (event) => {
    setAllEquity(event.target.checked);
    setEquitySelections(
      equityOptions.reduce((acc, option) => ({ ...acc, [option]: event.target.checked }), {})
    );
  };

  const handleAllDebtChange = (event) => {
    setAllDebt(event.target.checked);
    setDebtSelections(
      debtOptions.reduce((acc, option) => ({ ...acc, [option]: event.target.checked }), {})
    );
  };

  const handleEquityChange = (option) => (event) => {
    setEquitySelections({ ...equitySelections, [option]: event.target.checked });
    setAllEquity(equityOptions.every((opt) => equitySelections[opt] || opt === option));
  };

  const handleDebtChange = (option) => (event) => {
    setDebtSelections({ ...debtSelections, [option]: event.target.checked });
    setAllDebt(debtOptions.every((opt) => debtSelections[opt] || opt === option));
  };


return (
    <div>
    <Typography variant="h4" gutterBottom mt={4}>
        Mutal Fund Screener
    </Typography>
    <Box display={'flex'} sx={{ width: '100%' }} justifyContent={'space-between'} gap={2}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#ADD8E6' }}>
          <Typography variant="h7">Asset Class Selection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} component={Paper} elevation={2} sx={{ padding: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Equity Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allEquity}
                    onChange={handleAllEquityChange}
                  />
                }
                label="All Equity"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {equityOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!equitySelections[option]}
                        onChange={handleEquityChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Debt Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allDebt}
                    onChange={handleAllDebtChange}
                  />
                }
                label="All Debt"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {debtOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!debtSelections[option]}
                        onChange={handleDebtChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#ADD8E6' }}>
          <Typography variant="h7">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} component={Paper} elevation={2} sx={{ padding: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Equity Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allEquity}
                    onChange={handleAllEquityChange}
                  />
                }
                label="All Equity"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {equityOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!equitySelections[option]}
                        onChange={handleEquityChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Debt Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allDebt}
                    onChange={handleAllDebtChange}
                  />
                }
                label="All Debt"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {debtOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!debtSelections[option]}
                        onChange={handleDebtChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#ADD8E6' }}>
          <Typography variant="h7">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} component={Paper} elevation={2} sx={{ padding: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Equity Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allEquity}
                    onChange={handleAllEquityChange}
                  />
                }
                label="All Equity"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {equityOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!equitySelections[option]}
                        onChange={handleEquityChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Debt Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allDebt}
                    onChange={handleAllDebtChange}
                  />
                }
                label="All Debt"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {debtOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!debtSelections[option]}
                        onChange={handleDebtChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: '#ADD8E6' }}>
          <Typography variant="h7">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} component={Paper} elevation={2} sx={{ padding: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Equity Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allEquity}
                    onChange={handleAllEquityChange}
                  />
                }
                label="All Equity"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {equityOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!equitySelections[option]}
                        onChange={handleEquityChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Debt Funds</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={allDebt}
                    onChange={handleAllDebtChange}
                  />
                }
                label="All Debt"
              />
              <Box sx={{ maxHeight: 150, overflowY: 'auto' }}>
                {debtOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={!!debtSelections[option]}
                        onChange={handleDebtChange(option)}
                      />
                    }
                    label={option}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
    <TableContainer component={Paper}>
      <Table aria-label="fund table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell><strong>Funds</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>RupeeVest Rating</strong></TableCell>
            <TableCell><strong>AUM (in ₹ cr)</strong></TableCell>
            <TableCell><strong>Expense Ratio (%)</strong></TableCell>
            <TableCell><strong>Exit Load (%)</strong></TableCell>
            <TableCell><strong>Return (%) 1 yr</strong></TableCell>
            <TableCell><strong>Return (%) 3 yrs</strong></TableCell>
            <TableCell><strong>Return (%) 5 yrs</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fundData.map((fund, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Typography variant="body2">{fund.name}</Typography>
                <Typography variant="caption">{fund.manager}</Typography>
              </TableCell>
              <TableCell>{fund.category}</TableCell>
              <TableCell>
                {fund.rating > 0 ? (
                  <Rating value={fund.rating} readOnly max={4} />
                ) : (
                  <Typography variant="body2">Unrated</Typography>
                )}
              </TableCell>
              <TableCell>{fund.aum}</TableCell>
              <TableCell>{fund.expenseRatio}</TableCell>
              <TableCell>{fund.exitLoad}</TableCell>
              <TableCell>{fund.return1yr}</TableCell>
              <TableCell>{fund.return3yr}</TableCell>
              <TableCell>{fund.return5yr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

export default FundTable;

