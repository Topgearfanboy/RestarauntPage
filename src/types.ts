export interface Settings {
  Theme: { Primary: string; Secondary: string; Tertiary: string };
  General: {
    Name: string;
    PhoneNumber: string;
    Address: string;
    TagLine: string;
  };
  Links: {
    Reservations?: string;
    Takeout?: string;
    Instagram?: string;
    X?: string;
    Facebook?: string;
  };
  Images: { MainPage: string };
  Words: {
    Menu: string;
    Reservations: string;
    Takeout: string;
    Hours: string;
    Address: string;
    SocialMedia: string;
    Instagram: string;
    X: string;
    Facebook: string;
  };
  Menu: Section[];
  Hours: Hours[];
}

export interface Hours {
  Day: string;
  Opening: { Hour: number; minutes: number };
  Closing: { Hour: number; minutes: number };
}

export interface Section {
  Name: string;
  Dishes: Dish[];
}
export interface Dish {
  Price: number;
  Name: string;
  Description?: string;
}
