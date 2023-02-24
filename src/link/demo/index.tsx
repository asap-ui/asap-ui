import { AppBar, Button, Link } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="主题色链接">
        <Link>默认链接</Link>
        <Link type="primary">主要链接</Link>
        <Link type="info">信息链接</Link>
        <Link type="success">成功链接</Link>
        <Link type="warning">警告链接</Link>
        <Link type="danger">危险链接</Link>
      </AppBar>

      <AppBar title="链接模式">
        <Link type="primary" href="http://localhost:8000/" target="_blank">
          href 链接
        </Link>
        <Link type="primary" to="/components/button">
          router-link 链接
        </Link>
      </AppBar>

      <AppBar title="下划线">
        <Link type="primary">始终显示</Link>
        <Link type="primary" underline="hover">
          悬停显示
        </Link>
        <Link type="primary" underline="none">
          不显示
        </Link>
      </AppBar>

      <AppBar title="禁用状态">
        <Link disabled>禁用状态</Link>
      </AppBar>

      <AppBar title="自定义颜色及大小">
        <Link color="#009688">链接</Link>
        <Link size={18}>链接</Link>
      </AppBar>

      <AppBar title="提供插槽">
        <Link href="http://localhost:8000/" target="_blank" underline="none">
          <Button type="primary">跳转首页</Button>
        </Link>
      </AppBar>
    </>
  );
};

export default Demo;
