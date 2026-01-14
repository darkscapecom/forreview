export interface projectDt {
    id: number,
    title: string,
    image: string,
    category?: string,
    categories?: string[];
    year?: string;
    color?: string;
    colorCodeTwo?: string
    description?: string;
    rightSide?:boolean;
    isActive?:boolean;
}