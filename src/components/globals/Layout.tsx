import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Group,
  Indicator,
  Input,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { BsBell, BsCart2, BsChatDots, BsSearch } from "react-icons/bs";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group mx="xl" justify="space-between" style={{ flex: 1 }}>
            <Group gap={12} visibleFrom="sm">
              <Title order={3}>MarketPlace.</Title>
              <Group ml="xl">
                <UnstyledButton>Home</UnstyledButton>
                <UnstyledButton>Products</UnstyledButton>
                <UnstyledButton>Promo</UnstyledButton>
                <UnstyledButton>Help Center</UnstyledButton>
              </Group>
            </Group>

            <Group gap={0} visibleFrom="sm">
              <Input
                placeholder="Procure pro Produtos"
                leftSection={<BsSearch size={16} />}
              />
              <ActionIcon variant="transparent" aria-label="Settings">
                <BsBell />
              </ActionIcon>
              <ActionIcon variant="transparent" aria-label="Settings">
                <BsChatDots />
              </ActionIcon>
              <ActionIcon variant="transparent" aria-label="Settings">
                <Indicator color="red" label="2">
                  <BsCart2 />
                </Indicator>
              </ActionIcon>

              <Avatar src="avatar.png" alt="it's me" />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton>Home</UnstyledButton>
        <UnstyledButton>Blog</UnstyledButton>
        <UnstyledButton>Contacts</UnstyledButton>
        <UnstyledButton>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
