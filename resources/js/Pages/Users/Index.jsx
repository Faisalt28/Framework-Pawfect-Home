import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import {
  ActionIcon,
  Button,
  Group,
  Table,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const Index = (props) => {
  return (
    <AuthenticatedLayout
      title="Daftar Pengguna"
      user={props.auth.user}
      notification={props.notification}
    >
      <Group justify="space-between">
        <Title order={2} mb="md">
          Daftar Pengguna
        </Title>

        {props.auth.user.role === 'admin' && (
          <Button onClick={() => router.get(route('users.create'))} mb="md">
            Tambah Pengguna
          </Button>
        )}
      </Group>

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Nama</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Alamat</Table.Th>
            <Table.Th>Aksi</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {props.users.map((user, index) => (
            <Table.Tr key={user.id}>
              <Table.Td>{index + 1}</Table.Td>
              <Table.Td>{user.name}</Table.Td>
              <Table.Td>{user.email}</Table.Td>
              <Table.Td>{user.address}</Table.Td>
              <Table.Td>
                <Tooltip
                  label={
                    user.has_adopts
                      ? 'Tidak bisa dihapus karena memiliki data adopsi'
                      : 'Hapus'
                  }
                >
                  <div>
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => {
                        if (
                          confirm(
                            'Apakah Anda yakin ingin menghapus pengguna ini?',
                          )
                        ) {
                          router.delete(route('users.destroy', user.id));
                        }
                      }}
                      aria-label="Hapus"
                      disabled={user.has_adopts} // Nonaktifkan tombol jika memiliki data adopsi
                    >
                      <IconTrash />
                    </ActionIcon>
                  </div>
                </Tooltip>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default Index;
