"use client";
import { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image1 from "../../public/latest-articles/1.png";
import Image2 from "../../public/latest-articles/2.png";
import Image3 from "../../public/latest-articles/3.png";
import Image4 from "../../public/latest-articles/4.png";
import Image5 from "../../public/latest-articles/5.png";
import Image6 from "../../public/latest-articles/6.png";

import Button from "../ui/Button";
import clsx from "clsx";

interface ArticleData {
  imageurl: StaticImageData;
  title: string;
  desc: string;
}

const useGetData = ({
  perPage = 3,
  currentPage = 1,
}: {
  perPage?: number;
  currentPage?: number;
}) => {
  const totalArticles = 6;
  const [data, setData] = useState<ArticleData[]>([]);
  const totalPage = Math.ceil(totalArticles / perPage);

  const Alldata = useMemo(() => {
    return [
      {
        imageurl: Image1,
        title: "Grilled  Tomatoes at Home",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Image2,
        title: "Snacks for Travel",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Image3,
        title: "Post-workout Recipes",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Image4,
        title: "How To Grill Corn",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Image5,
        title: "Crunchwrap Supreme",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Image6,
        title: "Broccoli Cheese Soup",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
    ];
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    setData(Alldata.slice(start, end));
  }, [perPage, currentPage, Alldata]);

  return {
    data,
    totalPage,
  };
};

const ArticleCard = ({ imageurl, title, desc }: ArticleData) => {
  return (
    <div className="p-6 border border-[#93A2D361] rounded-2xl flex flex-col gap-6 items-center lg:items-start">
      <Image src={imageurl} alt={title} />
      <h3 className="text-lg lg:text-xl font-bold text-[#0E2368] mt-4 font-poppins">{title}</h3>
      <p className="text-[#444957] leading-6 text-sm lg:text-base text-center lg:text-left tracking-tight">
        {desc}
      </p>
      <Button
        label="Read More"
        onClick={() => console.log("Learn More")}
        outline
        className="px-12 text-xs lg:text-sm"
      />
    </div>
  );
};

export default function LatestArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, totalPage } = useGetData({ perPage: 3, currentPage });

  return (
    <main className="py-16 lg:py-32 px-8 lg:px-32 flex flex-col items-center lg:items-start">
      <h1 className="font-sourceSans3 text-3x font-semibold lg:text-5xl text-[#0E2368]">
        Latest Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-2 mt-4 lg:mt-12 lg:mx-auto lg:text-xl">

        <ChevronLeft
          size={24}
          className={clsx([
            "cursor-pointer border rounded-md p-1",
            currentPage === 1 && "text-gray-300",
          ])}
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        />

        <div className="flex flex-row items-center">
          <span className="">{currentPage}</span>
          <span className="text-lg mx-2">/</span>
          <span className="">{totalPage}</span>
        </div>

        <ChevronRight
          size={24}
          className={clsx([
            "cursor-pointer border rounded-md p-1",
            currentPage === totalPage && "text-gray-300",
          ])}
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev))
          }
        />
      </div>
    </main>
  );
}
