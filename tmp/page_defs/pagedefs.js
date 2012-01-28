toura.pageDef('home-phone', {
  "screens": [
    {
      "regions": [
        {
          "regions": [
            {
              "components": [

              ]
            },
            {
              "components": [
                "BodyText",
                "ChildNodes"
              ],
              "scrollable": true
            }
          ]
        },
        {
          "components": [
            "AppNav"
          ],
          "className": "nav"
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('google-map-tablet', {
  "capabilities": [
    "Page_GoogleMapTablet"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "PinInfo"
          ],
          "className": "pin-info"
        },
        {
          "components": [
            "GoogleMap"
          ],
          "className": "google-map"
        }
      ],
      "name": "index",
      "backgroundImage": false
    }
  ]
});

toura.pageDef('audio-with-images-phone', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Page_Audios",
    "AudioList_AudioPlayer",
    "AudioList_AudioCaption"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "ImageGallery"
          ],
          "className": "image-gallery"
        },
        {
          "components": [
            "AudioPlayer"
          ],
          "className": "audio-gallery"
        },
        {
          "components": [
            "AudioList",
            "ChildNodes",
            "AudioCaption",
            "ImageCaption",
            "BodyText"
          ],
          "className": "bottom",
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "header"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "detail"
    }
  ]
});

toura.pageDef('location-list', {
  "capabilities": [
    "ImageGalleryDetail"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "NodeTitleBanner",
            "ImageGallery",
            "BodyText",
            "LocationList"
          ],
          "scrollable": true
        }
      ],
      "name": "index"
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "detail-title"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "detail"
    }
  ]
});

toura.pageDef('home-with-header-tablet', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageHeaderImage"
          ],
          "className": "page-header"
        },
        {
          "components": [
            "BodyText",
            "ChildNodes"
          ],
          "scrollable": true
        },
        {
          "components": [
            "AppNav"
          ],
          "className": "nav"
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('audio-with-images-tablet', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Page_Audios",
    "AudioList_AudioPlayer",
    "AudioList_AudioCaption",
    "Text_ChildNodes"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "regions": [
            {
              "components": [
                "ImageGallery"
              ]
            },
            {
              "components": [
                "ImageCaption"
              ],
              "className": "caption"
            }
          ],
          "className": "image-container"
        },
        {
          "regions": [
            {
              "components": [
                "BodyText"
              ],
              "className": "body-text-container",
              "scrollable": true
            },
            {
              "components": [
                "ChildNodes"
              ],
              "className": "child-nodes-container",
              "scrollable": true
            }
          ],
          "className": "text-and-child-nodes",
          "type": "row"
        },
        {
          "regions": [
            {
              "regions": [
                {
                  "components": [
                    "AudioPlayer"
                  ]
                },
                {
                  "components": [
                    "AudioCaption"
                  ]
                }
              ],
              "className": "audio-active-player"
            },
            {
              "components": [
                "AudioList"
              ],
              "className": "audio-list",
              "scrollable": true
            }
          ],
          "className": "audio-container"
        }
      ],
      "name": "index",
      "backgroundImage": true
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "header"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "detail"
    }
  ]
});

toura.pageDef('grid-view', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "PageHeaderImage"
          ],
          "className": "page-header"
        },
        {
          "components": [
            "BodyText",
            "ChildNodeGrid"
          ],
          "className": "grid",
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('default', {
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "PageHeaderImage",
            "BodyText",
            "ChildNodes"
          ],
          "className": "main-content",
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('hotspots', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "Hotspots"
          ]
        }
      ]
    }
  ]
});

toura.pageDef('videos-and-text-phone', {
  "capabilities": [
    "Page_Videos",
    "VideoList_VideoPlayer",
    "VideoList_VideoCaption"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "VideoPlayer"
          ],
          "className": "player-container"
        },
        {
          "components": [
            "VideoList",
            "ChildNodes",
            "VideoCaption",
            "BodyText"
          ],
          "className": "listing-and-children",
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('images-and-text-phone', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "ImageGallery"
          ],
          "className": "image-container"
        },
        {
          "components": [
            "ImageCaption",
            "ChildNodes",
            "BodyText"
          ],
          "className": "caption-and-text",
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "header"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "detail"
    }
  ]
});

