import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

const CppTable = ({ }) => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = React.useState(false);


    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleButtonClick = () => {
        setLoading(true); // Show loader when button is clicked
        // Simulate an action that takes 3 seconds (e.g., API call)
        setTimeout(() => {
            setLoading(false); // Hide loader after 3 seconds
        }, 3000);
    };

    const cppInfo = [
        {
            ProgramSource: 'Online',
            NoOfPoints: 100,
            IssuedDate: '2022-03-15',
        },
        {
            ProgramSource: 'In-Person',
            NoOfPoints: 85,
            IssuedDate: '2022-02-20',
        },
        // Add more sample data as needed
    ];

    // Filter cppInfo based on search text
    const filteredInfo = cppInfo.filter((info) =>
        info.ProgramSource.toLowerCase().includes(searchText.toLowerCase())
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
                        Add CPP
                    </Button>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="cpp info table" className='py-3'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Program Source</TableCell>
                            <TableCell>No of Points</TableCell>
                            <TableCell>Issued Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredInfo.map((info, index) => (
                            <TableRow key={index}>
                                <TableCell>{info.ProgramSource}</TableCell>
                                <TableCell>{info.NoOfPoints}</TableCell>
                                <TableCell>{info.IssuedDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CppTable;
