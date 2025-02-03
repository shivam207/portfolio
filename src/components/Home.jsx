import React, {useState} from "react";
import { useSpring, animated, config } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";

import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  RESUME_URL,
  BLOG_URL,
  PERPLEXITY_URL,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div id="home" className="container flex flex-col max-w-screen-md mx-auto mt-20 mb-10 min-h-screen">
      <div className="">
      <div className="mx-auto px-4 ">
        <div  className="container md:flex items-center bg-lightBackground">
          <div className="md:w-full mb-8 md:mb-0 md:mr-10">
            <animated.img
              style={{ ...springProps }}
              src="images/profile.jpg"
              alt="Shivam"
              className="rounded-full w-full border-4 border-lightBorder"
              onMouseEnter={() => setScale(1.1)}
              onMouseLeave={() => setScale(1)}
            />
          </div>
          <div>
            <h1 className="text-4xl text-lightPrimaryText mb-4 ">About Me</h1>  
            I'm a software engineer specializing in the intersection of open source software and artificial intelligence. I'm currently at Hugging Face, where I spend most of my time developing Gradio, an open-source python package for building AI-powered web applications with little code.
          </div>
        </div>
      <div>
        <animated.div style={iconSpring} className="flex flex-col mt-2 space-x-6">
          <div className="flex mt-2 space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={GITHUB_URL}
              className="text-lightPrimaryText hover:text-lightLink transition-colors duration-300"
            >
              <FaGithub className="w-10 h-10" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={LINKEDIN_URL}
              className="text-lightPrimaryText hover:text-lightLink transition-colors duration-300"
            >
              <FaLinkedin className="w-10 h-10" />
              <span className="sr-only">LinkedIn account</span>
            </a>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href={PERPLEXITY_URL}
              className="text-lightPrimaryText hover:text-goldDesert transition-colors duration-300"
            >
              <SiPerplexity className="w-10 h-10" />
              <span className="sr-only">Resume</span>
            </a> */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href={YOUTUBE_URL}
              className="text-lightPrimaryText hover:text-goldDesert transition-colors duration-300"
            >
              <FaYoutube className="w-10 h-10" />
              <span className="sr-only">YouTube Channel</span>
            </a> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={RESUME_URL}
              className="text-lightPrimaryText hover:text-lightLink transition-colors duration-300"
            >
              <FaFileAlt className="w-10 h-10" />
              <span className="sr-only">Resume</span>
            </a>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href={BLOG_URL}
              className="text-lightPrimaryText hover:text-goldDesert transition-colors duration-300"
            >
              <FaBlog className="w-10 h-10" />
              <span className="sr-only">Blog</span>
            </a> */}
          </div>
          {/* <div class="pt-6">
            <a href={PERPLEXITY_URL}
              class="inline-block px-4 py-2 bg-tealDesert text-white rounded-full text-sm font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              Get $10 off Perplexity
            </a>

          </div> */}
        </animated.div>
      </div>
      </div>
      </div>
    </div>
  );
}
