//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Create audio elements
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}