import React from 'react';
import Ticket from '../components/ticket/Ticket';

const Tickets = () => {
  const ticketData = {
    title: 'Stree',
    language: 'Hindi, 2D',
    date: 'Sat, 01 Sep',
    time: '11:00 AM',
    venue: 'INOX: GVK One, Banjara Hills',
    screen: 'EX-H16',
    ticketNumber: '1',
    qrCode: 'YOUR_QR_CODE_BASE64_DATA', 
  };

  return (
    <>
      <Ticket {...ticketData} />
    </>
  )
}

export default Tickets
