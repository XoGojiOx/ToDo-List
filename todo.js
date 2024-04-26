let action = prompt(
  `What would you like to do? Enter 'new' to add to the list, 'list' to view the list, 'delete' to delete from the list, and 'quit' to quit the app.`
).toLowerCase();

const todo = [];

while (
  action !== "new" &&
  action !== "list" &&
  action !== "delete" &&
  action != "quit"
) {
  action = prompt(
    "Enter new, list, delete, or quit to exit app."
  ).toLowerCase();
}

while (
  action === "new" ||
  action === "list" ||
  action === "delete" ||
  action === "quit"
) {
  if (action === "quit") {
    console.log(`You have left the app :)`);
    break;
  }
  if (action === "new") {
    let addItem = prompt("What do you want to add to the list?").toLowerCase();
    todo.push(addItem);
    action = prompt(
      `What would you like to do next? 'New' to add another item to your list, 'List' to see your current list, 'Delete' to delete an item from your list, or 'Quit' to quit the app.`
    ).toLowerCase();
    while (
      action !== "new" &&
      action !== "list" &&
      action !== "delete" &&
      action != "quit"
    ) {
      action = prompt(
        "Enter new, list, delete, or quit to exit app."
      ).toLowerCase();
    }
  } else if (action === "list") {
    console.log(`Your To Do List:`);
    for (let item of todo) {
      console.log(item);
    }
    action = prompt(
      `What would you like to do next? 'New' to add another item to your list, 'List' to see your current list, 'Delete' to delete an item from your list, or 'Quit' to quit the app.`
    ).toLowerCase();
    while (
      action !== "new" &&
      action !== "list" &&
      action !== "delete" &&
      action != "quit"
    ) {
      action = prompt(
        "Enter new, list, delete, or quit to exit app."
      ).toLowerCase();
    }
  } else if (action === "delete") {
    let deleteItem = prompt(
      "Which task would you like to delete?"
    ).toLowerCase();
    const index = todo.indexOf(deleteItem);
    if (index !== -1) {
      todo.splice(index, 1);
      console.log(`${deleteItem} has been removed from your list`);
    } else {
      console.log(`${deleteItem} is not in your lsit`);
    }
    action = prompt(
      `What would you like to do next? 'New' to add another item to your list, 'List' to see your current list, 'Delete' to delete an item from your list, or 'Quit' to quit the app.`
    ).toLowerCase();
    while (
      action !== "new" &&
      action !== "list" &&
      action !== "delete" &&
      action != "quit"
    ) {
      action = prompt(
        "Enter new, list, delete, or quit to exit app."
      ).toLowerCase();
    }
  }
}
