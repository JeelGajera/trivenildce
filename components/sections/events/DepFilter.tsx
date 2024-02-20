"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  departments: {
    slug: string;
    entry: {
      name: string;
    };
  }[];
};

function DepFilter({ departments }: Props) {
  const searchParams = new URLSearchParams(useSearchParams());
  const selectedValues = searchParams.get("d")?.split(",") || [];
  const pathname = usePathname();
  const { replace } = useRouter();

  function clearFilters() {
    searchParams.delete("d");
    replace(`${pathname}?${searchParams.toString()}`);
  }

  function onSelect(slug: string) {
    if (searchParams.has("d")) {
      const d = searchParams.get("d")?.split(",") || [];
      if (d.includes(slug)) {
        d.splice(d.indexOf(slug), 1);
      } else {
        d.push(slug);
      }
      searchParams.set("d", d.join(","));
    } else {
      searchParams.set("d", slug);
    }
    replace(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div className="dark">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Departments
            {selectedValues?.length > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden"
                >
                  {selectedValues.length}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedValues.length > 2 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                    >
                      {selectedValues.length} selected
                    </Badge>
                  ) : (
                    departments
                      .filter(
                        (department) =>
                          selectedValues.findIndex(
                            (val) => val === department.slug
                          ) > -1
                      )
                      .map((department) => (
                        <Badge
                          variant="secondary"
                          key={department.slug}
                          className="rounded-sm px-1 font-normal"
                        >
                          {department.slug}
                        </Badge>
                      ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Departments" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {departments.map((department) => {
                  const isSelected =
                    selectedValues.findIndex((val) => val === department.slug) >
                    -1;
                  return (
                    <CommandItem
                      key={department.slug}
                      onSelect={() => onSelect(department.slug)}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <CheckIcon className={cn("h-4 w-4")} />
                      </div>

                      <span>{department.entry.name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              {selectedValues.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={clearFilters}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DepFilter;
