import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { Stack, TextInput, Title } from '@mantine/core';

const Show = ({ auth, user }) => {
  return (
    <AuthenticatedLayout title="Profil" user={auth.user}>
      <Stack spacing="md">
        <Title order={2}>Profil</Title>

        {/* Form Profil (Disabled) */}
        <TextInput label="Nama" value={user.name} disabled />
        <TextInput label="Alamat Surel" value={user.email} disabled />
        <TextInput
          label="Alamat"
          value={user.address || 'Belum diisi'}
          disabled
        />
      </Stack>
    </AuthenticatedLayout>
  );
};

export default Show;
