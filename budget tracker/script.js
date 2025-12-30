let income = 0;
let expense = 0;

function addTransaction() {
    const desc = document.getElementById("desc").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (desc === "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    const li = document.createElement("li");
    li.classList.add(type);
    li.innerHTML = `${desc} <span>₹${amount}</span>`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        if (type === "income") {
            income -= amount;
        } else {
            expense -= amount;
        }
        li.remove();
        updateSummary();
    };

    li.appendChild(deleteBtn);
    document.getElementById("transactionList").appendChild(li);

    if (type === "income") {
        income += amount;
    } else {
        expense += amount;
    }

    updateSummary();

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function updateSummary() {
    document.getElementById("income").textContent = `₹${income}`;
    document.getElementById("expense").textContent = `₹${expense}`;
    document.getElementById("balance").textContent = `₹${income - expense}`;
}
