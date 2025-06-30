export interface Group {
  id: number;
  name: string;
  description: string;
  level: string;
  maxMembers: number;
  currentMembers: number;
  topics: string[];
  createdBy: string;
  createdDate: string;
}

export interface GroupMember {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  languageLevel?: string;
  techLevel?: number;
  isFormerDwwn?: boolean;
  profile?: string;
  age?: number;
}
