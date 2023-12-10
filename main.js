let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #df0000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #df0000;">Me gusta la programación web y aprender sobre tecnologías.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
