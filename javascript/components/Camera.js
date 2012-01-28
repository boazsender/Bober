dojo.provide('client.components.Camera');

mulberry.component('Camera', {
  componentTemplate : dojo.cache('client.components', 'Camera/Camera.haml'),

  init : function() {
    this.connect(this.pictureButton, 'click', '_takePicture');
  },

  _takePicture : function(e) {
    e.preventDefault();
    toura.app.PhoneGap.camera.getPicture({
      destinationType : navigator.camera.DestinationType.FILE_URI
    }).then(dojo.hitch(this, '_handlePicture'));
  },

  _handlePicture : function(src) {

    $.ajax({
      type: 'GET',
      url: 'http://api.imgur.com/2/upload.json',
      data: {
        key:"616994a9b83bdeb8ae77e4de9889bb96",
        type: "file",
        image: src,
        name: "Bob the rooster"
      },
      success: function(r){ console.log(r) }
    });

    
    // var pic = new Image();
    // pic.src = src;
    // pic.width = 200;
    // dojo.place(pic, this.gallery);
    // dojo.publish('/content/update'); // refresh the scroller
  }
});
