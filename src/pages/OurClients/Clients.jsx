import React from 'react';
import clients from '../../assets/our-clients.png';

function Clients() {
    return (
        <>
            <h3 className="text-center display-4 p-3">Our Clients</h3>
            <div className="container d-flex justify-content-center align-items-center">
               
                        <img className="clients-img" src={clients} alt="clients-placeholder" />
                  
            </div>
        </>
    )
}

export default Clients
