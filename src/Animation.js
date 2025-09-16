import confetti from "canvas-confetti";
export function balloonsUp(duration){

const end = Date.now() + duration;
(function Frame()
{
    confetti({
        particleCount:10,
        angle:90,
        spread:20,
        startVelocity:20,
        origin:{x: Math.random(), y:0.9},
        gravity:-0.4,
    });
    if(Date.now() < end)
    {
        requestAnimationFrame(Frame);
    }
})();
}
