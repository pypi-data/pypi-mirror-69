<ftl-timeout>
  <span></span>

  <script>
  var self = this;
  self.delay = 5*60*1000 // 5 em 5 minutos atualiza
  self.inc = undefined
  self.url = undefined
  self.responseText = undefined

  self.on('mount', () => {
    self.url = opts.url
    self.trigger('updateContent')
  })
  self.on('updateContent', () => {
    // self.inc = riot.mount(self.refs.ftltimeout,'ftl-include',{ 'include': { 'url': self.url, 'safe': true, }});
    // self.inc = riot.mount(self.refs.ftltimeout,'ftl-include',{ 'include': { 'url': opts.url, 'safe': true, }});
    const req = new XMLHttpRequest()
    req.responseType = 'json'
    req.onload = resp => {
      if (req.status != 200) {
        // Erro, não faz nada
        // if (req.status === 403) {
        //   // Forbiden - Não tem permissão
        //   alert('Desculpe, mas você não tem permissão!')
        // }
        // else
        //   alert('Request failed.  Returned status of ' + req.status);
      } else {
        // self.refs.ftltimeout.innerHTML = req.response.html
        // self.responseText = req.response.html
        this.root.innerHTML = req.response.html
        self.update()
      }
      setTimeout(function() {
        self.trigger('updateContent')
      }, self.delay);
    }

    req.open('get', self.url, true)
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    req.setRequestHeader("X-CSRFToken", getCookie('csrftoken')) //csrftoken);
    req.setRequestHeader("HTTP_X_CSRFTOKEN", getCookie('csrftoken')) //csrftoken);
    req.send()
  })
  </script>

</ftl-timeout>
