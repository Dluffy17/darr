<script>
      const title = document.getElementById("title");
      const text = document.getElementById("text");

      let count = 0;
      setInterval(() => {
        count++;
        title.style.color = count % 2 === 0 ? "olive" : "red";
        text.style.color = count % 2 === 0 ? "olive" : "red";
      }, 1000);
    </script>
  </body>
</html>
