import input from "../readlineInput.js";

async function main() {
  const nameOfUser = await input("Enter Your Name: ");
  console.log(`Hello ${nameOfUser} Ji`);
}

main();
