import moment from 'moment';

export function toDate(date: any) {
    if (!date) return '';
    return moment(date).format('DD/MM/YYYY');
}

export function toDateTime(date: any) {
    if (!date) return '';
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
}

export function toMoney(amount: number, currency?: string): string {
    if (amount == null || isNaN(amount)) return '0.00';

    try {
        var decimalCount = 2;
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const decimals = '.';
        const thousands = ',';
        const negativeSign = amount < 0 ? '-' : '';
        amount = Math.abs(Number(amount));
        let i = parseInt((amount || 0).toFixed(decimalCount)).toString();
        let j = i.length > 3 ? i.length % 3 : 0;
        return (
            (currency == 'PEN' ? 'S/ ' : currency == 'USD' ? '$ ' : '') +
            negativeSign +
            (j ? i.substr(0, j) + thousands : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
            (decimalCount
                ? decimals +
                  Math.abs(amount - parseInt(i))
                      .toFixed(decimalCount)
                      .slice(2)
                : '')
        );
    } catch (error) {
        return '';
    }
}
