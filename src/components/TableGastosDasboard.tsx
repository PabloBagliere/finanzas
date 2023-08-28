import { Card, Divider } from '@tremor/react';
import Link from 'next/link';

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from './ui/table';
import { buttonVariants } from './ui/button';

export const TableGastosDasboard = () => {
  return (
    <Card>
      <Table>
        <TableCaption>Ultimos gastos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Divider />
      <Link href="/gastos" className={buttonVariants({ variant: 'link' })}>
        Ver historial
      </Link>
    </Card>
  );
};
