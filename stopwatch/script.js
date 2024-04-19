let time = 0;
        let interval;
        const timeElement = document.getElementById("time");
        const startButton = document.getElementById("start");
        const stopButton = document.getElementById("stop");
        const resetButton = document.getElementById("reset");

        function updateTime() {
            const hours = Math.floor(time / 3600).toString().padStart(2, "0");
            const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
            const seconds = Math.floor(time % 60).toString().padStart(2, "0");

            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        startButton.addEventListener("click", () => {
            if (!interval) {
                interval = setInterval(() => {
                    time += 1;
                    updateTime();
                }, 1000);
            }
        });
        

        stopButton.addEventListener("click", () => {
            clearInterval(interval);
            interval = null;
        });

        resetButton.addEventListener("click", () => {
            clearInterval(interval);
            interval = null;
            time = 0;
            updateTime();
        });

        updateTime();
    