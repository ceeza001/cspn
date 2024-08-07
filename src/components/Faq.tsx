"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Faq = () => {
  return (
    <div className="md:p-[4rem]">
      <div className="p-[1rem] mb-4 flex flex-col items-start space-y-4">
        <span className="w-fit font-thin text-[13px] rounded-lg p-[0.5rem] glassmorphism text-primary">
          FAQ
        </span>
        <h1 className="text-white text-4xl md:text-[40px] font-bold mt-1 leading-none">
          Frequently asked questions
        </h1>
        <p>
          Frequently Asked Questions about CSPN Tap Game V1.0
        </p>
      </div>
      
      <div className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={faq}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const faq = [
    {
      "question": "What is blockchain technology?",
      "answer": "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers in a way that ensures security, transparency, and immutability."
    },
    {
      "question": "What is Bitcoin?",
      "answer": "Bitcoin is the first decentralized cryptocurrency, created in 2009 by an unknown person or group of people using the pseudonym Satoshi Nakamoto."
    },
    {
      "question": "Who created Bitcoin?",
      "answer": "Bitcoin was created by an anonymous person or group of people known as Satoshi Nakamoto."
    },
    {
      "question": "What is cryptocurrency?",
      "answer": "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security and operates independently of a central authority."
    },
    {
      "question": "How does cryptocurrency wallet work?",
      "answer": "A cryptocurrency wallet stores private and public keys and interacts with various blockchains to enable users to send and receive digital currency and monitor their balance."
    },
    {
      "question": "How to create cryptocurrency wallet?",
      "answer": "To create a cryptocurrency wallet, you can use software wallets (like apps or desktop programs), hardware wallets (physical devices), or online wallets provided by exchanges and other services."
    }
  ]
export default Faq;