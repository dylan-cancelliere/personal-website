import { rem } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

const ResumeComponent = () => {
  return (
    <iframe
      src="/Cancelliere_Resume.pdf"
      style={{
        border: "none",
        height: "100%",
        width: "100%",
        maxWidth: rem(1000),
      }}
    />
  );
};

export const Route = createFileRoute("/resume")({
  beforeLoad: () => {
    return { isInitialLoad: false };
  },
  component: ResumeComponent,
});
