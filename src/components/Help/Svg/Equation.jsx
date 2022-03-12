import React from "react";
import eq1 from './eq1.svg';
import eq2 from './eq2.svg';
import eq3 from './eq3.svg';
import eq4 from './eq4.svg';
import eq5 from './eq5.svg';
import eq6 from './eq6.svg';
import eq7 from './eq7.svg';
import eq8 from './eq8.svg';
import eq9 from './eq9.svg';
import eq10 from './eq10.svg';
import eq11 from './eq11.svg';

const svgs = [eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8,eq9,eq10,eq11];

const Equation = ({n=1, width="auto",height="auto"}) => (
    <img src={svgs[n-1]} width={width} height={height} alt="equacao" />
);

export default Equation