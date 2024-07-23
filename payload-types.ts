/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    links: Link;
    'community-prizes': CommunityPrize;
    prizes: Prize;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    homepage: Homepage;
    header: Header;
    footer: Footer;
    config: Config1;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
  };
  login: {
    password: string;
    email: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "links".
 */
export interface Link {
  id: string;
  url: string;
  type: 'internal' | 'external';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "community-prizes".
 */
export interface CommunityPrize {
  id: string;
  heading: string;
  title: string;
  subtitle: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "prizes".
 */
export interface Prize {
  id: string;
  heading: string;
  title: string;
  description: string;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: string;
  hero: {
    title: string;
    description: string;
    timerTitle: string;
    buttons?:
      | {
          label: string;
          link: string | Link;
          id?: string | null;
        }[]
      | null;
  };
  aboutLeague: {
    heading: string;
    title: string;
    description: string;
    buttons?:
      | {
          label: string;
          link: string | Link;
          id?: string | null;
        }[]
      | null;
  };
  questions: {
    heading: string;
    title: string;
    description: string;
    buttons?:
      | {
          label: string;
          link: string | Link;
          id?: string | null;
        }[]
      | null;
    items?:
      | {
          question: string;
          answer: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          };
          answerHtml?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  prizes: {
    heading: string;
    title: string;
    description: string;
    items?: (string | Prize)[] | null;
  };
  communityPrizes: {
    title: string;
    description: string;
    items?: (string | CommunityPrize)[] | null;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navigation: {
    label: string;
    link: string | Link;
    id?: string | null;
  }[];
  callToAction: {
    label: string;
    link: string | Link;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  title: string;
  description: string;
  buttons?:
    | {
        label: string;
        link: string | Link;
        id?: string | null;
      }[]
    | null;
  contact: {
    title: string;
    email: string;
  };
  socialMedia?:
    | {
        name: string;
        link: string | Link;
        icon: string | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "config".
 */
export interface Config1 {
  id: string;
  googleAnalyticsId?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}