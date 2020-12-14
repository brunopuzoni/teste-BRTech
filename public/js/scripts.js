$('#modal-update').on('show.bs.modal', function (event) {
  let btn = $(event.relatedTarget)
  let id = btn.data('id')
  let desc = btn.data('descricao')
  let modal = $(this)

  modal.find('#updtarefa').val(desc)
  modal.find('#updid').val(id)
  modal.find('#form-update').attr('action', '/update/' + id + '')
});

$('#modal-delete').on('show.bs.modal', function (event) {
  let btn = $(event.relatedTarget)
  let id = btn.data('id')
  let desc = btn.data('descricao')
  let modal = $(this)

  modal.find('#delid').val(id)
  modal.find('#delete-text').text('Deseja realmente excluir a tarefa "' + desc + '"?')
  modal.find('#form-delete').attr('action', '/delete/' + id + '')
})