import template from './message.html';

const MessageComponent = {
    bindings: {
        message: '<'
    },
    templateUrl: template,
    controller: class MessageComponent {
        constructor(){

        }
    }
};

export default MessageComponent;
