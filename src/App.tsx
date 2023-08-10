import { ConfigProvider } from 'antd';
import './App.scss';
import { Home } from './views/home';

function App() {
  return (
    <ConfigProvider
      componentSize="small"
      theme={{
        token: {
          borderRadius: 0,
        },
      }}>
      <div className="App">
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
