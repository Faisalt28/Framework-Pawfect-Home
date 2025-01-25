import { Layout } from '@/Layouts/Layout.jsx';
import { router } from '@inertiajs/react';
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  Menu,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconMenu, IconUser } from '@tabler/icons-react';

export const AuthenticatedLayout = ({
  title,
  children,
  user,
  notification,
}) => {
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  // Data menu untuk Drawer
  const menuItems = [
    { label: 'Dasbor', route: 'dashboard' },
    { label: 'Daftar Hewan', route: 'pets.index' },
    { label: 'Adopsi', route: 'adopts.index' },
  ];

  // Tambahkan menu "Daftar Pengguna" hanya untuk Admin
  if (user.role === 'Admin') {
    menuItems.splice(1, 0, { label: 'Daftar Pengguna', route: 'users.index' });
  }

  return (
    <Layout title={title} notification={notification}>
      <Flex direction="column" mih="100vh">
        <Grid>
          <Grid.Col span={12}>
            <Box>
              <Group p={16} justify="space-between">
                {/* Tombol Toggle Menu */}
                <ActionIcon variant="subtle" onClick={openDrawer}>
                  <IconMenu />
                </ActionIcon>

                {/* Avatar dengan Menu Logout */}
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Avatar
                      radius="sm"
                      size={48}
                      color="orange"
                      style={{ cursor: 'pointer' }}
                    />
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item
                      leftSection={<IconUser size={14} />}
                      onClick={() => router.get(route('profile.show', user))}
                    >
                      Profil
                    </Menu.Item>

                    <Menu.Item
                      color="red"
                      leftSection={<IconLogout size={14} />}
                      onClick={() => router.post(route('logout'))}
                    >
                      Keluar
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
              <Divider />
            </Box>

            <Box py={32} px={16}>
              {children}
            </Box>
          </Grid.Col>
        </Grid>
      </Flex>

      {/* Drawer Menu */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Menu"
        size="xs"
      >
        <Stack p={16}>
          {menuItems.map((item) => (
            <Button
              key={item.route}
              variant="subtle"
              onClick={() => router.get(route(item.route))}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </Layout>
  );
};
