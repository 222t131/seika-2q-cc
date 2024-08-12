function onsubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);

    if (!name || !date || !time) {
        alert("すべてのフィールドに入力してください。");
        return;
    }

    const formattedDate = dayjs(date).format('YYYY年M月D日');
    const formattedTime = time;

    console.log('Formatted Date:', formattedDate);
    console.log('Formatted Time:', formattedTime);
}
