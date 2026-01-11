export function isOpenNow(hoursString: string): boolean {
  try {
    if (!hoursString) return false;

    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const minute = now.getMinutes();

    const dayMap: { [key: string]: number } = {
      Pon: 1,
      Wt: 2,
      Śr: 3,
      Czw: 4,
      Pt: 5,
      Sob: 6,
      Nd: 0,
    };

    const parts = hoursString.split(",");
    for (let part of parts) {
      const match = part.match(/([A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż-]+)\s+(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})/);
      if (!match) continue;

      const [_, days, start, end] = match;
      const [startH, startM] = start.split(":").map(Number);
      const [endH, endM] = end.split(":").map(Number);

      let validDays: number[] = [];
      if (days.includes("-")) {
        const [startDay, endDay] = days.split("-");
        const startIdx = dayMap[startDay];
        const endIdx = dayMap[endDay];
        for (let i = startIdx; i <= endIdx; i++) validDays.push(i);
      } else {
        validDays = [dayMap[days]];
      }

      if (validDays.includes(day)) {
        const nowMinutes = hour * 60 + minute;
        const startMinutes = startH * 60 + startM;
        const endMinutes = endH * 60 + endM;
        if (nowMinutes >= startMinutes && nowMinutes <= endMinutes) return true;
      }
    }

    return false;
  } catch(e) {
    return false;
  }
}
