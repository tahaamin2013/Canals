import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import MailButton from "../MailButton/MailButton";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const toast = useToast({
    duration: 3000, // Set the duration for how long the toast will be displayed
    isClosable: true, // Allow the user to close the toast manually
  });

  const triggerEmail = async (data) => {
    await emailjs
      .send("service_jwix75m", "template_c4eytxg", data, "w8JGFlRvfl2SekBl7")
      .then((success) => {
        toast({
          title: "Email Sent Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        // Clear form fields after successful email send
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const errors = {};

    if (!name) {
      errors.name = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!subject) {
      errors.subject = true;
    }
    if (!message) {
      errors.message = true;
    }

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      triggerEmail(formData);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isSent, setIsSent] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
    router.refresh();
  };
  return (
    <div className="lg:flex-row pb-0 md:flex lg:mx-16 md:mt-20 sm:flex-col sm:gap-4 xs:gap-4 border p-6 bg-white rounded-md shadow-md">
      <div className="bg-[#2bb818] mb-6 pr-0 pb-0 p-10 text-[white] h-fit rounded-2xl">
        <Heading as="h1" fontWeight="semibold" fontSize="2xl">
          Contact Information
        </Heading>
        <Text mt={2} w="80">
          We'll create high-quality linkable content and build at least 40
          high-authority.
        </Text>
        <div className="flex flex-col gap-10 mt-9">
          <div className="flex">
            <Phone /> <span className="ml-5">03074241757</span>
          </div>
          <div className="flex">
            <Mail /> <span className="ml-5">tahaamindob2013@gmail.com</span>
          </div>
          <div className="flex">
            <MapPin />
            <span className="ml-5 mr-9">
              Pakistan, Bahria Town, Rawalpindi,awami vilas 6
            </span>
          </div>
        </div>
        <div className="flex justify-end relative overflow-hidden">
          <div className="flex h-[15rem] w-[16rem] rounded-full relative left-14 top-12 bg-gradient-to-r from-white rotate-45" />
        </div>
      </div>

      <form
        onSubmit={onFormSubmit}
        className="lg:w-[50%] md:w-[50%] sm:w-full sm:mt-4 lg:ml-9 md:ml-9 sm:ml-0 space-y-6"
        action="#"
      >
        <div className="flex flex-row gap-6">
          <FormControl isRequired isInvalid={formErrors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            {formErrors.name && <FormErrorMessage>Required</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={formErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              errorBorderColor="red.300"
              placeholder="Email"
            />
            {formErrors.email && <FormErrorMessage>Required</FormErrorMessage>}
          </FormControl>
        </div>

        <FormControl isRequired isInvalid={formErrors.subject}>
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            errorBorderColor="red.300"
            placeholder="Subject"
          />
          {formErrors.subject && <FormErrorMessage>Required</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={formErrors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            a
            value={formData.message}
            onChange={handleInputChange}
            errorBorderColor="red.300"
            placeholder="Message..."
            resize="vertical"
            rows={10}
          />
          {formErrors.message && <FormErrorMessage>Required</FormErrorMessage>}
        </FormControl>

        <button type="submit">
          <div id="content">
            <div
              id="envelope-wrapper"
              className={`${isSent ? "sent" : ""}`}
              onClick={handleClick}
            >
              <div id="envelope">
                <div id="envelope-inside"></div>
                <div id="envelope-body">
                  <div id="left-half"></div>
                  <div id="right-half"></div>
                </div>
                <div id="envelope-top"></div>
                <div id="letter"></div>
              </div>
              <div className="btn-overlay font-sans  font-bold text-white absolute inset-0 flex justify-center items-center z-10">
                Send Message
              </div>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
