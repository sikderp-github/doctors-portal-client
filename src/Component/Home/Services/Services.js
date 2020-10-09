import React from 'react';
import floride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Floride Treatment',
        img: floride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        img: whitening
    }

]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#5FC7C7' }}>Our Services</h5>
                <h2>Services we provided</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}> </ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;