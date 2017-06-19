import template from './chat-page.html';

const ChatPageComponent = {
    bindings: {},
    templateUrl: template,
    controller: class ChatPageController {
        /* @ngInject */
        constructor() {

            const eigenjoy = {
                id: 'eigenjoy',
                name: 'eigenjoy'
            };

            const auser = {
                id: 'auser',
                name: 'auser'
            }

            this.channels = [
                {
                    id: 'angular',
                    name: 'angular',
                    type: 'channel',
                    messages: [
                        {
                            author: eigenjoy,
                            text: 'hi',
                            sentAt: new Date()
                        },
                        {
                            author: auser,
                            text: 'hey',
                            sentAt: new Date()
                        }
                    ]
                },
                {
                    id: 'redux',
                    name: 'redux',
                    type: 'channel',
                    messages: [
                        {
                            author: eigenjoy,
                            text: 'React is cool',
                            sentAt: new Date()
                        },
                        {
                            author: auser,
                            text: 'Well ... yeah',
                            sentAt: new Date()
                        },
                        {
                            author: eigenjoy,
                            text: 'What about angular?',
                            sentAt: new Date()
                        }
                    ]
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
