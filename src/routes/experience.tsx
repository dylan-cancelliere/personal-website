import classes from "./experience.module.css";

import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";

const Icon = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      h={60}
      radius="xl"
      style={{
        border: ".25rem solid white",
        position: "relative",
        zIndex: 2,
      }}
    />
  );
};

type EventCardProps = {
  title: string;
  body: ReactNode;
  role: string;
  link: string;
  skills: { label: string; color: string }[];
};

const EventCard = ({ title, body, role, link, skills }: EventCardProps) => {
  const theme = useMantineTheme();

  return (
    <Card
      maw={rem(500)}
      m="auto"
      radius="md"
      style={{
        borderTop: `0.25rem solid ${theme.colors.primary[7]}`,
        backgroundColor: theme.colors.primary[2],
      }}
    >
      <Group gap={5}>
        <Title order={3} ff="Noe Bold">
          {title}
        </Title>
        <ActionIcon
          variant="transparent"
          color={theme.colors.primary[7]}
          component="a"
          href={link}
          target="_blank"
        >
          <IconLink />
        </ActionIcon>
      </Group>
      <Text ff="Noe Italic" style={{ textIndent: 0 }}>
        {role}
      </Text>
      <Box pt="md">{body}</Box>
      <Group pt="sm">
        {skills.map((s) => (
          <Badge
            key={s.label}
            color={s.color}
            style={{ border: `0.15rem solid ${theme.colors.primary[0]}` }}
          >
            {s.label}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};

const DesktopTimelineEvent = ({
  position,
  lineClassname,
  date,
  icon,
  cardProps,
}: {
  position: "left" | "right";
  lineClassname: string;
  date: string;
  icon: ReactNode;
  cardProps: EventCardProps;
}) => {
  const theme = useMantineTheme();

  const dateWrapper = (
    <Title order={2} ff="Noe Bold Italic" c={theme.colors.primary[0]}>
      {date}
    </Title>
  );
  return (
    <Group w="100%" wrap="nowrap" justify="center" pb="var(--card-spacing)">
      {position == "left" ? (
        <Box w="100%" style={{ flexGrow: 1 }}>
          <EventCard {...cardProps} />
        </Box>
      ) : (
        <Box w="100%" style={{ flexGrow: 1, textAlign: "right" }}>
          {dateWrapper}
        </Box>
      )}
      <Stack
        h="100%"
        w="max-content"
        className={lineClassname}
        justify="center"
        style={{ flexShrink: 0 }}
      >
        {icon}
      </Stack>
      {position == "right" ? (
        <Box w="100%" style={{ flexGrow: 1 }}>
          <EventCard {...cardProps} />
        </Box>
      ) : (
        <Box w="100%" style={{ flexGrow: 1 }}>
          {dateWrapper}
        </Box>
      )}
    </Group>
  );
};

const ExperienceContainer = () => {
  return (
    <Stack w="100%" gap={0} pt="xl">
      <DesktopTimelineEvent
        position="left"
        lineClassname={`${classes.line} ${classes.bottomLine}`}
        date="June 2024 - Current"
        icon={<Icon src="/assets/bryx.png" />}
        cardProps={{
          title: "Bryx",
          role: "Software Engineer, Front-End Lead",
          link: "https://bryx.com/",
          skills: [
            { label: "TypeScript", color: "indigo" },
            { label: "React", color: "green" },
            { label: "Kotlin", color: "grape" },
            { label: "Mantine", color: "blue" },
          ],
          body: bryxBodyText,
        }}
      />
      <DesktopTimelineEvent
        position="right"
        date="May 2023 - May 2024"
        lineClassname={`${classes.line} ${classes.middleLine}`}
        icon={<Icon src="/assets/mfj.jpeg" />}
        cardProps={{
          title: "Measures for Justice",
          role: "Front-End Software Engineer Intern",
          link: "https://measuresforjustice.org/what-we-do/solutions/commons/",
          skills: [
            { label: "TypeScript", color: "indigo" },
            { label: "NextJS", color: "red" },
            { label: "React", color: "green" },
            { label: "MaterialUI", color: "blue" },
          ],
          body: mfjBodyText,
        }}
      />
      <DesktopTimelineEvent
        position="left"
        date="Sep 2022 - Dec 2022"
        lineClassname={`${classes.line} ${classes.topLine}`}
        icon={<Icon src="/assets/aws.png" />}
        cardProps={{
          title: "Amazon Web Services",
          role: "Software Development Engineer Intern",
          link: "https://aws.amazon.com/rds/aurora/",
          skills: [
            { label: "Java", color: "orange" },
            { label: "TypeScript", color: "indigo" },
            { label: "React", color: "green" },
          ],
          body: bryxBodyText,
        }}
      />
    </Stack>
  );
};

export const Route = createFileRoute("/experience")({
  component: ExperienceContainer,
});

const bryxBodyText = (
  <>
    <Text>
      So far at Bryx I've built an events system and accompanying calendar
      module and a translation system utilizing AWS Polly to convert
      abbreviations and common mispronounciations into speech.
    </Text>
    <Text pt="xs">
      Currently, I'm working as the only front-end engineer on a small team
      creating an unreleased product in the public safety space.
    </Text>
  </>
);

const mfjBodyText = (
  <>
    <Text>
      I interned at Measures for Justice (MFJ) during the summer and then stayed
      on part-time for another eight months while I finished school.
    </Text>
    <Text pt="xs">
      At MFJ, I optimized the data filtering flow on the commons site for both
      performance and accessibility in accordance with WCAG 2.2 guidelines. In
      addition to some dev-ops work I undertook in creating automated smoke
      tests for our build pipeline, I contributed to the team beyond code by
      establishing standard patterns the team relied on while migrating from an
      in-house UI library to Material UI.
    </Text>
  </>
);

const awsBodyText = (
  <>
    <Text>
      Despite the unexpected layoffs that hit Amazon and much of the tech
      industry in the Fall of 2022, I gleaned a lot from my time in Seattle.
    </Text>
    <Text pt="xs">
      At MFJ, I optimized the data filtering flow on the commons site for both
      performance and accessibility in accordance with WCAG 2.2 guidelines. In
      addition to some dev-ops work I undertook in creating automated smoke
      tests for our build pipeline, I contributed to the team beyond code by
      establishing standard patterns the team relied on while migrating from an
      in-house UI library to Material UI.
    </Text>
  </>
);
