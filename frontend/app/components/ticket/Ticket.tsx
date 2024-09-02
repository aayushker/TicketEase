import { useState } from 'react';
import Image from 'next/image';
import styles from './ticket.module.css';

interface TicketProps {
  title: string;
  language: string;
  date: string;
  time: string;
  venue: string;
  screen: string;
  ticketNumber: string;
  qrCode: string;
}

const Ticket = ({
  title,
  language,
  date,
  time,
  venue,
  screen,
  ticketNumber,
  qrCode,
}: TicketProps) => {
  const [showCoupons, setShowCoupons] = useState(false);

  const handleShowCoupons = () => {
    setShowCoupons(!showCoupons);
  };

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.ticketHeader}>
        <div className={styles.moviePoster}>
          <Image
            src="/images/stree_poster.jpg"
            alt="Stree Movie Poster"
            width={100}
            height={150}
          />
        </div>
        <div className={styles.movieDetails}>
          <h3>{title}</h3>
          <p>{language}</p>
          <p>{date} | {time}</p>
          <p>{venue}</p>
        </div>
        <div className={styles.ticketStatus}>
          <div className={styles.ticketBooked}>
            <Image
              src="/images/ticket_booked.png"
              alt="Ticket Booked"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      <div className={styles.ticketContent}>
        <div className={styles.ticketInfo}>
          <p>Ticket</p>
          <p>{ticketNumber}</p>
        </div>
        <div className={styles.ticketInfo}>
          <p>Screen</p>
          <p>{screen}</p>
        </div>
      </div>
      <div className={styles.couponSection}>
        <p>
          Congrats! Coupons Unlocked
          <br /> Grab discounts from restaurants nearby.
        </p>
        <button onClick={handleShowCoupons} className={styles.couponButton}>
          Select Coupons
        </button>
        {showCoupons && (
          <div className={styles.qrCodeContainer}>
            <Image
              src={`data:image/png;base64,${qrCode}`}
              alt="QR Code"
              width={150}
              height={150}
            />
            <p className={styles.qrCodeText}>TYA5K8Z</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;