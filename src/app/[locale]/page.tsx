import SpinnerWork from "@/components/SpinnerWork/SpinnerWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 min-h-screen">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Meu Portfolio</h1>
        </div>
      </div>
      <div className="fixed inset-0 flex items-end justify-end pb-10 px-10">
        <SpinnerWork />
      </div>
    </div>
  );
}
