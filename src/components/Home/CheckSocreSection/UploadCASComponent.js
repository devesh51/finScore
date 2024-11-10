import React from 'react';
import { Box, Card, Typography, LinearProgress, Link } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function UploadCASComponent() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2} width="100%" marginTop={'50px'}>
      {/* Progress Indicator */}
      <Box display="flex" alignItems="center" width="100%" maxWidth={600} mb={2}>
        <LinearProgress variant="determinate" value={70} sx={{ width: '100%', mr: 1 }} />
        <Typography variant="body2" color="textSecondary">70%</Typography>
      </Box>

      {/* Upload Card */}
      <Card elevation={3} sx={{ maxWidth: 600, width: '100%', padding: 3, textAlign: 'center' ,mt:8}}>
        <Typography variant="h6" gutterBottom>
          Upload Your CAS or Consolidated Account Statement
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          CAS sent to you every month on your default email address by NSDL, Karvy, or CAMS in PDF format. 
          In case you do not have a CAS handy, <Link href="#">Click here</Link> (Takes less than 1 min to generate CAS)
        </Typography>

        {/* Upload Box */}
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          height={100} 
          border="2px dashed #90caf9" 
          borderRadius={1} 
          bgcolor="#e3f2fd" 
          mt={2} 
          mb={2}
        >
          <Typography variant="body1" color="primary" component="span">
            Drag files here or <Link href="#" underline="hover">browse</Link>
          </Typography>
        </Box>
      </Card>

      {/* Generate eCAS Link */}
      <Typography variant="body2" color="textSecondary" mt={2} mb={7}>
        Don't have eCAS? Generate now using one of the following options
      </Typography>
    
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Generate CDSL eCAS
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Generate KFINTECH eCAS
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Generate NSDL eCAS
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    </Box>
  );
}

export default UploadCASComponent;
