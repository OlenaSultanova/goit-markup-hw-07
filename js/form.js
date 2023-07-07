<script>
      const myInput = document.getElementById("myInput");
      const mySVG = document.getElementById("mySVG");

      myInput.addEventListener("input", () => {
        console.log(myInput.value);
      });

      mySVG.addEventListener("click", () => {
        console.log("SVG clicked");
      });
    </script> 