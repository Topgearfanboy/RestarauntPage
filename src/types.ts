export interface Settings {
  Theme: { Primary: string };
  General: {
    Name: string;
    PhoneNumber: string;
    Address: string;
    TagLine: string;
    SocialMedia?: { Instagram?: string; X?: string; Facebook?: string };
  };
  Words: {
    Menu: string;
    Hours: string;
    Address: string;
    SocialMedia: string;
    Instagram: string;
    X: string;
    Facebook: string;
  };
  Dishes: { Name: string; Description: string; Price: string }[];
  Hours: Hours[];
}

export interface Hours {
  Day: string;
  Opening: { Hour: number; minutes: number };
  Closing: { Hour: number; minutes: number };
}
