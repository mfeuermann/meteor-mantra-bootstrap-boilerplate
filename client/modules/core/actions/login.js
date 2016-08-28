
export default {
  // nastavujeme LocalState pri zobrazeni modalniho okna s detailem nakupu
  checkLogin({Meteor, LocalState, Collections, FlowRouter},username, password) {

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        LocalState.set('CHYBA', 'Login failure!');
      } else {
        FlowRouter.go('/');
      }
    });

  },

  logout({Meteor,FlowRouter}) {

    Meteor.logout();
    FlowRouter.go('/');

  }
};
