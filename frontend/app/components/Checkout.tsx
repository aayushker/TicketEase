"use client";
import { useState } from "react";
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
import { Trash2, Plus } from "lucide-react";

export function CheckoutPage() {
  const [companions, setCompanions] = useState<{ name: string; age: string }[]>(
    [{ name: "", age: "" }]
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCompanionChange = (
    index: number,
    field: keyof (typeof companions)[0],
    value: string
  ) => {
    const newCompanions = [...companions];
    newCompanions[index][field] = value;
    setCompanions(newCompanions);
  };

  const addCompanion = () => {
    setCompanions([...companions, { name: "", age: "" }]);
  };

  const removeCompanion = (index: number) => {
    const newCompanions = companions.filter((_, i) => i !== index);
    setCompanions(newCompanions);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // logic to send form data to backend
    console.log("Form Data:", { ...formData, companions });
    // forward to payment gateway
    alert("Forwarding to Razorpay payment gateway...");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Checkout - Museum Ticket Booking
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Visit Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time">Visit Time</Label>
                <Select
                  name="time"
                  onValueChange={(value) =>
                    handleInputChange({ target: { name: "time", value } })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
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

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Companions
                </h3>
                <Button
                  type="button"
                  onClick={addCompanion}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Companion
                </Button>
              </div>
              {companions.map((companion, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Input
                    placeholder="Companion Name"
                    value={companion.name}
                    onChange={(e) =>
                      handleCompanionChange(index, "name", e.target.value)
                    }
                    required
                  />
                  <Input
                    placeholder="Age"
                    type="number"
                    value={companion.age}
                    onChange={(e) =>
                      handleCompanionChange(index, "age", e.target.value)
                    }
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => removeCompanion(index)}
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button type="submit" className="w-full">
                Proceed to Payment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
