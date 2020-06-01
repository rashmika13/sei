// module.exports = "Hello, World!"
// console.log(module);

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
  if (dayNo < 0 || dayNo > 6) { dayNo = 0 }
  return module.exports.weekdays[dayNo];
}
