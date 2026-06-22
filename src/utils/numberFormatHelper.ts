
// helper to format Pokemon numbers with leading zeros - 0001
export function formatNumber(num: number): string {
        return num.toString().padStart(4, '0');   
}