

export type APIWiki = {
    query:           string;
    numberOfResults: number;
    results:         Result[];
    answers:         any[];
    corrections:     any[];
    infoBoxes:       any[];
    suggestions:     string[];
    apiUsage:        null;
}

export type Result = {
    title:     string;
    content:   string;
    url:       string;
    engine:    Engine;
    parsedUrl: null;
    template:  Template;
    engines:   Engine[];
    positions: number[];
    score:     number;
    category:  Category;
    prettyUrl: null;
    openGroup: boolean;
}

export enum Category {
    General = "general",
}

export enum Engine {
    Bing = "bing",
    Duckduckgo = "duckduckgo",
    Google = "google",
    Qwant = "qwant",
    Startpage = "startpage",
    Yahoo = "yahoo",
}

export enum Template {
    DefaultHTML = "default.html",
}

export type APINasa = {
    copyright:       string;
    date:            Date;
    explanation:     string;
    hdurl:           string;
    media_type:      string;
    service_version: string;
    title:           string;
    url:             string;
}


