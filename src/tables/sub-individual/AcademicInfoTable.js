import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';

const AcademicInfoTable = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [academicInfo, setAcademicInfo] = useState([]);

  useEffect(() => {
    const fetchAcademicInfo = async () => {
      setLoading(true);
      try {
        const response = await AuthService.getAcademicResultsInfo(data.id);
        setAcademicInfo(response.data.content);
      } catch (error) {
        console.error('Error fetching academic info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicInfo();
  }, [data.regnNo]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleButtonClick = () => {
    setLoading(true);
    // Simulate an action that takes 3 seconds (e.g., API call)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // Filter academicInfo based on search text
  const filteredInfo = academicInfo.filter((info) =>
  info && info.levelName && info.levelName.toLowerCase().includes(searchText.toLowerCase())
);



  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '50%' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            fullWidth
          />
        </div>
        <div className="d-flex align-items-center">
          <IconButton onClick={handleButtonClick} color="primary" size="large" disabled={loading}>
            <RefreshIcon />
          </IconButton>
          {loading && <CircularProgress style={{ marginRight: '8px' }} size={24} />}
          <Button
            variant="contained"
            color="primary"
            style={{ fontWeight: 'bold' }}
            onClick={handleButtonClick}
            disabled={loading}
          >
            Add Info
          </Button>
        </div>
      </div>

      <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <Table aria-label="academic info table" className="py-3">
          <TableHead>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Year of Graduation</TableCell>
              <TableCell>County</TableCell>
              <TableCell>Award</TableCell>
              <TableCell>Reg No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInfo.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.levelName}</TableCell>
                <TableCell>{info.institution}</TableCell>
                <TableCell>{info.yearOfGraduation}</TableCell>
                <TableCell>{info.country}</TableCell>
                <TableCell>{info.award}</TableCell>
                <TableCell>{info.regNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AcademicInfoTable;
