import Showdown from "showdown";

const converter = new Showdown.Converter();

export function createMarkup(object) {
    return { __html: converter.makeHtml(object) };
}
