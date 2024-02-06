function showFloating(id) {
  $('#' + id).addClass('active');

  setTimeout(function () {
    $('#' + id).removeClass('active');
  }, 1000)
}

/*
=============================================
모달창 열고 닫기
=============================================
*/

function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}