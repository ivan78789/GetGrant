export interface Career {
  title: string;
  salary: string;
  demand: string;
  description: string;
}

export interface Program {
  id: number;
  name: string;
  field: string;
  level: string;
  duration: string;
  avgSalary: string;
  universities: number;
  image: string;
  popular?: boolean;
  careers: string[];
}

export interface ProgramDetail {
  id: number;
  name: string;
  field: string;
  level: string;
  duration: string;
  avgSalary: string;
  universities: number;
  image: string;
  popular?: boolean;
  description: string;
  careers: Career[];
  skills: string[];
  coursework: {
    year: number;
    courses: string[];
  }[];
  requirements: {
    academic: string[];
    recommended: string[];
  };
  topUniversities: {
    name: string;
    ranking: number;
    acceptance: string;
    tuition: string;
  }[];
}
