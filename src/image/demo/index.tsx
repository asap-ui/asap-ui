import { AppBar, Image } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="基本使用">
        <Image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      </AppBar>

      <AppBar title="填充模式">
        <Image
          width={85}
          height={85}
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />

        <Image
          width={85}
          height={85}
          fit="cover"
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />

        <Image
          width={85}
          height={85}
          fit="contain"
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />

        <Image
          width={85}
          height={85}
          fit="none"
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />

        <Image
          width={85}
          height={85}
          fit="scale-down"
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />
      </AppBar>

      <AppBar title="设置圆角">
        <Image
          width={85}
          height={85}
          fit="cover"
          radius={10}
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />

        <Image
          width={85}
          height={85}
          fit="cover"
          radius="50%"
          src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        />
      </AppBar>
    </>
  );
};

export default Demo;
