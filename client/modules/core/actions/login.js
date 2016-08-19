
export default {
  // nastavujeme LocalState pri zobrazeni modalniho okna s detailem nakupu
  checkLogin({Meteor, LocalState, Collections, FlowRouter},username, password) {

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        LocalState.set('CHYBA', 'Chybné přihlášení!');
      } else {
        FlowRouter.go('/zdroj');
      }
    });

  },

  logout({Meteor, LocalState, Collections, FlowRouter}) {

    Meteor.logout();
    // FlowRouter.go('/');

  }
};
