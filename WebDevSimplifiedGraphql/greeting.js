const greeting = (hours, chalk) => {
  let greet;
  const warn = [
    chalk.yellow(
      "Work hard and push your fucking limits every moment.".toUpperCase()
    ),
    chalk.red(
      "You have to be better every day for your fucking Goals!".toUpperCase()
    ),
    // chalk.green("Work hard and push your fucking limits.".toUpperCase()),
    // chalk.yellow("And please do not forget your fucking Goals".toUpperCase()),
    // chalk.red("You have to Do a better fucking shit every Day!".toUpperCase()),
  ];
  if (hours < 3) {
    greet = [chalk.green("Happy New Day Sir!\nPlease Go to Sleep Sir!")];
  } else if (hours < 7) {
    greet = [chalk.green("Good early Morning Sir!")];
  } else if (hours < 11) {
    greet = [chalk.green("Good Morning Sir!")];
  } else if (hours < 15) {
    greet = [chalk.green("Good Afternoon Sir!")];
  } else if (hours < 19) {
    greet = [chalk.green("Good Evening Sir!")];
  } else if (hours < 24) {
    return warn;
  }
  return [...greet, ...warn];
};

const logGreeting = (chalk, Port) => {
  const result = greeting(new Date().getHours(), chalk);
  console.log(chalk.cyan(`\n\n\nHey Billionaire`));
  result.map((res) => console.log(res));
  console.log(chalk.magenta(`\nServing on http://localhost:${Port}`));
};

exports.greeting = greeting;
exports.logGreeting = logGreeting;
