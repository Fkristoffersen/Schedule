import React from 'react';
import { ChromePicker } from 'react-color';

type Props = {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ color, setColor }) => {
  const handleChange = (c: any) => {
    setColor(c.hex);
  };
  
  return (
    <div className="color-picker">
      <ChromePicker color={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
