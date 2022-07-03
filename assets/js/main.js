(function() {
    const toggle = document.getElementsByClassName('heading__toggle')[0];
    const navigation = document.getElementsByClassName('heading__navigation')[0];

    toggle.addEventListener('click', function(e) {
        navigation.classList.toggle('hide');
    });

})();