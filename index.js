const form = document.querySelector("[data-js=form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const order = {
    flavor: form.flavor.value,
    balls: form.balls.valueAsNumber,
    container: form.container.value,
    extraCream: form["extra-cream"].checked,
    wishes: form.wishes.value,
  };
  console.log(order);
  form.reset();
  //   console.log(event);
});
