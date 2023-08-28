import { Card, Title, DonutChart } from '@tremor/react';

const catgories = [
  {
    name: 'Sueldo',
    sales: 20000,
  },
  {
    name: 'Comida',
    sales: 1000,
  },
  {
    name: 'Servicios',
    sales: 500,
  },
  {
    name: 'Entretenimiento',
    sales: 5000,
  },
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export const DonutGastos = () => (
  <Card>
    <Title>Desglose</Title>
    <DonutChart
      className="mt-6"
      data={catgories}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
    />
  </Card>
);
