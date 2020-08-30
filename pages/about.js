import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <p>
        Hi, I’m Tom.
      </p>

      <p>
        I’m working on something new.
      </p>

      <p>
        From 2017 to 2019, I helped build, design, and grow Observable as the first hire. Before that, from 2009 to 2017, I helped build Mapbox, a company that makes mapping software. I played in a band that released three albums, rallied for open laws and succeeded, wrote code for understanding and interacting with statistics, sleep, the earth, open data, manners, music, and a bunch of other stuff.
      </p>

      <h3>Contact</h3>
      <p>
        Email: <a href="mailto:fcsonline@gmail.com">fcsonline@gmail.com</a>
      </p>
      <p>
        Github: <a href="https://www.github.com/fcsonline">@fcsonline</a>
      </p>
      <p>
        Twitter: <a href="https://www.twitter.com/openfcsonline">@openfcsonline</a>
      </p>

    </Layout>
  );
}
