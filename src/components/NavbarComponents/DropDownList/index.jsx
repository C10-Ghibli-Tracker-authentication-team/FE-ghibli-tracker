import React from 'react';
import { Select, I, SelectContainer } from '../../../styles/Navbar/DropDownListStyles';

const DropDownList = ({ listOptions }) => {
  return (
    <>
      <SelectContainer>
        <Select>
          {listOptions.map((option) => (
            <option key={[option]}>{[option]}</option>
          ))}
        </Select>
        <I />
      </SelectContainer>
    </>
  );
};

export default DropDownList;
