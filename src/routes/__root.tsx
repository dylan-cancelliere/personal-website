import "@mantine/core/styles.css";

import { Group, Stack, useMantineTheme } from "@mantine/core";
import {
  createRootRoute,
  Link,
  LinkProps,
  Outlet,
} from "@tanstack/react-router";

const TopBarLink = (props: LinkProps) => {
  return <Link {...props} className="topBarLink" />;
};

const MainContainer = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Stack
        h="100dvh"
        w="100dvw"
        align="center"
        style={{ backgroundColor: theme.colors.purple[4] }}
        p="sm"
      >
        <Group
          className="topBar"
          w="100%"
          p="xs"
          style={{
            border: `0.5rem solid ${theme.colors.purple[0]}`,
            boxShadow: "rgba(0, 0, 0, 0.15) 0 0.5rem 0.5rem",
          }}
        >
          <TopBarLink to="/">Home</TopBarLink>
        </Group>
        <Outlet />
      </Stack>
    </>
  );
};

export const Route = createRootRoute({
  component: MainContainer,
});
