import { Roboto_Flex } from "next/font/google";
import { IoIosSearch } from "react-icons/io";

import { api } from "@/services/api";
import { useState } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Header from "@/components/Header";

const inter = Roboto_Flex({ weight: ["700"], subsets: ["latin"] });

interface Response {
  data: Cases[];
}

export interface Cases {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  broadcast: boolean;
  comments: string;
  datetime: string;
}
interface ResponseCountries {
  data: Countries[];
}

export interface Countries {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
}

export default async function Home() {
  const response = await api.get<Response>("");
  const responseCountries = await api.get<ResponseCountries>("/countries");

  return (
    <div className={`${inter.className} font-bold flex flex-1 p-6 gap-3`}>
      <aside className="w-96 mt-6 h-fit pt-6 flex flex-col gap-5 bg-zinc-900 p-5 rounded">
        <h2 className="font-semibold text-2xl ">Filtros</h2>
        <Input data={response.data.data} title="Por estado" />
        <Input country={responseCountries.data.data} title="Por país" />
        <Input data={response.data.data} title="Por data" />
      </aside>
      <main className="flex-1  rounded mt-6 bg-gradient-to-b from-blue-900/40 from-0% to-zinc-900 to-10% text-gray-100">
        <Header />
        <ul className="grid grid-cols-4 gap-4 p-6 mt-6">
          {response.data.data.map((data: Cases) => (
            <Card
              cases={data.cases}
              deaths={data.deaths}
              state={data.state}
              suspects={data.suspects}
              key={data.uid}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
