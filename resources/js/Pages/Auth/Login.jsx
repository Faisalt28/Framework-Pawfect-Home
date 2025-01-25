import { GuestLayout } from '@/Layouts/index.jsx';
import { router, useForm } from '@inertiajs/react';
import {
  Anchor,
  Button,
  Center,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const Login = (props) => {
  const form = useForm({
    email: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();
    form.post(route('login'), {
      onSuccess: () => form.reset('password'),
    });
  };

  const inputs = [
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
  ];

  return (
    <GuestLayout title="Masuk Akun" notification={props.notification}>
      <Center mih="100vh" p={16}>
        <Stack>
          <form onSubmit={submit}>
            <Title mb={16}>Masuk Akun</Title>

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
                Masuk
              </Button>
            </Stack>
          </form>

          <Text align="center">
            Belum punya akun?{' '}
            <Anchor onClick={() => router.get(route('register'))}>
              Daftar
            </Anchor>
          </Text>
        </Stack>
      </Center>
    </GuestLayout>
  );
};

export default Login;
