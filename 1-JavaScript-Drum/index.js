const notes = document.querySelector(".notes");

const notesArray = [
  {
    id: "Do",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3",
  },
  {
    id: "Re",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]Bg-clap.wav.mp3",
  },
  {
    id: "Mi",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3",
  },
  {
    id: "Fa",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/32[kb]biggest-clap.wav.mp3",
  },
  {
    id: "Sol",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/32[kb]breathy-clap.wav.mp3",
  },
  {
    id: "La",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/38[kb]brightclap.wav.mp3",
  },
  {
    id: "Ti",
    sound:
      "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]brightclap2.wav.mp3",
  },
];
const playAudio = (note) => {
  //   console.log(note);
  const soundLink = notesArray.find((obj) => obj.id === note).sound;
  const audio = new Audio(`${soundLink}`);
  audio.play();
};

notes.addEventListener("click", ({ target }) => {
  console.log(target.closest(".note"));
  if (target.closest(".note")) {
    const temp = target.closest(".note");
    playAudio(temp.dataset.note);
  }
});

setInterval((), 1000)

const obj = {
  name: "sdfaf",
  lastname: "dasfa",
  age: 123
}