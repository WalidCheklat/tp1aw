var contactStore = (function () {
    var contactList = [];
    return {
        add: function(_name, _firsname, _date, _adress, _mail) {
            var contact = { name : _name,
                            firstname: _firsname,
                            date: _date,
                            adress: _adress,
                            mail: _mail
          };
          contactList.push(contact);
          return contactList;
        },
    
        getList: function() {
          return contactList;
        }
      }
    })();
    