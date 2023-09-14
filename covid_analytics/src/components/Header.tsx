import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-col gap-4 items-center justify-center my-5">
      <Image src="/slogan.jpeg" alt="Slogan" width={80} height={80} />
      <h1 className="font-extrabold text-3xl">Covid Analytics</h1>
    </header>
  );
}
