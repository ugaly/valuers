// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import AuthService from '../../services/auth/auth_service';
// import CircularProgress from '@mui/material/CircularProgress';
// import Slide from '@mui/material/Slide';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// const Payments = ({ data }) => {
//     console.log(data);
//     const [loadingReceipt, setLoadingReceipt] = useState(false);
//     const [receiptNotFound, setReceiptNotFound] = useState('');
//     const [documentUrl, setDocumentUrl] = useState('');
//     const [billPayment, setBillPayment] = useState([]);
//     const [loading, setLoading] = useState(false);


//     // AuthService.getBillPayment(data.id).then((res) => {
//     //     console.log(res.data.content);
//     // })



//     useEffect(() => {
//         const fetchCppInfo = async () => {
//             setLoading(true);

//             try {
//                 const response = await AuthService.getBillPayment(data.id);
//                 console.log(response.data.content);
//                 setBillPayment(response.data.content);
//             } catch (error) {
//                 setError('Error fetching CPP data');
//                 console.error('Error fetching CPP data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCppInfo();
//     }, [data.id]);


//     const [openBill, setOpenBill] = React.useState(false);
//     const handleCloseBill = () => {
//         setOpenBill(false);
//         setDocumentUrl('');
//         setReceiptNotFound('');
//     }




//     const handleReceipt = (e, clicked_receipt) => {
//         setLoadingReceipt(true);
//         e.preventDefault();
//         console.log(clicked_receipt.id);

//         AuthService.getReceipt(clicked_receipt.id)
//             .then((res) => {
//                 console.log(res);
//                 if (res.data.data && res.data.data.document) {
//                     const base64Data = res.data.data.document;
//                     // const pdfUrl = `data:application/pdf;base64,${base64Data}`;
//                     const pdfUrl = `${base64Data}`;
//                     setTimeout(() => {
//                         setDocumentUrl(pdfUrl);
//                         setLoadingReceipt(false);
//                         setOpenBill(true);
//                     }, 500);
//                 } else {
//                     console.error('Empty document data or document not found');

//                     setDocumentUrl(''); // Set empty URL in case of no document data
//                     setTimeout(() => {
//                         setLoadingReceipt(false);
//                         setReceiptNotFound('Empty document data or document not found');
//                     }, 2000);
//                 }
//             })
//             .catch((error) => {
//                 console.error('Network or server error:', error);
//                 setDocumentUrl(''); // Set empty URL on error
//             });
//     };








//     const attributesToDisplay = [
//         'billAmt',
//         'paidAmt',
//         'pyrName',
//         'payCtrNum',
//         'trxDtTm',
//         'pspName',
//         'ctrAccNum',
//         'pspReceiptNumber',
//         'payRefId',
//         'spCode',

//         'pyrCellNum',




//         'usdPayChnl',

//         'billPayOpt',
//         'trxId',

//         'ccy',

//     ];

//     // Function to format date and time
//     const formatDateTime = (dateTimeString) => {
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
//     };

//     // Function to get cell style based on attribute
//     const getCellStyle = (attribute) => {
//         const style = { color: 'inherit' };
//         if (['id', 'pyrCellNum'].includes(attribute)) {
//             style.color = 'green';
//             style.fontWeight = 'bold';
//         }
//         return style;
//     };








//     return (
//         <>

//             <div style={{ display: 'flex' }}>
//                 <div style={{ flex: 1, marginRight: '0.5rem' }}>
//                     <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
//                         <Table>
//                             <TableBody>
//                                 {attributesToDisplay.slice(0, Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
//                                     <TableRow key={attribute}>
//                                         <TableCell style={{ fontWeight: 'bold' }} component="th" scope="row">
//                                             {attribute}
//                                         </TableCell>
//                                         <TableCell style={getCellStyle(attribute)}>
//                                             {['trxDtTm'].includes(attribute) ? formatDateTime(data[attribute]) : data[attribute]}
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//                 <div style={{ flex: 1, marginLeft: '0.5rem' }}>
//                     <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
//                         <Table>
//                             <TableBody>
//                                 {attributesToDisplay.slice(Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
//                                     <TableRow key={attribute}>
//                                         <TableCell style={{ fontWeight: 'bold' }} component="th" scope="row">
//                                             {attribute}
//                                         </TableCell>
//                                         <TableCell style={getCellStyle(attribute)}>
//                                             {['trxDtTm'].includes(attribute) ? formatDateTime(data[attribute]) : data[attribute]}
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </div>

//             {receiptNotFound && <p>{receiptNotFound}</p>}
//             <Button
//                 onClick={(e) => handleReceipt(e, data)}
//                 style={{ marginTop: '1rem' }}
//                 variant="contained"
//                 color="primary"
//                 disabled={loadingReceipt} // Disable button while loading
//             >
//                 {loadingReceipt ? <><CircularProgress size={28} /> <span style={{ marginLeft: '10px' }}>Loading...</span> </> : 'View Receipt'}
//             </Button>


