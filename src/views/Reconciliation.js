import * as React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'shards-react';
import PageTitle from '../components/common/PageTitle';
import ReconciliationTable from '../tables/Reconciliation'; 

const Reconciliation = () => (
  <Container fluid className="main-content-container px-4 py-5">
    <Row style={{display:'none'}}   noGutters className="page-header py-0">
      <PageTitle sm="8"  title="Add New Bill" subtitle="Blog Posts" className="text-sm-left" />
    </Row>


    <Row>
      <Col>
        <Card small className="mb-4 mt-8">
          <CardHeader className="border-bottom">
            <h5 className="m-0">Reconciliation</h5>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <ReconciliationTable /> 
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Reconciliation;
