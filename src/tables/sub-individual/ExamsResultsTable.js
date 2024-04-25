// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import IconButton from '@mui/material/IconButton';
// import CircularProgress from '@mui/material/CircularProgress';
// import AuthService from '../../services/auth/auth_service';

// const ExamsResultsTable = ({ data }) => {
//     const [searchText, setSearchText] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [examsResults, setExamsResults] = useState([]);

//     useEffect(() => {
//         setLoading(true); // Show loader while fetching data
//         AuthService.getExamResults(data.id)
//             .then((response) => {
//                 console.log(response.data);
//                 setExamsResults(response.data.content); // Update state with fetched data
//             })
//             .catch((error) => {
//                 console.error('Error fetching exam results:', error);
//             })
//             .finally(() => {
//                 setLoading(false); // Hide loader after data is fetched
//             });
//     }, [data.regnNo]);

//     const handleSearchChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     const handleButtonClick = () => {
//         setLoading(true); // Show loader when button is clicked
//         // Simulate an action that takes 3 seconds (e.g., API call)
//         setTimeout(() => {
//             setLoading(false); // Hide loader after 3 seconds
//         }, 3000);
//     };

//     // Filter examsResults based on search text
//     const filteredResults = examsResults.filter((result) =>
//         result.dateOfExam.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
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
//                         Add Result
//                     </Button>
//                 </div>
//             </div>
//             <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//                 <Table aria-label="exams results table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Date Of Exam</TableCell>
//                             <TableCell>Date Of Approval</TableCell>
//                             <TableCell>Venue</TableCell>
//                             <TableCell>Total Score</TableCell>
//                             <TableCell>Grade</TableCell>
//                             <TableCell>Remarks</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredResults.map((result, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{result.dateOfExam}</TableCell>
//                                 <TableCell>{result.dateOfApproval}</TableCell>
//                                 <TableCell>{result.venue}</TableCell>
//                                 <TableCell>{result.totalScore}</TableCell>
//                                 <TableCell>{result.grade}</TableCell>
//                                 <TableCell>{result.remarks}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default ExamsResultsTable;




// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Modal, Box } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import IconButton from '@mui/material/IconButton';
// import CircularProgress from '@mui/material/CircularProgress';
// import AuthService from '../../services/auth/auth_service';

// const ExamsResultsTable = ({ data }) => {
//     const [searchText, setSearchText] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [examsResults, setExamsResults] = useState([]);
//     const [openModal, setOpenModal] = useState(false);
//     const [uploadedFile, setUploadedFile] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         AuthService.getExamResults(data.id)
//             .then((response) => {
//                 console.log(response.data);
//                 setExamsResults(response.data.content);
//             })
//             .catch((error) => {
//                 console.error('Error fetching exam results:', error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [data.regnNo]);

//     const handleSearchChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     const handleButtonClick = () => {
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//     };

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         setUploadedFile(file);
//     };

//     const handleUpload = () => {
//         // Handle file upload logic here
//         console.log("Uploaded file:", uploadedFile);
//         // Close the modal after handling file upload
//         setOpenModal(false);
//     };

//     const filteredResults = examsResults.filter((result) =>
//         result.dateOfExam.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
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
//                         Add Result
//                     </Button>
//                 </div>
//             </div>
//             <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//                 <Table aria-label="exams results table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Date Of Exam</TableCell>
//                             <TableCell>Date Of Approval</TableCell>
//                             <TableCell>Venue</TableCell>
//                             <TableCell>Total Score</TableCell>
//                             <TableCell>Grade</TableCell>
//                             <TableCell>Remarks</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredResults.map((result, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{result.dateOfExam}</TableCell>
//                                 <TableCell>{result.dateOfApproval}</TableCell>
//                                 <TableCell>{result.venue}</TableCell>
//                                 <TableCell>{result.totalScore}</TableCell>
//                                 <TableCell>{result.grade}</TableCell>
//                                 <TableCell>{result.remarks}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             {/* Modal for file upload */}
//             <Modal open={openModal} onClose={handleCloseModal}>
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         width: 400,
//                         bgcolor: 'background.paper',
//                         boxShadow: 24,
//                         p: 4,
//                     }}
//                 >
//                     <input type="file" onChange={handleFileUpload} />
//                     <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
//                 </Box>
//             </Modal>
//         </div>
//     );
// };

// export default ExamsResultsTable;




import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Modal, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';
import { useDropzone } from 'react-dropzone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const ExamsResultsTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [examsResults, setExamsResults] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        setLoading(true);
        AuthService.getExamResults(data.id)
            .then((response) => {
                console.log(response.data);
                setExamsResults(response.data.content);
            })
            .catch((error) => {
                console.error('Error fetching exam results:', error);
            })
            .finally(() => {
                setLoading(false);
            });
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

    const handleFileUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedFile(file);
        setFileName(file.name);
    };

    const handleUpload = () => {
        // Handle file upload logic here
        console.log("Uploaded file:", uploadedFile);
        // Close the modal after handling file upload
        setOpenModal(false);
    };

    const filteredResults = examsResults.filter((result) =>
        result.dateOfExam.toLowerCase().includes(searchText.toLowerCase())
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileUpload });

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
            {/* Large Modal with Drag and Drop Zone */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <div {...getRootProps()} style={{ border: '2px dashed #aaa', borderRadius: '4px', padding: '40px', textAlign: 'center', cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        {fileName ? (
                            <div>
                                <InsertDriveFileIcon style={{ fontSize: '48px', marginBottom: '8px' }} />
                                <p>{fileName}</p>
                            </div>
                        ) : (
                            <p>Drag & drop an Excel file here, or click to select one</p>
                        )}
                    </div>
                    <Button variant="contained" color="primary" onClick={handleUpload} disabled={!uploadedFile} className='mt-3'>Upload</Button>
                </Box>
            </Modal>
            
        </div>
    );
};

export default ExamsResultsTable;
