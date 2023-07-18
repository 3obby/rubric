import { ContactButton, Header } from "ui";
import { Metadata } from "next";
import Image from "next/image";
import Constants from "../utils/constants";
import { getHomePageCopy } from "../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const metadata: Metadata = {
  title: Constants.META.title,
  description: Constants.META.desc,
  openGraph: {
    title: Constants.META.title,
    description: Constants.META.desc,
  },
  twitter: {
    title: Constants.META.title,
    description: Constants.META.desc,
    card: "summary_large_image",
    creator: Constants.META.twitter,
  },
};

const team = [
  { name: "Dexter", src: "dexter.jpeg", desc: "The Creative" },
  { name: "Sarim", src: "sarim.jpg", desc: "The Planner" },
  { name: "Ted", src: "ted.jpeg", desc: "The Doer" },
];

export default async function Home() {
  const copy = await getHomePageCopy();
  return (
    <div className="flex flex-col">
      {/* Section: Hero */}
      <div className="flex min-h-screen justify-end flex-col gap-3 pb-5 max-w-3xl">
        <Header text={copy[0].hero.title} />
        <p className="text-3xl sm:text-6xl md:text-6xl font-extralight">
          {copy[0].hero.subtitle}
        </p>
      </div>

      {/* Section */}
      <div className="flex min-h-screen items-end justify-end pb-5 flex-col gap-3">
        <div className="flex flex-col max-w-xl gap-10">
          {/* Team */}
          <div className="flex justify-between">
            {team.map((member) => (
              <div
                key={member.name}
                className="w-20 h-20 sm:w-40 sm:h-40 relative group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/${member.src}`}
                    alt={`${member.name}'s picture`}
                    fill
                    className="rounded-full grayscale group-hover:blur-sm"
                  />
                </div>
                <p className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                  <span className="text-sm text-gray-100">{member.name}</span>{" "}
                  <span className="text-xs text-gray-300">{member.desc}</span>
                </p>
              </div>
            ))}
          </div>

          {/* What we do */}
          <div className="flex flex-col gap-3 font-light text-xl">
            <PortableText value={copy[0].desc} />
          </div>

          <div className="flex justify-end">
            <ContactButton body="hello@rubriclab.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
