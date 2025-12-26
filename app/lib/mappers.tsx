import { ReactNode } from "react";

type TextWithEmphasis = {
  text: string;
  emphasis?: string;
  end?: string;
};

export function renderTextWithEmphasis(item: TextWithEmphasis): ReactNode {
  return (
    <>
      {item.text}
      {"emphasis" in item && item.emphasis && <strong>{item.emphasis}</strong>}
      {"end" in item && item.end}
    </>
  );
}

type MapperProps<T> = {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
};

export function Mapper<T>({ items, renderItem, keyExtractor }: MapperProps<T>) {
  return (
    <>
      {items.map((item, index) => {
        const key = keyExtractor ? keyExtractor(item, index) : index;
        return <div key={key}>{renderItem(item, index)}</div>;
      })}
    </>
  );
}

type SectionWithItems = {
  title: string;
  items: readonly string[];
};

export type SectionMapperProps<T extends SectionWithItems> = {
  sections: readonly T[];
  renderSection: (section: T, index: number) => ReactNode;
};

export function SectionMapper<T extends SectionWithItems>({
  sections,
  renderSection,
}: SectionMapperProps<T>) {
  return <>{sections.map((section, index) => renderSection(section, index))}</>;
}

export function hasProperty<T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> {
  return key in obj;
}

export function getProperty<T extends object, K extends keyof T, V>(
  obj: T,
  key: K,
  defaultValue: V
): T[K] | V {
  return key in obj ? obj[key] : defaultValue;
}
