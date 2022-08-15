// import {ReactNode} from "react";
//
//
// export interface PageItem {
//     children?: ReactNode;
//     alias:string;
//     title: string;
//     _id: string;
//
// }
//
// export interface MenuItem {
//     id:number;
//     secondCategory: string;
//     pages: PageItem[];
//
// }


//новый json
export interface MenuItem {
    total:      number;
    totalPages: number;
    items: PageItem[];
}

export interface  PageItem{
    kinopoiskId:      number;
    imdbId:           string;
    nameRu:           string;
    nameEn:           null;
    nameOriginal:     string;
    countries:        Country[];
    genres:           Genre[];
    ratingKinopoisk:  number;
    ratingImdb:       number;
    year:             number;
    type:             string;
    posterUrl:        string;
    posterUrlPreview: string;
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

