import ProjectMedia from "./project-media/ProjectMedia";

export default function ProjectVisual({ compact = false, project }) {
  return (
    <ProjectMedia
      project={project}
      variant={compact ? "index" : "hero"}
    />
  );
}
