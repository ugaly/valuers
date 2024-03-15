import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

const ExamsResultsTable = ({ }) => {
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



    const examsResults = [
        {
            DateOfExam: '2022-01-15',
            DateOfApproval: '2022-01-20',
            Venue: 'Exam Hall A',
            TotalScore: 85,
            Grade: 'A',
            Remarks: 'Excellent performance',
        },
        {
            DateOfExam: '2022-02-10',
            DateOfApproval: '2022-02-15',
            Venue: 'Exam Hall B',
            TotalScore: 72,
            Grade: 'B+',
            Remarks: 'Good effort',
        },
        {
            DateOfExam: '2022-03-25',
            DateOfApproval: '2022-04-02',
            Venue: 'Exam Hall C',
            TotalScore: 60,
            Grade: 'B',
            Remarks: 'Satisfactory',
        },
        // Add more sample data as needed
    ];

    // Filter examsResults based on search text
    const filteredResults = examsResults.filter((result) =>
        result.DateOfExam.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
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
                        Add Result
                    </Button>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="exams results table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date Of Exam</TableCell>
                            <TableCell>Date Of Approval</TableCell>
                            <TableCell>Venue</TableCell>
                            <TableCell>Total Score</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Remarks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredResults.map((result, index) => (
                            <TableRow key={index}>
                                <TableCell>{result.DateOfExam}</TableCell>
                                <TableCell>{result.DateOfApproval}</TableCell>
                                <TableCell>{result.Venue}</TableCell>
                                <TableCell>{result.TotalScore}</TableCell>
                                <TableCell>{result.Grade}</TableCell>
                                <TableCell>{result.Remarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ExamsResultsTable;
