import clsx from "clsx";
import logoBbc from "@/images/logos/bbc.svg";
import logoCbs from "@/images/logos/cbs.svg";
import logoCnn from "@/images/logos/cnn.svg";
import logoFastCompany from "@/images/logos/fast-company.svg";
import logoForbes from "@/images/logos/forbes.svg";
import logoHuffpost from "@/images/logos/huffpost.svg";
import logoTechcrunch from "@/images/logos/techcrunch.svg";
import logoWired from "@/images/logos/wired.svg";
import Image from "next/image";

const ExtraLogos = () => {
  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        As featured in
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
      >
        {[
          ["Forbes", logoForbes],
          ["TechCrunch", logoTechcrunch],
          ["Wired", logoWired],
          ["CNN", logoCnn, "hidden xl:block"],
          ["BBC", logoBbc],
          ["CBS", logoCbs],
          ["Fast Company", logoFastCompany],
          ["HuffPost", logoHuffpost, "hidden xl:block"],
        ].map(([name, logo, className]) => (
          <li key={name} className={clsx("flex", className)}>
            <Image src={logo} alt={name} className="h-8" unoptimized />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraLogos;
