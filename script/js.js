function MyParallax (wrapper, inner) {
    let windowHeight = window.innerHeight;
    let startInnerOffset = wrapper.offsetHeight - inner.offsetHeight;
    let k = (-windowHeight / startInnerOffset) / 2;
    let y = (windowHeight - wrapper.getBoundingClientRect().top) / k + startInnerOffset;
    inner.style.transform = 'translateY(' + y + 'px)';

    window.addEventListener("scroll", function(){
        let wrapperBounding = wrapper.getBoundingClientRect();
        if (wrapperBounding.top < windowHeight && wrapperBounding.bottom > 0) {
            y = (windowHeight - wrapperBounding.top) / k + startInnerOffset;
            inner.style.transform = 'translateY(' + y + 'px)';
        }
    });
}

window.addEventListener("load", function(){
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let inner = document.getElementsByClassName('inner')[0];

    new MyParallax(wrapper, inner);
});