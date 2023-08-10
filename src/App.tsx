import { ConfigProvider, Layout } from 'antd';
import './App.scss';
import { Home } from './views/home';

const { Header, Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
        },
      }}>
      <Layout className="App">
        <Header className="Header">
          <h1>Demo</h1>
        </Header>
        <Content className="Content">
          <Home />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
