import * as React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'shards-react';
import PageTitle from '../components/common/PageTitle';
import EnhancedTable from './EnhancedTable';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import BillInfo from '../tables/sub-bill/BillInfo';
import Payments from '../tables/sub-bill/payments';

const Tables = () => {

  const [switched, setSwitched] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Bill Info');
  const [data, setData] = React.useState([]);

  const handleTabChange = (event, newTab) => {

    const goBack = () => {
      setSwitched(false)
  
    }

    if (newTab === 'back') {
      goBack()
      setActiveTab('Bill Info')
      return; 
    }

    setActiveTab(newTab);
  };


  const handleClickItem = (item_data) => {
    console.log(item_data);
    setData(item_data);
    setSwitched(true);
  };


  return (
    <>
      {switched ? (

        <>
          <Container fluid className="main-content-container py-4 px-4 pb-4">
            <Row noGutters className="page-header py-4 w-100">
              <Col>
                <Card className="mb-4">
                  <CardHeader className="border-bottom w-100">
                    <Tabs value={activeTab} onChange={handleTabChange}>
                      <Tab
                        value="back"
                        icon={<IconButton ><ArrowBackIcon /></IconButton>}
                        disableRipple
                      />
                      <Tab value="Bill Info" label="Bill Info" />
                      <Tab value="Payments" label="Payments" />
                      
                    </Tabs>
                  </CardHeader>
                  <CardBody className="border-bottom bg-light">
                    {activeTab === 'Bill Info' && <BillInfo data={data}/>}
                    {activeTab === 'Payments' && <Payments data={data}/>}
                   
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>


        </>


      ) : (
        <Container fluid className="main-content-container px-4 py-5">
          <Row style={{ display: 'none' }} noGutters className="page-header py-0">
            <PageTitle sm="8" title="Add New Bill" subtitle="Blog Posts" className="text-sm-left" />
          </Row>


          <Row>
            <Col>
              <Card small className="mb-4 mt-8">
                <CardHeader className="border-bottom">
                  <h5 className="m-0">Bills Available</h5>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <EnhancedTable onClickItem={handleClickItem}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      )}
    </>
  )
};

export default Tables;
