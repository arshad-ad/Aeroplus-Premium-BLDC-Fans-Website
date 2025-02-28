"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function Features() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 font-poppins">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-light text-white dark:text-neutral-200 opacity-70 ">
        Why BLDC
      </h2>
      <Carousel items={<>{cards}</>}  />
    </div>
  );
}

const DummyContent = ({title,description,imageSrc}:{title:string;description:string;imageSrc:string}) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {title}
              </span>{" "}
              {description}
            </p>
            <Image
              src={imageSrc}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "AI-powered device on desk",
    src: "/images/whyusAI-powered.jpg",
    content: (
      <DummyContent
        title="AI-powered device on desk"
        description="Experience cutting-edge automation with our AI-powered device, designed to enhance efficiency and decision-making. Whether analyzing data, automating tasks, or providing smart recommendations, this device brings intelligence to your workspace."
        imageSrc="/images/whyusAI-powered.jpg"
      />
    ),
  },
  {
    category: "Productivity",
    title: "Innovation technology abstract background",
    src: "/images/whyusinovation.jpg",
    content: (
      <DummyContent
        title="Innovation technology"
        description="Embrace the future of productivity with innovative technology. Our latest advancements bring efficiency and automation to your workflow, ensuring you stay ahead in an ever-evolving landscape."
        imageSrc="/images/whyusinovation.jpg"
      />
    ),
  },
  {
    category: "Product",
    title: "Smart remote control in hand",
    src: "/images/whyusRemote control.jpg",
    content: (
      <DummyContent
        title="Smart remote control"
        description="Enhance convenience with our smart remote control, offering intuitive user interactions and seamless integration with your home automation system."
        imageSrc="/images/whyusRemote control.jpg"
      />
    ),
  },
  {
    category: "Product",
    title: "User-friendly technology concept",
    src: "/images/whyusUser-friendly.jpg",
    content: (
      <DummyContent
        title="User-friendly technology"
        description="Our technology is designed with simplicity in mind, ensuring ease of use for everyone while maintaining powerful capabilities."
        imageSrc="/images/whyusUser-friendly.jpg"
      />
    ),
  },
  {
    category: "Cleaning",
    title: "Anti-Dust and Anti-Bacterial Coating",
    src: "/images/whyusEasyclean.jpg",
    content: (
      <DummyContent
        title="Anti-Dust & Anti-Bacterial Coating"
        description="Stay protected with our advanced coating technology, preventing dust buildup and eliminating bacteria for a cleaner environment."
        imageSrc="/images/whyusEasyclean.jpg"
      />
    ),
  },
  {
    category: "Tasks",
    title: "Air Purification System",
    src: "/images/hero1.jpg",
    content: (
      <DummyContent
        title="Air Purification System"
        description="Breathe fresh air with our cutting-edge purification system, designed to remove allergens, pollutants, and harmful bacteria from your surroundings."
        imageSrc="/images/hero1.jpg"
      />
    ),
  },
];
