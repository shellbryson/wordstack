import React, {} from 'react';
import { VictoryChart } from 'victory';
import { VictoryBar } from 'victory';

const data = [
  {day: 1, target: 1000},
  {day: 2, target: 2000},
  {day: 3, target: 3000},
  {day: 4, target: 4000}
];

var WordstackChart = React.createClass({
  render() {
    return (

      <VictoryChart
         events={[{
           childName: ["area-1", "area-2"],
           target: "data",
           eventHandlers: {
             onClick: () => {
               return [
                 {
                   childName: ["area-3", "area-4"],
                   target: "data",
                   mutation: (props) => {
                     const fill = props.style.fill;
                     return fill === "gold" ? null : {style: {fill: "gold"}};
                   },
                   callback: () => {
                     console.log("I happen after setState");
                   }
                 }
               ];
             }
           }
         }]}
      >

        <VictoryBar
          data={data}
          x={"day"}
          y={"target"}
          labels={(datum) => datum.target}
        />

      </VictoryChart>
    );
  }
});

export default WordstackChart;
