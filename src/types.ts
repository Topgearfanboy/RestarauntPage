export interface Settings {
  Theme: { Primary: String };
  General: {
    Name: String;
    PhoneNumber: String;
    Address: String;
    TagLine: String;
    SocialMedia?: { Instagram?: String; X?: String; Facebook?: String };
  };
  Words: {
    Menu: String;
    Address: String;
    SocialMedia: String;
    Instagram: String;
    X: String;
    Facebook: String;
  };
  Dishes: { Name: String; Description: String; Price: String }[];
  Hours: Hours[];
}

export interface Hours {
  Day: string;
  Opening: { Hour: number; minutes: number };
  Closing: { Hour: number; minutes: number };
}
