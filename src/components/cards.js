import React from 'react';
import Card from './card';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
const cards = () =>{
return(
<div className="container-fluid">
<div className="row">
<Card background={img1} />
<Card background={img2} />
<Card background={img3} />
</div>
</div>
);
}
export default cards;