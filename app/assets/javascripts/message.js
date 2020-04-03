$(function(){
  function buildHTML(message) {
    if (message.image) {
      var html =
       `<div class="messages_box__message_box">
          <div class="messages_box__message_box__info">
            <p class="messages_box__message_box__info__username">
              ${message.user_name}
            </p>
            <p class="messages_box__message_box__info__create_at">
            ${message.created_at}
            </p>
          </div>
          <div class="messages_box__message_box__message_text">
            <p class="lower-message__content">
              ${message.content}
            </p>
            <img class="lower-message__image" src=${message.image}>
          </div>
        </div>`
      return html;  
    } else {
      var html = 
        `<div class="messages_box__message_box">
          <div class="messages_box__message_box__info">
            <p class="messages_box__message_box__info__username">
              ${message.user_name}
            </p>
            <p class="messages_box__message_box__info__create_at">
            ${message.created_at}
            </p>
          </div>
          <div class="messages_box__message_box__message_text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html  
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function (data) {
      var html = buildHTML(data);
      $('.messages_box').append(html);
      $('form')[0].reset();
      $('.form__submit').prop("disabled", false);
      $('.messages_box').animate({ scrollTop: $('.messages_box')[0].scrollHeight });

    })
    .fail(function () {
      alert("メッセージ送信に失敗しました");
    });
  });
});


