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
import {
  IconEdit,
  IconHeart,
  IconHeartFilled,
  IconTrash,
} from '@tabler/icons-react';

// Fungsi untuk mendapatkan label adopsi dalam bahasa Indonesia
const getAdoptLabel = (pet) => {
  if (pet.is_adopted) {
    return pet.adopt?.status.includes('(Me)')
      ? 'Disetujui (Anda)'
      : 'Disetujui (Orang Lain)';
  }
  if (pet.in_adoption_process) {
    return pet.adopt?.status.includes('(Me)')
      ? 'Menunggu Persetujuan (Anda)'
      : 'Menunggu Persetujuan (Orang Lain)';
  }
  return 'Ajukan Adopsi';
};

// Fungsi untuk mendapatkan warna tombol adopsi
const getAdoptColor = (pet) => {
  if (pet.is_adopted) {
    return pet.adopt?.status.includes('(Me)') ? 'blue' : 'gray';
  }
  if (pet.in_adoption_process) {
    return pet.adopt?.status.includes('(Me)') ? 'yellow' : 'gray';
  }
  return 'green';
};

const Index = ({ pets, auth }) => {
  return (
    <AuthenticatedLayout title="Dasbor" user={auth.user}>
      <Group justify="space-between">
        <Title order={2} mb="md">
          Hewan Peliharaan
        </Title>

        {auth.user.role === 'Admin' && (
          <Button onClick={() => router.get(route('pets.create'))} mb="md">
            Tambah Hewan
          </Button>
        )}
      </Group>

      {/* Tabel untuk Menampilkan Data Hewan Peliharaan */}
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Nama</Table.Th>
            <Table.Th>Kategori</Table.Th>
            <Table.Th>Ras</Table.Th>
            <Table.Th>Usia</Table.Th>
            <Table.Th>Jenis Kelamin</Table.Th>
            <Table.Th>Warna</Table.Th>
            <Table.Th>Berat (kg)</Table.Th>
            <Table.Th>Tinggi (cm)</Table.Th>
            <Table.Th>Deskripsi</Table.Th>
            <Table.Th>Aksi</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {pets.map((pet, index) => (
            <Table.Tr key={pet.id}>
              <Table.Td>{index + 1}</Table.Td>
              <Table.Td>{pet.name}</Table.Td>
              <Table.Td>
                {pet.category === 'cat' ? 'Kucing' : 'Anjing'}
              </Table.Td>
              <Table.Td>{pet.breed}</Table.Td>
              <Table.Td>{pet.age}</Table.Td>
              <Table.Td>{pet.gender === 'male' ? 'Jantan' : 'Betina'}</Table.Td>
              <Table.Td>{pet.color}</Table.Td>
              <Table.Td>{pet.weight}</Table.Td>
              <Table.Td>{pet.height}</Table.Td>
              <Table.Td>{pet.description}</Table.Td>
              <Table.Td>
                <Group>
                  {auth.user.role === 'Admin' ? (
                    <>
                      {/* Tombol Edit */}
                      <Tooltip label="Ubah">
                        <ActionIcon
                          variant="subtle"
                          color="blue"
                          onClick={() => router.get(route('pets.edit', pet.id))}
                          aria-label="Ubah"
                        >
                          <IconEdit />
                        </ActionIcon>
                      </Tooltip>

                      {/* Tombol Hapus */}
                      <Tooltip
                        label={
                          pet.is_adopted || pet.in_adoption_process
                            ? 'Tidak bisa dihapus. Hewan sedang dalam proses adopsi atau sudah diadopsi.'
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
                                  'Apakah Anda yakin ingin menghapus hewan ini?',
                                )
                              ) {
                                router.delete(route('pets.destroy', pet.id));
                              }
                            }}
                            aria-label="Hapus"
                            disabled={pet.is_adopted || pet.in_adoption_process} // Nonaktifkan jika is_adopted atau in_adoption_process true
                          >
                            <IconTrash />
                          </ActionIcon>
                        </div>
                      </Tooltip>
                    </>
                  ) : (
                    // Tombol Adopsi untuk Adopter
                    <Tooltip label={getAdoptLabel(pet)}>
                      <ActionIcon
                        variant="subtle"
                        color={getAdoptColor(pet)}
                        onClick={
                          pet.is_adopted || pet.in_adoption_process
                            ? undefined // Nonaktifkan onClick jika sudah diadopsi atau dalam proses
                            : () => {
                                if (
                                  confirm(
                                    'Apakah Anda yakin ingin mengajukan adopsi hewan ini?',
                                  )
                                ) {
                                  router.post(route('adopts.store'), {
                                    pet_id: pet.id,
                                  });
                                }
                              }
                        }
                        aria-label="Adopsi"
                        disabled={pet.is_adopted || pet.in_adoption_process} // Nonaktifkan tombol jika sudah diadopsi atau dalam proses
                      >
                        {pet.is_adopted || pet.in_adoption_process ? (
                          <IconHeartFilled />
                        ) : (
                          <IconHeart />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default Index;
