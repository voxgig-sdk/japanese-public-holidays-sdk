export interface Jpn {
    date: string;
    kind: string;
    name: Record<string, any>;
    weekday?: string;
}
export interface JpnListMatch {
    date?: string;
    kind?: string;
    name?: Record<string, any>;
    weekday?: string;
}
export interface Year {
    date: string;
    kind: string;
    name: Record<string, any>;
    weekday?: string;
}
export interface YearListMatch {
    year: number;
}
