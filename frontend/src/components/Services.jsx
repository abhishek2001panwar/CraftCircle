import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Services = () => {
  return (
    <>
     <h1 className="text-4xl font-['bellota'] font-light text-center mt-10 mb-10">
  Our Services
</h1>
<div className="container mx-auto px-16 md:px-32">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Job Listings</small>
        <h4 className="font-bold text-large">Browse Jobs</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/92244717/photo/united-team.jpg?s=612x612&w=0&k=20&c=GMFBVr9HFTyDUrJfSs5OVK9KTsz1wP8rqshmCVPdS74="
          width={360}
        />
      </CardBody>
    </Card>
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Resume Building</small>
        <h4 className="font-bold text-large">Create Resume</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1337045113/photo/four-3d-men-standing-on-a-jigsaw-with-hands-in-hands.jpg?s=612x612&w=0&k=20&c=8w3tAv87E90A9j6G-7RiRDBVk1jxz4Bs5kq3mdGrzFQ="
          width={360}
        />
      </CardBody>
    </Card>
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Job Alerts</small>
        <h4 className="font-bold text-large">Get Notifications</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/92244717/photo/united-team.jpg?s=612x612&w=0&k=20&c=GMFBVr9HFTyDUrJfSs5OVK9KTsz1wP8rqshmCVPdS74="
          width={360}
        />
      </CardBody>
    </Card>
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Company Profiles</small>
        <h4 className="font-bold text-large">Explore Employers</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1337045113/photo/four-3d-men-standing-on-a-jigsaw-with-hands-in-hands.jpg?s=612x612&w=0&k=20&c=8w3tAv87E90A9j6G-7RiRDBVk1jxz4Bs5kq3mdGrzFQ="
          width={360}
        />
      </CardBody>
    </Card>
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Career Advice</small>
        <h4 className="font-bold text-large">Get Guidance</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/92244717/photo/united-team.jpg?s=612x612&w=0&k=20&c=GMFBVr9HFTyDUrJfSs5OVK9KTsz1wP8rqshmCVPdS74="
          width={360}
        />
      </CardBody>
    </Card>
    <Card className="w-full p-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Service</p>
        <small className="text-default-500">Interview Prep</small>
        <h4 className="font-bold text-large">Prepare for Interviews</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1337045113/photo/four-3d-men-standing-on-a-jigsaw-with-hands-in-hands.jpg?s=612x612&w=0&k=20&c=8w3tAv87E90A9j6G-7RiRDBVk1jxz4Bs5kq3mdGrzFQ="
          width={360}
        />
      </CardBody>
    </Card>
    {/* Add more cards here */}
  </div>
</div>

    </>
  );
};

export default Services;
