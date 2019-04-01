import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs' //https://reactcommunity.org/react-tabs/
import "react-tabs/style/react-tabs.css"

class Plots extends React.Component {

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
          <Tab>UMAP</Tab>
          <Tab>Gene Features</Tab>
          </TabList>

          <TabPanel>
            <p>UMAP</p>
          </TabPanel>
          <TabPanel>
            <p>Gene Features Figure</p>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Plots