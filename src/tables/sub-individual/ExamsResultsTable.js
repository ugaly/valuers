import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';

const ExamsResultsTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [examsResults, setExamsResults] = useState([]);

    useEffect(() => {
        setLoading(true); // Show loader while fetching data
        AuthService.getExamResults(data.regnNo)
            .then((response) => {
                console.log(response.data);
                setExamsResults(response.data.content); // Update state with fetched data
            })
            .catch((error) => {
                console.error('Error fetching exam results:', error);
            })
            .finally(() => {
                setLoading(false); // Hide loader after data is fetched
            });
    }, [data.regnNo]);

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

    // Filter examsResults based on search text
    const filteredResults = examsResults.filter((result) =>
        result.dateOfExam.toLowerCase().includes(searchText.toLowerCase())
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
            <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
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
                                <TableCell>{result.dateOfExam}</TableCell>
                                <TableCell>{result.dateOfApproval}</TableCell>
                                <TableCell>{result.venue}</TableCell>
                                <TableCell>{result.totalScore}</TableCell>
                                <TableCell>{result.grade}</TableCell>
                                <TableCell>{result.remarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ExamsResultsTable;
