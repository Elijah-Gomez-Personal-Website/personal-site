console.log("Hello World!");

const externalLink = document.querySelector("#external_link");

externalLink.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(e.target)
  // console.log(externalLink);
  // const link = e.target.href;

  const link = externalLink.href;

  const navigateAway = confirm(
    "Are you sure you want to navigate away from this website?"
  );

  if (navigateAway) {
    window.location = link;
  }
});

