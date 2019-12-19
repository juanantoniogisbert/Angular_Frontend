import { Employer } from './employer.model';

export interface Office {
    id: string;
    slug: string;
    name: string;
    location: string;
    employer: Employer;
}