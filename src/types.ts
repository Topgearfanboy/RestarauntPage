export interface Settings {
  General: {
    Name: String;
    PhoneNumber: String;
    Address: String;
    TagLine: String;
  };
  Dishes: { Name: String; Description: String; Price: String }[];
  Hours: {
    Sunday: Hours;
    Monday: Hours;
    Tuesday: Hours;
    Wednesday: Hours;
    Thursday: Hours;
    Friday: Hours;
    Saturday: Hours;
  };
}
export interface Hours {
  Opening: { Hour: number; minutes: number };
  Closing: { Hour: number; minutes: number };
}
