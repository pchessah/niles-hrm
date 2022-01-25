import { Card } from 'antd';

const { Meta } = Card;

function OurServicesCard(props) {
    return (
        <Card className="service-card" cover={
                <img className="service-card-img"
                    alt="example"
                    src={props.img}
                />
            }
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>

    )
}

export default OurServicesCard
