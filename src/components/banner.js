import React from 'react';


const banner = () => 
{
    return(
        <div className="banner container-fluid p-5">
              <div className="container mt-5 p-2">
              <h1 className="text-left">Lets us take care of your next adventure
                   <br></br>You choose where.
               </h1>
              </div>
               
               <div className=" mt-5 mb-5 container">
                   <div className="row">
                    
                    <input className="input-1" type="text" placeholder="Search for a place any place"/>
                    
                    
                    <input className="input-2" type="text" placeholder="Pick a date"/>
                    
                    
                    <input className="input-3" type="text" placeholder="1 Person"/>
                    
                    
                    <button className="text-white btn btn-primary">Search</button>
                   
               </div>

        </div>
        </div>
    );
}
export default banner;