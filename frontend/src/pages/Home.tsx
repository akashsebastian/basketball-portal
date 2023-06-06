import React from 'react';
import { Layout } from 'antd';
import PageHeader from '../components/PageHeader';

const { Content, Footer } = Layout;

const Home: any = () => {
  return (
    <Layout>
      <PageHeader></PageHeader>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
