export interface TitleTextModel {
    title: string;
    content?: string;
}

export interface QuizContentModel {
    title: string;
    subtitle: string;
    data: SimpleValueName[];
}

export interface DataProductModel {
    title: string;
    content: string;
    products: ProductBlock[];
}

interface SimpleValueName {
    value: number;
    name: string;
}
interface ProductBlock {
    title: string;
    content: string;
}
