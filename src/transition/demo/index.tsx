import { AppBar, Button } from 'asap-ui';
import React, { useEffect, useRef, useState } from 'react';
import { Transition, TransitionGroup } from '../index';
import './index.less';

const SnackbarDemo = () => {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([1, 2, 3, 4, 5,]);
  const [display, setDisplay] = useState(list.map(() => false));
  let timer = useRef<any>(null);

  useEffect(() => {
    clearTimeout(timer.current);
    if (display.filter((bool) => !!bool).length === display.length) {
      timer.current = setTimeout(() => {
        setDisplay(display.map((_, index) => (index == 2 ? false : true)));
      }, 2000);
    }
    return ()=>clearTimeout(timer.current)
  }, [display]);
  
  return (
    <div>
      <AppBar title="Transiton">
        <Transition in={show} name="fade" timeout={300}>
          <div className="fade">fade animation test</div>
        </Transition>
        <Button type="primary" block onClick={() => setShow(!show)}>
          toggle fade box
        </Button>
      </AppBar>
      <AppBar title="TransitonGroup">
        <TransitionGroup className="list-box">
          {display.map((_in, index) => (
            <Transition in={_in} name="fade" timeout={300} key={list[index]}>
              <div className="list-item fade">{list[index]}</div>
            </Transition>
          ))}
        </TransitionGroup>
        <Button
          type="primary"
          block
          onClick={() => setDisplay(display.map(() => !display[0]))}
        >
          toggle list
        </Button>
      </AppBar>
    </div>
  );
};
export default SnackbarDemo;