//             <Dialog style={{ overflow: 'hidden' }} TransitionProps={{ mountOnEnter: true, unmountOnExit: true }} TransitionComponent={Transition} open={openBill} onClose={handleCloseBill} maxWidth="xl" fullWidth>
//                 {/* <DialogTitle>Bill and Payments Information</DialogTitle> */}

//                 <DialogContent style={{ overflow: 'hidden' }}>


//                     {documentUrl && (
//                         <iframe
//                             title="PDF Viewer"
//                             width="100%"
//                             height="900"
//                             src={documentUrl}
//                         />
//                     )}

//                     {receiptNotFound && <p>{receiptNotFound}</p>}


//                 </DialogContent>
//                 <DialogActions>
//                     <Button style={{ marginRight: '30px' }} onClick={handleCloseBill} color="primary">
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     )
// }

// export default Payments





import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthService from '../../services/auth/auth_service';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Payments = ({ data }) => {
  const [billPayment, setBillPayment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingReceipt, setLoadingReceipt] = useState(false);
  const [receiptNotFound, setReceiptNotFound] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [openBill, setOpenBill] = React.useState(false);

  useEffect(() => {
    const fetchCppInfo = async () => {
      setLoading(true);
      try {
        const response = await AuthService.getBillPayment(data.id);
        setBillPayment(response.data.content);
        console.log(response.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCppInfo();
  }, [data.id]);

  const handleCloseBill = () => {
    setOpenBill(false);
    setDocumentUrl('');
    setReceiptNotFound('');
  };

  const handleReceipt = (e, receiptId) => {
    setLoadingReceipt(true);
    e.preventDefault();

    AuthService.getReceipt(receiptId)
      .then((res) => {
        if (res.data.data && res.data.data.document) {
          const base64Data = res.data.data.document;
          const pdfUrl = `${base64Data}`;
          setTimeout(() => {
            setDocumentUrl(pdfUrl);
            setLoadingReceipt(false);
            setOpenBill(true);
          }, 500);
        } else {
          setDocumentUrl('');
          setTimeout(() => {
            setLoadingReceipt(false);
            setReceiptNotFound('Empty document data or document not found');
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('Network or server error:', error);
        setDocumentUrl('');
      });
  };

  const attributesToDisplay = [
    'billAmt',
    'paidAmt',
    'pyrName',
    'payCtrNum',
    'trxDtTm',
    'pspName',
    'ctrAccNum',
    'pspReceiptNumber',
    'payRefId',
    'spCode',
    'pyrCellNum',
    'usdPayChnl',
    'billPayOpt',
    'trxId',
    'ccy',
  ];

  const formatDateTime = (dateTimeString) => {
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
  };

  const getCellStyle = (attribute) => {
    const style = { color: 'inherit' };
    if (['id', 'pyrCellNum'].includes(attribute)) {
      style.color = 'green';
      style.fontWeight = 'bold';
    }
    return style;
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '0.5rem' }}>
          <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <Table>
              <TableBody>
                {attributesToDisplay.slice(0, Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
                  <TableRow key={attribute}>
                    <TableCell style={{ fontWeight: 'bold' }} component="th" scope="row">
                      {attribute}
                    </TableCell>
                    <TableCell style={getCellStyle(attribute)}>
                      {['trxDtTm'].includes(attribute) ? data[attribute] : data[attribute]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ flex: 1, marginLeft: '0.5rem' }}>
          <TableContainer component={Paper} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <Table>
              <TableBody>
                {attributesToDisplay.slice(Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
                  <TableRow key={attribute}>
                    <TableCell style={{ fontWeight: 'bold' }} component="th" scope="row">
                      {attribute}
                    </TableCell>
                    <TableCell style={getCellStyle(attribute)}>
                      {['trxDtTm'].includes(attribute) ? formatDateTime(data[attribute]) : data[attribute]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {receiptNotFound && <p>{receiptNotFound}</p>}
      <Button
        onClick={(e) => handleReceipt(e, data.id)} // Pass the correct receipt id here
        style={{ marginTop: '1rem' }}
        variant="contained"
        color="primary"
        disabled={loadingReceipt}
      >
        {loadingReceipt ? <><CircularProgress size={28} /> <span style={{ marginLeft: '10px' }}>Loading...</span> </> : 'View Receipt'}
      </Button>

      <Dialog
        TransitionComponent={Transition}
        open={openBill}
        onClose={handleCloseBill}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent style={{ overflow: 'hidden' }}>
          {documentUrl && <iframe title="PDF Viewer" width="100%" height="900" src={documentUrl} />}
          {receiptNotFound && <p>{receiptNotFound}</p>}
        </DialogContent>
        <DialogActions>
          <Button style={{ marginRight: '30px' }} onClick={handleCloseBill} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Payments;
