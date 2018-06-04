import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import './index.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<Icon size='xs' type="check" />}
          >123</TabBar.Item>
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<Icon size='xs' type="check" />}
          >456</TabBar.Item>
        </TabBar>

      </div >
    );
  }
}

export default Layout
