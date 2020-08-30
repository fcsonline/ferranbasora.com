import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import Title from "components/Title";
import Projects from "components/Projects";

import { getSortedProjects } from "utils/projects";

export default function ProjectsList ({ projects }) {
  return (
    <Layout>
      <SEO title="All projects" />
      <Title>All projects</Title>
      <Projects projects={projects}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getSortedProjects();

  return {
    props: {
      projects
    },
  };
}
