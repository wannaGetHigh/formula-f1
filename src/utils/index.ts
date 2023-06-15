const MONTH_OBJ = {
    '01': 'JAN',
    '02': 'FEB',
    '03': 'MAR',
    '04': 'APR',
    '05': 'MAY',
    '06': 'JUN',
    '07': 'JUL',
    '08': 'AUG',
    '09': 'SEP',
    '10': 'OCT',
    '11': 'NOV',
    '12': 'DEC',
}

export const convertToMonth = (dateStr: string) => {
    return MONTH_OBJ[dateStr.slice(4, 6) as keyof typeof MONTH_OBJ]
}

export const shortenMonth = (month: string) => {
    return month.slice(0, 3).toUpperCase()
}