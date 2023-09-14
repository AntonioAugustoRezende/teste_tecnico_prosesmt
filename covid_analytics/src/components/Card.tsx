import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

interface CardProps {
  state: string;
  suspects: number;
  deaths: number;
  cases: number;
}
export default function Card({ state, suspects, deaths, cases }: CardProps) {
  return (
    <li className="bg-white/10 p-3 flex flex-col gap-3 rounded-md hover:bg-white/20">
      <h2 className="text-xl text-center font-extrabold">{state}</h2>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow key={Math.random()}>
              <TableCell className="text-white text-lg">Suspeitos</TableCell>
              <TableCell className="text-white text-lg" align="right">
                {suspects}
              </TableCell>
            </TableRow>
            <TableRow key={Math.random()}>
              <TableCell className="text-white text-lg">Mortes</TableCell>
              <TableCell className="text-white text-lg" align="right">
                {deaths}
              </TableCell>
            </TableRow>
            <TableRow key={Math.random()}>
              <TableCell className="text-white text-lg">Casos</TableCell>
              <TableCell className="text-white text-lg" align="right">
                {cases}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </li>
  );
}
