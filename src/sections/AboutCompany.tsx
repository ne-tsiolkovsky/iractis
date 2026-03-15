"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface AccordionBlock {
  title: string;
  id: string;
}

const BLOCKS: AccordionBlock[] = [
  { title: "О компании", id: "about-company" },
  { title: "Команда", id: "team" },
  { title: "История", id: "history" },
  { title: "Партнёрство", id: "partnership" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={cn("shrink-0 transition-transform duration-300", open && "rotate-180")}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionPanel({ id, open, children }: { id: string; open: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div
      id={id}
      role="region"
      style={{ height, overflow: "hidden", transition: "height 0.35s ease-in-out" }}
    >
      <div ref={contentRef} className="px-6 pb-6 pt-0">
        {children}
      </div>
    </div>
  );
}

function BlockAboutCompany() {
  return (
    <>
      <p className="mb-4 text-text-secondary leading-relaxed">
        Ирактис — российская технологическая компания, специализирующаяся на разработке
        корпоративных систем управления проектами и процессами. Наш флагманский продукт обеспечивает
        полный функциональный паритет с Atlassian Jira Data Center, адаптированный под требования
        российских предприятий и стандартов безопасности.
      </p>
      <p className="mb-4 text-text-secondary leading-relaxed">
        Компания основана в 2022 году командой инженеров и архитекторов с опытом работы
        в Atlassian, JetBrains, Luxoft, Redmadrobot и других технологических компаниях.
      </p>
      <p className="text-text-secondary leading-relaxed">
        <span className="text-text-primary font-medium">Миссия: </span>
        Формировать независимую экосистему управления проектами и DevOps-процессами,
        объединяющую российских разработчиков, интеграторов и корпоративных заказчиков.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["Финансы и банки", "Телеком и ИТ", "Промышленность", "Госсектор"].map((s) => (
          <div key={s} className="rounded-lg border border-border px-3 py-2 text-center text-xs text-text-muted">
            {s}
          </div>
        ))}
      </div>
    </>
  );
}

function BlockTeam() {
  return (
    <>
      <p className="mb-4 text-text-secondary leading-relaxed">
        Более 40 специалистов с опытом проектирования и внедрения enterprise-систем.
        Наши разработчики и архитекторы участвовали в создании и интеграции Jira, ServiceNow,
        HP ALM и других решений для российских и международных компаний.
      </p>
      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-text-primary">Ключевые компетенции:</p>
        <ul className="space-y-1.5 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Проектирование высоконагруженных и отказоустойчивых систем (HA, DR, Clustering)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Разработка на Java, Spring Boot, React, PostgreSQL, Kafka
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Соответствие требованиям ФСТЭК и ФЗ-152
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Опыт внедрений в корпоративном и государственном секторах
          </li>
        </ul>
      </div>
      <p className="text-text-secondary leading-relaxed">
        Мы соединяем инженерную культуру международного масштаба с локальным фокусом
        на безопасность, импортонезависимость и развитие экосистемы on-prem решений.
      </p>
    </>
  );
}

function BlockHistory() {
  return (
    <>
      <p className="mb-5 text-text-secondary leading-relaxed">
        После ухода Atlassian с российского рынка в 2022 году тысячи компаний остались
        без поддержки и обновлений ключевых инструментов. Эта ситуация стала отправной
        точкой создания Ирактис.
      </p>
      <div className="space-y-3">
        {[
          { year: "2022", text: "Запуск проекта, первая версия с поддержкой API Jira Server" },
          { year: "2023", text: "Выпуск Data Center Edition с кластеризацией, LDAP и SSO" },
          { year: "2024", text: "Интеграция с отечественными DevOps-решениями (GitLab CE, Nexus, Telegram)" },
          { year: "2025", text: "Микросервисная архитектура, резидент ИТ-парка Казани, реестр стартапов РТ, аккредитация ИТ-компании" },
        ].map((item) => (
          <div key={item.year} className="flex gap-4">
            <span className="shrink-0 font-mono text-sm font-bold text-accent">{item.year}</span>
            <p className="text-sm text-text-secondary">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-muted">
        Ведётся работа по включению решения в реестр российского ПО и получению сертификации ФСТЭК.
      </p>
    </>
  );
}

function BlockPartnership() {
  return (
    <>
      <p className="mb-4 text-text-secondary leading-relaxed">
        Ирактис сотрудничает с ведущими российскими разработчиками и интеграторами
        в областях DevOps, информационной безопасности и инфраструктурных решений.
        Вместе формируем экосистему импортонезависимого ПО.
      </p>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium text-text-primary">Партнёрские направления:</p>
          <ul className="space-y-1.5 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Производители отечественных ОС и СУБД
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Поставщики DevOps-инструментов и CI/CD
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Системные интеграторы и центры компетенций
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-text-primary">Форматы взаимодействия:</p>
          <ul className="space-y-1.5 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              OEM и white-label решения
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Совместные интеграции и пилоты
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Инвестиции и развёртывание на собственных мощностях
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const CONTENT_MAP: Record<string, React.FC> = {
  "about-company": BlockAboutCompany,
  team: BlockTeam,
  history: BlockHistory,
  partnership: BlockPartnership,
};

export default function AboutCompany() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-section font-bold text-text-primary mb-4">
            О компании Ирактис
          </h2>
          <p className="text-body">
            Российские продукты корпоративного уровня. Экосистема, построенная
            на принципах цифрового суверенитета и инженерного совершенства.
          </p>
        </div>

        <div className="space-y-2">
          {BLOCKS.map((block, i) => {
            const isOpen = openIndex === i;
            const Content = CONTENT_MAP[block.id];
            return (
              <div
                key={block.id}
                className="rounded-2xl border border-border bg-surface/50 overflow-hidden transition-colors duration-300 hover:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${block.id}`}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span className="text-base font-semibold text-text-primary sm:text-lg">
                      {block.title}
                    </span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>

                <AccordionPanel id={`panel-${block.id}`} open={isOpen}>
                  <Content />
                </AccordionPanel>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
