import React, { Component } from 'react';
import { VictoryChart } from 'victory';
import { VictoryBar } from 'victory';

const data = [
  {day: 1, target: 1000},
  {day: 2, target: 2000},
  {day: 3, target: 3000},
  {day: 4, target: 4000}
];

export default class WordstackChart extends Component {
  render() {
    return (
      <VictoryChart>

        <VictoryBar
          data={data}
          x={"day"}
          y={"target"}
          labels={(datum) => datum.target}
        />

      </VictoryChart>
    );
  }
};
