const form = document.querySelector('form');
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();

  let name = form.name.value;
  let last_name = form.last_name.value;
  let email = form.email.value;
  let image = form.avatar.value;
  let country = form.country.value;
  let gender = form.gender.value;

  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const d = document.createElement('p');
  const span = document.createElement('p');
  const sh = document.createElement('p');
  const g = document.createElement('p');

  p.textContent = `Ismi: ${name}`;
  d.textContent = `Familiyasi: ${last_name}`;
  span.textContent = `Email: ${email}`;
  img.src = image;
  sh.textContent = `Davlati: ${country}`;
  g.textContent = `Jinsi: ${gender}`;

  li.append(img, p, d, span, sh, g);
  ul.appendChild(li);

  li.classList.add("user-card");

  form.reset();
});
