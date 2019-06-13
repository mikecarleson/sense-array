import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Aroma', 'Color', 'Bitterness', 'Sweetness', 'Head Retention', 'Mouthfeel'],
                datasets:[
                    {
                        label: 'Overall',
                        data:[
                            10, 4, 8, 3, 7, 1
                        ]
                    }
                ]
            }
        }
    }
    render(){
        return (
            <Radar
            data={this.state.chartDatadata}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        )
    }
}

export default Chart;