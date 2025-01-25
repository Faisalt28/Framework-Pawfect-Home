import { GuestLayout } from '@/Layouts/index.jsx';
import { router, useForm } from '@inertiajs/react';
import {
  Anchor,
  Button,
  Center,
  PasswordInput,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const Register = () => {
  const form = useForm({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const submit = (e) => {
    e.preventDefault();
    form.post(route('register'), {
      onSuccess: () => form.reset(),
    });
  };

  const inputs = [
    {
      type: 'text',
      name: 'name',
      label: 'Nama',
      placeholder: 'Masukkan nama',
      component: TextInput,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Alamat Surel',
      placeholder: 'Masukkan alamat surel',
      component: TextInput,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Kata Sandi',
      placeholder: 'Masukkan kata sandi',
      component: PasswordInput,
    },
    {
      type: 'textarea',
      name: 'address',
      label: 'Alamat Domisili',
      placeholder: 'Masukkan alamat domisili',
      component: Textarea,
    },
  ];

  return (
    <GuestLayout title="Daftar Akun">
      <Center mih="100vh" p={16}>
        <Stack>
          <form onSubmit={submit}>
            <Title mb={16}>Daftar Akun</Title>

            <Stack>
              {inputs.map((input, index) => (
                <input.component
                  key={index}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={form.data[input.name]}
                  onChange={(e) => form.setData(input.name, e.target.value)}
                  error={form.errors[input.name]}
                  required
                />
              ))}

              <Button
                type="submit"
                loading={form.processing}
                disabled={form.processing}
              >
                Daftar
              </Button>
            </Stack>
          </form>

          <Text align="center">
            Sudah punya akun?{' '}
            <Anchor onClick={() => router.get(route('login'))}>Masuk</Anchor>
          </Text>
        </Stack>
      </Center>
    </GuestLayout>
  );
};

export default Register;
