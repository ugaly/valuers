import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'shards-react';
import PageTitle from '../components/common/PageTitle';
import IndividualsTable from '../tables/Individual';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExamsResultsTable from '../tables/sub-individual/ExamsResultsTable';
import AcademicInfoTable from '../tables/sub-individual/AcademicInfoTable';
import RegInfo from '../tables/sub-individual/RegInfo';
import CppTable from '../tables/sub-individual/CppTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

const Individual = () => {
  const [switched, setSwitched] = useState(false);
  const [activeTab, setActiveTab] = useState('Reg Info');
  const [data, setData] = useState([]);

  const handleClickItem = (item_data) => {
    console.log(item_data);
    setData(item_data);
    setSwitched(true);
  };

  const handleTabChange = (event, newTab) => {

    if (newTab === 'back') {
      goBack()
      setActiveTab('Reg Info')
      return; // Do not change the active tab
    }


    setActiveTab(newTab);
  };

  const goBack = () => {
    setSwitched(false)

  }


  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    goBack()
    setActiveTab('Reg Info');

  };

  return (
    <>
      {switched ? (
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
                    <Tab value="Reg Info" label="Reg Info" />
                    <Tab value="Exams Results" label="Exams Results" />
                    <Tab value="Academic Info" label="Academic Info" />
                    <Tab value="CPP" label="CPP" />
                  </Tabs>
                </CardHeader>
                <CardBody className="border-bottom bg-light">
                  {activeTab === 'Reg Info' && <RegInfo data={data}/>}
                  {activeTab === 'Exams Results' && <ExamsResultsTable data={data}/>}
                  {activeTab === 'Academic Info' && <AcademicInfoTable data={data}/>}
                  {activeTab === 'CPP' && <CppTable data={data}/>}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Container fluid className="main-content-container px-4 pb-4">
            <Row noGutters className="page-header py-4">
              {/* <PageTitle title="Individuals" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" /> */}
            </Row>
            <Row>
              <Col>
                <Card className="card-small mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Individuals</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <IndividualsTable onClickItem={handleClickItem} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Individual;

