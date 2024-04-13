window.onload = function () {
  const canvas = document.getElementById('display');
  const ctx = canvas.getContext('2d');

  const character = {
    x: 50,
    y: 50,
    width: 10,
    height: 10,
    speed: 5,
    color: 'red',
    draw: function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  const upButton = document.getElementById('up');
  const downButton = document.getElementById('down');
  const leftButton = document.getElementById('left');
  const rightButton = document.getElementById('right');
  const aButton = document.getElementById('a');
  const bButton = document.getElementById('b');

  // 十字キーが押された時の処理
  window.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowUp':
        character.y -= character.speed;
        break;
      case 'ArrowDown':
        character.y += character.speed;
        break;
      case 'ArrowLeft':
        character.x -= character.speed;
        break;
      case 'ArrowRight':
        character.x += character.speed;
        break;
    }

    console.log(character.x, character.y)
  });

  // ボタンが押された時の処理
  upButton.addEventListener('click', function () {
    character.y -= character.speed;
  });
  downButton.addEventListener('click', function () {
    character.y += character.speed;
  });
  leftButton.addEventListener('click', function () {
    character.x -= character.speed;
  });
  rightButton.addEventListener('click', function () {
    character.x += character.speed;
  });
  aButton.addEventListener('click', function () {
    character.color = 'blue';
  });
  bButton.addEventListener('click', function () {
    character.color = 'red';
  });

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    character.draw();
    requestAnimationFrame(update);
  }

  update();
};
