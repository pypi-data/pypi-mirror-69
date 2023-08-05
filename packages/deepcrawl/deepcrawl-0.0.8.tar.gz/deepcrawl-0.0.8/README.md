# DeepCrawl API Wrapper

This is a package to simplify use of the DeepCrawl API.

```
pip install deepcrawl
```

## AP Connection
```python
import deepcrawl

# Create a connection 

USER = "user"
KEY = "key"
connection = deepcrawl.DeepCrawlConnection(USER, KEY)
# Wrong credentials will raise an InvalidCredentialsError
```


```python
filters = {}


```


## Accounts
```python
from deepcrawl.accounts.account import DeepCrawlAccount


account_data = {
    "address_city": str,
    "address_street": str,
    "country": str,
    "custom_color_header": str,
    "limit_levels_max": int,
    "limit_pages_max": int,
    "custom_color_menu": str,
    "name": str,
    "phone": str,
    "address_zip": str,
    "pref_email_support": bool,
    "custom_domain": str,
    "address_state": str,
    "custom_support_email": str,
    "custom_support_phone": str,
    "timezone": str,
    "finance_vat": str,
    "splunk_enabled": bool,
    "active": bool
}

# Create new account
new_account = connection.create_account(account_data)
# OR
account = DeepCrawlAccount(account_data)
account.save()  # This will raise a NotImplementedError

# Get an account
account_id = new_account.id
connection.get_account(account_id)

# Update an account
connection.update_account(account_id, account_data.update({}))
# OR
new_account.update(account_data.update({}))

# Get multiple accounts
accounts = connection.get_accounts(filters)

# Delete account
connection.delete_account(account_id)
# OR
new_account.delete()
# TODO Decide if we want to allow accounts to be deleted
# This will raise a NotImplementedError

# Refresh account
# If you want to refresh you're account with the latest DeepCrawl configuration
account.refresh()  # returns self

# Retrieve projects
projects = account.get_projects(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_projects will return cached projects or will do a call to DeepCrawl if projects attribute is empty.
# use_cache=False > get_projects will call DeepCrawl api and will override projects attribute.
account.load_projects(filters=filters)  # Also you can use (no cache option in this case)
account.projects

```


