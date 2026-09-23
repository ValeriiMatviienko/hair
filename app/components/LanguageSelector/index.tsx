"use client";

import { useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@/app/context/localesProvider";
import { useNavigationContext } from "@/app/context/NavigationContext";
import { locales, type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  uk: "UA",
};

export default function LanguageSelector() {
  const t = useTranslations("Index");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { locale, setLocale } = useLocaleContext();
  const { setIsOpen } = useNavigationContext();

  const handleLanguageChange = useCallback(
    (lang: Locale) => {
      setLocale(lang);
      setIsOpen(false);
      startTransition(() => router.refresh());
    },
    [router, setIsOpen, setLocale],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-2 border-ink/15 bg-transparent text-ink hover:bg-darkgreen hover:text-paper"
          variant="outline"
          aria-label={t("change_language")}
          disabled={isPending}
        >
          <IoLanguage size={18} />
          {languageLabels[locale]}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className="flex items-center gap-2"
          >
            <span className="text-ink">{languageLabels[lang]}</span>
            {locale === lang && (
              <span className="ml-auto text-darkgreen text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
