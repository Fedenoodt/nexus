function dateCONF (current) {
    // location.reload(4000)
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return  months[current - 1];
    }
export function ClockConfiguration() {
    function timeDateInterval() { setInterval(() => {
        //console.debug('Creating...')
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const current = new Date();

        const time = current.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        });
        
            //console.debug('Mounting...')
            const fullSet = `${date} de ${dateCONF (month)} de ${year}. ${time}hs.`;
            //console.debug('Saving...')
            localStorage.setItem('hora', fullSet.toString());
           //console.debug('Saved:', fullSet)
           //console.debug('Created, Mounted, and Saved:', fullSet)
            return fullSet
        }, 1000);};
        timeDateInterval();};

export function Clocker () {
    return setInterval(() => {
	let pantalla = document.getElementById('hora');
	let hora = localStorage.getItem('hora');
	pantalla.innerHTML = hora;
    }, 1000);
}

export function DarReloj () {
    return setInterval(Clocker, 1)
}
