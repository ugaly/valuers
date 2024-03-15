import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

const AcademicInfoTable = ({ }) => {
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

    const academicInfo = [
        {
            Level: 'Bachelor',
            Institution: 'University A',
            YearOfGraduation: 2021,
            County: 'County X',
            Award: 'First Class',
            RegNo: 'ABCD12345',
        },
        {
            Level: 'Master',
            Institution: 'University B',
            YearOfGraduation: 2023,
            County: 'County Y',
            Award: 'Distinction',
            RegNo: 'WXYZ98765',
        },
        // Add more sample data as needed
    ];

    // Filter academicInfo based on search text
    const filteredInfo = academicInfo.filter((info) =>
        info.Level.toLowerCase().includes(searchText.toLowerCase())
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


            <TableContainer component={Paper}>

                <Table aria-label="academic info table" className='py-3'>
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
                                <TableCell>{info.Level}</TableCell>
                                <TableCell>{info.Institution}</TableCell>
                                <TableCell>{info.YearOfGraduation}</TableCell>
                                <TableCell>{info.County}</TableCell>
                                <TableCell>{info.Award}</TableCell>
                                <TableCell>{info.RegNo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AcademicInfoTable;