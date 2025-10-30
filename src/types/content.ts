/**
 * Content Type Definitions
 *
 * These interfaces define the structure of content managed in the /content directory
 * and will be used by both file-based and CMS-based content systems.
 */

// Band Profile Types
export interface BandProfile {
  id: string;
  name: string;
  tagline: string;
  genre: string;
  established: string;
  theme: BandTheme;
  seo: BandSEO;
  branding: BandBranding;
}

export interface BandTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  animationIntensity: "minimal" | "moderate" | "full";
  particleEffects: boolean;
  glowEffects: boolean;
}

export interface BandSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
}

export interface BandBranding {
  logoMain: string;
  logoIcon: string;
  favicon: string;
  logoLight?: string;
  logoDark?: string;
}

// About Content Types
export interface AboutContent {
  title: string;
  descriptions: {
    short: string;
    medium: string;
    long: string;
  };
  story?: {
    founding: string;
    mission: string;
    vision: string;
  };
  members?: BandMember[];
  achievements?: Achievement[];
}

export interface BandMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Achievement {
  year: string;
  achievement: string;
}

// Social Media Types
export interface SocialContent {
  platforms: SocialPlatforms;
  preferredOrder: string[];
  displaySettings: {
    showInHeader: boolean;
    showInFooter: boolean;
    showInContact: boolean;
  };
}

export interface SocialPlatforms {
  [key: string]: SocialPlatform;
}

export interface SocialPlatform {
  url: string;
  handle?: string;
  channelId?: string;
  artistId?: string;
  active: boolean;
}

// Contact Types
export interface ContactContent {
  primary: ContactInfo;
  booking?: ContactInfo;
  press?: ContactInfo;
  management?: ManagementInfo;
  location?: LocationInfo;
  office?: OfficeInfo;
  responseTime: string;
  preferredContact: "email" | "phone" | "form";
}

export interface ContactInfo {
  email: string;
  phone?: string;
  phoneDisplay?: string;
  contactPerson?: string;
}

export interface ManagementInfo extends ContactInfo {
  company?: string;
}

export interface LocationInfo {
  city: string;
  state?: string;
  country: string;
  timezone?: string;
}

export interface OfficeInfo {
  address: string;
  city: string;
  state?: string;
  zip: string;
  country: string;
  showOnWebsite: boolean;
}

// Shows/Tour Types
export interface ShowsContent {
  upcoming: Show[];
  past?: Show[];
  settings: ShowSettings;
}

export interface Show {
  id: string;
  date: string;
  time: string;
  venue: Venue;
  ticketUrl?: string;
  soldOut?: boolean;
  featured?: boolean;
  description?: string;
}

export interface Venue {
  name: string;
  city: string;
  state?: string;
  country: string;
  address?: string;
  capacity?: number;
}

export interface ShowSettings {
  showPastShows: boolean;
  maxUpcomingDisplay: number;
  maxPastDisplay: number;
  autoArchiveAfterDays: number;
}

// Complete Band Content
export interface BandContent {
  profile: BandProfile;
  about: AboutContent;
  social: SocialContent;
  contact: ContactContent;
  shows: ShowsContent;
}

// Media Assets Types
export interface MediaAssets {
  backgrounds: {
    hero?: string[];
    about?: string[];
    shows?: string[];
    contact?: string[];
    gallery?: string[];
  };
  gallery: string[];
  videos?: string[];
  logos: {
    main: string;
    icon: string;
    favicon: string;
    light?: string;
    dark?: string;
  };
}

// Content Loading State
export interface ContentLoadState {
  loading: boolean;
  error: Error | null;
  data: BandContent | null;
}

// CMS Content Source
export type ContentSource = "file" | "api" | "cms";

export interface ContentConfig {
  source: ContentSource;
  bandId?: string;
  apiUrl?: string;
  fallbackToFile?: boolean;
}