## Projects
```python
from deepcrawl.projects.projects import DeepCrawlProject


account_id = 0

# Create new project
project_data = {
    "name": str,
    "site_primary": "url",
    "crawl_subdomains": bool,
    "crawl_types": [str],
    "crawl_rate": int,
    "limit_levels_max": int,
    "limit_pages_max": int,
    "auto_finalize": bool,
    "site_secondaries": ["url|regex"],
    "start_urls": ["url"],
    "urls_included": ["url|regex"],
    "urls_excluded": ["url|regex"],
    "page_groupings": [
        {
          "name": str,
          "url_match": "url|regex",
          "crawl_sample": float
        }
    ],
    "crawl_css_js": bool,
    "crawl_disallowed_pages": bool,
    "crawl_external_urls": bool,
    "crawl_nofollow_links": bool,
    "crawl_noindex_pages": bool,
    "crawl_non_html_file_types": bool,
    "crawl_not_included_urls": bool,
    "location": str,
    "is_stealth_mode": bool,
    "user_agent": "iphone",
    "custom_header_user_agent": str,
    "custom_header_user_agent_short": str,
    "mobile_user_agent": str,
    "mobile_custom_header_user_agent": str,
    "mobile_custom_header_user_agent_short": str,
    "custom_extractions": [
        {
          "label": str,
          "regex": "regec",
          "clean_html_tags": bool,
          "match_number_from": int,
          "match_number_to": int,
          "filter": "regex"
        }
    ],
    "robots_overwrite": str,
    "custom_dns": [
        {
          "hostname": str,
          "ip_address": str
        }
    ],
    "site_test": "url",
    "crawl_test_site": bool,
    "site_test_user": str,
    "site_test_pass": str,
    "url_rewrite_query_parameters": [str],
    "url_rewrite_regex_parameters": [
        {
          "match_from": "regex",
          "match_to": "regex"
        }
    ],
    "use_rewrite_rules": bool,
    "url_rewrite_strip_fragment": bool,
    "api_callback": "url",
    "alert_emails": [str],
    "alert_setting": str,
    "splunk_enabled": str,
    "use_mobile_settings": str,
    "mobile_url_pattern": "regex",
    "mobile_homepage_url": "regex"
}
new_project = connection.create_project(account_id, project_data)
# OR
new_project = DeepCrawlProject(project_data, account_id)
new_project.save()  # This will raise a NotImplementedError

# Get a project
project_id = new_project.id
project = connection.get_project(account_id, project_id)

# Update a project
project = connection.update_project_settings(account_id, project.id, project_data.update({}))
# OR
project.update_settings(project_data.update({}))

# Delete project
connection.delete_project(account_id, project.id)
# OR
project.delete()

# Retrieve projects
projects = connection.get_projects(account_id, filters)

# Refresh project
# If you want to refresh you're project with the latest DeepCrawl configuration
project.refresh()

# Add extractions
extractions = [
    {
      "label": str,
      "regex": "regec",
      "clean_html_tags": bool,
      "match_number_from": int,
      "match_number_to": int,
      "filter": "regex"
    }
]
project.add_extractions(extractions)

# Get majestic settings
majestic_settings = connection.get_majestic_settings(account_id, project.id)
# OR
majestic_settings = project.get_majestic_settings()  # This will not override project attribute 'majestic_settings'
# OR
majestic_settings = project.refresh_majestic_settings()

# Update majestic settings
majestic_settings_data = {
    "enabled": str,
    "max_rows": int,
    "use_historic_data": bool,
    "use_root_domain": bool
}  # TODO define this
majestic_settings = connection.update_majestic_settings(account_id, project.id, majestic_settings_data)
# OR
project.update_majestic_settings(majestic_settings_data)

# Start crawl-
project.start_crawl()

# Create crawl
crawl_data = {}
crawl = project.create_crawl(crawl_data)

# Get Crawl
crawl = project.get_crawl(crawl.id)

# Update crawl
crawl = project.update_crawl(crawl.id, crawl_data.update({}))

# Delete crawl
project.delete_crawl(crawl.id)

# Retrieve crawls
crawls = project.get_crawls(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_crawls will return crawls issues or will do a call to DeepCrawl if crawls attribute is empty.
# use_cache=False > get_crawls will call DeepCrawl api and will override crawls attribute.
project.load_crawls()  # Also you can use (no cache option in this case)
project.crawls

# Create issue
issue_data = {}
issue = project.create_issue(issue_data)

# Get issue
issue = project.get_issue(issue.id)

# Update issue
issue = project.update_issue(issue.id, issue_data.update({}))

# Delete issue
project.delete(issue.id)

# Retrieve issues
issues = project.get_issues(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_issues will return cached issues or will do a call to DeepCrawl if issues attribute is empty.
# use_cache=False > get_issues will call DeepCrawl api and will override issues attribute.
project.load_issues(filters=filters)  # Also you can use (no cache option in this case)
project.issues

# Create schedule
schedule_data = {}
new_schedule = project.create_schedule(schedule_data=schedule_data)

# Get schedule
schedule = project.get_schedule(new_schedule.id)

# Update schedule
schedule = project.update_schedule(schedule.id, schedule_data.update({}))

# Delete schedule
project.delete_schedule(schedule.id)

# Retrieve schedules
schedules = project.get_schedules(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_schedules will return crawls issues or will do a call to DeepCrawl if schedules attribute is empty.
# use_cache=False > get_schedules will call DeepCrawl api and will override schedules attribute.
project.load_schedules()  # Also you can use (no cache option in this case)
project.schedules

```


## Crawls
```python
from deepcrawl.crawls.crawl import DeepCrawlCrawl


account_id = 0
project_id = 0

# Start crawl
connection.start_crawl(account_id, project_id)

# Create crawl
crawl_data = {
    "status": str,
    "limit_levels_max": int,
    "limit_pages_max": int,
    "auto_finalize": str
}
new_crawl = connection.create_crawl(account_id, project_id, crawl_data)
# OR
new_crawl = DeepCrawlCrawl(crawl_data, account_id, project_id)
new_crawl.save()  # This will raise a NotImplementedError

# Get crawl
crawl = connection.get_crawl(account_id, project_id, new_crawl.id)

# Update crawl
crawl = connection.update_crawl(account_id, project_id, crawl.id, crawl_data.update({}))
# OR
crawl.update(crawl_data.update({}))  # This will raise a NotImplementedError

# Delete crawl
connection.delete_crawl(account_id, project_id, crawl.id)
# OR
crawl.delete()

# Retrieve crawls
crawls = connection.get_crawls(account_id, project_id, filters)

# Refresh crawl
# If you want to refresh you're crawl with the latest DeepCrawl configuration
crawl.refresh()  # This will raise a NotImplementedError

# Get report
report_id = 0
report = crawl.get_report(report_id)

# Retrieve reports
reports_changes = crawl.get_reports(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_reports will return crawls issues or will do a call to DeepCrawl if reports attribute is empty.
# use_cache=False > get_reports will call DeepCrawl api and will override reports attribute.
crawl.load_reports()  # Also you can use (no cache option in this case)
crawl.reports

# Retrieve reports cahanges
reports = crawl.get_reports_changes(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_reports_changes will return crawls issues or will do a call to DeepCrawl if reports_changes attribute is empty.
# use_cache=False > get_reports_changes will call DeepCrawl api and will override reports_changes attribute.
crawl.load_reports_changes()  # Also you can use (no cache option in this case)
crawl.reports_changes

# Retrieve downloads
reports = crawl.get_downloads(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_downloads will return crawls issues or will do a call to DeepCrawl if downloads attribute is empty.
# use_cache=False > get_downloads will call DeepCrawl api and will override downloads attribute.
crawl.load_downloads()  # Also you can use (no cache option in this case)
crawl.downloads

```


