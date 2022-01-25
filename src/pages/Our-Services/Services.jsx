import React from 'react';
import OurServicesCard from '../../components/Our-Services-Cards/OurServicesCard.jsx';
import hiring from '../../assets/hiring.png';
import employeeEngagement from '../../assets/employee-engagement.png';
import training from '../../assets/training.png';
import outsource from '../../assets/outsource.png';
import payroll from '../../assets/payroll.png';
import performanceManagement from '../../assets/performance-management.png';

function Services() {
    return (
        <>
            <h3 className="text-center display-4 p-3">
                Services
            </h3>
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap m-2">

                    <OurServicesCard img={hiring}
                        title="Recruitment and Hiring"
                        description="Business owners constantly try to find new ways to streamline the recruitment and hiring part of their businesses.
                                                            This is where we as NM&C come in to simplify the process by providing placement services where we develop an ideal 
                                                            employee profile and then work to source, interview candidates for  specific position, we then pre-screen 
                                                            applicants using behavioral interview techniques."/>

                    <OurServicesCard img={employeeEngagement}
                        title="Employee Engagement"
                        description="In an effort to maintain employee loyalty, we have increasingly come to understand that employee attitudes are
                                                            not what they were in the previous generation. All of this makes it important for us to find varied and 
                                                            creative manner of engagement and we focus on matters like employee wellness, group fitness and staying open 
                                                            to employee feedback" />

                    <OurServicesCard img={training}
                        title="Training and Development"
                        description="Training is important in an organisation's overall strategy. It helps to expand the knowledge base of all employees
                                                  and it should be viewed as an investment rather than an expense. Investing in training benefits both the organisation
                                                  and employer for a long period, hence training benefits are intangible and provide a sense of satisfaction which is an
                                                  intrinsic motivator." />

                </div>
                <div className="d-flex justify-content-between flex-wrap mt-5">

                    <OurServicesCard img={outsource}
                        title="HR Outsourcing"
                        description="We offer comprehensive HR services that gives you the freedom to focus on growth and opportunity as your business grows, your challenges multiply.
                                     We help you streamline processes, reduce operating costs, manage your employees contracts, process salaries, statutory taxes, legal compliance,
                                     maintain employee records and focus on your core business."/>

                    <OurServicesCard img={payroll}
                        title="Payroll Administration"
                        description="The technical requirements of running a payroll are becoming more complex as well as calculating tax, net pay and other deductions hence making it cumbersome 
                                    for the HR managers. Our payroll services and payroll management suits small businesses who do not have an in house facility ll the way to large companies and 
                                    organisations who prefer to outsource full payroll function rather than employ specialist staff." />

                    <OurServicesCard img={performanceManagement}
                        title="Performance Management and Evaluations"
                        description="Performance management is another arena where technology has become a game changer for human resource in order to help our clients keep and monitor records of 
                                     their employees.We regularly communicate with department managers to request updates on their current filing which makes it easier to help keep employees on 
                                     track if they are lacking certain skills or have other issues that endanger their position with the evaluation we also help the client detect when an employee 
                                     is ready to take on a new task or eligible for promotion. " />

                </div>
                <div className="d-flex justify-content-between"></div>
            </div>
        </>
    )
}

export default Services
