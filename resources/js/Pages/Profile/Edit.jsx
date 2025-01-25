import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const Edit = ({ auth }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: auth.user.name,
    email: auth.user.email,
    address: auth.user.address || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('profile.update', auth.user));
  };

  return (
    <AuthenticatedLayout title="Ubah Profil" user={auth.user}>
      <Head title="Ubah Profil" />
      <Stack spacing="md">
        <Title order={2}>Ubah Profil</Title>

        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Nama"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              error={errors.name}
              required
            />

            <TextInput
              label="Alamat Surel"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              error={errors.email}
              required
            />

            <Textarea
              label="Alamat"
              value={data.address}
              onChange={(e) => setData('address', e.target.value)}
              error={errors.address}
            />

            <Group>
              <Button type="submit" loading={processing}>
                Simpan Perubahan
              </Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </AuthenticatedLayout>
  );
};

export default Edit;
