import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import {
  Button,
  Group,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const Show = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    category: '',
    breed: '',
    age: null,
    gender: '',
    color: '',
    weight: null,
    height: null,
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('pets.store'));
  };

  return (
    <AuthenticatedLayout title="Tambah Hewan" user={auth.user}>
      <Title order={2} mb="md">
        Tambah Hewan
      </Title>

      <form onSubmit={handleSubmit}>
        <Stack spacing="md">
          <TextInput
            label="Nama"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name}
            required
          />

          <Select
            label="Kategori"
            value={data.category}
            onChange={(value) => setData('category', value)}
            data={[
              { value: 'cat', label: 'Kucing' },
              { value: 'dog', label: 'Anjing' },
            ]}
            error={errors.category}
            required
          />

          <TextInput
            label="Ras"
            value={data.breed}
            onChange={(e) => setData('breed', e.target.value)}
            error={errors.breed}
          />

          <NumberInput
            label="Usia"
            value={data.age}
            onChange={(value) => setData('age', value)}
            error={errors.age}
            min={0}
          />

          <Select
            label="Jenis Kelamin"
            value={data.gender}
            onChange={(value) => setData('gender', value)}
            data={[
              { value: 'male', label: 'Jantan' },
              { value: 'female', label: 'Betina' },
            ]}
            error={errors.gender}
          />

          <TextInput
            label="Warna"
            value={data.color}
            onChange={(e) => setData('color', e.target.value)}
            error={errors.color}
          />

          <NumberInput
            label="Berat (kg)"
            value={data.weight}
            onChange={(value) => setData('weight', value)}
            error={errors.weight}
            min={0}
            precision={2}
          />

          <NumberInput
            label="Tinggi (cm)"
            value={data.height}
            onChange={(value) => setData('height', value)}
            error={errors.height}
            min={0}
            precision={2}
          />

          <Textarea
            label="Deskripsi"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
          />

          <Group>
            <Button type="submit" loading={processing}>
              Simpan
            </Button>
          </Group>
        </Stack>
      </form>
    </AuthenticatedLayout>
  );
};

export default Show;
