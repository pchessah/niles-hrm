
import homeImg from '../../assets/home-gif.gif';
import { Button } from 'antd';

function Home() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between whole-page">
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                       
                            <h1 className="text-center display-4">Niles Human Resource Management and Consultancy</h1>
                            <h2 className="display-6">Excelence through people</h2>
                            <Button type="primary" className="learn-more-btn">Learn More</Button>
                    

                    </div>
                    <div className="d-flex flex-column align-items-stretch">
                        <img className="home-img" src={homeImg} alt="home-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
