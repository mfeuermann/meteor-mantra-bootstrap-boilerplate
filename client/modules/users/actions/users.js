

export default {

  addOrEditUser({Meteor, LocalState, Collections, FlowRouter}, userObj) {

    userObj.telefon = parseInt(userObj.telefon);

    Meteor.call('users.addOrEditUser', userObj, function (err) {
      if (err) {
        console.log(err);
        LocalState.set('CHYBA', 'Cannot create user!');
      }
    });

  },

  delUser({Meteor, LocalState, Collections, FlowRouter}, userId) {

    Meteor.call('users.delUser', {_id: userId}, function (err) {
      if (err) {
        LocalState.set('CHYBA', 'Cannot save user!');
      }
    });
  },

  priraditZdroj({Meteor, LocalState, Collections, FlowRouter}, userId, zdrojId) {

    Meteor.call('users.priraditZdroj', {userId,zdrojId}, function (err) {
      if (err) {
        console.log(err.message);
        LocalState.set('CHYBA', err.message);
      }
    });
  },

  odebratZdroj({Meteor, LocalState, Collections, FlowRouter}, userId, zdrojId) {

    Meteor.call('users.odebratZdroj', {userId,zdrojId}, function (err) {
      if (err) {
        LocalState.set('CHYBA', err.message);
      }
    });
  },

  priraditRole({Meteor, LocalState, Collections, FlowRouter}, userId, role) {

    Meteor.call('users.priraditRole', {userId,role}, function (err) {
      if (err) {
        LocalState.set('CHYBA', err.message);
      }
    });

  },

  odebratRole({Meteor, LocalState, Collections, FlowRouter}, userId) {

    Meteor.call('users.odebratRole', {userId}, function (err) {
      if (err) {
        LocalState.set('CHYBA', err.message);
      }
    });

  },

  toggleWindow({Meteor, LocalState, Collections, FlowRouter}, windowName, state) {

    Meteor.call('user.toggleWindow', {windowName, state}, function (err) {
      if (err) {
        console.log(err);
        LocalState.set('CHYBA', err.message);
      }
    });

  },

};
