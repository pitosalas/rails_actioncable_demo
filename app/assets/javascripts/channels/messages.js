App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    console.log("recevived pito");
    document.querySelector("textarea.form-control").value=this.renderMessage(data);
  },

  renderMessage: function(data) {
    return data.message;
  }
});
