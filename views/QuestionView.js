var QuestionView = Backbone.View.extend({
  template: _.template('<div> hello </div>'),
  initialize: function(){
    console.log(this.model)
    this.render()
  },
  render: function(){
    this.$el.html(this.template)
    $('#main').append(this.$el)
    return this
  }

})



