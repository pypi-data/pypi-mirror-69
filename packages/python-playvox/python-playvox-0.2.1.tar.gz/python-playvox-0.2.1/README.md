# python-playvox

python-playvox is a simple API wrapper for the Playvox REST API.

Documentation for the Playvox API can be found [here.](https://developers.playvox.com/restapis/#/introduction/api-reference)

Please note, this wrapper is in beta and has not been fully tested.

## Usage
To instantiate the API wrapper you will need the subdomain for your your API uid and your API key.

```python
from python_playvox import Playvox

subdomain = 'mysubdomain'
uid = 'my-playvox-uid'
key = 'my-playvox-key'

pv = Playvox(subdomain, uid, key)
```

This will create an instance of the wrapper that makes calls to 'https://mysubdomain.playvox.com/api/v1/' and authenticates with your playvox uid and key.

## Methods

  - [pv.coaching.get(**kwargs):](#pvcoachinggetkwargs)
  - [pv.learning.get(**kwargs):](#pvlearninggetkwargs)
  - [pv.campaign.get(**kwargs):](#pvcampaigngetkwargs)
  - [pv.campaign.vars(campaign_id)](#pvcampaignvarscampaign_id)
  - [pv.campaign.users(campaign_id)](#pvcampaignuserscampaign_id)
  - [pv.campaign.send_data(campaign_id, data)](#pvcampaignsend_datacampaign_id-data)
  - [pv.calibration.get(**kwargs)](#pvcalibrationgetkwargs)
  - [pv.evaluation.get(**kwargs)](#pvevaluationgetkwargs)
  - [pv.scorecard.get(**kwargs)](#pvscorecardgetkwargs)
  - [pv.team.get(**kwargs)](#pvteamgetkwargs)
  - [pv.team.new(name, description, team_leaders, users)](#pvteamnewname-description-team_leaders-users)
  - [pv.team.update(team_id, **kwargs)](#pvteamupdateteam_id-kwargs)
  - [pv.team.add_user(team_id, user_id)](#pvteamadd_userteam_id-user_id)
  - [pv.team.remove_user(team_id, user_id)](#pvteamremove_userteam_id-user_id)
  - [pv.team.delete(team_id)](#pvteamdeleteteam_id)
  - [pv.user.get(**kwargs)](#pvusergetkwargs)
  - [pv.user.new(first_name, last_name, username, email, password, **kwargs)](#pvusernewfirst_name-last_name-username-email-password-kwargs)
  - [pv.user.update(user_id, **kwargs)](#pvuserupdateuser_id-kwargs)
  - [pv.user.deactivate(user_id, deactivation_type, reason)](#pvuserdeactivateuser_id-deactivation_type-reason)
  - [pv.user.activate(user_id)](#pvuseractivateuser_id)
  - [pv.role.get(**kwargs)](#pvrolegetkwargs)
  - [pv.integration.get()](#pvintegrationget)
  - [pv.integration.new(name, description, data_storage_minutes)](#pvintegrationnewname-description-data_storage_minutes)
  - [pv.integration.update(integration_id, **kwargs)](#pvintegrationupdateintegration_id-kwargs)
  - [pv.integration.delete(integration_id)](#pvintegrationdeleteintegration_id)
  - [pv.integration.add_metadata(integration_id, field_id, m_type, allowed, required, available_in):](#pvintegrationadd_metadataintegration_id-field_id-m_type-allowed-required-available_in)
  - [pv.integration.update_metadata(integration_id, metadata_id, **kwargs):](#pvintegrationupdate_metadataintegration_id-metadata_id-kwargs)
  - [pv.integration.delete_metadata(integration_id, metadata_id)](#pvintegrationdelete_metadataintegration_id-metadata_id)
  - [pv.interaction.get(integration_id)](#pvinteractiongetintegration_id)
  - [pv.interaction.add(integration_id, interaction_id, assignee_id, custom_metadata)](#pvinteractionaddintegration_id-interaction_id-assignee_id-custom_metadata)
  - [pv.interaction.update(integration_id, interaction_id, data)](#pvinteractionupdateintegration_id-interaction_id-data)
  - [pv.interaction.delete(integration_id, interaction_id)](#pvinteractiondeleteintegration_id-interaction_id)
  - [pv.interaction.get_comments(interaction_id)](#pvinteractionget_commentsinteraction_id)
  - [pv.interaction.add_comment(interaction_id, body, comment_type, author_id, comment_dt=None)](#pvinteractionadd_commentinteraction_id-body-comment_type-author_id-comment_dtnone)
  - [pv.interaction.update_comment(interaction_id, comment_id, body, comment_dt=None)](#pvinteractionupdate_commentinteraction_id-comment_id-body-comment_dtnone)
  - [pv.delete_comment(interaction_id, comment_id)](#pvdelete_commentinteraction_id-comment_id)
  - [pv.interaction.bulk_add(integration_id, interactions)](#pvinteractionbulk_addintegration_id-interactions)
  - [pv.interaction.bulk_status(job_id)](#pvinteractionbulk_statusjob_id)

#### pv.coaching.get(**kwargs):

Parameters:

- include(string): use include='all' to include all coaching related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of coaching data that match the specified parameters*

#### pv.learning.get(**kwargs):

Parameters:

- include(string): use include='all' to include all learning related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of learnings data that match the specified parameters*

#### pv.campaign.get(**kwargs):

Parameters:

- include(string): use include='all' to include all campaign related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of campaign data that match the specified parameters*

#### pv.campaign.vars(campaign_id)

Parameters:

- campaign_id(string) *required*: campaign ID to pull vars data for

*Returns a dict containing vars data for the specified campaign*

#### pv.campaign.users(campaign_id)

Parameters:

- campaign_id(string) *required*: campaign ID to pull users data for

*Returns a dict containing users data for the specified campaign*

#### pv.campaign.send_data(campaign_id, data)

Parameters:

- campaign_id(string) *required*: id of campaign to send campaign metric data to
- data(dict or list[dict]) *required*: metric data to add to the campaign

*Returns True if the data was successfully added, otherwise an error is raised*

#### pv.calibration.get(**kwargs)

Parameters:

- include(string): use include='all' to include all calibration related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of calibration data that match the specified parameters*

#### pv.evaluation.get(**kwargs)

Parameters:

- include(string): use include='all' to include all evaluation related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of evaluation data that match the specified parameters*

#### pv.scorecard.get(**kwargs)

Parameters:

- include(string): use include='all' to include all scorecard related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of scorecard data that match the specified parameters*

#### pv.team.get(**kwargs)

Parameters:

- include(string): use include='all' to include all team related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of team data that match the specified parameters*

#### pv.team.new(name, description, team_leaders, users)

Parameters:

- name(string) *required*: name of the new team
- description(string): description of the new team
- team_leaders(list) *required*: a list of the user ids of team leaders
- users(list): a list of the user ids of team members

*Returns the id of the newly created team*

#### pv.team.update(team_id, **kwargs)

Parameters:

- team_id(string) *required*: the id of the team to be updated
- name(string): the new name of the team
- description(string): the new description for the team
- team_leader_id(list): a list of user ids for team leaders to replace the current list
- users(list): a list of user ids for users to replace the current list

*Returns True if successful, otherwise an error will be raised*

#### pv.team.add_user(team_id, user_id)

Parameters:

- team_id(string) *required*: the id of the team the user will be added to
- user_id(string) *required*: the id of the user that will be added to the team

*Returns True if successful, otherwise an error will be raised*

#### pv.team.remove_user(team_id, user_id)

Parameters:

- team_id(string) *required*: the id of the team that the user will be removed from
- user_id(string) *required*: the id of the user that will be removed from the team

*Returns True if successful, otherwise an error will be raised*

#### pv.team.delete(team_id)

Parameters:

- team_id(string) *required*: the id of the team that will be deleted

*Returns True if successful, otherwise an error will be raised*

#### pv.user.get(**kwargs)

Parameters:

- include(string): use include='all' to include all user related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict containing user data for the specified parameters*

#### pv.user.new(first_name, last_name, username, email, password, **kwargs)

Parameters:

 - first_name(string) *required*: the new user's first name
 - last_name(string) *required*: the new user's last name
 - username(string) *required*: the username that the new user will login with
 - email(string) *required*: the new user's email address
 - password(string) *required*: the new user's password
   - at least 10 characters
   - 1 numer required
   - 1 uppercase letter required
   - 1 lowercase letter required
- integrations_{integration_name}(string): the user's integration ID for the specified integration, acceptable integration names include:
  - five9
  - zendesk
  - salesforce
  - livechat
  - ringcentral
  - intercom
  - freshdesk
  - talkdesk
  - sopim
  - kustomer
  - helpscout
  - helpshift

*Returns the id of the new user*

#### pv.user.update(user_id, **kwargs)

Parameters:

- user_id(string) *required*: the id of the user to be updated
- name(string): the new first name for the specified user
- last_name(string): the new last name for the specified user
- integrations_{integration_name}(string): the user's integration ID for the specified integration, acceptable integration names include:
  - five9
  - zendesk
  - salesforce
  - livechat
  - ringcentral
  - intercom
  - freshdesk
  - talkdesk
  - sopim
  - kustomer
  - helpscout
  - helpshift

*Returns True if the user was updated successfully, otherwise an error will be raised*

#### pv.user.deactivate(user_id, deactivation_type, reason)

Parameters:

- user_id(string) *required*: the id of the user to be deactivated
- deactivation_type(string) *required*: the type of deactivation
- reason(string) *required*: the reason the user is being deactivated

*Returns True if successful, otherwise an error will be raised*

#### pv.user.activate(user_id)

Parameters:

- user_id(string) *required*: the id of a previously deactivated user to be activated

*Returns True if succesful, otherwise an error will be raised*

#### pv.role.get(**kwargs)

Parameters:

- include(string): use include='all' to include all role related objects information
- page(int): page number for data pagination
- per_page(int): number of resources per page for data pagination
- query(string): JSON specifying resource filters
- fields(string): comma separated list of fields to be returned from the resource
- sort(string): comma separated list of sort attributes. Use + as prefix for ascending and - as prefix for descending

*Returns a dict of role data that match the specified parameters*

#### pv.integration.get()

*Returns all available integrations*

#### pv.integration.new(name, description, data_storage_minutes)

Parameters:

- name(string) *required*: name for the new integration
- description(string) *required*: description for the new integration
- data_storage_minutes(int) *required*: the time in minutes to retain data from the integration
  - Max: 129600(90 days)

*Returns the id of the newly created integration*

#### pv.integration.update(integration_id, **kwargs)

Parameters:

- integration_id(string) *required*: the id of the integration to be updated
- name(string): a new name for the integration
- description(string): a new description for the integration
- data_storage_minutes(int): the time in minutes to retain data from the integration
  - Max: 129600(90 days)

*Returns True if the specified integration is updated successfully, otherwise an error will be raised*

#### pv.integration.delete(integration_id)

Parameters:

- integration_id(string) *required*: the id of the integration to be deleted

*Returns True if the specified integration is deleted successfully, otherwise an error will be raised*

#### pv.integration.add_metadata(integration_id, field_id, m_type, allowed, required, available_in):

Parameters:

- integration_id(string) *required*: the id of the integration that the metadata field will be added to
- field_id(string) *required*: name to identify the metadata field
  - Minimum 3 characters
  - Maximum 30 characters
  - Accepts only a-z and underscores
- m_type(string) *required*: the type of the field, allowed values:
  - string
  - integer
  - float
  - list
  - boolean
  - datetime
- allowed(list) *required*: the allowed values that the filed will accept
- required(boolean) *required*: specifies whether or not the field is required
- available_in(list[string]): specifies if the field can be filtered or shown in related data, accepts:
  - 'filters'
  - 'display'

*Returns the id of the new metadata field if successful, otherwise an error will be raised*

#### pv.integration.update_metadata(integration_id, metadata_id, **kwargs):

Parameters:

- integration_id(string) *required*: the id of the integration that the target metadata field exists on
- metadata_id(string) *required*: the id of the metadata field that will be updated
- field_id(string): name to identify the metadata field
  - Minimum 3 characters
  - Maximum 30 characters
  - Accepts only a-z and underscores
- m_type(string): the type of the field, allowed values:
  - string
  - integer
  - float
  - list
  - boolean
  - datetime
- allowed(list): the allowed values that the filed will accept
- required(boolean): specifies whether or not the field is required
- available_in(list[string]): specifies if the field can be filtered or shown in related data, accepts:
  - 'filters'
  - 'display'

*Returns True if successful, otherwise an error will be raised*

#### pv.integration.delete_metadata(integration_id, metadata_id)

Parameters:

- integration_id(string) *required*: the id of the integration that the target metadata field exists on
- metadata_id(string) *required*: the id of the metadata field to be deleted

*Returns True if successful, otherwise an error will be raised*

#### pv.interaction.get(integration_id)

Parameters:

- integration_id(string) *required* The id of the integration to get integrations for.

*Returns all interactions for the specified integration*

#### pv.interaction.add(integration_id, interaction_id, assignee_id, custom_metadata)

Parameters:

- integration_id(string) *required*: The id of the integration the interaction will be added to.
- interaction_id(string): The id of your external system
  - Max length: 68 characters
- assignee_id(string): The id of the user on the external system (should match email or username in playvox)
- custom_metadata(dict) *required*: The payload of all the metadata fields defined on the integration

*Returns the id of the new interaction*

#### pv.interaction.update(integration_id, interaction_id, data)

Parameters:

- integration_id(string) *required*: the id of the integration the target interaction exists on
- interaction_id(string) *required*: the id of the interaction to be updated
- data(dict) *required*: The payload of the metadata fields to be updated

*Returns True if successful, otherwise an error will be raised*

#### pv.interaction.delete(integration_id, interaction_id)

Parameters:

- integration_id(string) *required*: the id of the integration the target interaction exists on
- interaction_id(string) *required*: the id of the interaction to be deleted

*Returns True if successful, otherwise an error will be raised*

#### pv.interaction.get_comments(interaction_id)

Parameters:

- interaction_id(string) *required*: the id of the interaction to get comments for

*Returns all comments associated with the interaction*

#### pv.interaction.add_comment(interaction_id, body, comment_type, author_id, comment_dt=None)

Parameters:

- interaction_id(string) *required*: the id of the interaction the comment will be added to
- body(string) *required*: the body of the comment
- comment_type(string) *required*: the type of comment, accepts:
  - 'customer_comment'
  - 'agent_comment'
  - 'internal_note'
- author_id(string) *required*: the username or email of the author on playvox
- comment_dt(datetime): the time that the comment was added to the interaction, defaults to current time if not specified

*Returns the id of the newly created comment*

#### pv.interaction.update_comment(interaction_id, comment_id, body, comment_dt=None)

Parameters:

- interaction_id(string) *required*: the id of the interaction that the comment is associated with
- comment_id(string) *required*: the id of the comment to be updated
- body(string) *required*: the new body of the comment
- comment_dt(datetime): the time that the comment was updated, defaults to current time if not specified

*Returns True if the comment is updated successfully, otherwise an error will be raised*

#### pv.delete_comment(interaction_id, comment_id)

Parameters:

- interaction_id(string) *required*: the id of the interaction that the target comment is associated with
- comment_id(string) *required*: the id of the comment to be deleted

*Returns True if the comment is deleted successfully, otherwise an error will be raised*

#### pv.interaction.bulk_add(integration_id, interactions)

Parameters:

- integration_id(string) *required*: the id of the integration that the interactions will be added to
- interactions(dict) *required*: the interactions to be added to the integration, for more information see the [Playvox API Documentation](https://developers.playvox.com/restapis/#/reference/0/bulk-interactions/create)

*Returns the job id of the bulk job*

#### pv.interaction.bulk_status(job_id)

Parameters:

- job_id(string) *required*: the id of the bulk job to check the status of

*Returns status information on the specified bulk job*

