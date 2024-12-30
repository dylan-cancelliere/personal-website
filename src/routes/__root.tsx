import classes from "./__root.module.css";

import { ActionIcon, Box, Group, Stack, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  createRootRoute,
  Link,
  LinkProps,
  Outlet,
} from "@tanstack/react-router";
import { useIsMobile } from "../utils";

const TopBarLink = (props: LinkProps) => {
  return <Link {...props} className={classes.topBarLink} />;
};

// Credit: Mikael Ainalem https://mikael-ainalem.medium.com/
const HamburgerIcon = ({
  color,
  opened,
}: {
  color: string;
  opened: boolean;
}) => (
  <svg
    className={`${classes.ham} ${classes.hamRotate} ${classes.ham8} ${opened ? classes.active : ""}`}
    viewBox="0 0 100 100"
  >
    <path
      className={`${classes.line} ${classes.top} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
    />
    <path
      className={`${classes.line} ${classes.middle} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 30,50 h 40"
    />
    <path
      className={`${classes.line} ${classes.bottom} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
    />
  </svg>
);

const MainContainer = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Stack
        h="100dvh"
        w="100dvw"
        p="sm"
        align="center"
        style={{ backgroundColor: theme.colors.primary[4] }}
      >
        <Stack w="100%" justify="flex-start">
          <Group
            className={`${classes.topBar} ${opened ? classes.expand : ""}`}
            p="xs"
            wrap="nowrap"
            style={{
              border: `0.5rem solid ${theme.colors.primary[0]}`,
              boxShadow: "rgba(0, 0, 0, 0.15) 0 0.5rem 0.5rem",
            }}
          >
            <ActionIcon
              size="xl"
              variant="transparent"
              color={theme.colors.primary[0]}
              onClick={toggle}
            >
              <HamburgerIcon opened={opened} color={theme.colors.primary[0]} />
            </ActionIcon>

            <TopBarLink to="/">Home</TopBarLink>
          </Group>
        </Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export const Route = createRootRoute({
  component: MainContainer,
});
