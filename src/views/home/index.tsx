import { Button, Row, Table } from 'antd';
import style from './index.module.scss';

export
function Home() {
  return <div className={style.com}>
    <Row>
      <Button type="primary">你好，世界</Button>
    </Row>
    {/* <Table />
    <Row>
      <Button type="primary">你好，世界</Button>
    </Row>
    <Table />
    <Row>
      <Button type="primary">你好，世界</Button>
    </Row>
    <Table />
    <Row>
      <Button type="primary">你好，世界</Button>
    </Row>
    <Table /> */}
  </div>;
}
