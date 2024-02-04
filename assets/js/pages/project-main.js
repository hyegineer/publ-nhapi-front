
// 더블클릭할 때 텍스트에어리어 활성화하기
$('.js-target-txtarea').on('dblclick', function () {
  $(this).attr('disabled', false);
  $(this).parents('.inp-item-box').addClass('focused');
  $(this).parent('.inp-item').siblings('.inp-item-btn-wrap').removeClass('active');
})

// 생성된 텍스트에어리어 바깥 쪽 클릭할 때 텍스트에어리어 비활성화
$(document).mouseup(function (e) {
  var layerPopup = $(".create-inp-item");
  if (layerPopup.has(e.target).length === 0) {
    $('.js-target-txtarea').attr('disabled', true);
    $('.js-target-txtarea').parents('.inp-item-box').removeClass('focused');
  }
});

// 텍스트에어리어에 포커싱될 때 글자수 보이기
$('.js-target-txtarea').on('focus', function () {
  $(this).parent('.inp-item').siblings('.inp-item-count').show();
})

// 텍스트에어리어에 포커싱 해제될 때 글자수 숨기기 & 이미 편집된 상태면 보내기 버튼과 더보기 버튼 보임
$('.js-target-txtarea').on('blur', function () {
  $(this).parent('.inp-item').siblings('.inp-item-count').hide();

  if ($(this).attr('data-js-edit') == 'edited') {
    $(this).parent('.inp-item').siblings('.inp-item-btn-wrap').addClass('active');
  }
})

// 텍스트에어리어 글자수 보이기
$('textarea[data-js-counttextarea]').each(function () {
  let content = $(this).val();

  if (content.length == 0 || content == '') {
    $('[data-js-count]').text('0');
  } else {
    $('[data-js-count]').text(content.length);
  }
})

// 텍스트에어리어 글자 입력할 때마다 글자수 새로고침
$('textarea[data-js-counttextarea]').keyup(function (e) {
  let content = $(this).val();
  let maxlength = $(this).attr('maxlength');

  // 글자수 세기
  if (content.length == 0 || content == '') {
    $('[data-js-count]').text('0');
  } else {
    $('[data-js-count]').text(content.length);
  }

  // 글자수 제한
  if (content.length > maxlength) {
    // 200자 부터는 타이핑 되지 않도록
    $(this).val($(this).val().substring(0, maxlength));
    // 200자 넘으면 알림창 뜨도록
    $(this).parents('.inp-item-box').addClass('error');
    $(this).parents('.inp-item-box').siblings('.form-validation-msg').addClass('active');
  } else {
    $(this).parents('.inp-item-box').removeClass('error');
    $(this).parents('.inp-item-box').siblings('.form-validation-msg').removeClass('active');
  }
});

// 텍스트에어리어 글자 입력할 때 자동으로 높이 조절되기
$('textarea[data-js-autoresize]').each(function () {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function (el) {
    $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
  };

  $(this).on('keyup input', function () { resizeTextarea(this); }).removeAttr('data-js-autoresize');
})

// 텍스트에어리어 한번이라도 편집되면 edit 어트리뷰트 edited로 바꾸기
$('textarea[data-js-edit]').on('input', function () {
  $(this).attr('data-js-edit', 'edited');
})

// 텍스트에어리어에 호버될 때 텍스트에어리어 추가하기 버튼 + 텍스트에어리어 드래그 버튼 보이기
$('.create-inp-item .inp-item-box').on('mouseenter', function () {
  $(this).siblings('.left-btn-wrap').addClass('active');
})

// 텍스트에어리어에 호버 해제될 때 텍스트에어리어 추가하기 버튼 + 텍스트에어리어 드래그 버튼 숨기기
$('.create-inp-item').on('mouseleave', function () {
  $(this).children('.left-btn-wrap').removeClass('active');
})