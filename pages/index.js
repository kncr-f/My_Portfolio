import Layout from "../components/Layout";
import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import TwitterIcon from "../components/icons/Twitter";
import Link from "next/link";

const TypingAnimation = React.memo(
  function TypingAnimation() {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Web Developer 👑",
          2000,
          "React Enthusiast 💥",
          2000,
          "Addicted to learning  ",
          2000,
        ]}
      >

      </Typical>

    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="Portfolio-ball-img"
        className="hidden md:block h-auto absolute top-48 right-40 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: .4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <motion.img
        src="/images/ball-2.svg"
        alt="Portfolio-ball-img"
        className="hidden md:block h-auto absolute bottom-0 left-0 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: .4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="m-full h-full" >
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I am
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">Fatih Kincir</h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Icons */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/kncr-f"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"}></GithubIcon>
              </motion.a>
              <motion.a
                href="https://twitter.com/srnbrk1"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"}></TwitterIcon>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fatih-kincir-3a5b38194/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"}></LinkedinIcon>
              </motion.a>
            </div>

          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span> Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500"></span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons 🎈🎈 Just enjoy them... </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="images/profile.jpg"
                      alt="Me"
                      id="profile_image"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        [Reactjs, Nextjs, Graphql, Nodejs, Redux];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        [PostgreSQL, MongoDB, Express, Handlebars];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">4</span> =
                        [Vue.js, Jest, Jquery, Canvas, AWS, Socket.IO];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 mx-80">
                    <Link href="/projects">
                      <a className="transition duration-300 text-xl projectLink" >Projects</a>
                    </Link>

                  </div>
                </code>
              </pre>
            </div>
          </article>

        </section>
      </main>

    </Layout >
  )
}
