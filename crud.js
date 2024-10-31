let checklist = []; // Array to store checklist items

var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnDelete = document.getElementById('btnDelete');
var itemName = document.getElementById('itemName');
var checklistDisplay = document.getElementById('checklistDisplay');

// Function to display checklist
function displayChecklist() {
    checklistDisplay.innerHTML = ''; // Clear the current list
    checklist.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        checklistDisplay.appendChild(listItem);

        // Add a delete button next to each item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            checklist.splice(index, 1); // Remove item from array
            displayChecklist(); // Refresh display
        });
         // Create an update button
         const updateButton = document.createElement('button');
         updateButton.textContent = 'Update';
         updateButton.addEventListener('click', () => {
             const newItem = prompt("Enter the updated item:", item);
             if (newItem !== null && newItem.trim() !== '') { // Check for valid input
                 checklist[index] = newItem.trim(); // Update the item in the array
                 displayChecklist(); // Refresh display
                 console.log("Updated item:", newItem);
             }
         });
        listItem.appendChild(deleteButton);
        listItem.appendChild(updateButton);
        checklistDisplay.appendChild(listItem);
    });
}

// Add item to checklist
btnCreate.addEventListener('click', function() {
    const newItem = itemName.value.trim();
    if (newItem) {
        checklist.push(newItem); // Add new item to checklist array
        itemName.value = ''; // Clear input field
        displayChecklist(); // Update display
        console.log("Checklist item added:", newItem);
    } else {
        alert("Please enter an item name.");
    }
});

// Read/display all checklist items
btnRead.addEventListener('click', function() {
    displayChecklist();
    console.log("Checklist displayed");
});

// Clear all items in the checklist
btnDelete.addEventListener('click', function() {
    checklist = []; // Clear the checklist array
    displayChecklist(); // Update display
    console.log("All items deleted from checklist");
});
