import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

const Headers = ['Players', 'Teams', 'Leagues', 'Games'];

const PageHeader: any = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        background: 'white',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        className="demo-logo"
        style={{ cursor: 'pointer', marginRight: '5%' }}
      >
        Yorker Analytics
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={Headers.map((header, index) => ({
          key: String(index + 1),
          label: header
        }))}
        onClick={(key) => console.log(key)}
      />
    </Header>
  );
};

export default PageHeader;
