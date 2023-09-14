"use client";
import { Cases, Countries } from "@/app/page";
import { Select } from "@/components/Select";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

interface InputsProps {
  data?: Cases[];
  title: string;
  country?: Countries[];
}

export default function Input({ data, title, country }: InputsProps) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(() => console.log("oi"))}
      className="flex w-full gap-2"
    >
      <Select
        label={title}
        register={register("brand")}
        defaultValues="Escolha uma opção"
      >
        {country
          ? country!.map((states, index) => {
              return (
                <option key={index} value={states.country}>
                  {states.country}
                </option>
              );
            })
          : data!.map((states, index) => {
              return (
                <option key={index} value={states.state}>
                  {states.state}
                </option>
              );
            })}
      </Select>
    </form>
  );
}
