"use client";

import { useCallback, useRef, useTransition } from "react";
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

const languageNames: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  uk: "Українська",
};

export default function LanguageSelector() {
  const t = useTranslations("Index");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { locale, setLocale } = useLocaleContext();
  const { setIsOpen } = useNavigationContext();
  const closeDrawerAfterMenu = useRef(false);

  const handleLanguageChange = useCallback(
    (lang: Locale) => {
      setLocale(lang);
      closeDrawerAfterMenu.current = true;
      startTransition(() => router.refresh());
    },
    [router, setLocale],
  );

  // The drawer must close only after this menu has unmounted. Closing both
  // Radix layers in one render leaves `pointer-events: none` on <body>.
  const handleMenuCloseAutoFocus = useCallback(
    (event: Event) => {
      if (!closeDrawerAfterMenu.current) return;

      closeDrawerAfterMenu.current = false;
      event.preventDefault();
      setIsOpen(false);
    },
    [setIsOpen],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex h-11 items-center gap-2 border-ink/15 bg-transparent text-ink hover:bg-darkgreen hover:text-paper"
          variant="outline"
          disabled={isPending}
        >
          <IoLanguage size={18} aria-hidden="true" />
          <span className="sr-only">{t("change_language")}: </span>
          {languageLabels[locale]}
          <span className="sr-only" lang={locale}>
            , {languageNames[locale]}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        onCloseAutoFocus={handleMenuCloseAutoFocus}
      >
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            role="menuitemradio"
            aria-checked={locale === lang}
            onClick={() => handleLanguageChange(lang)}
            className="flex items-center gap-2"
          >
            <span className="text-ink">{languageLabels[lang]}</span>
            <span className="sr-only" lang={lang}>
              , {languageNames[lang]}
            </span>
            {locale === lang && (
              <span
                aria-hidden="true"
                className="ml-auto text-darkgreen text-xs"
              >
                ✓
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
