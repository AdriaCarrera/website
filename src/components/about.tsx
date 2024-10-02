export function About(): JSX.Element {
  return (
    <section className="px-4 py-8 md:px-20 md:py-[100px] flex flex-col gap-4 md:gap-[42px]">
      <p className="font-bold text-xl md:text-[40px]">About</p>
      <p className="text-xs md:text-xl">
        XRPL EVM Sidechain is a fast and secure sidechain connected to XRP Ledger via an Axelar bridge. Powered by eXRP as its native token,
        it offers low-cost transactions and impressive speed.
      </p>

      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-[100px]">
        <div className="bg-[#111112] p-4 md:p-8 flex flex-1 flex-col items-center gap-4 md:gap-6 border-[0.75px] border-white">
          <p className="text-xl md:text-[40px] font-semibold">{`<$0.01`}</p>
          <p className="text-sm md:text-xl">Cost per transaction</p>
        </div>
        <div className="bg-[#111112] p-4 md:p-8 flex flex-1 flex-col items-center gap-4 md:gap-6 border-[0.75px] border-white">
          <p className="text-xl md:text-[40px] font-semibold">{`> 1,000`}</p>
          <p className="text-sm md:text-xl">TPS</p>
        </div>
        <div className="bg-[#111112] p-4 md:p-8 flex flex-1 flex-col items-center gap-4 md:gap-6 border-[0.75px] border-white">
          <p className="text-xl md:text-[40px] font-semibold">3-5s</p>
          <p className="text-sm md:text-xl">Average block time</p>
        </div>
      </div>
    </section>
  );
}
