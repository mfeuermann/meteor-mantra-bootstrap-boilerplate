import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

import {Users} from '/lib/collections';

import _lgr from '/lib/logging/server/serverLogger';
const Lgr = new _lgr( __filename, 'verbose' );

export default function () {
  return {

    addOrEditUser: new ValidatedMethod({

      name: 'users.addOrEditUser',

      // validation
      validate: new SimpleSchema({
        _id: { type: String, optional: true},
        name: { type: String, optional: true },
        surname: { type: String, optional: true },
        address: { type: String, optional: true },
        username: { type: String },
        telefon: { type: Number, optional: true },
        password: { type: String, optional: true },
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // main code
      run({_id, name, surname, address, telefon, username, password}) {

        // @TODO can administrator
        // vytvorime si novy logovaci objekt
        Lgr.a = 'users.addOrEditUser';
        Lgr.u = 'Marek';

        // user object
        const finalObj = {profile: {name, surname, telefon}, zdroje: [], emails: [ {address} ], username};
        var lastId = 0;

        // update user profile
        Users.upsert({_id},{$set: finalObj}, function (error, result) {
          if (error) {
            Lgr.error('Chyba uložení uživatelského účtu');
            Lgr.error(error);
            throw new Meteor.Error('CHYBA', 'Chyba zapisu do DB');
          }
          if (result) {

            if (_id) {
              Lgr.info('Editace uživatelského účtu');
              Lgr.info(finalObj);
            } else {
              Lgr.info('Přidání uživatelského účtu');
              Lgr.info(finalObj);
            }
            lastId = result.insertedId;
            // if saving password
            if (password) {

              Lgr.info('Změna uživatelského hesla');
              // if updating profile
              if (_id) {
                Accounts.setPassword(_id, password);

              // if creating new user
              } else {
                Accounts.setPassword(lastId, password);
              }
            }
          }
        });

      },
    }),
    delUser: new ValidatedMethod({

      // nazev, ktery volame pri Meteor.call()
      name: 'users.delUser',

      // validace vstupnich promennych
      validate: new SimpleSchema({
        _id: { type: String, optional: true},
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // hlavni kod
      run({_id}) {

        // @TODO Toto muze delat jenom administrator

        // vytvorime si novy logovaci objekt
        Lgr.a = 'users.delUser';
        Lgr.u = 'Marek';

        Users.remove({_id}, function (err) {
          if (err) {
            Lgr.error('Chyba odebrání uživatelského účtu');
            throw new Meteor.Error('CHYBA', 'Nelze smazat uzivatele!');
          } else {
            Lgr.info('Odebrání uživatelského účtu bylo úspěšně realizováno');
            Lgr.info(_id);
          }
        });

      },
    }),
    priraditZdroj: new ValidatedMethod({

      // nazev, ktery volame pri Meteor.call()
      name: 'users.priraditZdroj',

      // validace vstupnich promennych
      validate: new SimpleSchema({
        userId: { type: String},
        zdrojId: { type: String},
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // hlavni kod
      run({userId, zdrojId}) {

        // @TODO Toto muze delat jenom administrator

        Lgr.a = 'users.priraditZdroj';
        Lgr.u = 'Marek';

        Users.update(
          {_id: userId },
          {$addToSet: {zdroje: zdrojId}}
        ,err => {
          if (err) {
            Lgr.error('Chyba přiřazení nového zdroje');
            Lgr.error(zdrojId);
            throw new Meteor.Error('CHYBA', 'Nelze přiřadit zdroj!');
          } else {
            Lgr.info('Zdroj byl úspěšně přiřazen');
            Lgr.info(userId,zdrojId);
          }
        });

      },
    }),
    odebratZdroj: new ValidatedMethod({

      // nazev, ktery volame pri Meteor.call()
      name: 'users.odebratZdroj',

      // validace vstupnich promennych
      validate: new SimpleSchema({
        userId: { type: String},
        zdrojId: { type: String},
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // hlavni kod
      run({userId, zdrojId}) {

        Lgr.a = 'users.odebratZdroj';
        Lgr.u = 'Marek';


        // @TODO Toto muze delat jenom administrator

        Users.update(
          {_id: userId},
          {$pull: {zdroje: {$in: [ zdrojId ] }}}
         , err => {
           if (err) {
             Lgr.error('Chyba odebrání zdroje');
             Lgr.error(userId);
             throw new Meteor.Error('CHYBA', 'Nelze přiřadit zdroj!');
           } else {
             Lgr.info('Zdroj byl úspěšně odebrán');
             Lgr.info(userId,zdrojId);
           }
         });

      },
    }),

    priraditRole: new ValidatedMethod({

      // nazev, ktery volame pri Meteor.call()
      name: 'users.priraditRole',

      // validace vstupnich promennych
      validate: new SimpleSchema({
        userId: { type: String},
        role: { type: String},
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // hlavni kod
      run({userId, role}) {

        // @TODO Toto muze delat jenom administrator

        Lgr.a = 'users.priraditRole';
        Lgr.u = 'Marek';

        Roles.addUsersToRoles(userId, [ role ]);

        Lgr.info('Přiřazena role uživatele');
        Lgr.info(userId, role);

      },
    }),

    odebratRole: new ValidatedMethod({

      // nazev, ktery volame pri Meteor.call()
      name: 'users.odebratRole',

      // validace vstupnich promennych
      validate: new SimpleSchema({
        userId: { type: String},
      }).validator(),

      applyOptions: {
        noRetry: true,
      },

      // hlavni kod
      run({userId}) {

        // @TODO Toto muze delat jenom administrator

        Roles.setUserRoles(userId,[ ]);

      },
    })
  };
}
