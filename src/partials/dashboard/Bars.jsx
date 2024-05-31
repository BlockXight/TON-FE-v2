import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { amountAtom } from '../../core/atom';

function SliderComponent() {
  // 使用useState来追踪滑动条的值
  const [sliderValue, setSliderValue] = useRecoilState(amountAtom);
  const [state, setState] = useState(100);
  // 处理滑动条值的变化
  const handleSliderBlur = (event) => {
    setSliderValue(event.target.value);
  };
  const handleSliderChange = (event) => {
    setState(event.target.value);
  }

  return (
    <div className='display-flex flex-col w-9/12 mr-auto ml-auto'>
      {/* <label htmlFor="slider">amount filter </label> */}
      <input
      className="w-full display-block h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        type="range"
        id="slider"
        name="slider"
        min="100"
        max="1000"
        step="5"
        value={state}
        onMouseUp={handleSliderBlur}
        onChange={handleSliderChange}
      />
       <span className='text-center w-full mr-auto ml-auto mt-2 block'>{state}</span>
    </div>
  );
}

export default SliderComponent;
