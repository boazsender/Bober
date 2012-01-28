/*******************************************************************************
 *
 *  Copyright (c)  2011 Toura, LLC.	All Rights Reserved.
 *  http://toura.com
 *
 *  LICENSE: https://github.com/Toura/mulberry/blob/master/LICENSE.txt
 *
 *******************************************************************************/
dojo.provide("client.base");
if(!dojo._hasResource['client.routes']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['client.routes'] = true;
dojo.provide('client.routes');

/**
 * You can define custom routes here. To add a new route, run:
 *
 *    mulberry create route <path matcher>
 *
 * For example:
 *
 *    mulberry create route '/foo/:bar'
 *
 */

mulberry.page('/takeapicture', {
  pageDef : 'camera'
}, true);

}

if(!dojo._hasResource['client.components.Camera']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['client.components.Camera'] = true;
dojo.provide('client.components.Camera');

mulberry.component('Camera', {
  componentTemplate : dojo.cache("client.components", "Camera/Camera.haml", ".component.camera\n  %button{ dojoAttachPoint : 'pictureButton' } Take a picture\n  %div{ dojoAttachPoint : 'gallery' }\n  %div{ dojoAttachPoint : 'imageSrc' }\n\n"),

  init : function() {
    this.connect(this.pictureButton, 'click', '_takePicture');
    
    this.$domNode.append('<h1>I AM TOUCHING THE DOM FOR THE FIRST TIME</h1>');
  },

  _takePicture : function(e) {
    e.preventDefault();
    
    navigator.camera.DestinationType.DATA_URL
    
    toura.app.PhoneGap.camera.getPicture({
      destinationType : navigator.camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.PNG,
      quality : 30
    }).then(dojo.hitch(this, '_handlePicture'));
  },

  _handlePicture : function(src) {
    var that = this;
    
    that.$domNode.append('<h1>I AM TOUCHING THE DOM AGAIN</h1>');
    
    console.log('BOAZ THE STRING IS HERE > ' + src)
    
    $.ajax({
      type: 'GET',
      url: 'http://api.imgur.com/2/upload.json',
      data: {
        key:"616994a9b83bdeb8ae77e4de9889bb96",
        type: "file",
        image: src,
        name: "Bob the rooster"
      },
      success: function(r){ 
        console.log('BOAZ, THIS MEANS THAT THE IMGUR SUBMISSION WAS SUCCESSFUL');
        that.$domNode.append('<a href="' + r.upload.links.imgur_page + '">' + r.upload.links.imgur_page + '</a>');
      },
      error: function(r){ 
        that.$domNode.append('<h1>IT BROKE</h1>');
        
        console.log('BOAZ > ' + JSON.stringify(r))
        
      }
    });

    
    // var pic = new Image();
    // pic.src = src;
    // pic.width = 200;
    // dojo.place(pic, this.gallery);
    // dojo.publish('/content/update'); // refresh the scroller
  }
});

}

/**
 * You can write custom JavaScript here; this is also where Mulberry will add
 * any dependencies you introduce via `mulberry create component`.
 */



