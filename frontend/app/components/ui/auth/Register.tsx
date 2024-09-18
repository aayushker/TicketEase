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
import { Register as RegisterType } from "@/app/types/Auth";
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
    PhoneNo: 0,
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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.Password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const registerData: RegisterType = {
      Name: formData.Name,
      Email: formData.Email,
      PhoneNo: formData.PhoneNo,
      DOB: formData.DOB,
      Password: formData.Password,
    };
    try {
      await register(registerData);
      onClose();
    } catch (error) {
      console.log("Register failed", error);
    }
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
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                label="Name"
                placeholder="Name"
                variant="bordered"
                type="text"
                description={"Enter your name as per your official documents"}
              />
              <Input
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                label="Email"
                placeholder="Enter your Email"
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                variant="bordered"
              />
              <Input
                name="PhoneNo"
                value={formData.PhoneNo.toString()}
                onChange={handleChange}
                label="Phone Number"
                type="number"
                placeholder="Enter your Phone Number"
                variant="bordered"
              />
              <Input
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                label="DOB"
                type="date"
                placeholder="Enter your Date of Birth"
                variant="bordered"
              />
              <Input
                name="Password"
                value={formData.Password}
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
                value={formData.confirmPassword}
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