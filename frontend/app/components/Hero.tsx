"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Send,
} from "lucide-react";

const carouselImages = [
  "/images/heroImage1.jpeg",
  "/images/heroImage2.jpeg",
  "/images/heroImage3.jpeg",
];

const carouselTexts = [
  "Discover Art Through Time",
  "Immerse in History",
  "Book Your Cultural Journey",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Welcome to TicketEase! How can I assist you with your museum ticket booking today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatEndRef = useRef(null);

  const handleSendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isBot: false }]);
      setInputMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thank you for your message. Our team will get back to you shortly.",
            isBot: true,
          },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) =>
  //       (prevSlide - 1 + carouselImages.length) % carouselImages.length
  //   );
  // };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md"></header>

      <main className="flex-grow">
        <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 transform translate-y-0">
                    {carouselTexts[index]}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 transition-all duration-500 delay-100 transform translate-y-0">
                    Experience the world's finest art and history
                  </p>
                  <Button size="lg" className="animate-bounce">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button> */}
        </section>
      </main>

      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-4 right-4 bg-black text-white rounded-full p-4 shadow-lg transition-all duration-300 ${
          isChatOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      <div
        className={`fixed bottom-4 right-4 w-80 md:w-96 bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isChatOpen ? "scale-100" : "scale-0"
        }`}
      >
        <div className="flex justify-between items-center bg-black bg-opacity-80 text-white p-4 rounded-t-lg">
          <h3 className="font-semibold">TicketEase Chat</h3>
          <button onClick={() => setIsChatOpen(false)} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  message.isBot ? "bg-gray-100" : "bg-primary text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
