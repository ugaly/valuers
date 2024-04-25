// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import IconButton from '@mui/material/IconButton';
// import CircularProgress from '@mui/material/CircularProgress';
// import AuthService from '../../services/auth/auth_service';

// const AcademicInfoTable = ({ data }) => {
//   const [searchText, setSearchText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [academicInfo, setAcademicInfo] = useState([]);

//   useEffect(() => {
//     const fetchAcademicInfo = async () => {
//       setLoading(true);
//       try {
//         const response = await AuthService.getAcademicResultsInfo(data.id);
//         setAcademicInfo(response.data.content);
//       } catch (error) {
//         console.error('Error fetching academic info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcademicInfo();
//   }, [data.regnNo]);

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const handleButtonClick = () => {
//     setLoading(true);
//     // Simulate an action that takes 3 seconds (e.g., API call)
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   };

//   // Filter academicInfo based on search text
//   const filteredInfo = academicInfo.filter((info) =>
//   info && info.levelName && info.levelName.toLowerCase().includes(searchText.toLowerCase())
// );



//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ width: '50%' }}>
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchText}
//             onChange={handleSearchChange}
//             fullWidth
//           />
//         </div>
//         <div className="d-flex align-items-center">
//           <IconButton onClick={handleButtonClick} color="primary" size="large" disabled={loading}>
//             <RefreshIcon />
//           </IconButton>
//           {loading && <CircularProgress style={{ marginRight: '8px' }} size={24} />}
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ fontWeight: 'bold' }}
//             onClick={handleButtonClick}
//             disabled={loading}
//           >
//             Add Info
//           </Button>
//         </div>
//       </div>

//       <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//         <Table aria-label="academic info table" className="py-3">
//           <TableHead>
//             <TableRow>
//               <TableCell>Level</TableCell>
//               <TableCell>Institution</TableCell>
//               <TableCell>Year of Graduation</TableCell>
//               <TableCell>County</TableCell>
//               <TableCell>Award</TableCell>
//               <TableCell>Reg No</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredInfo.map((info, index) => (
//               <TableRow key={index}>
//                 <TableCell>{info.levelName}</TableCell>
//                 <TableCell>{info.institution}</TableCell>
//                 <TableCell>{info.yearOfGraduation}</TableCell>
//                 <TableCell>{info.country}</TableCell>
//                 <TableCell>{info.award}</TableCell>
//                 <TableCell>{info.regNo}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default AcademicInfoTable;



import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Modal, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';
import { useDropzone } from 'react-dropzone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const AcademicInfoTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [academicInfo, setAcademicInfo] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileName, setFileName] = useState('');

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

    const filteredInfo = academicInfo.filter((info) =>
        info && info.levelName && info.levelName.toLowerCase().includes(searchText.toLowerCase())
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileUpload });

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

            <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
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

export default AcademicInfoTable;
