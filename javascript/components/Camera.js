dojo.provide('client.components.Camera');

mulberry.component('Camera', {
  componentTemplate : dojo.cache('client.components', 'Camera/Camera.haml'),

  init : function() {
    this.connect(this.pictureButton, 'click', '_takePicture');
    
    this.$domNode.append('<h1>I AM TOUCHING THE DOM FOR THE FIRST TIME</h1>');
    
    this.$domNode.find('form').submit(function( e ){
      e.preventDefault();
      var obj = $(this).serializeObject();
            
      console.log(JSON.stringify(obj));

      $(this).ajaxSubmit({
        dataType: 'text',
        success: function(data) {
          console.log("success!", data);
          
        },
        error: function( xhr, responsetext) {
          console.log("error", xhr)
        }
      });
      
    });
    
  },

  _takePicture : function(e) {
    e.preventDefault();
    
    navigator.camera.DestinationType.DATA_URL
    
    toura.app.PhoneGap.camera.getPicture({
      destinationType : navigator.camera.DestinationType.FILE_URI //,
      // encodingType: Camera.EncodingType.PNG,
      // quality : 30
    }).then(dojo.hitch(this, '_handlePicture'));
  },

  _handlePicture : function(src) {
    var that = this;
    
    that.$domNode.append('<h1>I AM TOUCHING THE DOM AGAIN</h1> + <img width="100px" src="' + src + '">');
    
    console.log('BOAZ THE STRING IS HERE > ' + src)
    
    $('[name=image]').val(src);
    
    
  }
});
