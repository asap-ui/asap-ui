import { AppBar, Button, Ripple } from 'asap-ui';
import React, { CSSProperties } from 'react';

const RippleDemo = () => {
  const commonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    userSelect: 'none',
    cursor: 'pointer',
    color: '#000',
    backgroundColor: '#DADADA',
    transition: 'background-color 0.25s',
  };

  return (
    <>
      <AppBar title="基本使用">
        <Ripple>
          <div style={commonStyle}>点击</div>
        </Ripple>

        <Ripple>
          <Button type="primary">按钮</Button>
        </Ripple>
      </AppBar>

      <AppBar title="修改颜色">
        <Ripple color="#2979ff">
          <div style={commonStyle}>点击</div>
        </Ripple>
      </AppBar>

      <AppBar title="禁用水波">
        <Ripple disabled>
          <div style={commonStyle}>点击</div>
        </Ripple>
      </AppBar>
    </>
  );
};

export default RippleDemo;