toura.pageDef('feed-list-phone', {
  "capabilities": [
    "FeedItemList_FeedItemPage"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "PageHeaderImage",
            "FeedItemList"
          ],
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('favorites', {
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "Favorites"
          ],
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('feed-item', {
  "capabilities": [
    "PageNav_FeedTitle"
  ],
  "type": "detail",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "FeedItemDetail"
          ],
          "scrollable": true
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('images-and-text-tablet', {
  "capabilities": [
    "ImageGallery_ImageCaption",
    "ImageGalleryDetail",
    "Page_Images",
    "Text_ChildNodes"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "regions": [
            {
              "components": [
                "ImageGallery"
              ],
              "className": "image-gallery"
            },
            {
              "components": [
                "ImageCaption"
              ],
              "className": "caption"
            }
          ],
          "className": "image-container"
        },
        {
          "regions": [
            {
              "components": [
                "BodyText"
              ],
              "className": "body-text-container",
              "scrollable": true
            },
            {
              "components": [
                "ChildNodes"
              ],
              "className": "child-nodes-container",
              "scrollable": true
            }
          ],
          "className": "text-and-child-nodes"
        }
      ],
      "name": "index",
      "backgroundImage": true
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "header"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "detail"
    }
  ]
});

toura.pageDef('full-screen-images', {
  "capabilities": [
    "Page_FullScreenImages"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "ZoomableImageGallery"
          ]
        }
      ],
      "name": "index"
    }
  ]
});

toura.pageDef('camera', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "custom.Camera"
          ],
          "scrollable": true
        }
      ],
      "name": "index"
    }
  ]
});

toura.pageDef('debug', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "Debug"
          ],
          "scrollable": true
        }
      ],
      "name": "index"
    }
  ]
});

toura.pageDef('videos-and-text-tablet', {
  "capabilities": [
    "Page_Videos",
    "VideoList_VideoPlayer",
    "VideoList_VideoCaption",
    "Text_ChildNodes_VideoList"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "regions": [
            {
              "components": [
                "VideoPlayer"
              ],
              "className": "player-container"
            },
            {
              "components": [
                "VideoCaption"
              ],
              "className": "video-caption"
            }
          ],
          "className": "video-container"
        },
        {
          "regions": [
            {
              "components": [
                "BodyText"
              ],
              "scrollable": true
            },
            {
              "components": [
                "VideoList",
                "ChildNodes"
              ],
              "className": "listings-container",
              "scrollable": true
            }
          ],
          "className": "text-and-listings"
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('node-gallery', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "DropDownText"
          ],
          "className": "drop-down-text"
        },
        {
          "components": [
            "NodeGallery"
          ],
          "className": "node-gallery"
        }
      ],
      "name": "index"
    }
  ]
});

toura.pageDef('home-with-header-phone', {
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageHeaderImage"
          ],
          "className": "header-image"
        },
        {
          "components": [
            "BodyText",
            "ChildNodes"
          ],
          "scrollable": true
        },
        {
          "components": [
            "AppNav"
          ],
          "className": "nav"
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('home-tablet', {
  "screens": [
    {
      "regions": [
        {
          "regions": [
            {
              "components": [

              ]
            },
            {
              "regions": [
                {
                  "components": [
                    "BodyText"
                  ],
                  "scrollable": true
                },
                {
                  "components": [
                    "ChildNodes"
                  ],
                  "scrollable": true
                }
              ],
              "className": "columns"
            }
          ],
          "className": "top"
        },
        {
          "components": [
            "AppNav"
          ],
          "className": "nav"
        }
      ],
      "name": "index",
      "backgroundImage": true
    }
  ]
});

toura.pageDef('google-map-phone', {
  "capabilities": [
    "Page_GoogleMapPhone"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "components": [
            "GoogleMap"
          ],
          "className": "google-map"
        }
      ],
      "name": "index",
      "backgroundImage": false
    },
    {
      "regions": [
        {
          "components": [
            "DetailTitle"
          ],
          "className": "header"
        },
        {
          "components": [
            "PinInfo"
          ],
          "scrollable": true
        }
      ],
      "name": "detail",
      "backgroundImage": false
    }
  ]
});

toura.pageDef('search', {
  "capabilities": [
    "Page_Search"
  ],
  "screens": [
    {
      "regions": [
        {
          "components": [
            "SearchInput"
          ],
          "className": "search-input"
        },
        {
          "components": [
            "SearchResults"
          ],
          "scrollable": true
        }
      ],
      "name": "index"
    }
  ]
});

toura.pageDef('feed-list-tablet', {
  "capabilities": [
    "FeedItemList_FeedItemDetail"
  ],
  "type": "node",
  "screens": [
    {
      "regions": [
        {
          "components": [
            "PageNav"
          ],
          "className": "page-nav"
        },
        {
          "regions": [
            {
              "components": [
                "ColumnHeaderImage",
                "FeedItemList"
              ],
              "backgroundImage": true,
              "scrollable": true
            },
            {
              "components": [
                "FeedItemDetail"
              ],
              "scrollable": true
            }
          ]
        }
      ],
      "name": "index",
      "backgroundImage": false
    }
  ]
});

