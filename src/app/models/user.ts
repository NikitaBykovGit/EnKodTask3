export enum ROLE {
  USER = 'user',
  ADMIN = 'admin'
};

export type Role = {
  label: string,
  value: ROLE
}

export const initialRole: Role[] = [
  { label: 'Пользователь', value: ROLE.USER },
  { label: 'Администратор', value: ROLE.ADMIN },
];

export enum LANGUAGE {
  RUS = 'Russian',
  ENG = 'English'
};

export type Language = {
  label: string,
  value: LANGUAGE
};

export const initialLang: Language[] = [
  { label: 'Русский', value: LANGUAGE.RUS },
  { label: 'Английский', value: LANGUAGE.ENG },
];

export type User = {
  name: string;
  surname: string;
  lang: LANGUAGE;
  role: ROLE;
  skills: string[]
}
