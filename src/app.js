function makeReservation() {
    const timeInput = document.getElementById('time').value;
    if (timeInput) {
        const reservationTime = dayjs().startOf('day').add(dayjs.duration(timeInput)).format('HH:mm');
        document.getElementById('result').textContent = `予約時間: ${reservationTime}`;
    } else {
        document.getElementById('result').textContent = '時間を選択してください。';
    }
}
