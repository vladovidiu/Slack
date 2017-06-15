import template from './channel-header.html';

const ChannelHeaderComponent = {
    bindings: {
        active: '<'
    },
    templateUrl: template,
    controller: class ChannelHeaderComponent {
        constructor() {

        }
    }
};

export default ChannelHeaderComponent;
