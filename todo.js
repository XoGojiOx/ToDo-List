let action = prompt(
  "What would you like to do? Enter new to add to the list, list to view the list, delete to delete from the list, and quit to quit the app."
).toLowerCase();

while (
  action !== "new" &&
  action !== "list" &&
  action !== "delete" &&
  action != "quit"
) {
  let action = prompt("Enter new, list, delete, or quit to exit app.");
}

const todo = [];

while (action === "new" || action === "list" || action === "delete") {
  if (action === "new") {
    let addItem = prompt("What do you want to add to the list?").toLowerCase();
    todo.push(addItem);
  } else if (action === "list") {
    for (let item in todo) {
      console.log(`${todo[item]}`);
    }
  } else if (action === "delete") {
    let action = prompt("Which task would you like to delete?").toLowerCase();
    todo -= action;
  } else {
    action = prompt(
      `Please enter 'New', 'List', 'Delete', or 'Quite'`
    ).toLowerCase();
  }

  action = prompt(
    `What would you like to do next? 'New' to add an item to your list, 'List' to see your list, 'Delete' to delete a task, or 'Quit' to quit the app.`
  ).toLowerCase();
}
if (action === "quit") {
  console.log("You have quit the app");
}
