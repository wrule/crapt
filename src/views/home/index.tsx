import { Button } from 'antd';
import style from './index.module.scss';

export
function Home() {
  return <div className={style.com}>
    <Button type="primary">你好，世界</Button>
  </div>;
}
