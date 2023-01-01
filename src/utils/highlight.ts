export function getHighlighter(languages: any, key: string) {
    const language = languages.find((language: any) => language.key === key);
    return language ? language.highlighter : null;
}