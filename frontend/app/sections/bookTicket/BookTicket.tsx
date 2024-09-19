"use client";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Calendar } from "@/app/components/ui/calendar";
import { format } from "date-fns";
import { Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { toast } from "@/app/components/hooks/use-toast";
import { Ticket } from "@/app/types/Ticket";

export default function BookPage() {
  const [museums, setMuseums] = useState([]);
  const [formData, setFormData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateSelect = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
      day: format(date, "EEEE"),
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to book ticket");
      }
      const data = await response.json();
      console.log("Booking successful:", data);
      toast({
        title: "Success",
        description: "Your ticket has been booked successfully!",
      });
      // Handle successful booking (e.g., redirect to confirmation page)
    } catch (error) {
      console.error("Error booking ticket:", error);
      toast({
        title: "Error",
        description: "Failed to book ticket. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">
            Book Your Museum Adventure
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Explore history and art with just a few clicks!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="museumName">Select Museum</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("museumName", value)
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a museum" />
                  </SelectTrigger>
                  <SelectContent>
                    {museums.map((museum, index) => (
                      <SelectItem key={index} value={museum.Name}>
                        {museum.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select
                  onValueChange={(value) => handleInputChange("time", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="13:00">01:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? (
                      format(formData.date, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? "Booking..." : "Book Now"}
          </Button>
        </CardFooter>
      </Card>
      {formData.museumName && (
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" />
                <span>{formData.museumName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-primary" />
                <span>{formData.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="text-primary" />
                <span>
                  {formData.date
                    ? format(formData.date, "PPP")
                    : "Not selected"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
