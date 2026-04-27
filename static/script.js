document.addEventListener("DOMContentLoaded", function () {
    const chartElement = document.getElementById("expenseChart");

    if (chartElement) {
        const income = Number(chartElement.dataset.income);
        const expense = Number(chartElement.dataset.expense);

        new Chart(chartElement, {
            type: "doughnut",
            data: {
                labels: ["Income", "Expense"],
                datasets: [{
                    data: [income, expense],

                    // 🎨 ADD COLORS HERE
                    backgroundColor: [
                        "#4CAF50",  // Income (Green)
                        "#F44336"   // Expense (Red)
                    ],

                    // Optional border
                    borderColor: [
                        "#2E7D32",
                        "#C62828"
                    ],
                    borderWidth: 2
                }]
            }
        });
    }
});