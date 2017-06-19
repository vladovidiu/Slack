import template from './messages.html';
import _ from 'lodash';
import moment from 'moment';

const MessagesComponent = {
    bindings: {
        thread: '<'
    },
    templateUrl: template,
    controller: class MessagesComponent {
        /* @ngInject */
        constructor($document, $timeout) {
            this.$document = $document;
            this.$timeout = $timeout;
        }

        $onInit() {
            this.organizeThreadMessages();
            this.scrollToBottom();
        }

        $onChanges() {
            this.organizeThreadMessages();
            this.scrollToBottom();
        }

        organizeThreadMessages() {
            let groupedMessages = _.groupBy(
                this.thread.messages,
                m => moment(m.sentAt).format('YYYY-MM-DD')
            );

            this.messageDays = _.keys(groupedMessages)
                .sort()
                .map( k => _.sortBy(groupedMessages[k], 'sentAt'));
        }

        scrollToBottom() {
            let scrollPane = angular.element(
                this.$document[0].querySelector('#msgs-scroller-div')
            )[0];

            if (scrollPane) {
                this.$timeout(() => scrollPane.scrollTop = scrollPane.scrollHeight);
            }
        }
    }
};

export default MessagesComponent;
