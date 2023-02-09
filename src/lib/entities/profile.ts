export type Profile = {
  name: string;
  title: string;
  photo: string;
  city: string;
  email: string;
  social: {
    linkedin: {
      name: string;
      link: string;
    };
    github: {
      name: string;
      link: string;
    };
  };
}