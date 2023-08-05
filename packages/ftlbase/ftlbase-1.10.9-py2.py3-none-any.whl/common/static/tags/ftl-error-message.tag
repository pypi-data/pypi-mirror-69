<ftl-error-message>
  <div show={show} ref="erros" class="container" style="margin-top:20px">
     <div each={ message, idx in this.opts.messages } no-reorder class="alert alert-{ message.type } col-md-10"  style="margin-top:20px" role="alert">
       { message.msg }
       <ul each={ item, index in message.itens }><li>{ item.msg }</li></ul>
       <virtual if={ message.total > 0 }><ul>E mais { message.total } registro(s).</ul></virtual>
     </div>
  </div>
  <script>
    var self = this
    var show = false

    self.on('mount', () => {
      self.show = (self.opts.messages != undefined)
      self.update()
    })

    hideMessage(e){
      self.show = false
      e.preventDefault()
    }

  </script>
</ftl-error-message>
