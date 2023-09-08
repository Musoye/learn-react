## Objective 

Create and host an endpoint using any programming language of your choice. 

The endpoint should take two GET parameters and return specific information in JSON format.

## Requirements

The information required includes: 
- Slack name
- Current day of the week
- Current UTC time (with validation of +/-2)
- Track
- The GitHub URL of the file being run
- The GitHub URL of the full source code.

## JSON
{<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"slack_name": "example_name",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"current_day": "Monday",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"utc_time": "2023-08-21T15:04:05Z",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"track": "backend",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"github_repo_url": "https://github.com/username/repo",<br>
  &nbsp;&nbsp;&nbsp;&nbsp;“status_code”: “200”<br>
}
