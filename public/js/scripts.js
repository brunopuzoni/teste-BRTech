const form = document.getElementById('form-update')
const formJson = JSON.stringify($('form-update').serializeArray());
console.log(formJson);

function updateForm() {

  // let descr = 'updtarefa=' + document.getElementById('updtarefa').value;
  // let fid = 'updid=' + document.getElementById('updid').value;
  let id = document.getElementById('updid').value;

  var url = 'http://localhost:3001/update/' + id + '';
  console.log(descr);

  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", url);

  xhr.setRequestHeader("Accept", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Accept-Patch", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.send(formJson);

}

$('#modal-update').on('show.bs.modal', function (event) {
  let btn = $(event.relatedTarget)
  let id = btn.data('id')
  let desc = btn.data('descricao')

  let modal = $(this)
  modal.find('#updtarefa').val(desc)
  modal.find('#updid').val(id)

  modal.find('#form-update').attr('action', '/update/' + id + '')
})