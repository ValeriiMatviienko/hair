"use client";

import { useCallback } from "react";
import { useLocaleContext } from "@/app/context/localesProvider";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = ["pl", "en", "ua"] as const;
type Language = (typeof LANGUAGES)[number];

export default function LanguageSelector() {
  const { locale, setLocale, ready } = useLocaleContext();

  const handleLanguageChange = useCallback(
    (lang: Language) => {
      if (!ready) return;

      setLocale(lang);

      // persist between refreshes
      if (typeof window !== "undefined") {
        localStorage.setItem("locale", lang);
      }
    },
    [ready, setLocale]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className=" flex text-darkgreen items-center gap-2"
          variant="outline"
          aria-label="Change language"
          disabled={!ready}
        >
          <IoLanguage size={18} />
          {ready ? locale.toUpperCase() : "…"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className="flex items-center gap-2"
          >
            <span className="text-darkgreen">{lang.toUpperCase()}</span>
            {locale === lang && (
              <span className="ml-auto text-darkgreen text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
