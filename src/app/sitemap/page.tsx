import BackButton from "@/components/BackButton/BackButton";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"

const Sitemap = () => {
  return (
    <div className=" mt-32 mx-4 md:mx-12 lg:mx-24">
    <div className="flex flex-col md:flex-row md:items-center">
      <BackButton />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="font-extrabold text-4xl">Sitemap</h1>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16 mt-8">
        <Accordion className="md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Service Pages</AccordionTrigger>
            <AccordionContent>
              <a href="#">General</a>
            </AccordionContent>
            <AccordionContent>Additional</AccordionContent>
            <AccordionContent>Data Entry</AccordionContent>
            <AccordionContent>Data Science</AccordionContent>
            <AccordionContent>Finance</AccordionContent>
            <AccordionContent>Industries</AccordionContent>
            <AccordionContent>Photo Editing</AccordionContent>
            <AccordionContent>Video Editing</AccordionContent>
            <AccordionContent>Research Analysis</AccordionContent>
            <AccordionContent>
              Software Development Technologies
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>General Pages</AccordionTrigger>
            <AccordionContent><Link href="/">Home</Link></AccordionContent>
            <AccordionContent>Industries</AccordionContent>
            <AccordionContent>About Canals</AccordionContent>
            <AccordionContent>All Our Services</AccordionContent>
            <AccordionContent>Canals Advantage</AccordionContent>
            <AccordionContent>General Links</AccordionContent>
            <AccordionContent>Careers</AccordionContent>
            <AccordionContent>Resources</AccordionContent>
            <AccordionContent>Infographics</AccordionContent>
            <AccordionContent>Customer Video Testimonials</AccordionContent>
            <AccordionContent>Videos</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Home</AccordionTrigger>
            <AccordionContent><Link href="/">Canals Solutions - Home</Link></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16 lg:mt-8 md:mt-8">
        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>About Canals Solutions</AccordionTrigger>
            <AccordionContent>About Us</AccordionContent>
            <AccordionContent>The Flatworld Story</AccordionContent>
            <AccordionContent>Flatworld Solutions 2.0</AccordionContent>
            <AccordionContent>Our Management Team</AccordionContent>
            <AccordionContent>Advisory Team</AccordionContent>
            <AccordionContent>Board of Directors</AccordionContent>
            <AccordionContent>Our Global Delivery Network</AccordionContent>
            <AccordionContent>Our Transition Process</AccordionContent>
            <AccordionContent>Our Recruitment Process</AccordionContent>
            <AccordionContent>Our Work Culture</AccordionContent>
            <AccordionContent>Our Social Initiatives</AccordionContent>
            <AccordionContent>Flatworld's CEO Talks</AccordionContent>
            <AccordionContent>Annual Meet</AccordionContent>
            <AccordionContent>Home of Hope</AccordionContent>
            <AccordionContent>
              Great Place to Work Certification
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Canals Solutions Advantages</AccordionTrigger>
            <AccordionContent>Client Testimonials</AccordionContent>
            <AccordionContent>Client Video Testimonials</AccordionContent>
            <AccordionContent>Security & Confidentiality</AccordionContent>
            <AccordionContent>Infrastructure</AccordionContent>
            <AccordionContent>Pricing</AccordionContent>
            <AccordionContent>Customers</AccordionContent>
            <AccordionContent>Outsourcing Services for USA</AccordionContent>
            <AccordionContent>
              Outsourcing Services for Arizona
            </AccordionContent>
            <AccordionContent>
              Outsourcing Services for Atlanta
            </AccordionContent>
            <AccordionContent>Outsourcing Services for Dallas</AccordionContent>
            <AccordionContent>
              Outsourcing Services for Houston
            </AccordionContent>
            <AccordionContent>
              Outsourcing Services for Los Angeles
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Careers</AccordionTrigger>
            <AccordionContent>Content Writer</AccordionContent>
            <AccordionContent>Sr. Email Marketing Executive</AccordionContent>
            <AccordionContent>AR Caller</AccordionContent>
            <AccordionContent>Patient Care Coordinator</AccordionContent>
            <AccordionContent>Jr .Net Developer</AccordionContent>
            <AccordionContent>Business Development Executive</AccordionContent>
            <AccordionContent>JAVA Developer/ JAVA Lead</AccordionContent>
            <AccordionContent>Android DeveloperiOS Developer</AccordionContent>
            <AccordionContent>Lead</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16 lg:mt-8 md:mt-8">
        <Accordion className="w-full md:w-1/3 lg:w-1/4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Infographics</AccordionTrigger>
            <AccordionContent>
              Infographic - Are Chatbots a Good Idea for your Business?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sitemap;
