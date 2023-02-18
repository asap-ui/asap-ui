import { AppBar, Button } from 'asap-ui';
import React from 'react';

const ButtonDemo = () => {
  return (
    <>
      <AppBar title={'主题色按钮'}>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </AppBar>

      <AppBar title={'文字按钮'}>
        <Button text outline type="primary">
          外边框按钮
        </Button>
        <Button text type="primary">
          纯文字按钮
        </Button>
      </AppBar>

      <AppBar title={'按钮尺寸'}>
        <Button type="primary">常规按钮</Button>
        <Button type="success" size="small">
          小型按钮
        </Button>
        <Button type="warning" size="mini">
          迷你按钮
        </Button>
        <Button type="danger" size="large">
          大型按钮
        </Button>
      </AppBar>

      <AppBar title={'块级按钮'}>
        <Button block type="primary">
          常规按钮
        </Button>
      </AppBar>

      <AppBar title={'自定义颜色'}>
        <Button color="#66bb6a" text-color="#fff">
          背景/文字
        </Button>
        <Button
          color="linear-gradient(to right, #69dbaa, #3a7afe)"
          text-color="#fff"
        >
          使用渐变
        </Button>
      </AppBar>
    </>
  );
};

export default ButtonDemo;
