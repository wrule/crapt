import { ConfigProvider, Layout } from 'antd';
import './App.scss';
import { Home } from './views/home';

const { Header, Content } = Layout;

function App() {
  return (
    <ConfigProvider
      componentSize="small"
      theme={{
        token: {
          borderRadius: 0,
        },
      }}>
      <Layout className="App">
        <Header className="Header">1</Header>
        <Content>
          <Home />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
