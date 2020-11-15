import React from 'react';

const card = (props) =>
{
    return(
         <div style={{backgroundImage : "url(" + props.background + ")",backgroundSize: "cover",backgroundPosition: "center"}} className="col-md-4 p-5">
            <div className="container mt-5 text-white">
              <small>Featured</small>
              <h1>Swim With <br></br> Dolphins</h1>
              <p className="text-center">
                  We'll take you the the Hawaii where you can<br></br>
                  live a lifelong dream many people have<br></br>
                  - swimming with dolphins
              </p>
            </div>
         </div>
        );
}
export default card;