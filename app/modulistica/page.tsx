'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sour_Gummy } from "next/font/google";
import ModuleRow from "@/components/atoms/module-row/ModuleRow";
import classes from "./page.module.scss";
import PageHeader from "@/components/atoms/page-header/PageHeader";

const sour_gummy = Sour_Gummy({ subsets: ["latin"] });

type Module = { text: string; url: string };
type Section = { title: string; modules: Module[] };

const sections: Section[] = [
    {
        title: "Calendario",
        modules: [
            {
                text: "Calendario scolastico 2026-2027",
                url: "/documents/calendars/calendario-scolastico-2026-2027.pdf",
            },
        ],
    },
    {
        title: "Iscrizioni",
        modules: [
            {
                text: "Iscrizione 2026-2027",
                url: "/documents/subscriptions/modulo-iscrizione-26-27.pdf",
            },
            {
                text: "Modulo di ritiro",
                url: "/documents/subscriptions/modulo-ritiro.pdf",
            },
        ],
    },
    {
        title: "Giustifiche",
        modules: [
            {
                text: "Giustificazione di assenza",
                url: "/documents/justifications/giustificazione-assenze.pdf",
            },
        ],
    },
    {
        title: "Deleghe",
        modules: [
            {
                text: "Delega per il ritiro del bambino",
                url: "/documents/delegations/delega-ritiro.pdf",
            },
        ],
    },
    {
        title: "Diete",
        modules: [
            {
                text: "Informazioni sull'alimentazione",
                url: "/documents/diets/info-alimentazione.pdf",
            },
            {
                text: "Richiesta dieta per allergie ed intolleranze",
                url: "/documents/diets/moduli-diete-speciali.pdf",
            },
            {
                text: "Richiesta dieta per motivi etico-religiosi",
                url: "/documents/diets/motivi-etico-religiosi.pdf",
            },
        ],
    },
    {
        title: "Lettere",
        modules: [
            {
                text: "Lettera di ambientamento",
                url: "/documents/letters/lettera-di-ambientamento.pdf",
            },
        ],
    },
    {
        title: "Salute",
        modules: [
            {
                text: "Manuale prevenzione malattie infettive",
                url: "/documents/health/Manuale-PrevenzioneMalattie-Infettive-della-Regione-Veneto.pdf",
            },
            {
                text: "Richiesta di somministrazione farmaci",
                url: "/documents/health/MODELLO-A1-somministrazione-farmaci.pdf",
            },
            {
                text: "Prescrizione del medico curante alla somministrazione di farmaci in ambito scolastico",
                url: "/documents/health/MODELLO-A2-Richiesta-medico.pdf",
            },
            {
                text: "Liberatoria",
                url: "/documents/health/MODELLO-A3-liberatoria.pdf",
            },
            {
                text: "Procedura latte materno",
                url: "/documents/health/procedura-latte-materno.pdf",
            },
        ],
    },
];

const ALL_CATEGORIES = "Tutte le categorie";

const ModulesPage = () => {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<string>(ALL_CATEGORIES);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        function onEsc(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    const options = [ALL_CATEGORIES, ...sections.map((s) => s.title)];

    const filteredSections = useMemo(() => {
        const q = query.trim().toLowerCase();
        return sections
            .filter((section) =>
                category === ALL_CATEGORIES ? true : section.title === category
            )
            .map((section) => ({
                ...section,
                modules: q
                    ? section.modules.filter((m) =>
                          m.text.toLowerCase().includes(q)
                      )
                    : section.modules,
            }))
            .filter((section) => section.modules.length > 0);
    }, [query, category]);

    return (
        <main>
            <PageHeader title="Modulistica" />
            <div className={classes.pageContent}>
                <div className={classes.toolbar}>
                    <input
                        type="text"
                        className={`${classes.searchBar} ${sour_gummy.className}`}
                        placeholder="Cerca un documento..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Cerca un documento"
                    />
                    <div
                        className={classes.dropdown}
                        ref={dropdownRef}
                    >
                        <button
                            type="button"
                            className={`${classes.dropdownTrigger} ${sour_gummy.className} ${open ? classes.open : ""}`}
                            onClick={() => setOpen((v) => !v)}
                            aria-haspopup="listbox"
                            aria-expanded={open}
                        >
                            <span className={classes.dropdownLabel}>{category}</span>
                            <motion.svg
                                className={classes.chevron}
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                animate={{ rotate: open ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    d="M1 1.5L6 6.5L11 1.5"
                                    stroke="#5c5c5c"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </button>
                        <AnimatePresence>
                            {open && (
                                <motion.ul
                                    className={classes.dropdownMenu}
                                    role="listbox"
                                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {options.map((opt) => (
                                        <li
                                            key={opt}
                                            role="option"
                                            aria-selected={category === opt}
                                            className={`${classes.dropdownItem} ${sour_gummy.className} ${
                                                category === opt ? classes.selected : ""
                                            }`}
                                            onClick={() => {
                                                setCategory(opt);
                                                setOpen(false);
                                            }}
                                        >
                                            {opt}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                {filteredSections.length === 0 ? (
                    <p className={classes.noResults}>
                        Nessun documento corrisponde alla ricerca.
                    </p>
                ) : (
                    filteredSections.map((section) => (
                        <motion.div
                            key={section.title}
                            className={classes.linksContainer}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <h2>{section.title}</h2>
                            <AnimatePresence initial={false}>
                                {section.modules.map((m, idx) => (
                                    <motion.div
                                        key={m.url}
                                        layout
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 16 }}
                                        transition={{
                                            duration: 0.25,
                                            delay: idx * 0.04,
                                        }}
                                    >
                                        <ModuleRow text={m.text} url={m.url} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ))
                )}
            </div>
        </main>
    );
};

export default ModulesPage;
