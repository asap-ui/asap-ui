import { AppBar, AsapSnackbar, Button, Snackbar, Space } from 'asap-ui';
import React, { useState } from 'react';
import { SnackbarType } from '../props';

const BasicUsage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AsapSnackbar
        show={show}
        content="这是一条消息！"
        onClosed={() => {
          setShow(false);
        }}
      />
      <Button type="primary" block onClick={() => setShow(!show)}>
        基本使用
      </Button>
    </>
  );
};

const BasicVertical = () => {
  const [show, setShow] = useState(false);
  const CloseButton = () => (
    <Button type="primary" onClick={() => setShow(false)}>
      关闭
    </Button>
  );

  return (
    <>
      <AsapSnackbar
        show={show}
        content="这是一条消息！"
        vertical
        action={<CloseButton />}
        onClosed={() => {
          setShow(false);
        }}
      />
      <Button type="primary" block onClick={() => setShow(!show)}>
        垂直排列
      </Button>
    </>
  );
};

const BasicBottom = () => {
  const [show, setShow] = useState(false);
  const CloseButton = () => (
    <Button type="primary" onClick={() => setShow(false)}>
      关闭
    </Button>
  );

  return (
    <>
      <AsapSnackbar
        show={show}
        content="这是一条消息！"
        position="bottom"
        action={<CloseButton />}
        onClosed={() => {
          setShow(false);
        }}
      />
      <Button type="primary" block onClick={() => setShow(!show)}>
        底部显示
      </Button>
    </>
  );
};

const BasicDuration = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AsapSnackbar
        show={show}
        content="这是一条显示1秒的消息！"
        duration={1000}
        onClosed={() => {
          setShow(false);
        }}
      />
      <Button type="primary" block onClick={() => setShow(!show)}>
        显示时长
      </Button>
    </>
  );
};

const BasicForbidClick = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AsapSnackbar
        show={show}
        content="这是一条禁止穿透点击的消息！"
        forbidClick
        onClosed={() => {
          setShow(false);
        }}
      />
      <Button type="primary" block onClick={() => setShow(!show)}>
        禁止穿透点击
      </Button>
    </>
  );
};

function FunctionUsage() {
  Snackbar.allowMultiple(false);
  Snackbar({
    content: '基本调用',
  });
}
function FunctionDuration() {
  Snackbar.allowMultiple(false);
  Snackbar({
    content: '显示时长',
  });
}
function FunctionBottom() {
  Snackbar.allowMultiple(false);
  Snackbar({
    content: '底部消息',
    position: 'bottom',
  });
}

function createSnackbar(type: SnackbarType) {
  Snackbar[type]('这是一个消息条');
  if (type === 'loading') {
    setTimeout(() => {
      Snackbar.success('加载成功');
    }, 2000);
  }
}

function openMultiple() {
  Snackbar.allowMultiple(true);

  const snackbar1 = Snackbar('Snackbar 1');
  Snackbar.success('Snackbar 2');

  setTimeout(() => {
    snackbar1.clear();
  }, 1000);
}

const SnackbarDemo = () => {
  return (
    <div>
      <AppBar title="基本使用">
        <Space direction="vertical" fill style={{ flex: 1 }}>
          <BasicUsage />
          <BasicVertical />
          <BasicBottom />
          <BasicDuration />
          <BasicForbidClick />
        </Space>
      </AppBar>

      <AppBar title="函数调用">
        <Space direction="vertical" fill style={{ flex: 1 }}>
          <Button type="warning" block onClick={() => FunctionUsage()}>
            基本使用
          </Button>
          <Button type="warning" block onClick={() => FunctionDuration()}>
            显示时长
          </Button>
          <Button type="warning" block onClick={() => FunctionBottom()}>
            底部显示
          </Button>
        </Space>
      </AppBar>

      <AppBar title="Snackbar类型">
        <Button type="success" block onClick={() => createSnackbar('success')}>
          成功
        </Button>
        <Button type="warning" block onClick={() => createSnackbar('warning')}>
          警告
        </Button>
        <Button type="info" block onClick={() => createSnackbar('info')}>
          消息
        </Button>
        <Button type="danger" block onClick={() => createSnackbar('error')}>
          错误
        </Button>
        <Button type="primary" block onClick={() => createSnackbar('loading')}>
          加载
        </Button>
      </AppBar>

      <AppBar title="多例模式">
        <Button type="primary" block onClick={() => openMultiple()}>
          多例模式
        </Button>
      </AppBar>
    </div>
  );
};
export default SnackbarDemo;
