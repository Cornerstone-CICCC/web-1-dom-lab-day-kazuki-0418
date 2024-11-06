function onSubmit(event) {
  event.preventDefault();
  const formData = document.querySelector("form");
  const data = new FormData(formData);
  const firstName = data.get("first_name");
  const lastName = data.get("last_name");
  const email = data.get("email");
  const hireDate = data.get("hire_date");
  const fileInput = data.get("photo");

  if (!firstName || !lastName || !email || !hireDate || !fileInput) {
    alert("Please fill in all fields");
    return;
  }

  const tableRow = document.createElement("tr");
  tableRow.style.width = "100%";
  tableRow.innerHTML = `
   <td><img src="images/${fileInput.name}" alt="${firstName}" width="64" height="64"></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hireDate}</td>
        <td>
            <button class="btn btn-danger" onClick="onDelete(this)">Delete</button>
        </td>
        `;
  document.getElementById("employeeList").appendChild(tableRow);
  formData.reset();
}

function onDelete(data) {
  const isDelete = confirm("Are you sure you want to delete this employee?");

  if (isDelete) {
    document
      .getElementById("employeeList")
      .removeChild(data.parentNode.parentNode);
  }
}

document.querySelector("form").addEventListener("submit", onSubmit);
