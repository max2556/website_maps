class Statistics {
    counts = {
        loads: 0
    }

    times = {
        since_last_load: 0,
        average: 0,
        all: 0,
        max: 0
    }

    dates = {
        last_load: new Date(),
        first_load: new Date(),
    }
}

class Time {
    seconds = 0;
    minutes = 0;
    hours = 0;

    addSecond() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
    }

    get_inSeconds() {
        return (this.hours * 60 + this.minutes) * 60 + this.seconds;
    }
}


const ONE_SECOND = 1000;
const key = "user_data";
let data = localStorage.getItem(key);
let current_session_time = new Time();

export function get_data() {
    if (data) {
        console.log(data);
        data = JSON.parse(data);
        update_data(data);
        return data;
    }
    return build_first_data();
}

function update_data(data) {
    if (!data) return;
    console.log(data);
    if (!data.dates) return;
    console.log(data.dates);

    data.dates.last_load = new Date();
    data.counts.loads += 1;


    setInterval(change_times, ONE_SECOND);
}

function build_first_data() {
    let result = new Statistics();
    saveToStorage(result);
    return result;
}


function change_times() {
    if (!data) return;
    current_session_time.addSecond();
}

function getFromStorage() {
    return localStorage.getItem(key);
}
function saveToStorage(data) {
    localStorage.setItem(key, JSON.stringify(data));
}

document.addEventListener('close', () => {
    const time_in_seconds = current_session_time.get_inSeconds();
    data.times.all += time_in_seconds;
    data.times.average = data.times.all / data.counts.loads;
    data.times.max = (data.times.max <= time_in_seconds) ? time_in_seconds : data.times.max;
    saveToStorage(data);
})






