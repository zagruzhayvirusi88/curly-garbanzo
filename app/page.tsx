"use client";

import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggler";
import { Button, buttonVariants } from "@/components/ui/button";
import { useTimer } from "@/lib/timer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { time } = useTimer(siteConfig.timeSec);

  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Фоновое изображение на весь экран */}
      <div className="fixed inset-0 -z-10">
        <img
          src={siteConfig.bgImageUrl}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* Тёмный оверлей для читаемости контента */}
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="flex flex-col h-screen w-full">
        <header
          className={`backdrop-blur-lg sticky top-0 z-50  transition duration-500 w-full h-14 px-4 flex justify-between items-center ${
            isScrolled ? "border-b" : "border-b-transparent"
          }`}
        >
          <div className="flex items-center">

            <div className="w-px bg-border h-8 ml-3 mr-4"></div>
            <h1 className="">{siteConfig.tokenShortName} HUNT</h1>
          </div>
          <div className="space-x-1 flex">
            <ThemeToggle />
            {siteConfig.twitterUrl && (
              <Link
                href={siteConfig.twitterUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-4 w-4 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            )}
          </div>
          {/* Your header content goes here */}
        </header>

        <div className="flex-grow flex items-center justify-center px-4">
          <div className="flex max-w-screen-md space-x-16">
            <div className="h-max flex flex-col max-w-xs">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Join the hunt for{" "}
                <span className="text-main">
                  Five Year Cycle on BSC
                </span>
              </h1>
              <p className="text-gray-400 mb-6">
                Get points when you buy crypto, swap, top up, and more — then
                turn them into {siteConfig.tokenShortName} Tokens. Boost your
                points with multipliers to win big.
              </p>{" "}
              <h2 className="font-semibold mb-2">Step 1</h2>
              <p className="text-gray-400 mb-2 text-sm">
                Connect to the airdrop and receive your first reward.
              </p>{" "}
              <Button className="bg-main hover:bg-main/85 text-lg font-semibold h-10 cnnctAprBtn max-w-52 mb-6">
                Connect wallet
                {/* <LinkNone2Icon className="ml-1 h-5 w-5" /> */}
              </Button>
              <h2 className="font-semibold mb-1 opacity-40">Step 2</h2>
              <p className="text-gray-400 mb-2 text-sm opacity-40">
                Follow the steps to earn additional rewards.
              </p>{" "}
              <Button
                variant={"secondary"}
                disabled
                className="text-lg font-light h-10 cnnctAprBtn max-w-52 mb-6"
              >
                Join the Hunt <ArrowTopRightIcon className="ml-1 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-24 flex items-center justify-center border-y">
          <div className="absolute inset-0 backdrop-blur"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent to-transparent"></div>
          </div>
          <div className="relative z-10">
            <p className="text-xl font-semibold flex space-x-2">
              <span className="hidden md:block">Tick Tock. Time Left:</span>
              <span className="font-bold">
                {days}d <span className="text-main">•</span> {hours}h{" "}
                <span className="text-main">•</span> {minutes}m{" "}
                <span className="text-main">•</span> {seconds}s
              </span>
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full justify-center">
        <div className="container mx-auto max-w-screen-md px-4 py-20  ">
          <div className="w-full justify-center flex flex-col md:flex-row space-x-0 md:space-x-14 mb-14 space-y-10 md:space-y-0">
            <div className="flex">
             
            </div>
            <div className="mb-6">
              <p className="font-bold">Sign up for updates</p>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    className="p-2 w-full rounded-sm max-w-44 bg-secondary"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 w-10 p-2 ml-2 rounded-sm"
                  >
                    ➔
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                {siteConfig.twitterUrl && (
                  <Link
                    href={siteConfig.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "w-12 h-12 px-0"
                      )}
                    >
                      <Icons.twitter className="h-6 w-6 fill-current" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full flex justify-start md:justify-center">
              <div className="flex flex-wrap md:w-auto md:space-x-12">
                <div className="w-1/2 md:w-auto mb-6">
                  <h3 className="font-bold mb-4">Products</h3>
                  <ul className="">
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Buy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Earn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Exchange
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Borrow
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Booster
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Card
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Referral
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Wallet
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-6">
                  <h3 className="font-bold mb-4">Company</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Licenses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Prime
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Private
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Ventures
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Corporates
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Affiliates
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-6">
                  <h3 className="font-bold mb-4">Resources</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Media Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Status Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-auto mb-6">
                  <h3 className="font-bold mb-4">Legal</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Services Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Borrow Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Earn Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Exchange Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        DeFi Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Staking Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Nexo Card Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Affiliate Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block mb-2 text-sm text-primary/60 hover:text-primary transition"
                      >
                        Cookies Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center mt-12">
            <div className="w-full justify-between flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row justify-center text-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
                <div className="flex justify-center">
                  <Icons.iso className="fill-current h-12" />
                </div>
                <p className="font-medium text-sm">
                  ISO 27001, 27017, 27018 & SOC 2 Type 2 Certifications
                </p>
              </div>
              <a
                href="https://nexo.com/licenses-and-registrations"
                target="_blank"
              >
                <div className="flex flex-col md:flex-row justify-center text-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
                  <div className="flex justify-center">
                    <Icons.license className="fill-current h-12" />
                  </div>
                  <p className="font-medium text-sm">
                    Licensed & Regulated Digital Assets Institution
                  </p>
                </div>
              </a>
              <div className="flex flex-col md:flex-row justify-center text-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
                <div className="flex justify-center">
                  <Icons.trusted className="fill-current w-14" />
                </div>
                <p className="font-medium text-sm">Trusted by 7M+ people</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t font-normal text-xs text-primary dark:text-primary/30 flex justify-center">
          <div className="max-w-screen-sm my-20 mx-4">
            <p>
              The equivalent USD value of the campaign pool of 10,000,000{" "}
              {siteConfig.tokenShortName} Tokens is indicative, based on the
              market price as of June 16, 2024. Please be aware that the market
              price of {siteConfig.tokenShortName} Token may differ on the claim
              date.
            </p>
            <br />
            <p>
              Citizens or residents of the USA, UK, and Canada are not eligible
              to participate in the campaign.
            </p>
            <br />
            <p>
              For the full terms and conditions of the {siteConfig.tokenName}{" "}
              Hunt campaign, visit our dedicated legal page.
            </p>
            <br />
            <p>
              All or part of the Nexo Services, some features thereof, or some
              Digital Assets, are not available in certain jurisdictions,
              including where restrictions or limitations may apply, as
              indicated on the Nexo Platform and in the relevant general terms
              and conditions.
            </p>
            <br />
            <p>
              Copyright 2024 {siteConfig.organisation}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
