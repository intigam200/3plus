import { getTranslations } from "next-intl/server";
import Image from "next/image";

const LOGOS = [
  { key: "sweetbird", src: "/images/logos/Sweetbird-Logo_black.png", width: 160, height: 40 },
  { key: "zuma", src: "/images/logos/zuma.png", width: 120, height: 48 },
  {
    key: "thebridge",
    src: "/images/logos/logo-thebridge-horizontal-opt.png",
    width: 170,
    height: 40,
  },
] as const;

export async function BrandsMarquee() {
  const t = await getTranslations("marquee");
  const track = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-[#E8E8E3] bg-white py-10">
      <p className="mx-auto mb-6 max-w-content px-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-graphite/40 md:px-10 lg:px-16">
        {t("label")}
      </p>

      <div
        className="group relative mx-auto flex max-w-content overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {track.map((logo, index) => (
            <div
              key={`${logo.key}-${index}`}
              className="relative h-8 shrink-0 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              style={{ width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.key}
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
