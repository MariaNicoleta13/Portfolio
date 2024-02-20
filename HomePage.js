var ageContainer = document.getElementById("age");

function calculateAge(dateOfBirth) {
  const delta = Date.now() - dateOfBirth.getTime();
  const age = new Date(delta);

  return Math.abs(age.getUTCFullYear() - 1970);
}

ageContainer.innerText = calculateAge(new Date("1995-10-13"));
