"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "@/public/icons/MailIcon.jsx";
import { LockIcon } from "@/public/icons/LockIcon.jsx";
import { useAuth } from "@/app/AuthContext";

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const Register: React.FC<SignUpProps> = ({ isOpen, onClose }) => {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNo: "",
    DOB: "",
    Password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.Password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    register(
      formData.Name,
      formData.Email,
      Number(formData.PhoneNo),
      new Date(formData.DOB),
      formData.Password
    );
    onClose(); // Close the modal after signing up
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSignUp}>
              <Input
                autoFocus
                name="name"
                // value={formData.Name}
                onChange={handleChange}
                label="Name"
                placeholder="Name"
                variant="bordered"
                type="text"
                description={"Enter you name as per your official documents"}
              />
              <Input
                name="firstName"
                // value={formData.Email}
                onChange={handleChange}
                label="Email"
                placeholder="Enter your Email"
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                variant="bordered"
              />
              <Input
                name="lastName"
                // value={formData.PhoneNo.toString()}
                onChange={handleChange}
                label="Phone Number"
                type="number"
                placeholder="Enter your Phone Number"
                variant="bordered"
              />
              <Input
                name="email"
                // value={formData.DOB.toString()}
                onChange={handleChange}
                label="DOB"
                type="date"
                placeholder="Enter your Date of Birth"
                variant="bordered"
              />
              <Input
                name="password"
                // value={formData.Password}
                onChange={handleChange}
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />
              <Input
                name="confirmPassword"
                // value={formData.confirmPassword}
                onChange={handleChange}
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                variant="bordered"
              />
              <div className="flex py-2 px-1 justify-between">
                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Remember me
                </Checkbox>
              </div>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Sign Up
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default Register;
