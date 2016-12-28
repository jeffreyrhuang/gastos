import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CostInput from './CostInput';
import CostTable from './CostTable';
import MonthSelector from './MonthSelector';

class Main extends Component {
  render() {
    return (
      <Grid>
        <h3><b>Gastos App</b></h3>
        <br/>
        <Row>
          <Col lg={1} id='MonthSelectorContainer' className='center'>
            <MonthSelector />
          </Col>
          <Col lg={1} />
          <Col lg={7} id='CostTableContainer'>
            <CostTable />
          </Col>
          <Col lg={1} />
          <Col lg={2}>
            <CostInput />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Main;