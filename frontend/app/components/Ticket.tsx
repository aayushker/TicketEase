import React, { useRef } from "react";
import Image from "next/image";
import { usePDF } from "react-to-pdf";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";

// we have to add the following props to the TicketComponent component: museumName, address, date, time, ticketCount, and ticketCode.
// The TicketComponent component will display a ticket with the museum name, address, date, time, ticket count, and ticket code.
// The ticket will also have a QR code that represents the ticket code. The ticket will be displayed in a Card component with a CardContent and CardFooter.
// The CardFooter will have a Button component that will allow the user to download the ticket as a PDF.
// The TicketComponent component will be used in the Home component to display the ticket.
// Format of the TicketComponent component: <TicketComponent museumName="Delhi Museum" address="New Delhi" date="26 Aug, 2004" ticketCode="b4h54h4" ticketCount={4} time="13:33" />
// download ticket is not working!

interface TicketProps {
  museumId: string;
  museumName: string;
  address: string;
  date: Date;
  time: TimerHandler;
  ticketCount: number;
  ticketCode: string;
  paymentId?: string;
}

export default function TicketComponent({
  museumName,
  address,
  date,
  time,
  ticketCount,
  ticketCode,
}: TicketProps) {
  const { toPDF, targetRef } = usePDF({ filename: "ticket.pdf" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" ref={targetRef}>
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start mb-4">
            <div className="w-1/3 mr-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Museum"
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">{museumName}</h2>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg">{`${date} | ${time}`}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl font-bold">{ticketCount}</div>
            <div className="text-lg">Ticket{ticketCount > 1 ? "s" : ""}</div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              TICKET BOOKED
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Congrats! Coupons Unlocked
            </h3>
            <p className="text-sm mb-2">
              Grab discounts from restaurants nearby.
            </p>
            <Button variant="outline" className="text-blue-600">
              Select Coupons
            </Button>
          </div>
          <div className="flex justify-center mb-4">
            <QRCodeSVG value={ticketCode} size={128} />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{ticketCode}</p>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <Button onClick={() => toPDF()} className="w-full">
            Download Ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
