const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

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

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
    }

    // Add collision detection logic for balls interacting with each other here

}

// Create balls
for (let i = 0; i < 3; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 350;
    const vx = (Math.random() - 0.5) * 5; // Random velocity
    const vy = (Math.random() - 0.5) * 5; // Random velocity
    const imageSrc = "img/wave.png"; // Replace with the actual path to your image
    balls.push(new Ball(x, y, radius, vx, vy, imageSrc));
}

animate();