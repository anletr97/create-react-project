import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import GridBody from './GridBody';
import GridHeader from './GridHeader';

export class Grid extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Table bordered hover size="sm">
          <GridHeader year={2021} month={6} />
          <GridBody />
        </Table>
      </div>
    );
  }
}

export default Grid;
