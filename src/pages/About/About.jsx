import { Card } from 'antd';
import aboutUs from '../../assets/niles-home.png'

/**About Us Page */

function About() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-center display-4 p-3">About</h3>
                <div >
                    
                <img src={aboutUs} alt="about us" className="img-fluid about-us-img" />

                    <Card className='about-us-card'>
                        <p>
                            Welcome to Niles HR Management and Consultancy, an accredited management and recruitment agency. We help discover and nurture the advertising industry’s newest talent.
                            We specialize in recruiting and management of talent across all industries in Kenya. We spot talent and skills from experienced talents and top-notch graduates,
                            and we help them in their development as professionals as we strive to make the recruitment process easy for you.
                            We are a unique agency with a mission to offer world-class Human Resource services, training and mentoring services for your employees.
                            We also offer outsourcing, insourcing and management services across all industries in Kenya. We take pride in guiding or clientele through what can sometimes feel like an overwhelming process.
                        </p>
                    </Card>

                
                  
                </div>

            </div>

        </>

    )
}

export default About
