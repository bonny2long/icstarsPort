import { Navigate, useParams } from "react-router-dom";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import NasCaseStudy from "../components/ui/NasCaseStudy";
import ProjectCaseStudy from "../components/ui/ProjectCaseStudy";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(
    (project) => project.slug === slug,
  );

  if (projectIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Section>
      <div className="mb-8">
        <Button to="/work" variant="secondary">
          Back to all work
        </Button>
      </div>
      {slug === "nas-media-platform" ? (
        <NasCaseStudy project={projects[projectIndex]} />
      ) : (
        <ProjectCaseStudy
          index={projectIndex}
          project={projects[projectIndex]}
        />
      )}
    </Section>
  );
}
