import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'; //https://reactcommunity.org/react-tabs/
import "react-tabs/style/react-tabs.css";
import axios from 'axios';

class Miscellaneous extends React.Component {
  constructor(props) {
    super(props)
    this.state = {message: 'Run Log'};
  }

  componentDidMount() {
    axios.get('api/', {
      params: {
        message: 'Console Log'
      }
    })
      .then((res) => {
        console.log(res)
        this.setState({
          message: res.data
        })
    }) 
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
          <Tab>Run Log</Tab>
          <Tab>{this.state.message}</Tab>
          </TabList>

          <TabPanel>
            <p> {this.state.message} </p>
          </TabPanel>
          <TabPanel>
            <p> Cluster Compares </p>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Miscellaneous