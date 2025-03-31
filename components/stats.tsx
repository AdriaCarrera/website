import { Card } from "./ui/card";
import { ScrollAnimation } from "./ui/scroll-animation";

export function Stats() {
  return (
    <ScrollAnimation delay={0.5}>
      <div className="pt-16 w-full flex gap-4 max-w-4xl mx-auto px-4 md:px-0 justify-between">
        <Card className="px-3 py-5 md:p-4 flex flex-col items-center gap-1 w-1/3">
          <p className="text-[22px] leading-[26px] md:text-[26px] md:leading-[32px] font-semibold">{`< $0.01`}</p>
          <p className="text-base md:text-lg text-center md:text-left">Transaction cost</p>
        </Card>
        <Card className="px-3 py-5 md:p-4 flex flex-col items-center gap-1 w-1/3">
          <p className="text-[24px] leading-[28px] md:text-[26px] md:leading-[32px] font-semibold">{`> 1000`}</p>
          <p className="text-base md:text-lg text-center md:text-left">Tx per second</p>
        </Card>
        <Card className="px-3 py-5 md:p-4 flex flex-col items-center gap-1 w-1/3">
          <p className="text-[24px] leading-[28px] md:text-[26px] md:leading-[32px] font-semibold">3-5s</p>
          <p className="text-base md:text-lg text-center md:text-left">Avg. block time</p>
        </Card>
      </div>
    </ScrollAnimation>
  );
}
