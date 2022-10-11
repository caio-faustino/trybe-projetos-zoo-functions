const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const eightToSix = 'Open from 8am until 6pm';
const tenToEight = 'Open from 10am until 8pm';

function days(day) {
  const exhibition = [];
  species.forEach((ele) => {
    ele.availability.forEach((el) => {
      if (el === day) {
        return exhibition.push(ele.name);
      }
    });
  });
  return exhibition;
}

const scheduleDays = {
  Tuesday: { officeHour: eightToSix, exhibition: days('Tuesday') },
  Wednesday: { officeHour: eightToSix, exhibition: days('Wednesday') },
  Thursday: { officeHour: tenToEight, exhibition: days('Thursday') },
  Friday: { officeHour: tenToEight, exhibition: days('Friday') },
  Saturday: { officeHour: 'Open from 8am until 10pm', exhibition: days('Saturday') },
  Sunday: { officeHour: 'Open from 8am until 8pm', exhibition: days('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function wknd(day) {
  switch (day) {
  case 'Saturday':
    return { Saturday: scheduleDays.Saturday };
  case 'Sunday':
    return { Sunday: scheduleDays.Sunday };
  case 'Monday':
    return { Monday: scheduleDays.Monday };
  default:
    return scheduleDays;
  }
}

function schedule(day) {
  switch (day) {
  case 'Tuesday':
    return { Tuesday: scheduleDays.Tuesday };
  case 'Wednesday':
    return { Wednesday: scheduleDays.Wednesday };
  case 'Thursday':
    return { Thursday: scheduleDays.Thursday };
  case 'Friday':
    return { Friday: scheduleDays.Friday };
  default: return wknd(day);
  }
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return schedule();
  const allDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const animal = species.find((e) => e.name === scheduleTarget);
  const day = allDays.find((e) => e === scheduleTarget);
  if (animal !== undefined) {
    return animal.availability;
  }
  if (day !== undefined) {
    return schedule(scheduleTarget);
  }
  return schedule();
}

module.exports = getSchedule;
