import React, { useState } from 'react'

const FAQs = () => {
    const [openIndexes, setOpenIndexes] = useState([]);
 
    const faqItems = [
        { 
            question: "Why Bookme?", 
            answer: "Bookme is a convenient and reliable platform for booking bus tickets in Pakistan. We offer a wide range of routes, secure payment options, and excellent customer service." 
        },
        { 
            question: "What information will I be able to see during my ticket purchase?", 
            answer: "During the ticket purchase process, you will be able to see details such as the available bus routes, departure and arrival times, seat availability, ticket prices, and any applicable discounts or promotions." 
        },
        { 
            question: "How do I know if my purchase was successful?", 
            answer: "After completing your ticket purchase, you will receive a confirmation email with your booking details. Additionally, you can log in to your Bookme account to view your booking history and verify your purchase." 
        },
        { 
            question: "Can I choose my own seat?", 
            answer: "Yes, you can choose your own seat during the ticket purchase process. Our seat selection feature allows you to view the available seats on the bus and select the one that best suits your preferences." 
        },
        { 
            question: "How can I purchase E-Tickets once I have selected my seats?", 
            answer: "Once you have selected your seats, you can proceed to the payment page and choose the E-Ticket option. After completing the payment process, you will receive your E-Ticket via email, which you can print or show on your mobile device when boarding the bus." 
        },
        { 
            question: "If I have a query regarding my E-Ticket, who can I contact for assistance?", 
            answer: "If you have any queries or need assistance regarding your E-Ticket, you can contact our customer support team. They will be happy to assist you with any questions or concerns you may have." 
        },
        { 
            question: "What if I do not receive my confirmation email?", 
            answer: "If you do not receive your confirmation email after completing your ticket purchase, please check your spam or junk folder. If you still cannot find it, please contact our customer support team for assistance." 
        },
        { 
            question: "What are the requirements for booking a ticket?", 
            answer: "To book a ticket, you will need to create an account on our website or mobile app. You will also need to provide your personal information, including your name, contact details, and payment information." 
        },
        { 
            question: "What are the rewards for using Bookme?", 
            answer: "As a Bookme user, you can earn rewards points for every ticket purchase. These points can be redeemed for discounts on future bookings, free upgrades, or other exclusive benefits." 
        },
        { 
            question: "What if I have forgotten my password?", 
            answer: "If you have forgotten your password, you can use the 'Forgot Password' feature on our login page to reset it. You will receive instructions on how to reset your password via email." 
        }
    ];
    

    const toggleItem = (index) => {
        setOpenIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    };


  return (
    <div className='2xl:w-[1200px] w-[100%] mx-auto p-4'>
        <h2 className='font-bold text-3xl p-4'>Frequently Asked Questions</h2>

        <ul>
            {faqItems.map((item, index) => (
                <li key={index} className='p-4 py-4'>
                    <div className='flex justify-between items-center mb-5'>
                        <h5 className='sm:text-md text-sm font-semibold'>{item.question}</h5>
                        <span onClick={() => toggleItem(index)}>
                            <i className={`fa-solid fa-${openIndexes.includes(index) ? 'minus' : 'plus'}`}></i>
                        </span>
                    </div>
                    <div style={{ maxHeight: openIndexes.includes(index) ? '220px' : '0px' }} className='text-md overflow-hidden'>
                        {item.answer}
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    </div>
);

}

export default FAQs
