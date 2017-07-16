console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(arr) {
    let ul = $('<ol>');
    ul.appendTo('.albums');
    arr.forEach(function (album) {
      ul.append(`<li>${album.title}, by ${album.artist}</li>`);
    });
  }

  function handleError(xhr, status, errorThrown) {
    $('.container').text('db not reached!');
  }

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    error: () => {
      throw new Error('no taquerias!');
    },
    success: (arr) => {
      let ul = $('<ol>');
      ul.appendTo('.taquerias');
      arr.forEach((taqueria) => {
        $(`<li>${taqueria.name}</li>`).appendTo(ul);
      })
    }
  })

});
