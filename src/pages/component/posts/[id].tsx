import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { PostState } from "../features/Postdata";
import Noperson from "../../../../public/noperson.png";
import Image from "next/image";
const PostContent = ({ post }: any) => {
  return (
    <div>
      <div className="border border-gray-300">
        {post.map((post: any) => (
          <div className="border border-gray-300 m-9 rounded-3xl" key={post.postid}>
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
              <h1 className="text-3xl">{post.title}</h1>
              <div className="text-3xl mr-4">
                {/* <Timeago time={post.timestamps} /> */}
              </div>
            </div>
            <div className="flex justify-center text-2xl">
              <p className="mr-5">開催地:{post.place}</p>
              <p>試合結果:{post.resultScore}</p>
              <p>{post.result}</p>
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
              <p>{post.desc}</p>
            </div>
            <div className="">
              {post.TimeSeparator.map((post: any, index: number) => (
                <div className="text-4xl p-2" key={index}>
                  <div className="flex">
                    <p className="">{index + 1}</p>
                    <h1 className="">{post.title}</h1>
                  </div>
                  <div className="mt-3">
                    <p>{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContent;

export async function getStaticProps({ params }: { params: { id: string } }) {
  const state: any[] = [];
  const dataFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const postData = querySnapshot.docs.map((doc) => doc.data());
    state.push(...postData);
  };
  await dataFetch();
  const filteredPosts = state.filter((post: any) => post.postid === params.id);
  return {
    props: {
      post: filteredPosts,
    },
  };
}

export const getStaticPaths = async () => {
  const state: any[] = [];
  const dataFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const postData = querySnapshot.docs.map((doc) => doc.data());
    state.push(...postData);
  };
  await dataFetch();
  console.log(state);
  const paths = state.map((post: PostState) => {
    return { params: { id: `${post.postid}` } };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};
