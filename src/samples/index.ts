export const ts = `
// Function
function sumBalances(list: any[], query: string): number {
  let totalBalance = 0;
  list.forEach((item) => {
    if (item.createdAt === query) {
      totalBalance += item.balance;
    }
  });
  return totalBalance;
}

// Test
const testList = [
  { createdAt: "2020-01-01", balance: 10 },
  { createdAt: "2020-02-01", balance: 20 },
  { createdAt: "2020-03-01", balance: 30 },
];

const result = sumBalances(testList, "2020-02-01");
if (result === 20) {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}
`;

export const c = `#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}`;

export const rust = `fn main() {
  println!("Hello, World!");
}`;

export const cpp = `#include <iostream>

int main()
{
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`;

export const python = `\ndef sum_balances(objectList, start, end):\n  # Initialize total balance to 0\n  total_balance = 0\n\n  # Iterate through the list of objects\n  for obj in objectList:\n    # Check if the createdAt timestamp is between the start and end timestamps\n    if start <= obj['createdAt'] <= end:\n      # Add the balance of the object to the total balance\n      total_balance += obj['balance']\n  \n  # Return the total balance\n  return total_balance\n\n# Test case\ntest_list = [{'createdAt': 1500000000, 'balance': 10}, {'createdAt': 1500001000, 'balance': 20}, {'createdAt': 1500002000, 'balance': 30}]\nstart = 1500000000\nend = 1500003000\n\nassert sum_balances(test_list, start, end) == 60`;

export const golang = `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`;

export const html = `<html>
<head>
  <title>Hello, World!</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
`;

export const css = `h1 {
  color: red;
}`;
