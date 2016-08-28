import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('users.listAll', function () {
    return Users.find({});
  });

  Meteor.publish('users.loggedUser', function (userId) {

    return Users.find({_id: userId});
  });
}
