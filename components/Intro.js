import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Intro() {
  const { author } = getSiteMetaData();

  return (
    <div>
      <h2 className="mt-6 mb-6 text-4xl font-black leading-none font-display">
        Welcome, I'm {author.name}
      </h2>

      <p className="text-base leading-7 mb-12">
        On this site I'm going to post technical articles related
        to software engineering and other interesting stuff.
        An attempt to present ans express my thoughs about any kind of topic
        about the world arround us.
      </p>
    </div>
  );
}
