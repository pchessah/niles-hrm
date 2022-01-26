import React from 'react';
import { Form, Input, Button } from 'antd';

import contact from '../../assets/contact-us.gif';

function Contact() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const layout = {
        labelCol: {
            span: 2,
        },
        wrapperCol: {
            span: 16,
        },
    };
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
    };

    return (
        <>
            <h3 className="text-center display-4 p-3"> Contact Us </h3>
            <div className="d-flex align-items-center">
                <img src={contact} alt="contact" className="contact-img" />

                <Form {...layout} className="contact-form" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'introduction']} label="Message">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>

    )
}

export default Contact
