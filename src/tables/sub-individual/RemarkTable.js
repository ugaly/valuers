// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import IconButton from '@mui/material/IconButton';
// import CircularProgress from '@mui/material/CircularProgress';
// import AuthService from '../../services/auth/auth_service';

// const RemarkTable = ({ data }) => {

//     const [searchText, setSearchText] = useState('');
//     const [cppInfo, setCppInfo] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCppInfo = async () => {
//             setLoading(true);
//             try {
//                 const response = await AuthService.getCpp(data.id);
//                 console.log('response',response.data.content);
//                 setCppInfo(response.data.content);
//             } catch (error) {
//                 setError('Error fetching CPP data');
//                 console.error('Error fetching CPP data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCppInfo();
//     }, [data.regnNo]);

//     const handleSearchChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     const handleButtonClick = () => {
//         // Handle button click action here, if needed
//     };

//     // Filter cppInfo based on search text
//     const filteredInfo = cppInfo.filter((info) =>
//         info.programeSource.toLowerCase().includes(searchText.toLowerCase())
//     );

//     function formatDateTime(dateTimeString) {
//         const options = {
//             year: 'numeric',
//             month: 'short',
//             day: '2-digit',
//             hour: 'numeric',
//             minute: '2-digit',
//             hour12: true,
//         };

//         const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
//         return formattedDateTime;
//     }

//     return (
//         <div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//                 <div style={{ width: '50%' }}>
//                     <TextField
//                         label="Search"
//                         variant="outlined"
//                         value={searchText}
//                         onChange={handleSearchChange}
//                         fullWidth
//                     />
//                 </div>
//                 <div className="d-flex align-items-center">
//                     <IconButton onClick={handleButtonClick} color="primary" size="large" disabled={loading}>
//                         <RefreshIcon />
//                     </IconButton>
//                     {loading && <CircularProgress style={{ marginRight: '8px' }} size={24} />}
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         style={{ fontWeight: 'bold' }}
//                         onClick={handleButtonClick}
//                         disabled={loading}
//                     >
//                         Add Remark
//                     </Button>
//                 </div>
//             </div>
//             {error ? (
//                 <div>Error: {error}</div>
//             ) : (
//                 <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//                     <Table aria-label="cpp info table" className='py-3'>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Created on</TableCell>
//                                 <TableCell>Created by</TableCell>
//                                 <TableCell>Comment</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {filteredInfo.map((info, index) => (
//                                 <TableRow key={index}>
//                                     <TableCell></TableCell>
//                                     <TableCell></TableCell>
//                                     <TableCell></TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//         </div>
//     );
// };

// export default RemarkTable;



import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Modal, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';
import { set } from 'react-ga';

const RemarkTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [cppInfo, setCppInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [remark, setRemark] = useState('');

    useEffect(() => {
        const fetchCppInfo = async () => {
            setLoading(true);
            try {
                const response = await AuthService.getCpp(data.id);
                console.log('response', response.data.content);
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
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleRemarkChange = (event) => {
        setRemark(event.target.value);
    };

    const handleSubmit = () => {
        // Handle submission of the remark
        console.log("Submitted remark:", remark);
        setRemark('');
        // Close the modal after handling the submission
        setOpenModal(false);
    };

    const filteredInfo = cppInfo.filter((info) =>
        info.programeSource.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '50%' }}>
                    {/* <TextField
                        label="Search"
                        variant="outlined"
                        value={searchText}
                        onChange={handleSearchChange}
                        fullWidth
                    /> */}
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
                <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                    <Table aria-label="cpp info table" className='py-3'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Created on</TableCell>
                                <TableCell>Created by</TableCell>
                                <TableCell>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {filteredInfo.map((info, index) => (
                                <TableRow key={index}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))} */}

                            <TableRow >
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            {/* Modal for adding remarks */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '95%', // Adjust the width as needed
                    maxHeight: '80vh', // Adjust the max height as needed
                    overflowY: 'auto'
                }}

            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%', // Adjust the width of the content box as needed
                        maxWidth: '800px', // Adjust the max width of the content box as needed
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <TextField
                        label="Add Remark"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={remark}
                        onChange={handleRemarkChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>Submit</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default RemarkTable;
