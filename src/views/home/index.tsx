import { Button, Row } from 'antd';
import style from './index.module.scss';
import a from './a.module.less';
import '@/App.scss';

export
function Home() {
  return <div className={style.com}>
    <Row>
      <Button type="primary">你好，世界</Button>
    </Row>
    <Row>
      <span className={a.color}>你好，世界</span>
    </Row>
    <Row>
      <span className={style.com}>你好，世界</span>
    </Row>
  </div>;
}
