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
                        label:'Results',
                        data: [10, 4, 8, 3, 7, 1],
                        borderColor: 'red',
                        borderWidth: 2,
                        backgroundColor: 'rgb(255, 0, 0, 0.5)',
                        
                    }
                ]
                
            }
        }
    }
    render(){
        return (
            <Radar
            data={this.state.chartData}
            width={1000}
            height={1000}
            options={{ 
                maintainAspectRatio: false,
                pointLabels: {
                    fontSize: 30		
                } 
            }}
          />
        )
    }
}

export default Chart;