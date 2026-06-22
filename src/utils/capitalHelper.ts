
// helper to capitalize the first letter of a string for pokemon names and types
export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
