import Image from "next/image";
import Link from "next/link";
import React from "react";
import Noperson from "../../../public/noperson.png";
import TestImg from "../../../public/testImage.jpeg";
const PostTemplate = ({ post }: any) => {
  return (
    <div>
      <div className="border border-gray-300 m-9 rounded-3xl">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <Image
              priority
              src={post.postedImg !== "" ? post.postedImg : Noperson}
              alt={post.postedImg !== "" ? "" : "nopersson"}
              width={64}
              height={64}
              className="rounded-full w-16 h-16"
            />
            <p className="text-3xl font-light ml-4 ">{post.postedUser}</p>
          </div>
          <Link href={`/component/posts/${post.postid}`}>
            <h1 className="text-3xl">{post.title}</h1>
          </Link>
          <div className="text-3xl mr-4">
            {/* <Timeago time={post.timestamps} /> */}
          </div>
        </div>
        <div className="flex justify-center text-2xl">
          <p className="mr-5">開催地:味の素スタジアム</p>
          <p>試合結果:0-1</p>
          <p className="ml-5">{post.weather}</p>
        </div>
        <div className="flex ml-12">
          {post.slug.map((slug: string,index:number) => (
            <p className="text-white text-2xl bg-gray-700 rounded-lg w-20 overflow-hidden px-2 py-1 ml-2" key={index}>
              {slug}
            </p>
          ))}
        </div>
        <div className="m-5">
          <Image src={TestImg} alt={""} className="mx-auto mb-4 rounded-sm" />
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostTemplate;
