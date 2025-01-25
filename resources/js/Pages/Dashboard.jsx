import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { BarChart } from '@mantine/charts';
import { Card, Space, Stack, Title } from '@mantine/core';

const Dashboard = (props) => {
  console.log(props);
  const petData = [
    {
      category: 'Kucing',
      Total: props.pets.Cat || 0,
    },
    {
      category: 'Anjing',
      Total: props.pets.Dog || 0,
    },
  ];

  const adoptData = Object.entries(props.adopts).map(([user_name, Total]) => ({
    user_name,
    Total,
  }));

  return (
    <AuthenticatedLayout
      title="Dasbor"
      user={props.auth.user}
      notification={props.notification}
    >
      <Title order={2} mb="md">
        Dasbor
      </Title>
      <Space h="md" />

      <Stack spacing="md">
        <Card withBorder p="md" radius="md">
          <Title order={4} mb="md">
            {props.auth.user.role === 'Admin'
              ? 'Banyaknya Hewan Peliharaan'
              : 'Banyaknya Hewan Peliharaan yang Anda Adopsi'}
          </Title>
          <BarChart
            h={300}
            data={petData}
            dataKey="category"
            series={[{ name: 'Total', color: 'violet.6' }]}
            tickLine="xy"
            gridAxis="xy"
          />
        </Card>

        {props.auth.user.role === 'Admin' && (
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              Banyaknya Adopsi berdasarkan Nama Pengguna
            </Title>
            <BarChart
              h={300}
              data={adoptData}
              dataKey="user_name"
              series={[{ name: 'Total', color: 'teal.6' }]}
              tickLine="xy"
              gridAxis="xy"
            />
          </Card>
        )}
      </Stack>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
