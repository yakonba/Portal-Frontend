export function downloadBlob(blob: Blob, filename: string, type?: string) {
    let url = '';

    if (type)
        blob = new Blob([blob], {
            type,
        });

    url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', filename);
    link.click();
    window.URL.revokeObjectURL(url);
}
