import template from './chat-page.html';

const ChatPageComponent = {
    bindings: {},
    templateUrl: template,
    controller: class ChatPageController {
        /* @ngInject */
        constructor() {

            const eigenjoy = {
                id: 'eigenjoy',
                name: 'Vlad Tutunea'
            };

            const auser = {
                id: 'auser',
                name: 'auser'
            }

            this.channels = [
                {
                    id: 'angular',
                    name: 'angular',
                    type: 'channel'
                },
                {
                    id: 'redux',
                    name: 'redux',
                    type: 'channel'
                }
            ];

            this.directMessages = [{
                id: 'auser',
                name: 'auser',
                type: 'dm'
            }];

            this.currentUser = eigenjoy;
            this.activeThread = this.channels[0];

            this.threadSelected = $event => {
                this.activeThread = this.channels.find(channel => Object.is(channel.id, $event.id));
            }
        }
    }
};

export default ChatPageComponent;
