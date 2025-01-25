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

const Edit = ({ auth, pet }) => {
  // Inisialisasi form dengan data pet yang akan diedit
  const { data, setData, put, processing, errors } = useForm({
    name: pet.name,
    category: pet.category,
    breed: pet.breed,
    age: pet.age,
    gender: pet.gender,
    color: pet.color,
    weight: pet.weight,
    height: pet.height,
    description: pet.description,
  });

  // Fungsi untuk handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('pets.update', pet.id)); // Menggunakan put untuk update
  };

  return (
    <AuthenticatedLayout title="Ubah Hewan" user={auth.user}>
      <Title order={2} mb="md">
        Ubah Hewan
      </Title>

      <form onSubmit={handleSubmit}>
        <Stack spacing="md">
          {/* Field: Nama */}
          <TextInput
            label="Nama"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name}
            required
          />

          {/* Field: Kategori */}
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

          {/* Field: Ras */}
          <TextInput
            label="Ras"
            value={data.breed}
            onChange={(e) => setData('breed', e.target.value)}
            error={errors.breed}
          />

          {/* Field: Usia */}
          <NumberInput
            label="Usia"
            value={data.age}
            onChange={(value) => setData('age', value)}
            error={errors.age}
            min={0}
          />

          {/* Field: Jenis Kelamin */}
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

          {/* Field: Warna */}
          <TextInput
            label="Warna"
            value={data.color}
            onChange={(e) => setData('color', e.target.value)}
            error={errors.color}
          />

          {/* Field: Berat */}
          <NumberInput
            label="Berat (kg)"
            value={data.weight}
            onChange={(value) => setData('weight', value)}
            error={errors.weight}
            min={0}
            precision={2}
          />

          {/* Field: Tinggi */}
          <NumberInput
            label="Tinggi (cm)"
            value={data.height}
            onChange={(value) => setData('height', value)}
            error={errors.height}
            min={0}
            precision={2}
          />

          {/* Field: Deskripsi */}
          <Textarea
            label="Deskripsi"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
          />

          {/* Tombol Submit */}
          <Group>
            <Button type="submit" loading={processing}>
              Simpan Perubahan
            </Button>
          </Group>
        </Stack>
      </form>
    </AuthenticatedLayout>
  );
};

export default Edit;
