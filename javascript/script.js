const number = document.getElementById('number');
window.addEventListener("scroll",()=>{


        const updateCount=()=>{
            const value=parseInt(number.dataset.value);
            let initialValue=0;
            const increaseCount = setInterval(() => {
                initialValue +=1;
                if(initialValue > value){
                    number.textContent = `${value}`;
                    clearInterval(increaseCount);
                    return;
                }
                number.textContent = `${initialValue}`;
            }, 20);
        }
        updateCount()
    })



    const number1 = document.getElementById('number1');
window.addEventListener("scroll",()=>{


        const updateCount=()=>{
            const value=parseInt(number1.dataset.value);
            let initialValue=0;
            const increaseCount = setInterval(() => {
                initialValue +=1;
                if(initialValue > value){
                    number1.textContent = `${value}`;
                    clearInterval(increaseCount);
                    return;
                }
                number1.textContent = `${initialValue}`;
            }, 10);
        }
        updateCount()
    })

    const number2 = document.getElementById('number2');
window.addEventListener("scroll",()=>{


        const updateCount=()=>{
            const value=parseInt(number2.dataset.value);
            let initialValue=0;
            const increaseCount = setInterval(() => {
                initialValue +=1;
                if(initialValue > value){
                    number2.textContent = `${value}`;
                    clearInterval(increaseCount);
                    return;
                }
                number2.textContent = `${initialValue}`;
            }, 10);
        }
        updateCount()
    })


    const number3 = document.getElementById('number3');
window.addEventListener("scroll",()=>{


        const updateCount=()=>{
            const value=parseInt(number3.dataset.value);
            let initialValue=0;
            const increaseCount = setInterval(() => {
                initialValue +=1;
                if(initialValue > value){
                    number3.textContent = `${value}`;
                    clearInterval(increaseCount);
                    return;
                }
                number3.textContent = `${initialValue}`;
            }, 10);
        }
        updateCount()
    })









    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })