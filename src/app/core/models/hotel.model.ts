import { Profile } from './profile.model';


export interface Hotel {
  id: string;
  slug: string;
  name: string;
  stars: string;
  country: string;
  company: string;
  hotelUsu: Profile[];
}