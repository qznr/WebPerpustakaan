const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Redraw balls at their current positions
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
    }
}
window.addEventListener("resize", resizeCanvas);

function Ball(x, y, radius, vx, vy, imageSrc) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.image = new Image();
    this.image.src = imageSrc;
    this.rotation = Math.random() * Math.PI * 2; // Set initial random rotation

    this.draw = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = 0.4; // Set opacity (0.0 to 1.0)
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(this.image, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
    };

    this.update = function () {
        if (this.x + this.radius + this.vx > canvas.width + 300 || this.x - this.radius + this.vx < 0 - 300) {
            this.vx = -this.vx;
        }

        if (this.y + this.radius + this.vy > canvas.height + 300 || this.y - this.radius + this.vy < 0 - 300) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.draw();
    };
}


resizeCanvas();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].update();

        // Check for collisions with other balls
        for (let j = i + 1; j < balls.length; j++) {
            if (checkCollision(balls[i], balls[j])) {
                handleCollision(balls[i], balls[j]);
            }
        }
    }
}

function checkCollision(ball1, ball2) {
    const dx = ball2.x - ball1.x;
    const dy = ball2.y - ball1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < ball1.radius + ball2.radius;
}

function handleCollision(ball1, ball2) {
    // Implement collision response logic here
    // For example, you can swap the velocities of the colliding balls
    const tempVx = ball1.vx;
    const tempVy = ball1.vy;
    ball1.vx = ball2.vx;
    ball1.vy = ball2.vy;
    ball2.vx = tempVx;
    ball2.vy = tempVy;
}

// Create balls
for (let i = 0; i < 6; i++) {
    let validPosition = false;
    let x, y;

    // Try generating a valid position that doesn't overlap with existing balls
    while (!validPosition) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;

        // Check for collisions with existing balls
        validPosition = balls.every(ball => !checkCollision({ x, y, radius: 275 }, ball));
    }

    const radius = 275;
    const vx = (Math.random() - 0.5) * 5; // Random velocity
    const vy = (Math.random() - 0.5) * 5; // Random velocity
    const imageSrc = "img/wave.png"; // Replace with the actual path to your image
    balls.push(new Ball(x, y, radius, vx, vy, imageSrc));
}


animate();