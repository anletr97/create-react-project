export default class DateUtils {
  /**
   * Get all days in a specific month
   * @param year The year
   * @param month The Month
   * @returns List
   */
  static getDaysInMonth = (year: any, month: any) => {
    // Get all date in specific month
    let dates = new Array(31)
      .fill("")
      .map((v, i) => new Date(year, month - 1, i + 1))
      .filter((v) => v.getMonth() === month - 1);

    // Get some information and create new day info
    let days = [];
    for (let i = 0; i < dates.length; i++) {
      // You can add more info if you want
      const date = {
        day: dates[i].getDate(),
        weekDay: dates[i].toString().substr(0, 1),
        // insert here
        // monthName: ...
      };
      days.push(date);
    }
    return days;
  };
}
