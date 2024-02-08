"use client";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  domains: {
    slug: string;
    entry: {
      name: string;
    };
  }[];
};

function DomainsFilter({ domains }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleBadgeClick(slug: string) {
    const params = new URLSearchParams(searchParams);
    if (params.get("q") === slug) {
      params.delete("q");
    } else {
      params.set("q", slug);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex overflow-x-auto flex-shrink-0 gap-2 my-5">
      {domains.map((domain, i) => {
        return (
          <Badge
            key={domain.slug}
            variant={
              new URLSearchParams(searchParams).get("q") === domain.slug
                ? "default"
                : "outline"
            }
            className="cursor-pointer text-white whitespace-nowrap my-2"
            onClick={() => handleBadgeClick(domain.slug)}
          >
            {domain.entry.name}
          </Badge>
        );
      })}
    </div>
  );
}

export default DomainsFilter;
