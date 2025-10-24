
        const urlParams = new URLSearchParams(window.location.search);
        const imageId = urlParams.get('id'); 

        const imageData = {
            1: {
                image: "../../recursos/imagenes/IMG-20251005-WA0010.jpg",
                description: "“Estábamos en la carrera 17 con calle octava y dos cuadras abajo ya era un charco de la acequia, que es un canal de riego que llevaba el agua a las haciendas, a la zona donde se formó la avalancha. Esa acequia era grande y llevaba un agua helada que bajaba directamente del volcán, de sus nieves, al Lagunilla. Entonces pues en este calor tan bravo que hace acá y uno poderse meter en aguas tan heladas… Eso fue toda una experiencia muy sabrosa”"
            },
            2: {
                image: "../../recursos/imagenes/IMG-20251005-WA0012.jpg",
                description: "“Me regresé y me quedé acompañando a mi familia: mi tía y mi mamá, que fueron quienes se salvaron porque no estaban en Armero. Es algo muy interesante que ellas, cuatro meses antes de la avalancha presintieron todo: estaban seguras de que iba a pasar ese evento y de que iba a ser de esa magnitud por diferentes motivos que supieron leer y se fueron a vivir con un tío en Guaduas”"
            },
            3: {
                image: "../../recursos/imagenes/IMG-20251005-WA0014.jpg",
                description: "“Se diseñó el proyecto Armero Parque de la Vida y un memorial en el centro del parque. Uno de los temas de este proyecto era destapar el parque principal, la iglesia, algunas calles y el trazado urbano en lo que más se pudiera para volver a tener esa dimensión física y urbana del pueblo y saber cómo era de grande. Que la gente lo pudiera recorrer. Es importante saber cómo era de grande Armero para que uno pueda dimensionar la ciudad y la catástrofe del lahar y cómo fue de grande esa avalancha haber destruido una ciudad de esas dimensiones”"
            },
            4: {
                image: "../../recursos/imagenes/IMG-20251005-WA0013.jpg",
                description: "“Ahí están los edificios, las casas, las calles y el paisaje en unas perspectivas que permiten hacer ese ejercicio para los de Armero. Tienen una función de apropiación porque están colocados a una altura que le permite a la gente tocarlos. Para los sobrevivientes es muy interesante y muy bonito tocarlos y decir ‘Aquí era mi casa’, ‘Aquí en el teatro…’. Pienso que la única manera de poder volver a tangibilizar, a tener en físico eso que ya no hay, porque hoy son árboles y ese vacío solo está en la memoria”"
            },
            5: {
                image: "../../recursos/imagenes/IMG-20251005-WA0004.jpg",
                description: "“Luego hicimos otros trabajos que han sido en Guayabal, en un mural que hay en la casa cultural de Guayabal donde se trabaja el tema de patrimonio y memoria haciendo un recorrido por toda la historia de la región hasta la actualidad”."
            },
            6: {
                image: "../../recursos/imagenes/IMG-20251005-WA0008.jpg",
                description: "“Hoy en día hay unos muros, pero estos muros están en un grave riesgo porque la misma naturaleza va retomando. Así que hay árboles que han crecido y como no los hemos sabido controlar a tiempo, ya son árboles inmensos que han crecido dentro de las habitaciones y los espacios de las casas y pues estas empiezan a caerse. A veces incluso se caen los mismos árboles, que no pueden arraigarse porque encuentran los pisos y se expanden pero no se arraigan en profundidad y cualquier viento viene, los tumba y tumba los muros”, advierte."
        }};

        document.addEventListener('DOMContentLoaded', function() {
            const data = imageData[imageId] || imageData[1];

            const body = document.getElementById('main-body');
            body.style.backgroundImage = `url('${data.image}')`;
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundAttachment = "fixed";

            document.getElementById('detail-description').textContent = data.description;
        });

        document.getElementById('btn-atras').addEventListener('click', function() {

            document.getElementById('main-body').classList.add('page-turn-reverse');

            setTimeout(() => {
                window.history.back();
            }, 1200);
        });