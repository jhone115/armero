document.addEventListener('DOMContentLoaded', function() {
    const polaroidGrid = document.querySelector('.polaroid-grid');

    const polaroids = [
        { 
            id: 1, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0010.jpg",
            description: "",
            rotation: "-3deg"
        },
        { 
            id: 2, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0012.jpg",
            description: "",
            rotation: "2deg"
        },
        { 
            id: 3, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0014.jpg",
            description: "",
            rotation: "-1deg"
        },
        { 
            id: 4, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0013.jpg",
            description: "",
            rotation: "3deg"
        },
        { 
            id: 5, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0004.jpg",
            description: "",
            rotation: "-2deg"
        },
        { 
            id: 6, 
            title: "", 
            image: "../../recursos/imagenes/IMG-20251005-WA0008.jpg",
            description: "",
            rotation: "1deg"
        }
    ];

    const vistoPolaroid6 = localStorage.getItem('vistoPolaroid6');

    polaroids.forEach(polaroid => {
        const polaroidElement = document.createElement('div');
        polaroidElement.className = 'polaroid';
        polaroidElement.style.setProperty('--rotation', polaroid.rotation);
        polaroidElement.setAttribute('data-id', polaroid.id);

        if (polaroid.id === 6 && vistoPolaroid6 === 'true') {
            polaroidElement.innerHTML = `
                <div class="polaroid-image" style="background-image: url('${polaroid.image}')"></div>
                <div class="polaroid-caption">${polaroid.title}</div>
                <div class="lado-b-button-container">
                    <button class="lado-b-button" id="btn-lado-b">Ir al Lado B</button>
                </div>
            `;
        } else {
            polaroidElement.innerHTML = `
                <div class="polaroid-image" style="background-image: url('${polaroid.image}')"></div>
                <div class="polaroid-caption">${polaroid.title}</div>
            `;
        }

        polaroidElement.addEventListener('click', function(e) {
            if (e.target.closest('.lado-b-button')) {
                return;
            }
            
            const id = this.getAttribute('data-id');

            if (id === '6') {
                localStorage.setItem('vistoPolaroid6', 'true');
            }

            document.querySelector('.pantalla-a').classList.add('page-turn');

            setTimeout(() => {
                window.location.href = `a_exp.html?id=${id}`;
            }, 1000);
        });
        
        polaroidGrid.appendChild(polaroidElement);
    });

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'btn-lado-b') {

            document.querySelector('.pantalla-a').classList.add('page-turn');

            setTimeout(() => {
                window.location.href = "../lado b/b.html";
            }, 1000);
        }
    });
});