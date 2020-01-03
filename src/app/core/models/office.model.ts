import { Employer } from './employer.model';

export interface Office {
    id: number;
    slug: string;
    name: string;
    location: string;
    employer: Employer;
}
