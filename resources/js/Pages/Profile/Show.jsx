import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { Link, router } from '@inertiajs/react';
import { Button, Group, Stack, TextInput, Title } from '@mantine/core';

const Show = (props) => {
  const handleDelete = () => {
    if (confirm('Apakah Anda yakin ingin menghapus akun ini?')) {
      router.delete(route('profile.destroy', props.auth.user));
    }
  };

  return (
    <AuthenticatedLayout
      title="Profil"
      user={props.auth.user}
      notification={props.notification}
    >
      <Stack spacing="md">
        <Title order={2}>Profil</Title>

        <TextInput label="Nama" value={props.auth.user.name} disabled />
        <TextInput
          label="Alamat Surel"
          value={props.auth.user.email}
          disabled
        />
        <TextInput
          label="Alamat"
          value={props.auth.user.address || 'Belum diisi'}
          disabled
        />

        <Group>
          <Button
            component={Link}
            href={route('profile.edit', props.auth.user)}
          >
            Ubah Profil
          </Button>

          {props.auth.user.role !== 'Admin' && (
            <Button color="red" onClick={handleDelete}>
              Hapus Akun
            </Button>
          )}
        </Group>
      </Stack>
    </AuthenticatedLayout>
  );
};

export default Show;
