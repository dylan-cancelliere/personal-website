import { rem } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

const ResumeComponent = () => {
  return (
    // <Stack>
    <iframe
      src="src/assets/Cancelliere_Resume.pdf"
      style={{
        border: "none",
        height: "100%",
        width: "100%",
        maxWidth: rem(1000),
      }}
    />
    // {/* </Stack> */}
  );
};

export const Route = createFileRoute("/resume")({
  component: ResumeComponent,
});
