import { Request } from '@warp-drive/ember';
import RouteTemplate from 'ember-route-template';
import Component from '@glimmer/component';
import { service } from '@ember/service';
import { getRequestState } from '@warp-drive/ember';

class MyRouteComponent extends Component {
  @service store;

  <template>
    {{outlet}}
    <h1>Contact</h1>
    <Request @request={{@model.contactRequest}}>
      <:content as |ContactList|>
        <h2>List</h2>
        <ul>
        {{#each ContactList.data as |contact|}}
          <li>{{contact.first-name}} {{contact.last-name}}</li>
        {{else}}
          <li>Sorry... cannot find any contacts.</li>
        {{/each}}
        </ul>
      </:content>
    </Request>
  </template>
}

export default RouteTemplate(MyRouteComponent);
