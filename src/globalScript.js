export const applyGlobalStyles = () => {
  const ELEMENT_ONE = document.querySelectorAll(".global-style");
  const ELEMENT_TWO = document.querySelectorAll(".style-links");

  ELEMENT_TWO.forEach(element => {
    element.addEventListener("click", () => {
      // Loop through each element in ELEMENT_TWO and hide them
      ELEMENT_TWO.forEach(item => {
        item.classList.add("hidden");
      });

      // Loop through each element in ELEMENT_TWO and hide them
      ELEMENT_ONE.forEach(item => {
        item.classList.remove("hidden");
      });
      
    });
  });
};