## Issues
```python
account_id = 0
project_id = 0

# Create issue
issue_data = {
    "title": str,
    "description": str,
    "priority": str,
    "identified": str,
    "remaining": str,
    "deadline_at": str,
    "discovered_at": str,
    "actions": str,
    "dismissed": str,
    "notify_assignees": str,
    "fixed_at": str,
    "report_template": str,
    "filters": str,
    "q": str,
    "report_type": str,
    "assigned_to": str
}
new_issue = connection.create_issue(account_id, project_id, issue_data)

# Get issue
issue = connection.get_issue(account_id, project_id, new_issue.id)

# Update issue
issue = connection.update_issue(account_id, project_id, issue.id, issue_data.update({}))

# Delete issue
connection.delete_issue(account_id, project_id, issue.id)

# Retrieve issues
issues = connection.get_issues(account_id, project_id, filters)

```


## Schedules
```python
account_id = 0
project_id = 0

# Create schedule
schedule_data = {
    "next_run_time": str,
    "schedule_frequency": str
}
new_schedule = connection.create_schedule(account_id, project_id, schedule_data)

# Get schedule
schedule = connection.get_schedule(account_id, project_id, new_schedule.id)

# Update schedule
schedule = connection.update_schedule(account_id, project_id, schedule.id, schedule_data.update({}))

# Delete schedule
connection.delete_schedule(account_id, project_id, schedule.id)

# Retrieve schedules
schedules = connection.get_schedules(account_id, project_id, filters)

```


## Reports
```python
account_id = 0
project_id = 0
crawl_id = 0
report_id = "0"
report_row_id = 0

# Get report
report = connection.get_report(account_id, project_id, crawl_id, report_id)

# Retrieve reports
reports = connection.get_reports(account_id, project_id, crawl_id, filters)

# Retrieve reports changes
reports_changes = connection.get_reports_changes(account_id, project_id, crawl_id, filters)

# Get report row
report_row = connection.get_report_row(account_id, project_id, crawl_id, report_id, report_row_id)
# OR
report_row = report.get_report_row(report_row_id)

# Get report rows
report_rows = connection.get_report_rows(account_id, project_id, crawl_id, report_id, filters)
# OR
report_rows = report.get_report_rows(use_cache=True, filters=filters)
# use_cache has 2 states:
# use_cache=True > get_report_rows will return crawls issues or will do a call to DeepCrawl if report_rows attribute is empty.
# use_cache=False > get_report_rows will call DeepCrawl api and will override report_rows attribute.
report.load_reports()  # Also you can use (no cache option in this case)
report.report_rows

# Get report rows count
report_row_count = connection.get_report_row_count(account_id, project_id, crawl_id, report_id, filters)
# OR
report_row_count = report.get_report_row_count(filters)

```


## Downloads
```python
account_id = 0
project_id = 0
crawl_id = 0
report_id = '0'

# Retrieve crawl downloads
downloads = connection.get_crawl_downloads(account_id, project_id, crawl_id, filters)

# Create report download
new_download_data = {
    "q": str,
    "output_type": str
}
new_download = connection.create_report_download(account_id, project_id, crawl_id, report_id, new_download_data)

# Get report download
download = connection.create_report_download(account_id, project_id, crawl_id, report_id, new_download.id)

# Delete report download
connection.delete_report_download(account_id, project_id, crawl_id, report_id, new_download.id)

# Delete report download
report_downloads = connection.get_report_downloads(account_id, project_id, crawl_id, report_id, filters)
```

