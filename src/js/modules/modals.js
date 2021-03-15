const modals = ()=> {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClicklOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if(e.target) {
                    e.preventDefault();
                }

                window.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.marginRight = `${scroll}px`;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        close.addEventListener('click', ()=> {
            
            window.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener('click', (e)=> {
            
            if(e.target === modal && closeClicklOverlay) {
                window.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }
    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            });
            if(!display){
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    showModalByTime('.popup-consultation', 60000);
};

export default modals; 