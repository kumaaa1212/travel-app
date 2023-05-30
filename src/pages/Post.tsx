import React from "react";
import { motion } from "framer-motion";
import Album from "./Album";
interface Props {
  text: String;
}
const MotionSpan = {
  intial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const MotionH1 = {
  intial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Anitation = ({ text }: Props) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full font-bold capitalize text-8xl`}
        variants={MotionH1}
        initial="intial"
        animate="animate"
      >
        {text.split(" ").map((word: string, index: number) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={MotionSpan}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
const Post = () => {
  return (
    <div className="mt-10 min-h-screen">
      <div className="text-8xl text-center">
        <Anitation text=" Let's go on a trip!" />
      </div>
      <ul className="text-2xl text-center mb-10 mt-10">
        <li>ここであなたは旅のアルバムを作ることができます。</li>
        <li>最初に旅行のタイトル、詳細を設定します。</li>
        <li>その後、時間・場所ごとにノートを増やしていきましょう</li>
        <li>投稿前に、必ずそれぞれのノートを保存してください</li>
      </ul>
      <Album />
    </div>
  );
};

export default Post;
