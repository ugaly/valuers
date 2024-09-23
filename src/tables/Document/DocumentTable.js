import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Alert, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';

import RefreshIcon from '@mui/icons-material/Refresh';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DocumentTable() {
    const [documents, setDocuments] = useState([]);
    const [open1, setOpen1] = React.useState(false);
    const [fileName, setFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleFileUpload1 = (acceptedFiles) => {
        console.log('clicked')
        setOpen1(true);
    };

    const handleFileUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedFile(file);
        setFileName(file.name);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleFileUpload });

    return (
        <div>


            <div className="d-flex align-items-center" style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', marginRight: '24px' }}>
                <IconButton color="primary" size="large" className="mx-2">
                    <RefreshIcon />
                </IconButton>
               
                <Button variant="contained" color="primary"  onClick={handleFileUpload1} component="span">
                    Add Document
                </Button>
            </div>



            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S/No</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>File</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documents.map((document, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{document.description}</TableCell>
                                <TableCell>{document.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Dialog TransitionComponent={Transition} open={open1} onClose={handleClose1} fullWidth maxWidth="md">
                <DialogTitle>Add document</DialogTitle>
                <DialogContent>
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
                    <TextField
                        label="Description"
                        variant="outlined"
                        multiline
                        style={{ marginTop: '20px' }}
                        rows={4}
                        fullWidth
                    //value={remark}
                    // onChange={handleRemarkChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1}>Cancel</Button>
                    <Button onClick={handleClose1} variant="contained" color="primary">Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DocumentTable;
