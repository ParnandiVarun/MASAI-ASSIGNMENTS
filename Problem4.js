let task = [
  "complete project",
  "attend meeting",
  "deal with clients",
  "update code repositery",
  "review it",
];

task.shift();
task.unshift("Meeting with Manager", "Give Presentation about it");
task[5] = "Deploy it";

console.log(task);
