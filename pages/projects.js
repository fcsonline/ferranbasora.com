import { PropTypes } from 'prop-types'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Title from 'components/Title'
import Projects from 'components/Projects'

import { getSortedProjects } from 'utils/projects'

const ProjectsList = ({ projects }) => {
  return (
    <Layout>
      <SEO title="All projects" />
      <Title>All projects</Title>
      <Projects projects={projects}/>
    </Layout>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array
}

export default ProjectsList

export async function getStaticProps () {
  const projects = getSortedProjects()

  return {
    props: {
      projects
    }
  }
}
