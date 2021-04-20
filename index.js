/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function createEmployeeRecord(array) {
  var obj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return obj;
}

function createEmployeeRecords(arrays) {
  return arrays.map((e) => createEmployeeRecord(e));
}

function createTimeInEvent(dateStamp) {
  let date = dateStamp.split(" ")[0];
  let hour = dateStamp.split(" ")[1];
  var obj = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  };
  this.timeInEvents.push(obj);
  return this;
}

function createTimeOutEvent(dateStamp) {
  let date = dateStamp.split(" ")[0];
  let hour = dateStamp.split(" ")[1];
  var obj = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  };
  this.timeOutEvents.push(obj);
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find((data) => data.date === date).hour;
  let timeOut = this.timeOutEvents.find((data) => data.date === date).hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function findEmployeeByFirstName(employee, firstName) {
  return employee.find((data) => data.firstName === firstName);
}

function calculatePayroll(array) {
  return array.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );
}
