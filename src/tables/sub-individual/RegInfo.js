// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
// import AuthService from '../../services/auth/auth_service';

// const RegInfo = ({ data }) => {
//     console.log(data);
//   const [registrationInfo, setRegistrationInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRegistrationInfo = async () => {
//       setLoading(true);
//       try {
//         const response = await AuthService.getRegistrationInfo(data.id);
//         setRegistrationInfo(response.data);
//       } catch (error) {
//         console.error('Error fetching registration info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRegistrationInfo();
//   }, [data.id]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   // Define the fields you want to display
//   const fieldsToDisplayLeft = [
//     'regnNo',
//     'oldRegId',
//     'firstName',
//     'middleName',
//     'surName',
//     'email',
//     'telephone', // Move telephone to the left section
//     'regDate',   // Move regDate to the left section
//   ];

//   const fieldsToDisplayRight = [
//     'address',
//     'certificateNo',
//     'membershipType',
//     'membershipFee',
//     'status',
//     'fileNo',
//     'statusRemarks',
//     'statusReason',
//   ];

//   const getCellStyle = (fieldName) => {
//     const style = { fontWeight: 'normal', color: 'inherit' };

//     if (['regnNo', 'telephone', 'statusRemarks', 'status', 'certificateNo', 'membershipType', 'membershipFee'].includes(fieldName)) {
//       style.fontWeight = 'bold';
//       style.color = 'green';
//     }

//     return style;
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <TableContainer component={Paper} style={{ flex: 1, marginRight: '1rem', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
//         <Table>
//           <TableBody>
//             {fieldsToDisplayLeft.map((field) => (
//               <TableRow key={field}>
//                 <TableCell component="th" scope="row">
//                   {field === 'regnNo' ? data.regnNo : field}
//                 </TableCell>
//                 <TableCell style={getCellStyle(field)}>{registrationInfo[field]}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TableContainer component={Paper}  style={{flex: 1, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//         <Table>
//           <TableBody>
//             {fieldsToDisplayRight.map((field) => (
//               <TableRow key={field}>
//                 <TableCell component="th" scope="row">
//                   {field === 'regnNo' ? data.regnNo : field}
//                 </TableCell>
//                 <TableCell style={getCellStyle(field)}>{registrationInfo[field]}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default RegInfo;








import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AuthService from '../../services/auth/auth_service';

const RegInfo = ({ data }) => {
 
  const [registrationInfo, setRegistrationInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrationInfo = async () => {
      setLoading(true);
      try {
       
          const response = await AuthService.getRegistrationInfo(data.id);
          console.log('response',response);
          setRegistrationInfo(response.data);
        
      } catch (error) {
        console.error('Error fetching registration info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrationInfo();
  }, [data]);

  if (!data) {
    return null; // Return null or a placeholder component if data is null
  }

  if (loading) {
    return <CircularProgress />;
  }

  // Define the fields you want to display
  const fieldsToDisplayLeft = [
    'regnNo',
    'oldRegId',
    'firstName',
    'middleName',
    'surName',
    'email',
    'telephone', // Move telephone to the left section
    'regDate',   // Move regDate to the left section
  ];

  const fieldsToDisplayRight = [
    'address',
    'certificateNo',
    'membershipType',
    'membershipFee',
    'status',
    'fileNo',
    'statusRemarks',
    'statusReason',
  ];

  const getCellStyle = (fieldName) => {
    const style = { fontWeight: 'normal', color: 'inherit' };

    if (['regnNo', 'telephone', 'statusRemarks', 'status', 'certificateNo', 'membershipType', 'membershipFee'].includes(fieldName)) {
      style.fontWeight = 'bold';
      style.color = 'green';
    }

    return style;
  };

  return (
    <div style={{ display: 'flex' }}>
      <TableContainer component={Paper} style={{ flex: 1, marginRight: '1rem', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
        <Table>
          <TableBody>
            {fieldsToDisplayLeft.map((field) => (
              <TableRow key={field}>
                <TableCell component="th" scope="row">
                  {field === 'regnNo' ? data.regnNo : field}
                </TableCell>
                <TableCell style={getCellStyle(field)}>
                  {registrationInfo && registrationInfo[field]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}  style={{flex: 1, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <Table>
          <TableBody>
            {fieldsToDisplayRight.map((field) => (
              <TableRow key={field}>
                <TableCell component="th" scope="row">
                  {field === 'regnNo' ? data.regnNo : field}
                </TableCell>
                <TableCell style={getCellStyle(field)}>
                  {registrationInfo && registrationInfo[field]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RegInfo;
