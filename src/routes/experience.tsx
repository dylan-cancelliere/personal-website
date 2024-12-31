import { createFileRoute } from "@tanstack/react-router";

const ExperienceContainer = () => {
  return <div>Hello "/experience"!</div>;
};

export const Route = createFileRoute("/experience")({
  component: ExperienceContainer,
});
