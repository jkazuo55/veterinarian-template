// const toggle = document.querySelector('heading__toggle');
(function() {
    // var toggle = document.querySelector('.nav-toggle');

    // toggle.addEventListener('click', function(e) {
    //   this.classList.toggle('opened');
    // });
    const toggle = document.getElementsByClassName('heading__toggle')[0];
    const navigation = document.getElementsByClassName('heading__navigation')[0];

    toggle.addEventListener('click', function(e) {
        navigation.classList.toggle('hide');
    });

})();