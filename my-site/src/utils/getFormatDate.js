export default function (timestamp, isDetail = false) {
    const date = new Date(+timestamp)


    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    let formatDate = year + '-' + month + '-' + day
    if (isDetail) {
        const hour = date.getHours().toString().padStart(2,'0');
        const min = date.getMinutes().toString().padStart(2,'0');
        const sec = date.getSeconds().toString().padStart(2,'0');
        formatDate = formatDate + ' ' + ' '+hour + ':' + min + ":" + sec;
    }
    return formatDate;


}