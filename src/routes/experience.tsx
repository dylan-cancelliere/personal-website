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
import {
  AwsBodyText,
  BryxBodyText,
  BryxInternshipBodyText,
  ConstantContactBodyText,
  HubSpot1BodyText,
  HubSpot2BodyText,
  MfjBodyText,
} from "../ExperienceText";
import { useIsMobile } from "../utils";

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
  body?: ReactNode;
  role?: string;
  link?: string;
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
        <Title
          order={3}
          // ff="Noe Bold"
        >
          {title}
        </Title>
        {link && (
          <ActionIcon
            variant="transparent"
            color={theme.colors.primary[7]}
            component="a"
            href={link}
            target="_blank"
          >
            <IconLink />
          </ActionIcon>
        )}
      </Group>
      {role && (
        <Text
          // ff="Noe Italic"
          style={{ textIndent: 0 }}
        >
          {role}
        </Text>
      )}
      {body && <Box pt="md">{body}</Box>}
      {skills.length > 0 && (
        <Group pt={"sm"}>
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
      )}
    </Card>
  );
};

type TimelineEventProps = {
  position: "left" | "right";
  line?: "top" | "bottom";
  date: string;
  icon: ReactNode;
  cardProps: EventCardProps;
};

const TimelineEvent = (props: TimelineEventProps) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileTimeLineEvent {...props} />
  ) : (
    <DesktopTimelineEvent {...props} />
  );
};

const MobileTimeLineEvent = ({ date, icon, cardProps }: TimelineEventProps) => {
  const theme = useMantineTheme();

  const dateWrapper = (
    <Title
      order={2}
      // ff="Noe Bold Italic"
      c={theme.colors.primary[0]}
    >
      {date}
    </Title>
  );

  return (
    <Stack py="lg">
      <Box>
        <Group
          w="100%"
          justify="flex-end"
          style={{
            flexGrow: 1,
            textAlign: "right",
          }}
        >
          {dateWrapper}
          <Box h="100%" w="max-content" style={{ flexShrink: 0 }}>
            {icon}
          </Box>
        </Group>
      </Box>
      <Group>
        <Box w="100%" style={{ flexGrow: 1 }}>
          <EventCard {...cardProps} />
        </Box>
      </Group>
    </Stack>
  );
};

const DesktopTimelineEvent = ({
  position,
  line,
  date,
  icon,
  cardProps,
}: TimelineEventProps) => {
  const theme = useMantineTheme();

  const dateWrapper = (
    <Title
      order={2}
      // ff="Noe Bold Italic"
      c={theme.colors.primary[0]}
    >
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
        className={
          line == "top"
            ? `${classes.line} ${classes.bottomLine}`
            : line == "bottom"
              ? `${classes.line} ${classes.topLine}`
              : `${classes.line} ${classes.middleLine}`
        }
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
      <TimelineEvent
        position="left"
        line="top"
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
          body: BryxBodyText,
        }}
      />
      <TimelineEvent
        position="right"
        date="May 2024"
        icon={<Icon src="/assets/rit.svg" />}
        cardProps={{
          title: "Graduated college! 🎉",
          skills: [],
        }}
      />
      <TimelineEvent
        position="left"
        date="May 2023 - May 2024"
        icon={<Icon src="/assets/mfj.jpeg" />}
        cardProps={{
          title: "Measures for Justice",
          role: "Front-End Software Engineer Intern",
          link: "https://measuresforjustice.org/what-we-do/solutions/commons/",
          skills: [
            { label: "TypeScript", color: "indigo" },
            { label: "NextJS", color: "red" },
            { label: "React", color: "green" },
            { label: "Material UI", color: "blue" },
          ],
          body: MfjBodyText,
        }}
      />
      <TimelineEvent
        position="right"
        date="Sep 2022 - Dec 2022"
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
          body: AwsBodyText,
        }}
      />
      <TimelineEvent
        position="left"
        date="Jun 2022 - Aug 2022"
        icon={<Icon src="/assets/hubspot.jpeg" />}
        cardProps={{
          title: "HubSpot",
          role: "Front-End Intern",
          link: "https://www.hubspot.com/",
          skills: [
            { label: "TypeScript", color: "indigo" },
            { label: "React", color: "green" },
          ],
          body: HubSpot2BodyText,
        }}
      />
      <TimelineEvent
        position="right"
        date="Jan 2022 - May 2022"
        icon={<Icon src="/assets/bryx.png" />}
        cardProps={{
          title: "Bryx",
          role: "Front-End Intern",
          link: "https://bryx.com/",
          skills: [
            { label: "TypeScript", color: "indigo" },
            { label: "React", color: "green" },
            { label: "Semantic UI", color: "green" },
          ],
          body: BryxInternshipBodyText,
        }}
      />
      <TimelineEvent
        position="left"
        date="Jan 2021 - Aug 2021"
        icon={<Icon src="/assets/hubspot.jpeg" />}
        cardProps={{
          title: "HubSpot",
          role: "Full-Stack Intern",
          link: "https://www.hubspot.com/",
          skills: [
            { label: "Java", color: "orange" },
            { label: "React", color: "green" },
          ],
          body: HubSpot1BodyText,
        }}
      />
      <TimelineEvent
        position="right"
        date="June 2020 - Aug 2020"
        icon={<Icon src="/assets/constantcontact.png" />}
        cardProps={{
          title: "Constant Contact",
          role: "Front-End Intern",
          link: "https://www.constantcontact.com/",
          skills: [{ label: "React", color: "green" }],
          body: ConstantContactBodyText,
        }}
      />
      <TimelineEvent
        position="left"
        line="bottom"
        date="August 2019"
        icon={<Icon src="/assets/rit.svg" />}
        cardProps={{
          title: "Started college",
          skills: [],
        }}
      />
    </Stack>
  );
};

export const Route = createFileRoute("/experience")({
  component: ExperienceContainer,
});
