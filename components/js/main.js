function openHeadMenu(){
    document.querySelector('.mobile-right-menu').classList.add('active');
    $('body').css('overflow', 'hidden');
}
function closeHeadMenu(){
    document.querySelector('.mobile-right-menu').classList.remove('active');
    $('body').css('overflow', 'auto');
}