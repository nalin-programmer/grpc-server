export interface INumberArray { //      <--
    data: number[]; //             <--   Add these
} //                             <--   two
export interface ISumOfNumberArray { // <--   interfaces
    sum: number; //                <--
} // 

export interface IPersonId{
    id: string;
    name: string;
    mis: number;
}

export interface IString{
    data :string;
}

export interface IHealth{
    status: string;
}

export interface NoArgs{}