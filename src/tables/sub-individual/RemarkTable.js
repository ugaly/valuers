import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';

const RemarkTable = ({ data }) => {
   
    const [searchText, setSearchText] = useState('');
    const [cppInfo, setCppInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCppInfo = async () => {
            setLoading(true);
            try {
                const response = await AuthService.getCpp(data.id);
                console.log('response',response.data.content);
                setCppInfo(response.data.content);
            } catch (error) {
                setError('Error fetching CPP data');
                console.error('Error fetching CPP data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCppInfo();
    }, [data.regnNo]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleButtonClick = () => {
        // Handle button click action here, if needed
    };

    // Filter cppInfo based on search text
    const filteredInfo = cppInfo.filter((info) =>
        info.programeSource.toLowerCase().includes(searchText.toLowerCase())
    );

    function formatDateTime(dateTimeString) {
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };

        const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
        return formattedDateTime;
    }

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
                        Add Remark
                    </Button>
                </div>
            </div>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                    <Table aria-label="cpp info table" className='py-3'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Created on</TableCell>
                                <TableCell>Created by</TableCell>
                                <TableCell>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredInfo.map((info, index) => (
                                <TableRow key={index}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default RemarkTable;
