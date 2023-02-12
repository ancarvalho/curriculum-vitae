import type { Education } from "./education";
import type { Profile } from "./profile";
import type { Project } from "./project";

export type Content = {
  profile: Profile;
  summary: string;
  projects: Project[];
  education: Education[];
  skills: string[];
}