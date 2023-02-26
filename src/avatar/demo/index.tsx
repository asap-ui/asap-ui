import { AppBar, Avatar } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="头像尺寸">
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
        {/*<Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size={18} />*/}
      </AppBar>

      <AppBar title="头像形状">
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" round={false} />
      </AppBar>

      <AppBar title="填充模式">
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="fill" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
        <Avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
        <Avatar
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
          fit="scale-down"
        />
      </AppBar>

      <AppBar title="文字自适应">
        <Avatar>asap-ui</Avatar>
        <Avatar round={false}>asap-ui</Avatar>
      </AppBar>
    </>
  );
};

export default Demo;
