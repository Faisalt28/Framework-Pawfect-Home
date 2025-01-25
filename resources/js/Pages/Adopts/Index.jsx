import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import {
  ActionIcon,
  Anchor,
  Badge,
  Group,
  Select,
  Table,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const Index = ({ adopts, auth }) => {
  const handleStatusChange = (adoptId, newStatus) => {
    if (confirm('Apakah Anda yakin ingin mengubah status adopsi ini?')) {
      router.put(route('adopts.updateStatus', adoptId), { status: newStatus });
    }
  };

  // Fungsi untuk mengubah status ke bahasa Indonesia
  const getStatusLabel = (status) => {
    switch (status) {
      case 'Pending':
        return 'Tertunda';
      case 'Approved':
        return 'Disetujui';
      case 'Rejected':
        return 'Ditolak';
      default:
        return status;
    }
  };

  // Fungsi untuk memformat tanggal dan waktu ke format Indonesia (24 jam)
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Format 24 jam
    });
  };

  return (
    <AuthenticatedLayout title="Daftar Adopsi" user={auth.user}>
      <Group justify="space-between">
        <Title order={2} mb="md">
          Daftar Adopsi
        </Title>
      </Group>

      {/* Tabel untuk Menampilkan Data Adopsi */}
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th> {/* Kolom Nomor Urut */}
            <Table.Th>Nama Hewan</Table.Th>
            {auth.user.role === 'Admin' && <Table.Th>Pemohon</Table.Th>}
            <Table.Th>Status</Table.Th>
            <Table.Th>Tanggal Pengajuan</Table.Th>
            <Table.Th>Aksi</Table.Th> {/* Kolom Aksi */}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {adopts.map((adopt, index) => (
            <Table.Tr key={adopt.id}>
              <Table.Td>{index + 1}</Table.Td> {/* Nomor Urut */}
              <Table.Td>{adopt.pet.name}</Table.Td>
              {auth.user.role === 'Admin' && (
                <Table.Td>
                  <Anchor
                    onClick={() => router.get(route('users.show', adopt.user))}
                  >
                    {adopt.user.name}
                  </Anchor>
                </Table.Td>
              )}
              <Table.Td>
                <Badge
                  color={
                    adopt.status === 'Approved'
                      ? 'green'
                      : adopt.status === 'Rejected'
                        ? 'red'
                        : 'yellow'
                  }
                >
                  {getStatusLabel(adopt.status)}
                </Badge>
              </Table.Td>
              <Table.Td>{formatDateTime(adopt.created_at)}</Table.Td>{' '}
              {/* Format Tanggal dan Waktu */}
              <Table.Td>
                {/* Dropdown Ubah Status (Hanya Tampil untuk Admin) */}
                {auth.user.role === 'Admin' && (
                  <Select
                    value={adopt.status}
                    data={[
                      { value: 'Pending', label: 'Tertunda' },
                      { value: 'Approved', label: 'Disetujui' },
                      { value: 'Rejected', label: 'Ditolak' },
                    ]}
                    onChange={(value) => handleStatusChange(adopt.id, value)}
                    style={{ width: '120px' }}
                  />
                )}

                {/* Tombol Hapus (Hanya Tampil untuk User Biasa) */}
                {auth.user.role !== 'Admin' && (
                  <Tooltip label="Hapus">
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => {
                        if (
                          confirm(
                            'Apakah Anda yakin ingin menghapus adopsi ini?',
                          )
                        ) {
                          router.delete(route('adopts.destroy', adopt.id));
                        }
                      }}
                      aria-label="Hapus"
                    >
                      <IconTrash />
                    </ActionIcon>
                  </Tooltip>
                )}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default Index;
