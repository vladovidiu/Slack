import template from './team-header.html';

const TeamHeaderComponent = {
    bindings: {
        currentUser: '<'
    },
    templateUrl: template,
    controller: class TeamHeaderComponent {
        constructor() {

        }
    }
};

export default TeamHeaderComponent;
