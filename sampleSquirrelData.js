const AWS = require("aws-sdk")

const data=[
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0001"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0002"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0003"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0004"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0005"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0006"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0007"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West Quad Building"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0008"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0009"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0010"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0011"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0012"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0013"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0014"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0015"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0016"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0017"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0018"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0019"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0020"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0021"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0022"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0023"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0024"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0025"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0026"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0027"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0028"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0029"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0030"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0031"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0032"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0033"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0034"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0035"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0036"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0037"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0038"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0039"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0040"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West Quad Building"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0041"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0042"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0043"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0044"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0045"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0046"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item : {
      "squirrel_id": {
        "S": "0047"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
    
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0048"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0049"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0050"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0051"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0052"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0053"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0054"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0055"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0056"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0057"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0058"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0059"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0060"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0061"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0062"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West Quad Building"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0063"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West Quad Building"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0064"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0065"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0066"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0067"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0068"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0069"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0070"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0071"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0072"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0073"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0074"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0075"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0076"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0077"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0078"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0079"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0080"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0081"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitman Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0082"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West End Building"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0083"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0084"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0085"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0086"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0087"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0088"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Roosevelt Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0089"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0090"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Library"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0091"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0092"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0093"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0094"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0095"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Ingersoll Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0096"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Cinnamon"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Boylan Hall"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0097"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "James Hall"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0098"
      },
      "age": {
        "S": "Juvenile"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "Chiller Plant"
      },
      "size": {
        "S": "Small"
      },
      "gender": {
        "S": "Male"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0099"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Black"
      },
      "active_time": {
        "S": "PM"
      },
      "loc_quad": {
        "S": "East"
      },
      "loc_buiding": {
        "S": "Whitehead Hall"
      },
      "size": {
        "S": "Large"
      },
      "gender": {
        "S": "Female"
      }
    }
  }},
  {PutRequest: {
    Item: {
      "squirrel_id": {
        "S": "0100"
      },
      "age": {
        "S": "Adult"
      },
      "color": {
        "S": "Gray"
      },
      "active_time": {
        "S": "AM"
      },
      "loc_quad": {
        "S": "West"
      },
      "loc_buiding": {
        "S": "West Quad Building"
      },
      "size": {
        "S": "Medium"
      },
      "gender": {
        "S": "Female"
      }
    }
  }}
]


exports.data = data