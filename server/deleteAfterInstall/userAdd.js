Meteor.startup(function () {

  if (!Meteor.users.findOne({username: 'admin'})) {
    Accounts.createUser({
                       username: 'admin',
                       email : 'admin@admin.com',
                       password : 'admin',
                       profile  : {

                       }
    });
  }

});
