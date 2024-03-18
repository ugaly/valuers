// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const BillInfo = ({ data }) => {
//   const attributesToDisplay = [
//     'createdTime',
//     'billId',
//     'payCntrNum',
//     'billDesc',
//     'gepgResponse',
//     'description',
//     'billAmt',
//     'pyrName',
//     'pyrCellNum',
//     'pyrEmail',
//     'createdBy',
//     'lastModifiedBy',
//     'last_time',
//     'spCode',
//     'trxStsCode',
//     'trxSts',
//     'subSpCode',
//     'spSysId',
//     'ccy',
//     'miscAmt',
//     'billExprDt',
//     'billGenDt',
//     'billApprBy',
//     'billEqvAmt',
//     'billGenBy',
//     'billPayOpt',
//   ];

//   const getCellStyle = (attribute) => {
//     const style = { color: 'inherit' };

//     if (['payCntrNum', 'gepgResponse', 'pyrName'].includes(attribute)) {
//       style.color = 'green';

//       if (['payCntrNum', 'pyrName'].includes(attribute)) {
//         style.fontWeight = 'bold';
//       }
//     }

//     return style;
//   };

//   function formatDateTime(dateTimeString) {
//     const options = {
//         year: 'numeric',
//         month: 'short',
//         day: '2-digit',
//         hour: 'numeric',
//         minute: '2-digit',
//         hour12: true,
//     };

//     const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
//     return formattedDateTime;
// }

//   return (
//     <>
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1, marginRight: '0.5rem' }}>
//           <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            
            
//             <Table >
//               <TableBody>
//                 {attributesToDisplay.slice(0, Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
//                   <TableRow key={attribute}>
//                     <TableCell style={{  fontWeight: 'bold' }} component="th" scope="row">
//                       {attribute}
//                     </TableCell>
//                     <TableCell style={getCellStyle(attribute)}>{data[attribute]}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//         <div style={{ flex: 1, marginLeft: '0.5rem' }}>
//           <TableContainer component={Paper} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
//             <Table>
//               <TableBody>
//                 {attributesToDisplay.slice(Math.ceil(attributesToDisplay.length / 2)).map((attribute) => (
//                   <TableRow key={attribute}>
//                     <TableCell style={{  fontWeight: 'bold' }} component="th" scope="row">
//                       {attribute}
//                     </TableCell>
//                     <TableCell style={getCellStyle(attribute)}>{data[attribute]}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BillInfo;




import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BillInfo = ({ data }) => {
  const attributesToDisplay = [
    'createdTime',
    'billId',
    'payCntrNum',
    'billDesc',
    'gepgResponse',
    'description',
    'billAmt',
    'pyrName',
    'pyrCellNum',
    'pyrEmail',
    'createdBy',
    'lastModifiedBy',
    'last_time',
    'spCode',
    'trxStsCode',
    'trxSts',
    'subSpCode',
    'spSysId',
    'ccy',
    'miscAmt',
    'billExprDt',
    'billGenDt',
    'billApprBy',
    'billEqvAmt',
    'billGenBy',
    'billPayOpt',
  ];

  const getCellStyle = (attribute) => {
    const style = { color: 'inherit' };

    if (['payCntrNum', 'gepgResponse', 'pyrName'].includes(attribute)) {
      style.color = 'green';

      if (['payCntrNum', 'pyrName'].includes(attribute)) {
        style.fontWeight = 'bold';
      }
    }

    return style;
  };

  function formatDateTime(dateTimeString) {
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
  }

  return (
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
                    {['createdTime', 'last_time', 'billExprDt', 'billGenDt'].includes(attribute)
                      ? formatDateTime(data[attribute])
                      : data[attribute]}
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
                    {['createdTime', 'last_time', 'billExprDt', 'billGenDt'].includes(attribute)
                      ? formatDateTime(data[attribute])
                      : data[attribute]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BillInfo;

