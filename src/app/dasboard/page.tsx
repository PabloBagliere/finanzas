'use client';

import Link from 'next/link';
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  BadgeDelta,
  Flex,
  Metric,
  Divider,
} from '@tremor/react';

import { DonutGastos } from '@/components/DonutGastos';
import { buttonVariants } from '@/components/ui/button';
import { TableGastosDasboard } from '@/components/TableGastosDasboard';

export default function Dasboard() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Sueldo Pesos</Text>
                    <Metric>$ 200,000</Metric>
                  </div>
                  <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                </Flex>
                <Divider />
                <Flex>
                  <div>
                    <Text>Sueldo Dolares</Text>
                    <Metric>$ 100,000</Metric>
                  </div>
                  <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                </Flex>
                <Divider />
                <Link href="/sueldo" className={buttonVariants({ variant: 'link' })}>
                  Ver historial
                </Link>
              </Card>
              <DonutGastos />
              <Card>
                <Flex>
                  <div>
                    <Text>Precio dolar compra</Text>
                    <Metric>$ 780,00</Metric>
                  </div>
                  <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                </Flex>
                <Divider />
                <Flex>
                  <div>
                    <Text>Precio dolar Venta</Text>
                    <Metric>$ 750,00</Metric>
                  </div>
                  <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                </Flex>
                <Divider />
                <Link href="/dolar" className={buttonVariants({ variant: 'link' })}>
                  Ver historial
                </Link>
              </Card>
            </Grid>
            <div className="mt-6">
              <TableGastosDasboard />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
